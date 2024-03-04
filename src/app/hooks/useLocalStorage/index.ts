export const useLocalStorage = () => {
    const getItem = <T>(key: string): T => {
      const item = localStorage.getItem(key);

      return typeof item === 'string' && JSON.parse(item);
    };

    const setItem = <T>(key: string, value: T) =>
      localStorage.setItem(key, JSON.stringify(value));

    return {
      getItem,
      setItem,
    };
  };