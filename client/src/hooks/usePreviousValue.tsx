import { useRef, useEffect } from "react";

export default function usePrevious<T>(value: T): T | null {
  const previousValue = useRef<T | null>(null);

  useEffect(
    function savePreviousValue() {
      previousValue.current = value;
    },
    [value]
  );

  return previousValue.current;
}
