/**
 * Canvas Force-Directed Graph Visualizer for Distributed GNN Communities
 * Supports interactive dragging, zoom, pan, community clusters, and glowing federated edges
 */

export class ForceGraphRenderer {
  /**
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.nodes = [];
    this.edges = [];
    this.width = canvas.parentElement.clientWidth || 800;
    this.height = canvas.parentElement.clientHeight || 480;
    
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;
    this.isDragging = false;
    this.draggedNode = null;
    this.lastMouse = { x: 0, y: 0 };
    this.animating = false;

    this._setupCanvas();
    this._attachEvents();
  }

  _setupCanvas() {
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.ctx.scale(dpr, dpr);
  }

  resize() {
    this.width = this.canvas.parentElement.clientWidth || 800;
    this.height = this.canvas.parentElement.clientHeight || 480;
    this._setupCanvas();
  }

  setData(graphData) {
    const { nodes, edges } = graphData;
    
    // Position nodes radially per client silo if initial
    const clientPositions = [
      { x: this.width * 0.28, y: this.height * 0.32 },
      { x: this.width * 0.72, y: this.height * 0.32 },
      { x: this.width * 0.28, y: this.height * 0.72 },
      { x: this.width * 0.72, y: this.height * 0.72 }
    ];

    this.nodes = nodes.map((n, idx) => {
      const existing = this.nodes.find(old => old.id === n.id);
      const center = clientPositions[n.clientId % clientPositions.length];
      const angle = (idx % 18) * (Math.PI * 2 / 18);
      const radius = 45 + (idx % 3) * 20;

      return {
        ...n,
        x: existing ? existing.x : center.x + Math.cos(angle) * radius + (Math.random() * 20 - 10),
        y: existing ? existing.y : center.y + Math.sin(angle) * radius + (Math.random() * 20 - 10),
        vx: 0,
        vy: 0,
        radius: 7
      };
    });

    this.edges = edges.map(e => ({
      ...e,
      sourceNode: this.nodes.find(n => n.id === e.source),
      targetNode: this.nodes.find(n => n.id === e.target)
    })).filter(e => e.sourceNode && e.targetNode);

    this.startSimulation();
  }

  _attachEvents() {
    this.canvas.addEventListener('mousedown', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left - this.panX) / this.zoom;
      const mouseY = (e.clientY - rect.top - this.panY) / this.zoom;

      // Check if clicking a node
      for (const node of this.nodes) {
        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        if (Math.sqrt(dx * dx + dy * dy) < node.radius + 6) {
          this.draggedNode = node;
          break;
        }
      }

      this.isDragging = true;
      this.lastMouse = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;

      const dx = e.clientX - this.lastMouse.x;
      const dy = e.clientY - this.lastMouse.y;

      if (this.draggedNode) {
        this.draggedNode.x += dx / this.zoom;
        this.draggedNode.y += dy / this.zoom;
        this.draggedNode.vx = 0;
        this.draggedNode.vy = 0;
      } else {
        this.panX += dx;
        this.panY += dy;
      }

      this.lastMouse = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
      this.draggedNode = null;
    });

    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
      this.zoom = Math.max(0.4, Math.min(3.0, this.zoom * zoomFactor));
    }, { passive: false });
  }

  startSimulation() {
    if (this.animating) return;
    this.animating = true;
    this._tick();
  }

  _tick() {
    if (!this.animating) return;
    this._updatePhysics();
    this._render();
    requestAnimationFrame(() => this._tick());
  }

  _updatePhysics() {
    const kRepel = 1200;
    const kAttract = 0.035;
    const friction = 0.85;

    // Node-Node Repulsion
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const n1 = this.nodes[i];
        const n2 = this.nodes[j];
        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        if (dist < 200) {
          const force = kRepel / (dist * dist);
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;

          if (n1 !== this.draggedNode) { n1.vx -= fx; n1.vy -= fy; }
          if (n2 !== this.draggedNode) { n2.vx += fx; n2.vy += fy; }
        }
      }
    }

    // Edge Attraction
    for (const edge of this.edges) {
      const n1 = edge.sourceNode;
      const n2 = edge.targetNode;
      const dx = n2.x - n1.x;
      const dy = n2.y - n1.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;

      const targetLen = edge.isCrossSilo ? 160 : 45;
      const force = (dist - targetLen) * kAttract;
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;

      if (n1 !== this.draggedNode) { n1.vx += fx; n1.vy += fy; }
      if (n2 !== this.draggedNode) { n2.vx -= fx; n2.vy -= fy; }
    }

    // Centering & Dampening
    this.nodes.forEach(node => {
      if (node !== this.draggedNode) {
        node.vx *= friction;
        node.vy *= friction;
        node.x += node.vx;
        node.y += node.vy;

        // Soft containment
        node.x = Math.max(30, Math.min(this.width - 30, node.x));
        node.y = Math.max(30, Math.min(this.height - 30, node.y));
      }
    });
  }

  _render() {
    this.ctx.save();
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Apply pan & zoom
    this.ctx.translate(this.panX, this.panY);
    this.ctx.scale(this.zoom, this.zoom);

    // Draw Client Silo Enclosures
    this._renderSiloHulls();

    // Draw Edges
    for (const edge of this.edges) {
      this.ctx.beginPath();
      this.ctx.moveTo(edge.sourceNode.x, edge.sourceNode.y);
      this.ctx.lineTo(edge.targetNode.x, edge.targetNode.y);

      if (edge.isCrossSilo) {
        this.ctx.strokeStyle = 'rgba(244, 63, 94, 0.4)';
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([4, 4]);
      } else {
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
        this.ctx.lineWidth = 1.0;
        this.ctx.setLineDash([]);
      }
      this.ctx.stroke();
    }
    this.ctx.setLineDash([]);

    // Draw Nodes
    for (const node of this.nodes) {
      // Glow ring
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius + 3, 0, Math.PI * 2);
      this.ctx.fillStyle = node.color ? `${node.color}33` : 'rgba(56, 189, 248, 0.2)';
      this.ctx.fill();

      // Node Body
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = node.color || '#38bdf8';
      this.ctx.fill();
      this.ctx.strokeStyle = '#ffffff';
      this.ctx.lineWidth = 1.5;
      this.ctx.stroke();

      // Node label
      this.ctx.fillStyle = '#94a3b8';
      this.ctx.font = '9px JetBrains Mono, monospace';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(node.label, node.x, node.y - node.radius - 4);
    }

    this.ctx.restore();
  }

  _renderSiloHulls() {
    const silos = [[], [], [], []];
    this.nodes.forEach(n => {
      if (silos[n.clientId]) silos[n.clientId].push(n);
    });

    const siloColors = [
      'rgba(56, 189, 248, 0.04)',
      'rgba(16, 185, 129, 0.04)',
      'rgba(245, 158, 11, 0.04)',
      'rgba(129, 140, 248, 0.04)'
    ];
    const borderColors = [
      'rgba(56, 189, 248, 0.25)',
      'rgba(16, 185, 129, 0.25)',
      'rgba(245, 158, 11, 0.25)',
      'rgba(129, 140, 248, 0.25)'
    ];

    silos.forEach((siloNodes, idx) => {
      if (siloNodes.length === 0) return;
      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      siloNodes.forEach(n => {
        minX = Math.min(minX, n.x);
        minY = Math.min(minY, n.y);
        maxX = Math.max(maxX, n.x);
        maxY = Math.max(maxY, n.y);
      });

      const pad = 24;
      const w = Math.max(80, maxX - minX + pad * 2);
      const h = Math.max(80, maxY - minY + pad * 2);
      const cx = (minX + maxX) / 2;
      const cy = (minY + maxY) / 2;

      this.ctx.save();
      this.ctx.fillStyle = siloColors[idx % siloColors.length];
      this.ctx.strokeStyle = borderColors[idx % borderColors.length];
      this.ctx.lineWidth = 1.2;
      this.ctx.setLineDash([6, 6]);

      this._roundRect(cx - w / 2, cy - h / 2, w, h, 14);
      this.ctx.fill();
      this.ctx.stroke();

      this.ctx.fillStyle = borderColors[idx % borderColors.length];
      this.ctx.font = '10px Inter, sans-serif';
      this.ctx.textAlign = 'left';
      this.ctx.fillText(`Client Silo ${String.fromCharCode(65 + idx)}`, cx - w / 2 + 10, cy - h / 2 + 16);
      this.ctx.restore();
    });
  }

  _roundRect(x, y, w, h, r) {
    this.ctx.beginPath();
    this.ctx.moveTo(x + r, y);
    this.ctx.arcTo(x + w, y, x + w, y + h, r);
    this.ctx.arcTo(x + w, y + h, x, y + h, r);
    this.ctx.arcTo(x, y + h, x, y, r);
    this.ctx.arcTo(x, y, x + w, y, r);
    this.ctx.closePath();
  }

  resetView() {
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;
  }
}
