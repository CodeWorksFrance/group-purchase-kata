import { acceptHMRUpdate, defineStore } from "pinia";

export const useOrderStore = defineStore({
  id: "order",
  state: () => ({
    items: [],
    shippingFee: 0,
    date: null,
  }),
  actions: {
    addItem(item) {
      this.items.push(item);
    },
    fetchBill() {
      // call backend to get the bill
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useOrderStore, import.meta.hot));
}
