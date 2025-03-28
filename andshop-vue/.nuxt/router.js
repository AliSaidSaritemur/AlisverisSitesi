import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3b4f7da0 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _5d939b16 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _51ebdf68 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _26ce192a = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _18be453f = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _31955fff = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _61c35def = () => interopDefault(import('..\\pages\\electronics.vue' /* webpackChunkName: "pages/electronics" */))
const _e36e37e4 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _11fe5aea = () => interopDefault(import('..\\pages\\furniture.vue' /* webpackChunkName: "pages/furniture" */))
const _579ede85 = () => interopDefault(import('..\\pages\\grocery.vue' /* webpackChunkName: "pages/grocery" */))
const _caabe23e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _7c027980 = () => interopDefault(import('..\\pages\\lookbook.vue' /* webpackChunkName: "pages/lookbook" */))
const _555adc84 = () => interopDefault(import('..\\pages\\my-account\\index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _027fbf2a = () => interopDefault(import('..\\pages\\pharmacy.vue' /* webpackChunkName: "pages/pharmacy" */))
const _1b201662 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _322a925b = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _07459794 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _20aca8d5 = () => interopDefault(import('..\\pages\\SignalRMessage.vue' /* webpackChunkName: "pages/SignalRMessage" */))
const _1598489b = () => interopDefault(import('..\\pages\\vendor-dashboard\\index.vue' /* webpackChunkName: "pages/vendor-dashboard/index" */))
const _759aaea1 = () => interopDefault(import('..\\pages\\blog\\blog-2.vue' /* webpackChunkName: "pages/blog/blog-2" */))
const _75a8c622 = () => interopDefault(import('..\\pages\\blog\\blog-3.vue' /* webpackChunkName: "pages/blog/blog-3" */))
const _52af5164 = () => interopDefault(import('..\\pages\\blog\\blog-single-2.vue' /* webpackChunkName: "pages/blog/blog-single-2" */))
const _8ca63bc6 = () => interopDefault(import('..\\pages\\cart\\cart-2.vue' /* webpackChunkName: "pages/cart/cart-2" */))
const _8c8a0cc4 = () => interopDefault(import('..\\pages\\cart\\cart-3.vue' /* webpackChunkName: "pages/cart/cart-3" */))
const _8c6dddc2 = () => interopDefault(import('..\\pages\\cart\\cart-4.vue' /* webpackChunkName: "pages/cart/cart-4" */))
const _1f7f8378 = () => interopDefault(import('..\\pages\\cart\\empty-cart.vue' /* webpackChunkName: "pages/cart/empty-cart" */))
const _6b927c9a = () => interopDefault(import('..\\pages\\contact-us\\contact-us-2.vue' /* webpackChunkName: "pages/contact-us/contact-us-2" */))
const _a69e6ae4 = () => interopDefault(import('..\\pages\\my-account\\account-details.vue' /* webpackChunkName: "pages/my-account/account-details" */))
const _1cbac795 = () => interopDefault(import('..\\pages\\my-account\\account-info-edit.vue' /* webpackChunkName: "pages/my-account/account-info-edit" */))
const _637b9ae4 = () => interopDefault(import('..\\pages\\my-account\\addresses.vue' /* webpackChunkName: "pages/my-account/addresses" */))
const _bed7e7a4 = () => interopDefault(import('..\\pages\\my-account\\checkout-1.vue' /* webpackChunkName: "pages/my-account/checkout-1" */))
const _bebbb8a2 = () => interopDefault(import('..\\pages\\my-account\\checkout-2.vue' /* webpackChunkName: "pages/my-account/checkout-2" */))
const _bd7c415e = () => interopDefault(import('..\\pages\\my-account\\compare.vue' /* webpackChunkName: "pages/my-account/compare" */))
const _42939952 = () => interopDefault(import('..\\pages\\my-account\\downloads.vue' /* webpackChunkName: "pages/my-account/downloads" */))
const _2922991a = () => interopDefault(import('..\\pages\\my-account\\order-tracking.vue' /* webpackChunkName: "pages/my-account/order-tracking" */))
const _4d8ed3ae = () => interopDefault(import('..\\pages\\my-account\\orders.vue' /* webpackChunkName: "pages/my-account/orders" */))
const _71465e09 = () => interopDefault(import('..\\pages\\my-account\\wishlist.vue' /* webpackChunkName: "pages/my-account/wishlist" */))
const _4c5cb69c = () => interopDefault(import('..\\pages\\product\\product-single-2.vue' /* webpackChunkName: "pages/product/product-single-2" */))
const _4c40879a = () => interopDefault(import('..\\pages\\product\\product-single-3.vue' /* webpackChunkName: "pages/product/product-single-3" */))
const _2f5ed849 = () => interopDefault(import('..\\pages\\shop\\shop-2.vue' /* webpackChunkName: "pages/shop/shop-2" */))
const _2f6cefca = () => interopDefault(import('..\\pages\\shop\\shop-3.vue' /* webpackChunkName: "pages/shop/shop-3" */))
const _2f7b074b = () => interopDefault(import('..\\pages\\shop\\shop-4.vue' /* webpackChunkName: "pages/shop/shop-4" */))
const _2f891ecc = () => interopDefault(import('..\\pages\\shop\\shop-5.vue' /* webpackChunkName: "pages/shop/shop-5" */))
const _419d0e4c = () => interopDefault(import('..\\pages\\vendor-dashboard\\add-product.vue' /* webpackChunkName: "pages/vendor-dashboard/add-product" */))
const _2e630917 = () => interopDefault(import('..\\pages\\vendor-dashboard\\order.vue' /* webpackChunkName: "pages/vendor-dashboard/order" */))
const _b2be6410 = () => interopDefault(import('..\\pages\\vendor-dashboard\\product.vue' /* webpackChunkName: "pages/vendor-dashboard/product" */))
const _0a209db2 = () => interopDefault(import('..\\pages\\vendor-dashboard\\profile.vue' /* webpackChunkName: "pages/vendor-dashboard/profile" */))
const _0f7f124e = () => interopDefault(import('..\\pages\\vendor-dashboard\\setting.vue' /* webpackChunkName: "pages/vendor-dashboard/setting" */))
const _5dfb286c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _50353e20 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _3a2f133a = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _3b4f7da0,
    name: "404"
  }, {
    path: "/about-us",
    component: _5d939b16,
    name: "about-us"
  }, {
    path: "/blog",
    component: _51ebdf68,
    name: "blog"
  }, {
    path: "/cart",
    component: _26ce192a,
    name: "cart"
  }, {
    path: "/coming-soon",
    component: _18be453f,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _31955fff,
    name: "contact-us"
  }, {
    path: "/electronics",
    component: _61c35def,
    name: "electronics"
  }, {
    path: "/faq",
    component: _e36e37e4,
    name: "faq"
  }, {
    path: "/furniture",
    component: _11fe5aea,
    name: "furniture"
  }, {
    path: "/grocery",
    component: _579ede85,
    name: "grocery"
  }, {
    path: "/login",
    component: _caabe23e,
    name: "login"
  }, {
    path: "/lookbook",
    component: _7c027980,
    name: "lookbook"
  }, {
    path: "/my-account",
    component: _555adc84,
    name: "my-account"
  }, {
    path: "/pharmacy",
    component: _027fbf2a,
    name: "pharmacy"
  }, {
    path: "/privacy-policy",
    component: _1b201662,
    name: "privacy-policy"
  }, {
    path: "/register",
    component: _322a925b,
    name: "register"
  }, {
    path: "/shop",
    component: _07459794,
    name: "shop"
  }, {
    path: "/SignalRMessage",
    component: _20aca8d5,
    name: "SignalRMessage"
  }, {
    path: "/vendor-dashboard",
    component: _1598489b,
    name: "vendor-dashboard"
  }, {
    path: "/blog/blog-2",
    component: _759aaea1,
    name: "blog-blog-2"
  }, {
    path: "/blog/blog-3",
    component: _75a8c622,
    name: "blog-blog-3"
  }, {
    path: "/blog/blog-single-2",
    component: _52af5164,
    name: "blog-blog-single-2"
  }, {
    path: "/cart/cart-2",
    component: _8ca63bc6,
    name: "cart-cart-2"
  }, {
    path: "/cart/cart-3",
    component: _8c8a0cc4,
    name: "cart-cart-3"
  }, {
    path: "/cart/cart-4",
    component: _8c6dddc2,
    name: "cart-cart-4"
  }, {
    path: "/cart/empty-cart",
    component: _1f7f8378,
    name: "cart-empty-cart"
  }, {
    path: "/contact-us/contact-us-2",
    component: _6b927c9a,
    name: "contact-us-contact-us-2"
  }, {
    path: "/my-account/account-details",
    component: _a69e6ae4,
    name: "my-account-account-details"
  }, {
    path: "/my-account/account-info-edit",
    component: _1cbac795,
    name: "my-account-account-info-edit"
  }, {
    path: "/my-account/addresses",
    component: _637b9ae4,
    name: "my-account-addresses"
  }, {
    path: "/my-account/checkout-1",
    component: _bed7e7a4,
    name: "my-account-checkout-1"
  }, {
    path: "/my-account/checkout-2",
    component: _bebbb8a2,
    name: "my-account-checkout-2"
  }, {
    path: "/my-account/compare",
    component: _bd7c415e,
    name: "my-account-compare"
  }, {
    path: "/my-account/downloads",
    component: _42939952,
    name: "my-account-downloads"
  }, {
    path: "/my-account/order-tracking",
    component: _2922991a,
    name: "my-account-order-tracking"
  }, {
    path: "/my-account/orders",
    component: _4d8ed3ae,
    name: "my-account-orders"
  }, {
    path: "/my-account/wishlist",
    component: _71465e09,
    name: "my-account-wishlist"
  }, {
    path: "/product/product-single-2",
    component: _4c5cb69c,
    name: "product-product-single-2"
  }, {
    path: "/product/product-single-3",
    component: _4c40879a,
    name: "product-product-single-3"
  }, {
    path: "/shop/shop-2",
    component: _2f5ed849,
    name: "shop-shop-2"
  }, {
    path: "/shop/shop-3",
    component: _2f6cefca,
    name: "shop-shop-3"
  }, {
    path: "/shop/shop-4",
    component: _2f7b074b,
    name: "shop-shop-4"
  }, {
    path: "/shop/shop-5",
    component: _2f891ecc,
    name: "shop-shop-5"
  }, {
    path: "/vendor-dashboard/add-product",
    component: _419d0e4c,
    name: "vendor-dashboard-add-product"
  }, {
    path: "/vendor-dashboard/order",
    component: _2e630917,
    name: "vendor-dashboard-order"
  }, {
    path: "/vendor-dashboard/product",
    component: _b2be6410,
    name: "vendor-dashboard-product"
  }, {
    path: "/vendor-dashboard/profile",
    component: _0a209db2,
    name: "vendor-dashboard-profile"
  }, {
    path: "/vendor-dashboard/setting",
    component: _0f7f124e,
    name: "vendor-dashboard-setting"
  }, {
    path: "/",
    component: _5dfb286c,
    name: "index"
  }, {
    path: "/blog/:slug",
    component: _50353e20,
    name: "blog-slug"
  }, {
    path: "/product/:id?",
    component: _3a2f133a,
    name: "product-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
