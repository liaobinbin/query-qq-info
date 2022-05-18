/**
 * @description easy debounce
 * @param {function} fn
 * @param {number} wait
 * */

export const debounce = (fn: (...arg: any[]) => void, wait = 50) => {
  let timer: any = null;
  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, wait);
  };
};

export const isValidQQ = (qq: string): boolean => {
  return /^[1-9]\d{4,11}$/.test(qq);
};
