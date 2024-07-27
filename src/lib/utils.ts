import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function getCookie(name: string): string | null {
  const cookieString = document.cookie;
  const cookies = cookieString.split('; ');
  console.log(cookies)

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      // JSON.parse(cookieValue)
      return decodeURIComponent(cookieValue);
      // return cookieValue;
    }
  }

  return null; // Cookie not found
}

export function setCookie(data:string, values:string, days:number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${data}=${values}; expires=${expires.toUTCString()}; path=/`;
}