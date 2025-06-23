export function saveToLocalStorage<T>(key: string, data: T) {
  if (typeof window === "undefined") return;
  if (data !== undefined) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

export function loadFromLocalStorage<T>(key: string): T | null {
  if (typeof window === "undefined") return null;

  const value = localStorage.getItem(key);
  if (!value || value === "undefined") return null;
  return JSON.parse(value) as T;
}
