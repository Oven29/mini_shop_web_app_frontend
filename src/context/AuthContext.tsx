import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../utils/config";
import { checkTgData, showAlert } from "../utils/utils";

interface AuthContextType {
  token: string | null;
  isLoading: boolean;
  login: () => Promise<void>;
  logout: () => void;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider(
  props: { children: React.ReactNode }
) {
  if (!checkTgData()) {
    showAlert('Error! Please use telegram bot to enter app');
  }

  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Функция для авторизации с использованием axios
  const login = async () => {
    try {
      const response = await axios.post(`${API_URL}/user/auth`, {
        init_data_unsafe: window.Telegram.WebApp.initDataUnsafe,
        init_data: window.Telegram.WebApp.initData,
      });

      const data = response.data;
      if (data.token) {
        setToken(data.token); // Храним токен в памяти
      }
    } catch (error) {
      console.error('Auth error', error);
      showAlert('Auth error!');
    } finally {
      setIsLoading(false);
    }
  };

  // Выход (сброс токена)
  const logout = () => {
    setToken(null);
  };

  // При первом заходе отправляем запрос на сервер
  useEffect(() => {
    if (!token) login();
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, isLoading, login, logout, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};

// Хук для использования контекста
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
