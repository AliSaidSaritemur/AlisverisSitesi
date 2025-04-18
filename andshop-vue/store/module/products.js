import products from '../../data/products'

const state = {
    productslist: products.data,
    products: [],
    shuffleproducts: products.data,
    wishlist: [],
    compare: [],
    searchProduct: [],
    productById: null,
    
}


const getters = {

    getCompletedProducts: (state) => {
        return state.products; 
    },
    getcollectionProduct: (state) => {
        return state.products; 
    },
    getProductById: (state) => {
        return state.productById;  
    },
    wishlistItems: (state) => state.wishlist,
    compareItems: (state) => state.compare
};


// mutations 
const mutations = {
    addToWishlist: async (state, payload) => {
       await  actions.fetchProductById({ commit: (mutation, data) => mutations[mutation](state, data) },payload.id);
        const product = state.productById;
        const wishlistItems = state.wishlist.find( item => item.id === payload.id )
        if (wishlistItems) {
        } else {

            state.wishlist.push({
                ...product
            })
        }
    },
    removeWishlistItem: ( state, payload ) => {
        const index = state.wishlist.indexOf(payload)
        state.wishlist.splice(index, 1)
    },
    addToCompare: (state, payload) => {
        console.log("payload", payload)
        const product = state.products.find(item => item.id === payload.id)
        const compareItems = state.compare.find(item => item.id === payload.id)
        if (compareItems) {
        } else {
            state.compare.push({
                ...product
            })
        }
    },
    removeCompareItem: (state, payload) => {
        const index = state.compare.indexOf(payload)
        state.compare.splice(index, 1)
    },
    searchProduct: (state, payload) => {
        payload = payload.toLowerCase()
        state.searchProduct = []
        if (payload.length) {
            state.products.filter((product) => {
                if (product.title.toLowerCase().includes(payload)) {
                    state.searchProduct.push(product)
                }
            })
        }
    },
    shuffleProduct: (state, payload) => {
        state.shuffleproducts = payload
    },
    getallProduct: (state, payload) => {
        state.shuffleproducts = products.data
    },
    setProducts(state, products) {
        state.products = products;
      },
      setProductById: (state, product) => {

        state.productById = product; // Gelen ürünü state'e set et
    },
}

// actions 
const actions = {
    fetchProducts({ commit }) {
        return fetch("https://localhost:7107/products") // <- return ekledik!
          .then((response) => response.json())
          .then((data) => {
            if (data.isSuccess && Array.isArray(data.result)) {
              console.log("Fetching products...", data.result);
              commit("setProducts", data.result);
              return data.result; // İsteğe bağlı: Veriyi döndür
            } else {
              throw new Error("Veri çekilemedi veya result dizisi bulunamadı");
            }
          })
          .catch((error) => {
            console.error("Ürünler alınırken hata oluştu:", error);
            throw error; // Hata yayılsın
          });
      },
      fetchProductById({ commit }, id) {
        console.log("Fetching product by ID...", id);
        return fetch(`https://localhost:7107/products/${id}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.isSuccess && data.result) {
              console.log("Fetching product by ID...", data.result);
              commit("setProductById", data.result); 
              return data.result; 
            } else {
              throw new Error("Veri çekilemedi veya ürün bulunamadı");
            }
          })
          .catch((error) => {
            console.error("Ürün alınırken hata oluştu:", error);
            throw error; 
          });
      },
    addToWishlist: (context, payload) => {
        context.commit( 'addToWishlist', payload)
    },
    removeWishlistItem: ( context, payload ) => {
        context.commit( 'removeWishlistItem', payload )
    },
    addToCompare: (context, payload) => {
        context.commit('addToCompare', payload)
    },
    removeCompareItem: (context, payload) => {
        context.commit('removeCompareItem', payload)
    },
    searchProduct: (context, payload) => {
        context.commit('searchProduct', payload)
    },
    shuffleProduct: (context, payload) => {
        context.commit('shuffleProduct', payload)
    },
    getallProduct: (context) => {
        context.commit('getallProduct')
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}