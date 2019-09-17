
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
              path: "/about",
              meta: {
                __relative: 'about.md',
                __pageId: '4ef185cf'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--about-md" */ "/Users/limitlessloop/Repos/saber-test/pages/about.md?saberPage=4ef185cf")
                
              }
            },
{
              path: "/blog",
              meta: {
                __relative: 'blog.md',
                __pageId: 'b95c1368'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--blog-md" */ "/Users/limitlessloop/Repos/saber-test/pages/blog.md?saberPage=b95c1368")
                
              }
            },
{
              path: "/contact",
              meta: {
                __relative: 'contact.md',
                __pageId: '0e6da69c'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--contact-md" */ "/Users/limitlessloop/Repos/saber-test/pages/contact.md?saberPage=0e6da69c")
                
              }
            },
{
              path: "/",
              meta: {
                __relative: 'index.md',
                __pageId: '15be832c'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--index-md" */ "/Users/limitlessloop/Repos/saber-test/pages/index.md?saberPage=15be832c")
                
              }
            },
{
              path: "/categories/loremipsum",
              meta: {
                __relative: 'undefined',
                __pageId: 'internal_blog__category__loremipsum'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--internal_blog__category__loremipsum" */ "#cache/pages/internal_blog__category__loremipsum.saberpage?saberPage=internal_blog__category__loremipsum")
                
              }
            },
{
              path: "/categories/meta",
              meta: {
                __relative: 'undefined',
                __pageId: 'internal_blog__category__meta'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--internal_blog__category__meta" */ "#cache/pages/internal_blog__category__meta.saberpage?saberPage=internal_blog__category__meta")
                
              }
            },
{
              path: "/categories/bar",
              meta: {
                __relative: 'undefined',
                __pageId: 'internal_blog__category__bar'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--internal_blog__category__bar" */ "#cache/pages/internal_blog__category__bar.saberpage?saberPage=internal_blog__category__bar")
                
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