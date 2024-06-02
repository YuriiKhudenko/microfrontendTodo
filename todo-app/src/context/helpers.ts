export const toggleProperty = <T extends { id: number }>(
  items: T[],
  id: number,
  property: keyof T
): T[] => {
  return items.map((item) =>
    item.id === id ? { ...item, [property]: !item[property] } : item
  );
};

export const saveToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  const storedValue = localStorage.getItem(key);
  if (storedValue) {
    try {
      return JSON.parse(storedValue) as T;
    } catch (error) {
      console.error("Error parsing localStorage value", error);
    }
  }
  return defaultValue;
};
