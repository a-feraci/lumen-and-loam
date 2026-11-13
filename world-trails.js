/* Optional scavenger hunts. All clues and progress are local to the site. */
(() => {
 const trails = {
  hollow: {
   title: 'The silver whispers',
   marks: [
    {page:'fieldguide', icon:'☾', label:'A silver whisper in the margins', found:'A crescent is etched into the paper. “I keep what your mind might lose,” says the next voice.'},
    {page:'notebooks', icon:'✧', label:'A silver whisper between the pages', found:'A star falls between two pages. “Look where tomorrow has a square of its own.”'},
    {page:'calendar', icon:'◇', label:'A silver whisper between the days', found:'A diamond shimmers on a date. The arch remembers your journey in the order you took it.'}
   ]
  },
  circuit: {
   title: 'The stray signal',
   marks: [
    {page:'home', icon:'▧', label:'A flicker at the edge of the clearing', found:'A little beacon repeats the same message: “Find the place where the lab lists all its subjects.”'},
    {page:'courses', icon:'⌘', label:'A strange caret by the class atlas', found:'The atlas receives the beacon. “The next fragment lives in this page’s HTML comments. Search its source for SIGNAL_FRAGMENT.”'}
   ]
  }
 };
 const record = id => data.discoveries?.worldTrails?.[id] || {};
 const count = id => Number(record(id).step) || 0;
 const complete = id => !!record(id).completedAt;
 const classLink = '<p><a class="primary" href="#signal-class">Enter Cybersecurity Foundations →</a></p>';
 function saveRecord(id, fields) {
  data.discoveries ||= {};
  const previous = data.discoveries.worldTrails;
  data.discoveries.worldTrails = {...previous, [id]:{...record(id), ...fields}};
  if (save()) return true;
  data.discoveries.worldTrails = previous;
  return false;
 }
 function open(id) {
  const trail = trails[id];
  const panel = StudyDesk.windowBox('trail-' + id, trail.title, '', {width:570,top:100});
  const content = panel.querySelector('.desk-content');
  const visited = trail.marks.slice(0, count(id));
  let html = '<ol class="world-clues">' + visited.map(mark => '<li>' + esc(mark.found) + '</li>').join('') + '</ol>';
  if (complete(id)) {
   html += '<div data-place-reward="' + id + '">' + ForestPlaces.rewardMarkup(id) + '</div>';
   if (id === 'circuit') html += classLink;
  } else if (count(id) < trail.marks.length) {
   if (!visited.length) html += '<p>The first fragment is still waiting somewhere in the forest.</p>';
  } else if (id === 'hollow') {
   html += '<p>Touch the three seals in the order you found them.</p><div class="toolbar" aria-label="Silver seals">' +
    ['◇','☾','✧'].map((glyph,i) => '<button type="button" class="outline-button" data-spirit-seal="' + glyph + '" aria-label="' + ['Diamond','Crescent','Star'][i] + '">' + glyph + '</button>').join('') +
    '</div><p class="mini" data-seal-feedback role="status">0 of 3 seals</p>';
  } else {
   html += '<p>Submit the flag hidden in the page’s HTML. On a laptop, use your browser’s View Page Source option. Search for <code>SIGNAL_FRAGMENT</code>.</p>' +
    '<details><summary>Read the signal fragment here</summary><p>Use this option on a device without View Page Source.</p><pre>' + esc(document.querySelector('#signal-fragment').innerHTML.trim()) + '</pre></details>' +
    '<form data-signal-flag><label>Signal flag <input name="flag" required autocomplete="off" spellcheck="false"></label><button class="primary" type="submit">Submit flag</button><p role="status" class="mini" data-flag-feedback></p></form>';
  }
  content.innerHTML = html;
  content.dataset.seals = '';
 }
 function plantClues() {
  const main = document.getElementById('main');
  main.querySelector('.world-clue-row')?.remove();
  const row = document.createElement('div');
  row.className = 'world-clue-row';
  for (const [id, trail] of Object.entries(trails)) {
   const step = count(id);
   const mark = trail.marks[step];
   const oldMark = trail.marks.slice(0, step).find(item => item.page === page);
   if (mark?.page !== page && !oldMark) continue;
   const current = mark?.page === page ? mark : oldMark;
   const button = document.createElement('button');
   button.type = 'button';
   button.className = 'world-clue';
   button.textContent = current.icon;
   button.setAttribute('aria-label',current.label);
   button.onclick = () => {
    if (mark === current && count(id) === step && !saveRecord(id,{step:step+1})) return;
    open(id);
    plantClues();
   };
   row.append(button);
  }
  if (row.childElementCount) main.append(row);
 }
 function finish(id) {
  if (saveRecord(id,{completedAt:new Date().toISOString()})) {
   open(id);
   ForestPlaces.reconcile();
  }
 }
 document.addEventListener('click', event => {
  const seal = event.target.closest('[data-spirit-seal]');
  if (!seal || count('hollow') !== 3 || complete('hollow')) return;
  const content = seal.closest('.desk-content');
  const answer = content.dataset.seals + seal.dataset.spiritSeal;
  if (!'☾✧◇'.startsWith(answer)) {
   content.dataset.seals = '';
   content.querySelector('[data-seal-feedback]').textContent = 'The seals went quiet. Try the order of your journey again.';
   return;
  }
  content.dataset.seals = answer;
  content.querySelector('[data-seal-feedback]').textContent = answer.length + ' of 3 seals';
  if (answer.length === 3) finish('hollow');
 });
 document.addEventListener('submit', event => {
  const form = event.target.closest('[data-signal-flag]');
  if (!form) return;
  event.preventDefault();
  if (count('circuit') !== 2 || complete('circuit')) return;
  const flag = document.querySelector('#signal-fragment').innerHTML.match(/FLAG\{[a-z_]+\}/)?.[0];
  if (form.elements.flag.value.trim() === flag) finish('circuit');
  else form.querySelector('[data-flag-feedback]').textContent = 'The signal didn’t match. Check the full flag, including the braces.';
 });
 window.WorldTrails = {open, complete, classLink};
 document.addEventListener('lumen:render',plantClues);
 plantClues();
 if (page === 'signal-class') render();
})();
