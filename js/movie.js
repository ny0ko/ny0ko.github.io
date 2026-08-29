var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");

var ytplayer;
var tag = document.createElement('script');
tag.src = "https://web.archive.org/web/20170331142140/https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
 var initvid=document.getElementById('initvid').value;
 ytplayer = new YT.Player('ytplayer', {
  height: '640',
  width: '390',
  videoId: initvid,
  playerVars:{
   rel:0,
   autoplay:0,
   showinfo:1,
   controls:2,
   enablejsapi:1,
   version:3,
   modestbranding:1,
   playsinline:1,
   theme:'light'
  },
  events: {
   'onReady': onPlayerReady
  }
 });
}
function onPlayerReady(event) {
}
function seekTo(seconds, allowSeekAhead){
 ytplayer.seekTo(seconds, allowSeekAhead);
}

function loadVideo(idOrUrl, startSeconds, quality){
 var urlRegex = /http\:/;
 if (idOrUrl.match(urlRegex)){
  ytplayer.loadVideoByUrl(idOrUrl, parseInt(startSeconds), quality);
 }
 else{
  ytplayer.loadVideoById(idOrUrl, parseInt(startSeconds), quality);
 }
}

}

/*
     FILE ARCHIVED ON 14:21:40 Mar 31, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:36:18 Aug 29, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.322
  load_resource: 127.433
  PetaboxLoader3.resolve: 47.744
  PetaboxLoader3.datanode: 7.539
*/