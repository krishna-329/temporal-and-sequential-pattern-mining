/**
 * Sequence Visualizations: Prefix-Tree visualizer, Sequence Timeline & Transition Matrix Heatmap
 */

export class SequenceFlowVisualizer {
  /**
   * Render horizontal sequence flow timeline into a container
   */
  static renderSequenceTimeline(container, sequenceEvents, eventMetadata = {}) {
    container.innerHTML = '';
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.alignItems = 'center';
    wrapper.style.gap = '0.5rem';
    wrapper.style.overflowX = 'auto';
    wrapper.style.padding = '0.75rem 0.25rem';

    sequenceEvents.forEach((evt, idx) => {
      const meta = eventMetadata[evt.item] || { label: evt.item, color: '#38bdf8' };

      const card = document.createElement('div');
      card.style.background = 'var(--bg-surface)';
      card.style.border = `1px solid ${meta.color || 'var(--border-color)'}`;
      card.style.borderRadius = 'var(--radius-md)';
      card.style.padding = '0.5rem 0.75rem';
      card.style.minWidth = '140px';
      card.style.boxShadow = 'var(--shadow-sm)';
      card.style.flexShrink = '0';

      const timeTag = document.createElement('div');
      timeTag.style.fontSize = '0.68rem';
      timeTag.style.color = 'var(--text-muted)';
      timeTag.style.fontFamily = 'var(--font-mono)';
      timeTag.textContent = `T = +${evt.timestamp}h`;

      const title = document.createElement('div');
      title.style.fontSize = '0.8rem';
      title.style.fontWeight = '600';
      title.style.color = meta.color;
      title.style.marginTop = '2px';
      title.textContent = meta.label || evt.item;

      const desc = document.createElement('div');
      desc.style.fontSize = '0.7rem';
      desc.style.color = 'var(--text-secondary)';
      desc.style.marginTop = '4px';
      desc.textContent = evt.desc || '';

      card.appendChild(timeTag);
      card.appendChild(title);
      card.appendChild(desc);
      wrapper.appendChild(card);

      if (idx < sequenceEvents.length - 1) {
        const arrow = document.createElement('div');
        arrow.style.color = 'var(--text-muted)';
        arrow.style.fontSize = '1.1rem';
        arrow.style.flexShrink = '0';
        arrow.innerHTML = '&#10140;';
        wrapper.appendChild(arrow);
      }
    });

    container.appendChild(wrapper);
  }

  /**
   * Render Interactive Transition Matrix Heatmap
   */
  static renderTransitionMatrixHeatmap(container, matrixData, eventMetadata = {}) {
    container.innerHTML = '';
    const { eventIds, matrix } = matrixData;

    const table = document.createElement('table');
    table.className = 'transition-matrix';

    // Table Header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `<th style="background:#070a12; color:var(--text-muted)">From \\ To</th>`;

    eventIds.forEach(id => {
      const meta = eventMetadata[id] || { label: id, color: '#38bdf8' };
      const th = document.createElement('th');
      th.style.color = meta.color;
      th.style.maxWidth = '90px';
      th.style.overflow = 'hidden';
      th.style.textOverflow = 'ellipsis';
      th.title = meta.label || id;
      th.textContent = (meta.label || id).split(' ')[0];
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Table Body
    const tbody = document.createElement('tbody');
    matrix.forEach(row => {
      const tr = document.createElement('tr');
      const fromMeta = eventMetadata[row.from] || { label: row.from, color: '#38bdf8' };

      const th = document.createElement('th');
      th.style.color = fromMeta.color;
      th.style.textAlign = 'left';
      th.title = fromMeta.label || row.from;
      th.textContent = (fromMeta.label || row.from).split(' ')[0];
      tr.appendChild(th);

      eventIds.forEach(toId => {
        const td = document.createElement('td');
        const prob = row.transitions[toId] || 0;
        
        // Heatmap cell color
        const alpha = Math.max(0.04, prob * 0.85);
        if (prob > 0) {
          td.style.background = `rgba(56, 189, 248, ${alpha})`;
          td.style.color = prob > 0.4 ? '#ffffff' : 'var(--text-primary)';
          td.style.fontWeight = prob > 0.3 ? '700' : '400';
          td.textContent = `${Math.round(prob * 100)}%`;
        } else {
          td.style.color = 'rgba(255,255,255,0.15)';
          td.textContent = '-';
        }

        td.title = `${fromMeta.label || row.from} ➔ ${(eventMetadata[toId]?.label || toId)}: ${Math.round(prob * 100)}%`;
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    container.appendChild(table);
  }

  /**
   * Render Prefix Tree Canvas
   */
  static renderPrefixTree(canvas, patterns) {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.parentElement.clientWidth || 600;
    const height = canvas.parentElement.clientHeight || 340;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    // Build Trie
    const root = { name: 'ROOT', children: {}, support: 1.0, depth: 0 };
    patterns.slice(0, 20).forEach(p => {
      let curr = root;
      p.sequence.forEach(token => {
        if (!curr.children[token]) {
          curr.children[token] = { name: token, children: {}, support: p.support, depth: curr.depth + 1 };
        }
        curr = curr.children[token];
      });
    });

    function computeCoords(node, depth, yStart, yEnd) {
      node.x = 40 + depth * 110;
      node.y = (yStart + yEnd) / 2;
      const childKeys = Object.keys(node.children);
      if (childKeys.length === 0) return;

      const step = (yEnd - yStart) / childKeys.length;
      childKeys.forEach((key, idx) => {
        computeCoords(node.children[key], depth + 1, yStart + idx * step, yStart + (idx + 1) * step);
      });
    }

    computeCoords(root, 0, 30, height - 30);

    function drawLines(node) {
      Object.values(node.children).forEach(child => {
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.bezierCurveTo(
          node.x + 50, node.y,
          child.x - 50, child.y,
          child.x, child.y
        );
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
        ctx.lineWidth = Math.max(1, child.support * 4);
        ctx.stroke();

        drawLines(child);
      });
    }

    function drawNodes(node) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.name === 'ROOT' ? 7 : 5, 0, Math.PI * 2);
      ctx.fillStyle = node.name === 'ROOT' ? '#10b981' : '#38bdf8';
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = '#f8fafc';
      ctx.font = '9px JetBrains Mono, monospace';
      ctx.textAlign = 'left';
      ctx.fillText(node.name, node.x + 9, node.y + 3);

      Object.values(node.children).forEach(drawNodes);
    }

    drawLines(root);
    drawNodes(root);
  }
}
