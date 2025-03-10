import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import api from "../service/api";
import Swal from 'sweetalert2'

interface User {
  id: number;
  fullName: string;
  email: string;
  role: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    fullName: string,
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [loading, setLoading] = useState(true);

  // Load user when token exists
  useEffect(() => {
    const loadUser = async () => {
      try {
        if (token) {
          const response = await api.get("/auth/profile");
          setUser(response.data.user);
        }
      } catch (error) {
        console.error("Failed to load user", error);
        logout();
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [token]);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      const { token } = response.data;
      localStorage.setItem("token", token);
      setToken(token);
    } catch (error: any) {
      console.error("Login failed", error.response.data.error);
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: error.response.data.error,
      });
      throw error;
    }
  };

  // Register function
  const register = async (
    fullName: string,
    email: string,
    password: string
  ) => {
    try {
      await api.post("/auth/register", { fullName, email, password });
      Swal.fire({
        icon: "success",
        title: "Registrasi Berhasil",
        text: 'Silahkan cek email untuk verifikasi',
      });
      // await login(email, password);
    } catch (error: any) {
      console.error("Registration failed", error);
      Swal.fire({
        icon: "error",
        title: "Registrasi Gagal",
        text: error.response.data.error,
      });
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    await api.post("/auth/logout");
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
