
    export default [
      {
              path: "/2019/04/16/cant-belive",
              meta: {
                __relative: '_posts/cant-belive.md',
                __pageId: '2c20e011'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-cant-belive-md" */ "/Users/limitlessloop/Repos/saber-test/pages/_posts/cant-belive.md?saberPage=2c20e011")
                
              }
            },
{
              path: "/2019/04/15/even-more",
              meta: {
                __relative: '_posts/even-more.md',
                __pageId: '22f78c3e'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-even-more-md" */ "/Users/limitlessloop/Repos/saber-test/pages/_posts/even-more.md?saberPage=22f78c3e")
                
              }
            },
{
              path: "/2019/04/29/first-post",
              meta: {
                __relative: '_posts/first-post.md',
                __pageId: '18e85f44'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-first-post-md" */ "/Users/limitlessloop/Repos/saber-test/pages/_posts/first-post.md?saberPage=18e85f44")
                
              }
            },
{
              path: "/2019/04/17/if-only",
              meta: {
                __relative: '_posts/if-only.md',
                __pageId: '60ba6c2d'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-if-only-md" */ "/Users/limitlessloop/Repos/saber-test/pages/_posts/if-only.md?saberPage=60ba6c2d")
                
              }
            },
{
              path: "/2019/04/18/more-content",
              meta: {
                __relative: '_posts/let-there-be-more.md',
                __pageId: '761ca485'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-let-there-be-more-md" */ "/Users/limitlessloop/Repos/saber-test/pages/_posts/let-there-be-more.md?saberPage=761ca485")
                
              }
            },
{
              path: "/2019/04/30/second-post",
              meta: {
                __relative: '_posts/second-post.md',
                __pageId: '1a8f4d10'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-second-post-md" */ "/Users/limitlessloop/Repos/saber-test/pages/_posts/second-post.md?saberPage=1a8f4d10")
                
              }
            },
{
              path: "/about/about",
              meta: {
                __relative: 'about/about.md',
                __pageId: '091dacd1'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--about-about-md" */ "/Users/limitlessloop/Repos/saber-test/pages/about/about.md?saberPage=091dacd1")
                
              }
            },
{
              path: "/cv",
              meta: {
                __relative: 'cv/cv.md',
                __pageId: '5b04cae6'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--cv-cv-md" */ "/Users/limitlessloop/Repos/saber-test/pages/cv/cv.md?saberPage=5b04cae6")
                
              }
            },
{
              path: "/",
              meta: {
                __relative: 'home/index.md',
                __pageId: '65cf138c'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--home-index-md" */ "/Users/limitlessloop/Repos/saber-test/pages/home/index.md?saberPage=65cf138c")
                
              }
            },
{
              path: "/posts/blog",
              meta: {
                __relative: 'posts/blog.md',
                __pageId: '141b9950'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--posts-blog-md" */ "/Users/limitlessloop/Repos/saber-test/pages/posts/blog.md?saberPage=141b9950")
                
              }
            },
{
              path: "/test",
              meta: {
                __relative: 'test.adoc',
                __pageId: 'd3d0a488'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--test-adoc" */ "/Users/limitlessloop/Repos/saber-test/pages/test.adoc?saberPage=d3d0a488")
                
              }
            },
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "/Users/limitlessloop/.nvm/versions/node/v12.4.0/lib/node_modules/saber/vue-renderer/app/404.vue")
        }
      }
    ]