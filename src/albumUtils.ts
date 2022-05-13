export const Utils = {
  uuid() {
    /* jshint bitwise:false */
    let i, random;
    let uuid = '';

    for (i = 0; i < 32; i++) {
      random = (Math.random() * 16) | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      }
      uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(
        16,
      );
    }

    return uuid;
  },

  pluralize(count:any, word:any) {
    return count === 1 ? word : `${word}s`;
  },

  store(namespace:string, data:any) {
    // 兼具读写功能
    if (data) {
      return localStorage.setItem(namespace, JSON.stringify(data));
    }

    const store = localStorage.getItem(namespace);
    return (store && JSON.parse(store)) || [];
  },

};