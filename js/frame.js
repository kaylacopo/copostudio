// Inject viewport frame + corner brackets + edge ticks/labels on every page
(function() {
  const frame = document.createElement('div');
  frame.className = 'viewport-frame';
  frame.setAttribute('aria-hidden', 'true');

  // Corner bracket SVG — small L-shape with a tiny dot in the corner
  const bracketSVG = `
    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 9V1H9" stroke="currentColor" stroke-width="1" stroke-linecap="square"/>
      <circle cx="1" cy="1" r="1.6" fill="currentColor"/>
    </svg>`;

  ['tl', 'tr', 'bl', 'br'].forEach(pos => {
    const m = document.createElement('div');
    m.className = `vf-mark ${pos}`;
    m.innerHTML = bracketSVG;
    frame.appendChild(m);
  });

  // edge ticks (ruler marks)
  ['top', 'right', 'bottom', 'left'].forEach(side => {
    const t = document.createElement('div');
    t.className = `vf-tick ${side}`;
    frame.appendChild(t);
  });

  document.body.appendChild(frame);

  // edge labels (film leader vibe)
  const left = document.createElement('div');
  left.className = 'vf-label left';
  left.textContent = '/ Copo Studio · 2026 /';
  document.body.appendChild(left);

  const right = document.createElement('div');
  right.className = 'vf-label right';
  const pageLabel = document.body.dataset.pageLabel || 'Independent Product Studio';
  right.textContent = `/ ${pageLabel} /`;
  document.body.appendChild(right);

  // === Wrap every .btn with .btn-wrap + .btn-eject for hover eject animation ===
  const ejectSVG = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  document.querySelectorAll('.btn').forEach(btn => {
    if (btn.closest('.btn-wrap')) return;
    // wrap in span (works inside flex / inline contexts)
    const wrap = document.createElement('span');
    wrap.className = 'btn-wrap';
    btn.parentNode.insertBefore(wrap, btn);
    wrap.appendChild(btn);
    const eject = document.createElement('span');
    eject.className = 'btn-eject';
    eject.setAttribute('aria-hidden', 'true');
    eject.innerHTML = ejectSVG;
    wrap.appendChild(eject);

    // inject 4 corner brackets into the button (viewfinder language)
    ['tl', 'tr', 'bl', 'br'].forEach(pos => {
      const c = document.createElement('span');
      c.className = `bc bc-${pos}`;
      c.setAttribute('aria-hidden', 'true');
      btn.appendChild(c);
    });
  });
})();
