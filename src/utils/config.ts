import { Telegram } from '@twa-dev/types';

declare global {
  interface Window {
    Telegram: Telegram;
  }
}

export const API_URL: string = import.meta.env.VITE_API_URL;
