/* Browser-local decks and glossaries, backed up with the rest of the study space. */
(() => {
 let tab = 'cards';
 let group = 'class:philosophy';
 let editing = null;
 let session = null;
 const array = value => Array.isArray(value) ? value : [];
 function store() {
  if (!data.studyCards || typeof data.studyCards !== 'object' || Array.isArray(data.studyCards)) data.studyCards = {};
  for (const key of ['cards','glossary','groups']) data.studyCards[key] = array(data.studyCards[key]);
  return data.studyCards;
 }
 function groups() {
  const available = courses.map(c => ({id:'class:'+c.id,name:c.name}));
  if (data.discoveries?.worldTrails?.circuit?.completedAt) available.push({id:'class:cybersecurity',name:'Cybersecurity Foundations'});
  return available.concat(store().groups);
 }
 const lesson = id => LearningContent.lessons.find(l => l.id === id);
 const items = () => store()[tab].filter(item => item.group === group);
 const norm = s => String(s).normalize('NFKC').toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();
 function write(key,next) {
  const state = store(), before = state[key];
  state[key] = next;
  if (save()) return true;
  state[key] = before;
  return false;
 }
 function useLesson(id) {
  const l = lesson(id);
  if (!l) return;
  group = 'class:' + l.classId;
  editing = null;
  session = null;
 }
 function importTerms(id,key) {
  const l = lesson(id);
  if (!l) return;
  const destination = 'class:' + l.classId;
  const next = [...store()[key]];
  for (const [term,definition] of l.terms) {
   if (!next.some(item => item.group === destination && norm(item.term) === norm(term))) {
    const section = l.sections.find(s => s.paragraphs.some(p => p.includes('[[' + term + ']]')) ||
     (s.table?.rows.some(row => row[0] === term)));
    next.push({id:uid(),group:destination,term,definition,aliases:'',example:l.cardExamples?.[term] || '',visual:section?.map?.steps.map(step => Array.isArray(step) ? step.join(' + ') : step).join(' → ') || ''});
   }
  }
  if (write(key,next)) {
   toast('Lesson terms saved to your ' + (key === 'cards' ? 'deck.' : 'glossary.'));
   useLesson(id);
   tab = key;
   if (page === 'study-cards') render();
   else location.hash = 'study-cards';
  }
 }
 const shuffle = values => {
  const result = [...values];
  for (let i=result.length-1; i>0; i--) {
   const j = Math.floor(Math.random()*(i+1));
   [result[i],result[j]] = [result[j],result[i]];
  }
  return result;
 };
 function begin(mode) {
  const cards = items();
  if (!cards.length) return;
  const choices = [...new Set(cards.map(c => c.definition.trim()))];
  if (mode === 'choice' && choices.length < 2) {
   toast('Add two cards with different definitions for multiple choice.');
   return;
  }
  session = {mode, cards:shuffle(cards), pool:choices, index:0, wrong:[], right:[], round:1, result:null};
  redrawPractice();
 }
 function activeCard() {
  return session?.cards[session.index];
 }
 function practice() {
  const card = activeCard();
  if (!session) return '';
  if (!card) {
   return '<h2>' + (session.wrong.length ? 'Round complete' : 'All cards correct!') + '</h2><p>' +
    session.right.length + ' correct · ' + session.wrong.length + ' to retry</p>' +
    (session.wrong.length ? '<button class="primary" data-card-retry>Retry the missed pile →</button>' : '');
  }
  let form = '';
  if (!session.result) {
   if (session.mode === 'choice') {
    const options = shuffle([card.definition.trim(),...shuffle(session.pool.filter(d => d !== card.definition.trim())).slice(0,3)]);
    form = '<fieldset><legend>Choose a definition</legend>' + options.map(d =>
     '<label><input type="radio" name="answer" value="' + esc(d) + '" required> ' + esc(d) + '</label>').join('') + '</fieldset>';
   } else form = '<label>Your definition <textarea name="answer" rows="3" required></textarea></label>';
   form = '<form data-card-guess>' + form + '<button type="submit" class="primary">Check answer</button></form>';
  }
  const result = session.result;
  const back = result ? '<div class="flashcard-back"><p role="status"><strong>' + (result.correct ? '✓ Correct' : 'Review this one') + '</strong></p><p>' + esc(card.definition) + '</p>' +
   (card.example ? '<p><strong>Example</strong> ' + esc(card.example) + '</p>' : '') +
   (card.visual ? '<p class="card-visual">' + esc(card.visual) + '</p>' : '') +
   (session.mode === 'typed' && !result.correct ? '<p class="mini">Typed answers match the definition or accepted wording. If your paraphrase means the same thing, mark it correct.</p><button class="text-button" data-card-equivalent>My answer meant the same thing</button>' : '') +
   '<button class="primary" data-card-next>' + (session.index+1 === session.cards.length ? 'Finish round' : 'Next card →') + '</button></div>' : '';
  return '<p class="mini">Round ' + session.round + ' · Card ' + (session.index+1) + ' of ' + session.cards.length +
   ' · ' + session.right.length + ' correct · ' + session.wrong.length + ' to retry</p><div class="flashcard"><h3>' + esc(card.term) + '</h3>' + form + back + '</div>';
 }
 function redrawPractice() {
  const root = document.querySelector('#card-practice');
  if (!root) return;
  root.innerHTML = practice();
  root.hidden = !session;
  root.focus({preventScroll:true});
 }
 function pageMarkup() {
  const buckets = groups();
  if (!buckets.some(g => g.id === group)) group = buckets[0].id;
  const cards = items();
  const entry = cards.find(item => item.id === editing);
  const l = LearningContent.lessons.find(l => group === 'class:'+l.classId);
  return header('YOUR STUDY TOOLS','Study cards','Build decks and glossaries for a class or a heading you name.') +
   '<section class="card study-card-room"><div class="toolbar"><button class="outline-button" data-card-tab="cards" aria-pressed="' + (tab==='cards') + '">Flashcards</button><button class="outline-button" data-card-tab="glossary" aria-pressed="' + (tab==='glossary') + '">Glossary</button></div>' +
   '<label for="study-card-group">Class or heading</label><select id="study-card-group">' + buckets.map(g => '<option value="' + esc(g.id) + '"' + (group===g.id?' selected':'') + '>' + esc(g.name) + '</option>').join('') + '</select>' +
   '<details class="add-card-group"><summary>Create a custom heading</summary><form data-card-group><label>Heading name <input name="name" maxlength="60" required></label><button class="outline-button" type="submit">Create heading</button></form></details>' +
   '<div class="toolbar">' + (l ? '<button class="outline-button" data-import-terms="' + esc(l.id) + '" data-import-kind="' + tab + '">Save lesson vocabulary</button>' : '') +
   (tab==='cards' && cards.length ? '<button class="primary" data-practice-mode="choice">Multiple choice</button><button class="outline-button" data-practice-mode="typed">Type an answer</button>' : '') + '</div>' +
   '<section id="card-practice" tabindex="-1" aria-label="Flashcard practice"' + (session?'':' hidden') + '>' + practice() + '</section>' +
   '<details class="card-editor"' + (entry?' open':'') + '><summary>' + (entry?'Edit '+esc(entry.term):tab==='cards'?'Add a flashcard':'Add a glossary term') + '</summary><form data-card-editor>' +
   '<label>Term <input name="term" maxlength="120" required value="' + esc(entry?.term) + '"></label>' +
   '<label>Definition <textarea name="definition" rows="3" maxlength="1500" required>' + esc(entry?.definition) + '</textarea></label>' +
   (tab==='cards'?'<label>Other accepted answers <input name="aliases" maxlength="500" placeholder="Separate alternatives with |" value="' + esc(entry?.aliases) + '"></label>':'') +
   '<label>Example or explanation <textarea name="example" rows="2" maxlength="1500">' + esc(entry?.example) + '</textarea></label>' +
   '<label>Optional visual in words <input name="visual" maxlength="500" placeholder="Reasons → inference → conclusion" value="' + esc(entry?.visual) + '"></label>' +
   '<button class="primary" type="submit">Save ' + (tab==='cards'?'card':'term') + '</button>' + (entry?'<button class="text-button" type="button" data-card-cancel>Cancel</button>':'') + '</form></details>' +
   '<h2>' + (tab==='cards'?'Your deck':'Your glossary') + '</h2>' +
   (cards.length ? '<div class="saved-study-terms">' + cards.map(item =>
    '<details><summary>' + esc(item.term) + '</summary><p>' + esc(item.definition) + '</p>' +
    (item.example?'<p>' + esc(item.example) + '</p>':'') + (item.visual?'<p class="card-visual">' + esc(item.visual) + '</p>':'') +
    '<div class="toolbar"><button class="text-button" data-card-edit="' + esc(item.id) + '">Edit</button><button class="text-button" data-card-delete="' + esc(item.id) + '">Delete</button></div></details>').join('') + '</div>' : '<p class="muted">Nothing saved under this heading yet.</p>') +
   '</section>';
 }
 document.addEventListener('submit',event => {
  const form = event.target;
  if (!form.matches('[data-card-group],[data-card-editor],[data-card-guess]')) return;
  event.preventDefault();
  const values = Object.fromEntries(new FormData(form));
  if (form.matches('[data-card-guess]')) {
   const card = activeCard();
   if (!card || session.result) return;
   const accepted = [card.definition,...String(card.aliases || '').split('|')].map(norm).filter(Boolean);
   const correct = session.mode==='choice' ? values.answer === card.definition.trim() : accepted.includes(norm(values.answer));
   session.result = {correct};
   redrawPractice();
   return;
  }
  if (form.matches('[data-card-group]')) {
   const name = values.name.trim();
   if (!name) return;
   const existing = store().groups.find(item => norm(item.name) === norm(name));
   const heading = existing || {id:'custom:'+uid(),name};
   if (!existing && !write('groups',[...store().groups,heading])) return;
   group = heading.id;
  } else {
   const term = values.term.trim(), definition = values.definition.trim();
   if (!term || !definition) return;
   const existing = items().find(item => item.id === editing);
   const record = {id:existing?.id || uid(),group,term,definition,aliases:values.aliases?.trim()||'',example:values.example.trim(),visual:values.visual.trim()};
   const next = existing ? store()[tab].map(item => item.id===editing ? record : item) : [...store()[tab],record];
   if (!write(tab,next)) return;
   toast('Saved.');
  }
  editing = null;
  session = null;
  render();
 });
 document.addEventListener('change',event => {
  if (event.target.id !== 'study-card-group') return;
  group = event.target.value;
  session = null;
  editing = null;
  render();
  document.getElementById('study-card-group')?.focus();
 });
 document.addEventListener('click',event => {
  const button = event.target.closest('[data-card-tab],[data-import-terms],[data-practice-mode],[data-card-retry],[data-card-equivalent],[data-card-next],[data-card-edit],[data-card-delete],[data-card-cancel],[data-study-lesson]');
  if (!button) return;
  const d = button.dataset;
  if (d.studyLesson) { useLesson(d.studyLesson); tab='cards'; location.hash='study-cards'; return; }
  if (d.importTerms) { importTerms(d.importTerms,d.importKind); return; }
  if (d.practiceMode) { begin(d.practiceMode); return; }
  if (button.hasAttribute('data-card-equivalent') && session?.result) {
   session.result.correct=true;
   redrawPractice();
   return;
  }
  if (button.hasAttribute('data-card-next') && session?.result && activeCard()) {
   const pile = session.result.correct ? session.right : session.wrong;
   pile.push(activeCard());
   session.index++;
   session.result=null;
   redrawPractice();
   return;
  }
  if (button.hasAttribute('data-card-retry') && session?.wrong.length && !activeCard()) {
   session.cards=shuffle(session.wrong);
   session.wrong=[];
   session.index=0;
   session.round++;
   redrawPractice();
   return;
  }
  if (d.cardDelete) {
   if (!items().some(item => item.id === d.cardDelete)) return;
   if (!window.confirm('Delete this saved entry?')) return;
   if (!write(tab,store()[tab].filter(item => item.id !== d.cardDelete))) return;
  }
  if (d.cardTab) tab=d.cardTab;
  editing=d.cardEdit || null;
  session=null;
  render();
  if (editing) document.querySelector('[data-card-editor] input')?.focus();
 });
 window.StudyCards = {page:pageMarkup};
})();
