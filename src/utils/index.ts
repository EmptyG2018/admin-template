export const delay = (timer = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, timer);
  });
};
