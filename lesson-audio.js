/* Recorded narration uses one player for the current lesson. */
(() => {
 const player = new Audio();
 player.preload = 'none';
 let sections = [];
 let index = 0;
 let current = null;

 function status(message) {
  const panel = document.querySelector('.lesson-audio');
  if (!panel) return;
  panel.querySelector('[role=status]').textContent = message;
  panel.querySelector('[data-audio-stop]').disabled = !current;
  const pause = panel.querySelector('[data-audio-pause]');
  pause.disabled = !current;
  pause.textContent = player.paused && current ? 'Resume' : 'Pause';
 }
 function stop(message='') {
  player.pause();
  current?.classList.remove('is-being-read');
  current = null;
  sections = [];
  status(message);
 }
 function play() {
  const section = current;
  player.play().then(() => {
   if (current === section) status('Reading ' + section.querySelector('h2').innerText);
  }).catch(() => {
   if (current === section) stop('Audio could not play. Check your connection and try again.');
  });
 }
 function next() {
  current?.classList.remove('is-being-read');
  current = sections[index++];
  if (!current) {
   stop('Finished reading.');
   return;
  }
  player.src = current.dataset.narrationFile;
  player.playbackRate = Number(document.getElementById('lesson-audio-speed')?.value || 1);
  current.classList.add('is-being-read');
  play();
 }
 player.addEventListener('ended',next);
 function controls() {
  return '<div class="lesson-audio"><div class="toolbar"><button type="button" class="outline-button" data-audio-play>▶ Read lesson aloud</button><button type="button" class="text-button" data-audio-pause disabled>Pause</button><button type="button" class="text-button" data-audio-stop disabled>Stop</button><label>Speed <select id="lesson-audio-speed"><option value="0.8">0.8×</option><option value="1" selected>1×</option><option value="1.2">1.2×</option></select></label></div><p class="mini" role="status"></p></div>';
 }
 document.addEventListener('change',event => {
  if (event.target.id === 'lesson-audio-speed') player.playbackRate = Number(event.target.value);
 });
 document.addEventListener('click',event => {
  const button = event.target.closest('[data-audio-play],[data-audio-section],[data-audio-pause],[data-audio-stop]');
  if (!button) return;
  if (button.hasAttribute('data-audio-stop')) {
   stop('Stopped.');
   return;
  }
  if (button.hasAttribute('data-audio-pause')) {
   if (!current) return;
   if (player.paused) play();
   else {
    player.pause();
    status('Paused.');
   }
   return;
  }
  stop();
  index = 0;
  const section = button.closest('.lesson-section[data-narration-file]');
  sections = section ? [section] : [...document.querySelectorAll('.lesson-section[data-narration-file]')];
  next();
 });
 document.addEventListener('lumen:render',() => {
  if (current && !current.isConnected) stop();
 });
 window.LessonAudio = {
  controls,
  sectionButton:() => '<button type="button" class="text-button" data-audio-section>▶ Read this section</button>'
 };
})();
