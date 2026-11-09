const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),core=require('../forest-places-core.js');
function boot(data,appearance='starfern'){
 const nodes=new Map(),listeners={};
 function node(){return {dataset:{},hidden:false,isConnected:true,innerHTML:'',textContent:'',setAttribute(){},append(el){if(el.id)nodes.set(el.id,el)},insertBefore(){},querySelector(selector){if(!this.children)this.children=new Map();if(!this.children.has(selector))this.children.set(selector,node());return this.children.get(selector)}}}
 const picker=node(),root=node();
 const doc={documentElement:root,body:node(),createElement:node,querySelector(s){if(!nodes.has(s))nodes.set(s,node());return nodes.get(s)},getElementById(s){if(!nodes.has(s))nodes.set(s,node());return nodes.get(s)},querySelectorAll(){return []},addEventListener(type,fn){listeners[type]=fn}};
 const window={ForestPlacesCore:core},saved={value:appearance};
 vm.runInNewContext(fs.readFileSync(require.resolve('../forest-places.js'),'utf8'),{window,document:doc,data,localStorage:{getItem:()=>saved.value,setItem:(_,v)=>saved.value=v},Date,innerWidth:1200,StudyDesk:{windowBox:()=>picker},save:()=>true,esc:s=>String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;'),toast(){},dateLabel:s=>s});
 window.ForestPlaces.open();return {api:window.ForestPlaces,html:()=>picker.querySelector('.desk-content').innerHTML,root,saved,picker};
}
const data={discoveries:{},notes:[{body:'Keep this.'}]},fresh=boot(data);
function hidden(ui){for(const name of ['Rosepetal Glade','Snowglass Forest','rosepetal-forest.webp','snowglass-forest.webp','Preview this place','data-place-preview'])assert.ok(!ui.html().includes(name),`Locked picker must hide ${name}`)}
hidden(fresh);assert.match(fresh.html(),/place-petal/);assert.match(fresh.html(),/place-snowflake/);assert.equal(fresh.api.preview,undefined);assert.equal(fresh.api.returnHome,undefined);assert.equal(fresh.api.select('rosepetal'),false);assert.equal(fresh.root.dataset.forest,'starfern');assert.equal(fresh.saved.value,'starfern');assert.doesNotMatch(fresh.api.rewardMarkup('snowglass'),/Snowglass|<img/);
fresh.picker.hidden=true;fresh.picker.hidden=false;fresh.api.open();hidden(fresh);assert.equal(fresh.root.dataset.forest,'starfern');
data.discoveries.games={glimmer:{level:3},pairs:{level:2},seeds:{level:3}};fresh.api.reconcile();hidden(fresh);assert.match(fresh.html(),/Follow an invitation/);assert.match(fresh.api.rewardMarkup('rosepetal'),/Rosepetal Glade/);assert.equal(fresh.api.collect('rosepetal'),true);assert.match(fresh.html(),/Rosepetal Glade/);assert.match(fresh.html(),/rosepetal-forest.webp/);assert.doesNotMatch(fresh.html(),/Snowglass Forest|snowglass-forest.webp/);assert.equal(fresh.root.dataset.forest,'rosepetal');
const restored=boot(JSON.parse(JSON.stringify(data)),fresh.saved.value);assert.equal(restored.root.dataset.forest,'rosepetal');assert.match(restored.html(),/Here now/);assert.equal(restored.api.select('day'),true);assert.equal(restored.api.select('rosepetal'),true);assert.equal(restored.root.dataset.forest,'rosepetal');assert.deepEqual(data.notes,[{body:'Keep this.'}]);
const stale=boot({forestPlaces:{version:1,collected:{},selected:'snowglass'},discoveries:{}},'snowglass');assert.equal(stale.root.dataset.forest,'day');hidden(stale);
console.log('Passed: locked cards conceal names/art, subtle clues remain, no preview API, close/reopen retains saved forest, earned reveal and collection, return visits, reload, and stale unowned theme fallback.');
