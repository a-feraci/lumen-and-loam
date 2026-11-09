/* The public forest layer: restrained depth, a small creature, one optional game. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const svgNS = 'http://www.w3.org/2000/svg';
  const canopy = document.createElement('div');
  canopy.className = 'living-canopy'; canopy.setAttribute('aria-hidden','true');
  function vine(side, length, offset, scale) {
    const svg = document.createElementNS(svgNS,'svg');
    svg.setAttribute('viewBox','0 0 120 600');
    svg.classList.add('living-vine');
    svg.style.cssText=`${side}:${offset}px;height:${length}px;--vine-scale:${scale};--vine-mirror:${side==='right'?-1:1};--vine-delay:${-offset/10}s`;
    const stem=document.createElementNS(svgNS,'path');
    stem.setAttribute('d','M60 -30 C16 45 101 87 61 155 S25 257 62 322 S89 426 53 500 S60 554 59 602');
    stem.setAttribute('class','vine-stem');svg.append(stem);
    for(let i=0;i<12;i++){
      const y=27+i*45,x=60+Math.sin(i*.85)*14,flip=i%2?1:-1;
      const leaf=document.createElementNS(svgNS,'path');
      leaf.setAttribute('d','M0 0 C-3 -22 -30 -32 -39 -35 C-39 -11 -22 7 0 0 Z');
      leaf.setAttribute('transform',`translate(${x} ${y}) scale(${flip} 1) rotate(${i%3*9-9})`);
      leaf.setAttribute('class',i%3===0?'vine-leaf pale':'vine-leaf');svg.append(leaf);
      const vein=document.createElementNS(svgNS,'path');
      vein.setAttribute('d','M0 0 L-29 -27');vein.setAttribute('transform',leaf.getAttribute('transform'));vein.setAttribute('class','leaf-vein');svg.append(vein);
    }
    return svg;
  }
  canopy.append(vine('left',510,-12,.8),vine('right',670,-4,1),vine('right',360,95,.64));
  document.body.prepend(canopy);
  let explicitMotion;try{explicitMotion=localStorage.getItem('lumen-loam-motion')}catch{}
  let motion=explicitMotion?explicitMotion==='on':!reduced.matches;
  const motionButton=document.getElementById('motion-toggle');
  function applyMotion(){document.body.classList.toggle('forest-still',!motion);motionButton.setAttribute('aria-pressed',String(motion));motionButton.textContent=`Forest motion: ${motion?'on':'off'}`;if(!motion){document.body.style.setProperty('--forest-x','0');document.body.style.setProperty('--forest-y','0')}}
  motionButton.onclick=()=>{motion=!motion;explicitMotion=motion?'on':'off';try{localStorage.setItem('lumen-loam-motion',motion?'on':'off')}catch{}applyMotion()};
  reduced.addEventListener('change',e=>{if(!explicitMotion){motion=!e.matches;applyMotion()}});
  applyMotion();
  let frame=null,pointerX=0,pointerY=0;
  document.addEventListener('pointermove',e=>{if(!motion||e.pointerType==='touch')return;pointerX=(e.clientX/innerWidth-.5)*2;pointerY=(e.clientY/innerHeight-.5)*2;if(frame===null)frame=requestAnimationFrame(()=>{document.body.style.setProperty('--forest-x',pointerX.toFixed(3));document.body.style.setProperty('--forest-y',pointerY.toFixed(3));frame=null})},{passive:true});
  document.addEventListener('visibilitychange',()=>document.body.classList.toggle('forest-away',document.hidden));
  data.discoveries ||= {};
  document.body.classList.toggle('grove-awakened',!!data.discoveries.constellation);
  document.getElementById('glimmermoth').onclick=openConstellation;
  function openConstellation(){
    data.discoveries ||= {};
    openModal('Glimmermoth’s constellation',`<p class="muted">A tiny memory game hidden among the leaves. Follow the three lights in the order Glimmermoth shows you.</p><div class="constellation-display" id="constellation-display" role="status" aria-live="polite">Ready to watch the lights?</div><div class="puzzle-seeds" id="puzzle-seeds">${[['leaf','❧'],['star','✧'],['moon','☾'],['seed','◌']].map(([name,symbol])=>`<button type="button" data-seed="${name}" aria-label="${name}" disabled><span aria-hidden="true">${symbol}</span>${name}</button>`).join('')}</div><button class="primary" type="button" id="puzzle-start">Show the lights</button><p class="muted puzzle-progress" id="puzzle-progress">${data.discoveries.constellation?'You have already helped this grove bloom. Play again whenever you like.':'A small discovery is waiting.'}</p>`,()=>{},'A SECRET IN THE CANOPY');
    document.getElementById('modal-save').hidden=true;
    document.querySelector('#modal .modal-actions button[value="cancel"]').textContent='Close';
    const display=document.getElementById('constellation-display'),start=document.getElementById('puzzle-start'),progress=document.getElementById('puzzle-progress'),buttons=[...document.querySelectorAll('[data-seed]')];
    let order=[],step=0,generation=0;
    function begin(){let current=++generation;order=['leaf','star','moon','seed'].sort(()=>Math.random()-.5).slice(0,3);step=0;buttons.forEach(b=>b.disabled=true);start.disabled=true;display.textContent=order.join(' · ');progress.textContent='Watch their order. The lights will hide in a moment.';
      setTimeout(()=>{if(current!==generation||!display.isConnected)return;display.textContent='Which light came first?';progress.textContent='Choose 3 lights in order. You can show the pattern again at any time.';buttons.forEach(b=>b.disabled=false);start.disabled=false;start.textContent='Show the lights again'},3200);
    }
    start.onclick=begin;
    buttons.forEach(button=>button.onclick=()=>{if(button.dataset.seed!==order[step]){step=0;display.textContent='The moth circles back. Try again.';progress.textContent='Nothing lost. Show the pattern again if you need it.';return}step++;display.textContent=`${step} of 3 lights found`;if(step===3){buttons.forEach(b=>b.disabled=true);data.discoveries.constellation=true;save();document.body.classList.add('grove-awakened');display.textContent='The grove remembers your light. ✧';progress.textContent='A little blossom has awakened beside your Mossling. This is the first trail; more paths will grow here.';toast('A quiet corner of the forest has bloomed. ✿')}});
    document.getElementById('modal').addEventListener('close',()=>{generation++;document.querySelector('#modal .modal-actions button[value="cancel"]').textContent='Cancel'},{once:true});
  }
})();
