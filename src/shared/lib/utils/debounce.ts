export const debounce = (fn: Function, delay: number) => {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  return (...args: any) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
};
