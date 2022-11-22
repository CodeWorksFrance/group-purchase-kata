import { acceptHMRUpdate, defineStore } from "pinia";
import router from "../router";
import axiosInstance from "../services/axiosWrapper";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")),
    returnUrl: null,
  }),
  actions: {
    async login(username, password) {
      const user = await axiosInstance.post(`/auth/login`, {
        username,
        password,
      });

      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));
      await router.push(this.returnUrl || "/");
    },
    async logout() {
      this.user = null;
      localStorage.removeItem("user");
      await router.push("/login");
    },
    isLogged() {
      return !!this.user;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
