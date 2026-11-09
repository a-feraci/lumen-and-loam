/* Collectible appearance state; independent of lessons, notes, and game records. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.ForestPlacesCore=api})(typeof window!=='undefined'?window:this,()=>{
 const places=[
 {id:'day',name:'Day Canopy',short:'Day canopy',icon:'☼',base:true,image:'day-canopy.webp',suffix:'',color:'#eee8db',description:'Sun-warmed leaves, pearlescent flowers, and your original forest home.'},
 {id:'starfern',name:'StarFern',short:'StarFern night',icon:'☾',base:true,image:'starfern-forest.webp',suffix:'-starfern',color:'#111823',description:'Indigo moonlight, glowing dew, and the forest after dark.'},
 {id:'rosepetal',name:'Rosepetal Glade',short:'Rosepetal glade',icon:'✿',base:false,image:'rosepetal-forest.webp',suffix:'-rosepetal',color:'#f3d0df',description:'A sparkling pink fairy clearing, flower-covered trees, and rose-petal mushrooms.',trail:'Visit the place revealed by the three creature trials.'},
 {id:'snowglass',name:'Snowglass Forest',short:'Snowglass forest',icon:'❄',base:false,image:'snowglass-forest.webp',suffix:'-snowglass',color:'#e5eff8',description:'Snow-laden branches, a frozen brook, and creatures dusted with frost and starlight.',trail:'Follow the four fragments of the lantern letter.'}
 ];
 const find=id=>places.find(p=>p.id===id);
 function eligible(data,id){const d=data.discoveries||{};if(id==='rosepetal')return !!d.quietClearing||['glimmer','pairs','seeds'].every(n=>Number(d.games?.[n]?.level)>0);if(id==='snowglass')return !!d.letterTrail?.completedAt||Number(d.letterTrail?.step)>=4;return !!find(id)?.base}
 function owned(data,id){return !!find(id)?.base||!!data.forestPlaces?.collected?.[id]}
 function ensure(data,now,preferred='day'){let p=data.forestPlaces;if(!p||typeof p!=='object'||Array.isArray(p))p=data.forestPlaces={};if(!p.collected||typeof p.collected!=='object'||Array.isArray(p.collected))p.collected={};if(!p.version){if(data.discoveries?.quietClearing)p.collected.rosepetal||={collectedAt:typeof data.discoveries.quietClearing==='string'?data.discoveries.quietClearing:now,source:'earlier-clearing'};if(data.discoveries?.letterTrail?.completedAt||Number(data.discoveries?.letterTrail?.step)>=4)p.collected.snowglass||={collectedAt:data.discoveries.letterTrail?.completedAt||now,source:'earlier-letter'};p.version=1}if(!find(p.selected)||!owned(data,p.selected))p.selected=find(preferred)&&owned(data,preferred)?preferred:'day';return p}
 function collect(data,id,now){ensure(data,now);const p=find(id);if(!p||p.base)throw Error('Choose a collectible forest place.');if(!eligible(data,id))throw Error('This place is still waiting at the end of its trail.');const fresh=!owned(data,id);data.forestPlaces.collected[id]||={collectedAt:now,source:id==='rosepetal'?'creature-trials':'lantern-letter'};return fresh}
 function select(data,id){const p=find(id);if(!p||!owned(data,id))throw Error('Collect this place before keeping it as your theme.');data.forestPlaces.selected=id;return id}
 return {places,find,eligible,owned,ensure,collect,select};
});
