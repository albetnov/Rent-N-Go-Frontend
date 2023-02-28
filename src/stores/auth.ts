import { create } from "zustand";
import { login as apiLogin } from "../services/apis/auth";

interface TokenInterface {
  accessToken: string;
  refreshToken: string;
  accessTokenExpr: number;
  refreshTokenExpr: number;
}

interface AuthStore {
  isLoggedIn: boolean;
  error: string | false | null;
  login(email: string, password: string): void;
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
    set({ error: null });
    const result = await apiLogin({ email, password });
    if (result) {
      localStorage.setItem("tokens", JSON.stringify(result));
      set({ isLoggedIn: true, error: false });
      return;
    }

    set({ error: "Invalid credentials" });
  },

  logout() {
    localStorage.removeItem("tokens");
    set({ isLoggedIn: false });
  },
}));

export default useAuthStore;
