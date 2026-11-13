/* A fixed, fictional file system and two defensive exercises. */
(() => {
 const files = {
  'brief.txt': 'An alert fired at 09:12 UTC. Read auth.log, then compare the events with policy.txt.',
  'auth.log': '09:10 UTC  maya  approved workstation  login accepted\n09:11 UTC  svc_backup  scheduler  expected job\n09:12 UTC  archive-admin  unfamiliar workstation  login accepted\n09:13 UTC  archive-admin  export requested',
  'policy.txt': 'The archive-admin account is reserved for approved maintenance. No maintenance was scheduled today.',
  'inventory.txt': 'reading-list.txt   owner: librarian   readers: class\nreflection.txt     owner: learner     readers: class\nweather.txt        owner: station     readers: public',
  'privacy.txt': 'Reading lists can be shared with the class. Personal reflections should be visible only to their owner.'
 };
 const missions = [
  {title:'01 · Investigate an alert', intro:'An alert is a prompt to investigate. Use the log and maintenance policy to decide which event to verify first.', files:['brief.txt','auth.log','policy.txt'], prompt:'Which event merits follow-up?', choices:['Maya’s approved login at 09:10','The scheduled backup at 09:11','The archive administrator login at 09:12'], answer:2, success:'Correct. The unfamiliar workstation and lack of scheduled maintenance justify checking the event. They are evidence of unusual activity, not proof of compromise.', hint:'Compare the time, account, workstation, and maintenance policy.'},
  {title:'02 · Review access', intro:'Least privilege means giving people the access they need for their task. Compare the file inventory with the sharing policy.', files:['inventory.txt','privacy.txt'], prompt:'Which access change matches the policy?', choices:['Make reflection.txt owner-only','Make reflection.txt public','Remove class access to the reading list'], answer:0, success:'Correct. The learner keeps access to their reflection, and the class retains the reading list it needs.', hint:'Which file is personal, and who should be allowed to read it?'}
 ];
 function pageMarkup() {
  if (!data.discoveries?.worldTrails?.circuit?.completedAt) return header('CANOPY LAB','A path still hidden','Follow the forest’s clues to discover where this branch leads.','<a class="primary" href="#courses">Return to Canopy Lab</a>');
  return '<a class="link" href="#courses">← Canopy Lab</a>' +
   header('CYBERSECURITY FOUNDATIONS · UNIT 1 · LESSON 1','Read the signals','Learn to gather evidence and review access in a fictional archive.') +
   '<section class="card signal-lesson"><h2>What is cybersecurity?</h2><p>Cybersecurity is the practice of protecting systems and information from harm. Here you’ll practice two habits: check the evidence before drawing a conclusion, and give people only the access their work requires.</p><p>These Linux-style consoles use sample files in your browser. Try <code>help</code>, <code>pwd</code>, <code>ls</code>, and <code>cat filename</code>. Each lab has its own files.</p>' +
   missions.map((m,i) => '<section class="signal-mission" data-mission="' + i + '"><h3>' + esc(m.title) + '</h3><p>' + esc(m.intro) + '</p><pre class="signal-output" tabindex="0" aria-label="Console output">archive@lab:~$ help\nCommands: help, pwd, ls, cat &lt;filename&gt;, clear</pre>' +
    '<form class="signal-command"><label>Console command <input name="command" required autocomplete="off" spellcheck="false"></label><button type="submit" class="outline-button">Run</button></form><details><summary>Read sample files without typing</summary>' +
    m.files.map(name => '<h4>' + esc(name) + '</h4><pre class="signal-file">' + esc(files[name]) + '</pre>').join('') + '</details><form class="signal-answer"><fieldset><legend>' + esc(m.prompt) + '</legend>' +
    m.choices.map((choice,j) => '<label><input type="radio" name="answer" value="' + j + '" required> ' + esc(choice) + '</label>').join('') +
    '</fieldset><button type="submit" class="primary">Check finding</button><p role="status">' + (data.discoveries?.signalLabs?.[i] ? '✓ Lab completed. You can practice again.' : '') + '</p></form></section>').join('') + '</section>';
 }
 document.addEventListener('submit',event => {
  const form = event.target;
  if (!form.matches('.signal-command,.signal-answer')) return;
  event.preventDefault();
  if (!data.discoveries?.worldTrails?.circuit?.completedAt) return;
  const panel = form.closest('[data-mission]');
  const i = Number(panel.dataset.mission);
  const mission = missions[i];
  if (form.matches('.signal-answer')) {
   const success = Number(form.elements.answer.value) === mission.answer;
   if (success) {
    data.discoveries.signalLabs ||= {};
    const wasComplete = data.discoveries.signalLabs[i];
    data.discoveries.signalLabs[i] = true;
    if (!save() && !wasComplete) delete data.discoveries.signalLabs[i];
   }
   form.querySelector('[role=status]').textContent = success ? mission.success : mission.hint;
   return;
  }
  const command = form.elements.command.value.trim();
  const output = panel.querySelector('.signal-output');
  let result;
  if (command === 'clear') output.textContent = '';
  else {
   if (command === 'help') result = 'Commands: help, pwd, ls, cat <filename>, clear';
   else if (command === 'pwd') result = '/home/archive/lab';
   else if (command === 'ls') result = mission.files.join('  ');
   else if (command.startsWith('cat ')) {
    const filename = command.slice(4).trim();
    result = mission.files.includes(filename) ? files[filename] : 'File not found. Use ls to see this lab’s files.';
   } else result = 'Unknown command. Type help for the supported commands.';
   output.textContent = (output.textContent + '\narchive@lab:~$ ' + command + '\n' + result).slice(-9000);
  }
  output.scrollTop = output.scrollHeight;
  form.reset();
  form.elements.command.focus();
 });
 window.SignalClass = {page:pageMarkup};
})();
