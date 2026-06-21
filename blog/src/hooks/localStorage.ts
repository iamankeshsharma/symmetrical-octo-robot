import { useEffect, useState } from "react";

export default function useStorage<K extends string, V>(
  key: K,
  value?: V,
): [string, (x: V) => void] {
  const [currentValue, setValue] = useState(value);

  useEffect(() => {
    if (window !== undefined) {
      const storage = window.localStorage;
      if (value === undefined) {
        const val = storage.getItem(key as string) as V;
        if(val !== null)
            setValue(val);
      }
      storage.setItem(key as string, currentValue as string);
    }
  }, [currentValue]);

  const setItem = (x: V) => {
    if (currentValue !== x) setValue(x);
  };

  return [currentValue as string, setItem];
}
