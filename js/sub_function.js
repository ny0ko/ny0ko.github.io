var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
function AndroidSversion(){if(ua.indexOf("Android")>0){var e=parseFloat(ua.slice(ua.indexOf("Android")+8));return e}}function browserLanguage(){try{return navigator.browserLanguage||navigator.language||navigator.userLanguage}catch(e){return void 0}}var ua=navigator.userAgent;if(AndroidSversion()&&-1==ua.indexOf("Chrome")){var style="<style>#sp_1,#sp_hover,#sp,.fade,.sp_photo,.trans_cut,.act{-webkit-transition:none !important;transition:none !important;}</style>";$(style).appendTo("head")}var lcid=[["ja","ja-jp"],["en","en-us","en-ca","en-tt","en-bz","en-jm"],["en-gb","en-ie","en-au","en-nz","en-za"],["es-mx","es-ar","es-bo","es-cl","es-co","es-cr","es-do","es-ec","es-gt","es-hn","es-pa","es-ni","es-pe","es-pr","es-py","es-sv","es-uy","es-ve"],["es"],["it","it-ch"],["nl","nl-be"],["fr-ca"],["fr","fr-be","fr-ch","fr-lu"],["de","de-at","de-ch","de-lu","de-li"],["pt-br"],["ru","ru-mo"]],jumpcode=["ja","en","en-gb","es-mx","es","it","nl","fr-ca","fr","de","pt-br","ru"],supportcode=["ja-JP","en-US","en-GB","es-MX","es-ES","it-IT","nl-NL","fr-CA","fr-FR","de-DE","pt-BR","ru-RU"],brlang=browserLanguage(),hasTouchEvent="ontouchstart"in window,click_touch_event;click_touch_event=hasTouchEvent?"touchend":"click",$(function(){var e=location.href,t=e.split("/");if(void 0!=$(".cont_step_back_1").attr("data")&&""!=$(".cont_step_back_1").attr("data")&&$(".cont_step_back_1").css({"background-image":"url("+$(".cont_step_back_1").attr("data")+")"}),/^https:\/\/miitomo.com/.test(e))var n=3;else var n=4;if(void 0==t[n]||""==t[n]);else if(void 0!=brlang)for(s=0;s<jumpcode.length;s++)if(t[n]==jumpcode[s]){$("#country").text("日本語"!=$("#pulldown").find("option").eq(1).text()?$("#pulldown").find("option").eq(s).text():$("#pulldown").find("option").eq(s+1).text());break}$("#pulldown").on("change",function(o){o.preventDefault();var a;if(a=t[t.length-4]!=t[n]&&"miitomo_vol2"!=t[t.length-4]?t[t.length-4]+"/"+t[t.length-3]+"/"+t[t.length-2]:t[t.length-3]!=t[n]?t[t.length-3]+"/"+t[t.length-2]:t[t.length-2],""!=$(this).val())if(/^https:\/\/miitomo.com/.test(e)){var r=e.replace("https://web.archive.org/web/20170724234453/https://miitomo.com/"+t[3],"");location.href="/"+$(this).val()+r}else location.href="/"+t[3]+"/"+$(this).val()+"/"+a+"/"}),$(window).on("scroll",function(){var e=$(this).scrollTop();e>=50?$("#pagetop").hasClass("act")||$("#pagetop").addClass("act"):$("#pagetop").hasClass("act")&&$("#pagetop").removeClass("act")}),$("#closebtn").on(click_touch_event,function(e){return e.preventDefault(),!1}),$("#eu_cookie").length&&""!=$("#eu_cookie").find("button").text()&&1!=$.cookie("cookie_agree")&&($("#attention,#eu_cookie").addClass("act"),$("#eu_cookie").find("button").on(click_touch_event,function(e){return e.preventDefault(),$.cookie("cookie_agree","1",{expires:30}),$("#eu_cookie").removeClass("act"),$("#non_target").hasClass("act")||$("#attention").removeClass("act"),!1})),$('a[href^="#"]').on(click_touch_event,function(e){if(e.preventDefault(),String($(this).attr("href")).length>1){var t=600,n=$(this).attr("href"),o=$("#"==n||""==n?"html":n),a=o.offset().top;$("html,body").stop(!0,!0).animate({scrollTop:a},t)}return!1})});
}

/*
     FILE ARCHIVED ON 23:44:53 Jul 24, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:52:17 Aug 29, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.456
  exclusion.robots: 0.047
  exclusion.robots.policy: 0.037
  esindex: 0.008
  cdx.remote: 6.713
  LoadShardBlock: 54.255 (3)
  PetaboxLoader3.resolve: 469.057 (4)
  PetaboxLoader3.datanode: 77.128 (5)
  load_resource: 565.754 (2)
*/