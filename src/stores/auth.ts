import { create } from "zustand";
import { login as apiLogin } from "../services/apis/auth";

interface AuthStore {
  isLoggedIn: boolean;
  error: string | false | null;
  login(email: string, password: string): Promise<boolean>;
  logout(): void;
  clear(): void;
}

const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: localStorage.getItem("tokens") !== null,
  error: null,

  clear() {
    set({ error: null });
  },

  async login(email: string, password: string) {
    const result = await apiLogin({ email, password });
    if (result) {
      localStorage.setItem("tokens", JSON.stringify(result));
      set({ isLoggedIn: true, error: false });
      return true;
    }

    set({ error: "Invalid credentials" });
    return false;
  },

  logout() {
    localStorage.removeItem("tokens");
    set({ isLoggedIn: false, error: null });
  },
}));

export default useAuthStore;
