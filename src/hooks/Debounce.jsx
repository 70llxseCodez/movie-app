export function debounce(fn, ms) {
  let timer;
  return (...arg) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...arg), ms);
  };
}
