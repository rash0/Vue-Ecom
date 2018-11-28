import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoPage:[],
    cartItems:[],
    items: [
      {
        id:0,
        img: require('@/assets/1.jpg'),
        title: 'sofa 243',
        price: 156,
        col6: 'col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3',
        color: 'yellow',
        type: 'sofa'
      }, {
        id:1,
        img: require('@/assets/2.jpg'),
        title: 'lamp 54',
        price: 756,
        col6: 'col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3',
        color: 'yellow',
        type: 'lamp'
      }, {
        id:2,
        img: require('@/assets/3.jpg'),
        title: 'fotal 34',
        price: 362,
        col6: 'col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3',
        color: 'yellow',
        type: 'chair'
      }, {
        id:3,
        img: require('@/assets/4.jpg'),
        title: 'fotal324',
        price: 505,
        col6: 'col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3',
        color: 'red',
        type: 'chair'
      }, {
        id:4,
        img: require('@/assets/5.jpg'),
        title: 'sofa-1',
        price: 243,
        col6: 'col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3',
        color: 'white',
        type: 'sofa'
      }, {
        id:5,
        img: require('@/assets/6.jpg'),
        title: 'Fotal-2',
        price: 44,
        col6: 'col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3',
        color: 'white',
        type: 'chair'
      }, {
        id:6,
        img: require('@/assets/7.jpg'),
        title: 'Fotal-34',
        price: 505,
        col6: 'col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3',
        color: 'blue',
        type: 'chair'
      }, {
        id:7,
        img: require('@/assets/8.jpg'),
        title: 'foto-4364',
        price: 432,
        col6: 'col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3',
        color: 'red',
        type: 'table'
      },
      {
        id:8,
        img: require('@/assets/9.jpg'),
        title: 'foto-44',
        price: 390,
        col6: 'col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3',
        color: 'white',
        type: 'table'
      },
      {
        id:9,
        img: require('@/assets/10.jpg'),
        title: 'foto-34',
        price: 756,
        col6: 'col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3',
        color: 'yellow',
        type: 'chair'
      },
      {
        id:10,
        img: require('@/assets/11.jpg'),
        title: 'foto-23',
        price: 44,
        col6: 'col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3',
        color: 'white',
        type: 'chair'
      },
      {
        id:11,
        img: require('@/assets/12.jpg'),
        title: 'foto-4234',
        price: 156,
        col6: 'col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3',
        color: 'red',
        type: 'lamp'
      },
      {
        id:12,
        img: require('@/assets/13.jpg'),
        title: 'foto-4234',
        price: 756,
        col6: 'col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3',
        color: 'blue',
        type: 'lamp'
      },
      {
        id:13,
        img: require('@/assets/14.jpg'),
        title: 'foto-4234',
        price: 756,
        col6: 'col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3',
        color: 'white',
        type: 'chair'
      },
      {
        id:14,
        img: require('@/assets/table-1.jpg'),
        title: 'table-32',
        price: 756,
        col6: 'col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3',
        color: 'white',
        type: 'table'
      }
    ]
  },
  plugins: [createPersistedState()],
  getters: {
    itemsNumber(state){
      return state.cartItems.length
    },
    totalPrice(state) {
      if (state.cartItems.length != 0){
       return state.cartItems.reduce((a, b) => {
         return (b.price == null ) ? a : a + b.price
       }, 0)
      }
    },
    infoLength(state) {
      if(state.infoPage.length > 0) {
        return state.infoPage.splice(0, 1)
      }
    }
  },
  mutations: {
    inCart(state, n) {
      return state.cartItems.push(n)
    },
    outCart(state, n) {
      let index = state.cartItems.findIndex(x => x.id === n)
      return state.cartItems.splice(index, 1)
    },
    addtoInfo(state, n) {
       return state.infoPage.push(n)
    }
  },
})
