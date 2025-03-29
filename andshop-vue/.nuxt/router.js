import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _785bf107 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _2067399f = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _fb6c6f82 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _572c0201 = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _491c2e16 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _097de8d4 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _dbbd7274 = () => interopDefault(import('..\\pages\\electronics.vue' /* webpackChunkName: "pages/electronics" */))
const _244c93e5 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _acc2e4fe = () => interopDefault(import('..\\pages\\furniture.vue' /* webpackChunkName: "pages/furniture" */))
const _3bee6a48 = () => interopDefault(import('..\\pages\\grocery.vue' /* webpackChunkName: "pages/grocery" */))
const _82fdb610 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _f65b3c6e = () => interopDefault(import('..\\pages\\lookbook.vue' /* webpackChunkName: "pages/lookbook" */))
const _c2038556 = () => interopDefault(import('..\\pages\\my-account\\index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _7cd88218 = () => interopDefault(import('..\\pages\\pharmacy.vue' /* webpackChunkName: "pages/pharmacy" */))
const _72cac898 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _16039e38 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _37a3806b = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _bdf106c4 = () => interopDefault(import('..\\pages\\SignalRMessage.vue' /* webpackChunkName: "pages/SignalRMessage" */))
const _9f36b21c = () => interopDefault(import('..\\pages\\vendor-dashboard\\index.vue' /* webpackChunkName: "pages/vendor-dashboard/index" */))
const _50f9e0aa = () => interopDefault(import('..\\pages\\blog\\blog-2.vue' /* webpackChunkName: "pages/blog/blog-2" */))
const _5107f82b = () => interopDefault(import('..\\pages\\blog\\blog-3.vue' /* webpackChunkName: "pages/blog/blog-3" */))
const _37d10db6 = () => interopDefault(import('..\\pages\\blog\\blog-single-2.vue' /* webpackChunkName: "pages/blog/blog-single-2" */))
const _d5e7d7b4 = () => interopDefault(import('..\\pages\\cart\\cart-2.vue' /* webpackChunkName: "pages/cart/cart-2" */))
const _d5cba8b2 = () => interopDefault(import('..\\pages\\cart\\cart-3.vue' /* webpackChunkName: "pages/cart/cart-3" */))
const _d5af79b0 = () => interopDefault(import('..\\pages\\cart\\cart-4.vue' /* webpackChunkName: "pages/cart/cart-4" */))
const _1716edfe = () => interopDefault(import('..\\pages\\cart\\empty-cart.vue' /* webpackChunkName: "pages/cart/empty-cart" */))
const _ee13a388 = () => interopDefault(import('..\\pages\\contact-us\\contact-us-2.vue' /* webpackChunkName: "pages/contact-us/contact-us-2" */))
const _32e82565 = () => interopDefault(import('..\\pages\\my-account\\account-details.vue' /* webpackChunkName: "pages/my-account/account-details" */))
const _1af26ea8 = () => interopDefault(import('..\\pages\\my-account\\account-info-edit.vue' /* webpackChunkName: "pages/my-account/account-info-edit" */))
const _3c703aa5 = () => interopDefault(import('..\\pages\\my-account\\addresses.vue' /* webpackChunkName: "pages/my-account/addresses" */))
const _0fb1f212 = () => interopDefault(import('..\\pages\\my-account\\checkout-1.vue' /* webpackChunkName: "pages/my-account/checkout-1" */))
const _0f95c310 = () => interopDefault(import('..\\pages\\my-account\\checkout-2.vue' /* webpackChunkName: "pages/my-account/checkout-2" */))
const _a29dfdb0 = () => interopDefault(import('..\\pages\\my-account\\compare.vue' /* webpackChunkName: "pages/my-account/compare" */))
const _4ce43b6e = () => interopDefault(import('..\\pages\\my-account\\downloads.vue' /* webpackChunkName: "pages/my-account/downloads" */))
const _35b90763 = () => interopDefault(import('..\\pages\\my-account\\order-tracking.vue' /* webpackChunkName: "pages/my-account/order-tracking" */))
const _45025d72 = () => interopDefault(import('..\\pages\\my-account\\orders.vue' /* webpackChunkName: "pages/my-account/orders" */))
const _11bb7712 = () => interopDefault(import('..\\pages\\my-account\\wishlist.vue' /* webpackChunkName: "pages/my-account/wishlist" */))
const _1a006d6e = () => interopDefault(import('..\\pages\\product\\product-single-2.vue' /* webpackChunkName: "pages/product/product-single-2" */))
const _19e43e6c = () => interopDefault(import('..\\pages\\product\\product-single-3.vue' /* webpackChunkName: "pages/product/product-single-3" */))
const _0abe0a52 = () => interopDefault(import('..\\pages\\shop\\shop-2.vue' /* webpackChunkName: "pages/shop/shop-2" */))
const _0acc21d3 = () => interopDefault(import('..\\pages\\shop\\shop-3.vue' /* webpackChunkName: "pages/shop/shop-3" */))
const _0ada3954 = () => interopDefault(import('..\\pages\\shop\\shop-4.vue' /* webpackChunkName: "pages/shop/shop-4" */))
const _0ae850d5 = () => interopDefault(import('..\\pages\\shop\\shop-5.vue' /* webpackChunkName: "pages/shop/shop-5" */))
const _17690f63 = () => interopDefault(import('..\\pages\\vendor-dashboard\\add-product.vue' /* webpackChunkName: "pages/vendor-dashboard/add-product" */))
const _6da13124 = () => interopDefault(import('..\\pages\\vendor-dashboard\\order.vue' /* webpackChunkName: "pages/vendor-dashboard/order" */))
const _80621ae2 = () => interopDefault(import('..\\pages\\vendor-dashboard\\product.vue' /* webpackChunkName: "pages/vendor-dashboard/product" */))
const _234ec249 = () => interopDefault(import('..\\pages\\vendor-dashboard\\profile.vue' /* webpackChunkName: "pages/vendor-dashboard/profile" */))
const _116e9b70 = () => interopDefault(import('..\\pages\\vendor-dashboard\\setting.vue' /* webpackChunkName: "pages/vendor-dashboard/setting" */))
const _164cfc3e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _fed9b212 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _8370af28 = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))

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
    component: _785bf107,
    name: "404"
  }, {
    path: "/about-us",
    component: _2067399f,
    name: "about-us"
  }, {
    path: "/blog",
    component: _fb6c6f82,
    name: "blog"
  }, {
    path: "/cart",
    component: _572c0201,
    name: "cart"
  }, {
    path: "/coming-soon",
    component: _491c2e16,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _097de8d4,
    name: "contact-us"
  }, {
    path: "/electronics",
    component: _dbbd7274,
    name: "electronics"
  }, {
    path: "/faq",
    component: _244c93e5,
    name: "faq"
  }, {
    path: "/furniture",
    component: _acc2e4fe,
    name: "furniture"
  }, {
    path: "/grocery",
    component: _3bee6a48,
    name: "grocery"
  }, {
    path: "/login",
    component: _82fdb610,
    name: "login"
  }, {
    path: "/lookbook",
    component: _f65b3c6e,
    name: "lookbook"
  }, {
    path: "/my-account",
    component: _c2038556,
    name: "my-account"
  }, {
    path: "/pharmacy",
    component: _7cd88218,
    name: "pharmacy"
  }, {
    path: "/privacy-policy",
    component: _72cac898,
    name: "privacy-policy"
  }, {
    path: "/register",
    component: _16039e38,
    name: "register"
  }, {
    path: "/shop",
    component: _37a3806b,
    name: "shop"
  }, {
    path: "/SignalRMessage",
    component: _bdf106c4,
    name: "SignalRMessage"
  }, {
    path: "/vendor-dashboard",
    component: _9f36b21c,
    name: "vendor-dashboard"
  }, {
    path: "/blog/blog-2",
    component: _50f9e0aa,
    name: "blog-blog-2"
  }, {
    path: "/blog/blog-3",
    component: _5107f82b,
    name: "blog-blog-3"
  }, {
    path: "/blog/blog-single-2",
    component: _37d10db6,
    name: "blog-blog-single-2"
  }, {
    path: "/cart/cart-2",
    component: _d5e7d7b4,
    name: "cart-cart-2"
  }, {
    path: "/cart/cart-3",
    component: _d5cba8b2,
    name: "cart-cart-3"
  }, {
    path: "/cart/cart-4",
    component: _d5af79b0,
    name: "cart-cart-4"
  }, {
    path: "/cart/empty-cart",
    component: _1716edfe,
    name: "cart-empty-cart"
  }, {
    path: "/contact-us/contact-us-2",
    component: _ee13a388,
    name: "contact-us-contact-us-2"
  }, {
    path: "/my-account/account-details",
    component: _32e82565,
    name: "my-account-account-details"
  }, {
    path: "/my-account/account-info-edit",
    component: _1af26ea8,
    name: "my-account-account-info-edit"
  }, {
    path: "/my-account/addresses",
    component: _3c703aa5,
    name: "my-account-addresses"
  }, {
    path: "/my-account/checkout-1",
    component: _0fb1f212,
    name: "my-account-checkout-1"
  }, {
    path: "/my-account/checkout-2",
    component: _0f95c310,
    name: "my-account-checkout-2"
  }, {
    path: "/my-account/compare",
    component: _a29dfdb0,
    name: "my-account-compare"
  }, {
    path: "/my-account/downloads",
    component: _4ce43b6e,
    name: "my-account-downloads"
  }, {
    path: "/my-account/order-tracking",
    component: _35b90763,
    name: "my-account-order-tracking"
  }, {
    path: "/my-account/orders",
    component: _45025d72,
    name: "my-account-orders"
  }, {
    path: "/my-account/wishlist",
    component: _11bb7712,
    name: "my-account-wishlist"
  }, {
    path: "/product/product-single-2",
    component: _1a006d6e,
    name: "product-product-single-2"
  }, {
    path: "/product/product-single-3",
    component: _19e43e6c,
    name: "product-product-single-3"
  }, {
    path: "/shop/shop-2",
    component: _0abe0a52,
    name: "shop-shop-2"
  }, {
    path: "/shop/shop-3",
    component: _0acc21d3,
    name: "shop-shop-3"
  }, {
    path: "/shop/shop-4",
    component: _0ada3954,
    name: "shop-shop-4"
  }, {
    path: "/shop/shop-5",
    component: _0ae850d5,
    name: "shop-shop-5"
  }, {
    path: "/vendor-dashboard/add-product",
    component: _17690f63,
    name: "vendor-dashboard-add-product"
  }, {
    path: "/vendor-dashboard/order",
    component: _6da13124,
    name: "vendor-dashboard-order"
  }, {
    path: "/vendor-dashboard/product",
    component: _80621ae2,
    name: "vendor-dashboard-product"
  }, {
    path: "/vendor-dashboard/profile",
    component: _234ec249,
    name: "vendor-dashboard-profile"
  }, {
    path: "/vendor-dashboard/setting",
    component: _116e9b70,
    name: "vendor-dashboard-setting"
  }, {
    path: "/",
    component: _164cfc3e,
    name: "index"
  }, {
    path: "/blog/:slug",
    component: _fed9b212,
    name: "blog-slug"
  }, {
    path: "/product/:id?",
    component: _8370af28,
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
