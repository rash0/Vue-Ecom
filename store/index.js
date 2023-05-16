import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    productInfo: {},
    cartItems: [],
    items: [
      {
        id: 0,
        img: "1.jpg",
        title: "Cabriole",
        price: 156,
        color: "yellow",
        type: "sofa",
      },
      {
        id: 1,
        img: "2.jpg",
        title: "Torchiere",
        price: 756,
        color: "yellow",
        type: "lamp",
      },
      {
        id: 2,
        img: "3.jpg",
        title: "Arm Chair",
        price: 362,
        color: "yellow",
        type: "chair",
      },
      {
        id: 3,
        img: "4.jpg",
        title: "Wing Chair",
        price: 505,
        color: "red",
        type: "chair",
      },
      {
        id: 4,
        img: "5.jpg",
        title: "Camel Back",
        price: 243,
        color: "white",
        type: "sofa",
      },
      {
        id: 5,
        img: "6.jpg",
        title: "Stool",
        price: 44,
        color: "white",
        type: "chair",
      },
      {
        id: 6,
        img: "7.jpg",
        title: "Windsor chair",
        price: 505,
        color: "blue",
        type: "chair",
      },
      {
        id: 7,
        img: "8.jpg",
        title: "C-table",
        price: 432,
        color: "red",
        type: "table",
      },
      {
        id: 8,
        img: "9.jpg",
        title: "Coffee Table",
        price: 390,
        color: "white",
        type: "table",
      },
      {
        id: 9,
        img: "10.jpg",
        title: "Desk Chair",
        price: 756,
        color: "yellow",
        type: "chair",
      },
      {
        id: 10,
        img: "11.jpg",
        title: "Garden Chair",
        price: 44,
        color: "white",
        type: "chair",
      },
      {
        id: 11,
        img: "12.jpg",
        title: "Novelty",
        price: 156,
        color: "red",
        type: "lamp",
      },
      {
        id: 12,
        img: "13.jpg",
        title: "Lava",
        price: 756,
        color: "blue",
        type: "lamp",
      },
      {
        id: 13,
        img: "14.jpg",
        title: "Deck Chair",
        price: 756,
        color: "white",
        type: "chair",
      },
      {
        id: 14,
        img: "table-1.jpg",
        title: "Accent Table",
        price: 756,
        color: "white",
        type: "table",
      },
    ],
  }),
  getters: {
    // Cart Component
    itemsNumber: (state) => state.cartItems.length,
    // TODO need to be fixed
    totalPrice: (state) => {
      if (state.cartItems.length != 0) {
        const tot = state.cartItems.reduce((a, b) => {
          console.log(a.price === null ? a : a + b.price);
        });
        return tot;
      }
    },
    // Info Component
    productDetails: (state) => {
      return (productId) => {
        return state.items.find((item) => item.id === productId);
      };
    },
    // infoLength: (state) => {
    //   if (state.infoPage.length > 0) {
    //     return state.infoPage.splice(0, 1);
    //   }
    // },
  },
  actions: {
    // Cart Component
    inCart(n) {
      return this.cartItems.push(n);
    },
    outCart(n) {
      let index = this.cartItems.findIndex((x) => x.id === n);
      return this.cartItems.splice(index, 1);
    },
    // Info Component
    addtoInfo(n) {
      const selectedProduct = this.items.find((item) => item.id === n);
      return (this.productInfo = selectedProduct);
    },
  },
});
