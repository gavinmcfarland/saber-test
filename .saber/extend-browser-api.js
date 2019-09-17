
      var _saber_browser_js_0 = require("/Users/limitlessloop/Repos/saber-test/saber-browser.js").default
var _saber_browser_js_1 = require("/Users/limitlessloop/Repos/saber-test/node_modules/saber-plugin-search/lib/saber-browser.js").default

      var themeBrowserApi
      var rTheme = require.context('#theme', false, /\.\/saber-browser\.[jt]s$/)
      rTheme.keys().forEach(function (k) {
        themeBrowserApi = rTheme(k).default
      })

      export default function (context) {
        typeof _saber_browser_js_0 === 'function' && _saber_browser_js_0(context)
typeof _saber_browser_js_1 === 'function' && _saber_browser_js_1(context)
        typeof themeBrowserApi === 'function' && themeBrowserApi(context)
      }