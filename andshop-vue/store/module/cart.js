import products from '../../data/products'

const state = {
  products: [],
  cart: []
}

// getters
const getters = {
  cartItems: (state) => state.cart,
  cartTotalAmount: (state) => {
    return state.cart.reduce((total, product) => {
      return total + ((product.price - (product.price * product.discount / 100)) * product.quantity);
    }, 0);
  }
}

// actions
const actions = {
  fetchProducts({ commit }) {
    return fetch("https://localhost:7107/products")
      .then(response => response.json())
      .then(data => {
        if (data.isSuccess && Array.isArray(data.result)) {
          commit("setProducts", data.result);
        } else {
          throw new Error("Veri çekilemedi veya result dizisi bulunamadı");
        }
      })
      .catch(error => console.error("Ürünler alınırken hata oluştu:", error));
  },
  fetchProductById({ commit }, id) {
    return fetch(`https://localhost:7107/products/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.isSuccess && data.result) {
          commit("addToCart", data.result);
        } else {
          throw new Error("Ürün bulunamadı");
        }
      })
      .catch(error => console.error("Ürün alınırken hata oluştu:", error));
  },
  addToCart({ commit }, payload) {
    return fetch(`https://localhost:7107/products/${payload.id}`)
      .then(response => response.json())
      .then(data => {
        if (data.isSuccess && data.result) {
          commit("addToCart", { product: data.result, quantity: payload.quantity });
        } else {
          throw new Error("Ürün bulunamadı");
        }
      })
      .catch(error => console.error("Ürün eklenirken hata oluştu:", error));
  },
  updateCartQuantity({ commit }, payload) {
    commit('updateCartQuantity', payload);
  },
  removeCartItem({ commit }, payload) {
    commit('removeCartItem', payload);
  }
}

// mutations
const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  addToCart(state, { product, quantity }) {
    const cartItem = state.cart.find(item => item.id === product.id);
    const qty = quantity ? quantity : 1;
    
    if (cartItem) {
      cartItem.quantity += qty;
    } else {
      state.cart.push({ ...product, quantity: qty });
    }
  },
  updateCartQuantity(state, payload) {
    const cartItem = state.cart.find(item => item.id === payload.product.id);
    if (cartItem) {
      cartItem.quantity = payload.quantity;
    }
  },
  removeCartItem(state, payload) {
    state.cart = state.cart.filter(item => item.id !== payload.id);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
