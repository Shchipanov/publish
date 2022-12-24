let scriptUrl =
  'https://www.youtube.com/s/player/34f9b71c/www-widgetapi.vflset/www-widgetapi.js';
window['yt_embedsEnableIframeSrcWithIntent'] = true;
try {
  let ttPolicy = window.trustedTypes.createPolicy('youtube-widget-api', {
    createScriptURL(x) {
      return x;
    },
  });
  scriptUrl = ttPolicy.createScriptURL(scriptUrl);
// eslint-disable-next-line no-empty
} catch (e) {}
let YT;
if (!window['YT']) {
  YT = {loading: 0, loaded: 0};
}
let YTConfig;
if (!window['YTConfig']) {
  YTConfig = {host: 'https://www.youtube.com'};
}
if (!YT.loading) {
  YT.loading = 1;
  (function () {
    let l = [];
    YT.ready = function (f) {
      if (YT.loaded) {
        f();
      } else {
        l.push(f);
      }
    };
    window.onYTReady = function () {
      YT.loaded = 1;
      for (let i = 0; i < l.length; i++) {
        try {
          l[i]();
        // eslint-disable-next-line no-empty
        } catch (e$0) {}
      }
    };
    YT.setConfig = function (c) {
      for (let k in c) {
        if (c.hasOwnProperty(k)) {
          YTConfig[k] = c[k];
        }
      }
    };
    let a = document.createElement('script');
    a.type = 'text/javascript';
    a.id = 'www-widgetapi-script';
    a.src = scriptUrl;
    a.async = true;
    let c = document.currentScript;
    if (c) {
      let n = c.nonce || c.getAttribute('nonce');
      if (n) {
        a.setAttribute('nonce', n);
      }
    }
    let b = document.getElementsByTagName('script')[0];
    b.parentNode.insertBefore(a, b);
  })();
}
