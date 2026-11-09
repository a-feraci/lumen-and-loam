/* Actual alternate artwork, selected with the forest theme (not a tint filter). */
(() => {
 const creatures=['mossling','hushhare','dewfawn','glimmermoth'];
 function sync(){const mode=document.documentElement.dataset.forest,suffix=window.ForestPlacesCore?.find(mode)?.suffix||(mode==='starfern'?'-starfern':'');for(const name of creatures){document.querySelectorAll(`img[data-creature="${name}"],img[src="assets/${name}.webp"]`).forEach(img=>{img.dataset.creature=name;const src=`assets/${name}${suffix}.webp`;if(img.getAttribute('src')!==src)img.setAttribute('src',src)})}}
 new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['data-forest']});document.addEventListener('lumen:render',sync);window.CreatureArt={sync};sync();
})();
