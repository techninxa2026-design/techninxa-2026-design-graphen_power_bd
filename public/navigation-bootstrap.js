/* Load before body paint so the fallback entry never flashes an unstyled page. */
(function(){
  var root=document.documentElement,key='graphene-navigation-v1';
  function nativeSupport(){
    try{return 'onpageswap' in window&&'onpagereveal' in window&&typeof CSSViewTransitionRule!=='undefined'&&CSS.supports('view-transition-name','root');}
    catch(e){return false;}
  }
  var native=nativeSupport();
  root.dataset.navigationMode=native?'native':'curtain';
  try{
    var raw=sessionStorage.getItem(key);
    if(raw)sessionStorage.removeItem(key);
    if(!native&&raw&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
      var state=JSON.parse(raw);
      if(state.to===location.pathname+location.search&&Date.now()-state.at>=0&&Date.now()-state.at<12000){
        root.dataset.navigationPhase='enter';
        root.dataset.navigationLabel=String(state.label||'Explore.').slice(0,64);
        // Fail open even if a later module fails to load.
        setTimeout(function(){if(root.dataset.navigationPhase==='enter')delete root.dataset.navigationPhase;},1800);
      }
    }
  }catch(e){}
  if(native){
    // PageReveal is registered before first paint, including history traversal.
    addEventListener('pagereveal',function(event){
      if(!event.viewTransition)return;
      if(matchMedia('(prefers-reduced-motion: reduce)').matches){event.viewTransition.skipTransition();return;}
      try{
        var a=window.navigation&&window.navigation.activation;
        var previous=a&&a.from&&a.from.url?new URL(a.from.url):null;
        var current=new URL(location.href);
        var depth=function(url){return url.pathname.split('/').filter(Boolean).length;};
        var backwards=a&&a.navigationType==='traverse'&&a.from&&a.entry&&a.entry.index<a.from.index;
        var upwards=previous&&depth(current)<depth(previous);
        root.dataset.navigationDirection=backwards||upwards?'back':'forward';
      }catch(e){root.dataset.navigationDirection='forward';}
      event.viewTransition.finished.catch(function(){}).then(function(){delete root.dataset.navigationDirection;});
    });
  }
})();