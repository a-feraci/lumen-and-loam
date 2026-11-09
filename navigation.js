/* A remembered desktop rail and an independent, closed-by-default mobile menu. */
(() => {
  const mobile=matchMedia('(max-width:720px)'),toggle=document.getElementById('nav-toggle'),nav=document.getElementById('nav'),bottom=document.querySelector('.side-bottom');
  let compact=false,open=false;
  try{compact=localStorage.getItem('lumen-nav-compact')==='yes'}catch{}
  nav.querySelectorAll('a').forEach(a=>{a.title=a.querySelector('span').textContent;a.setAttribute('aria-label',a.title)});
  const settings=document.getElementById('open-settings');settings.title='Settings & data';settings.setAttribute('aria-label','Settings & data');settings.innerHTML='<span aria-hidden="true">⚙</span> <span class="settings-caption">Settings & data</span>';
  function apply(){document.body.classList.toggle('nav-compact',compact);document.body.classList.toggle('mobile-nav-open',mobile.matches&&open);const expanded=mobile.matches?open:!compact;toggle.setAttribute('aria-expanded',String(expanded));toggle.setAttribute('aria-label',mobile.matches?(open?'Close navigation':'Open navigation'):(compact?'Expand navigation':'Compact navigation'));toggle.firstElementChild.textContent=mobile.matches?(open?'×':'☰'):(compact?'›':'‹');nav.inert=bottom.inert=mobile.matches&&!open}
  function close(){if(open){open=false;apply()}}
  toggle.onclick=()=>{if(mobile.matches)open=!open;else{compact=!compact;try{localStorage.setItem('lumen-nav-compact',compact?'yes':'no')}catch{}}apply()};
  nav.addEventListener('click',e=>{if(e.target.closest('a'))close()});settings.addEventListener('click',close);document.querySelector('.brand').addEventListener('click',close);
  document.addEventListener('click',e=>{if(mobile.matches&&!e.target.closest('.sidebar'))close()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&open){close();toggle.focus()}});mobile.addEventListener('change',()=>{open=false;apply()});apply();
})();
