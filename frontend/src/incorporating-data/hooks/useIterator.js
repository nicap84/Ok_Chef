// custom hook to iterate through an array of data
import { useState, useCallback, useMemo } from "react";

export default function useIterator(items = [], initialIndex = 0) {
  const [i, setIndex] = useState(initialIndex);

  const prev = useCallback(() => {
    if (i === 0) {
      return setIndex(items.length - 1);
    }
    setIndex(i - 1);
  }, [i]);

  const next = useCallback(() => {
    if (i === items.length - 1) {
      return setIndex(0);
    }
    setIndex(i + 1);
  }, [i]);

  const item = useMemo(() => items[i], [i]);

  return [item || items[0], next, prev];
}
