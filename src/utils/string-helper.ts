export function isNumber(txt = '') {
  return /^\d+$/gim.test(txt);
}

export function isLink(txt = '') {
  return /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim.test(
    txt,
  );
}

export function deepTrim(obj: any) {
  if (typeof obj === 'string') {
    return obj.trim();
  } else if (typeof obj === 'object') {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        obj[key] = deepTrim(obj[key]);
      }
    }
  }
  return obj;
}
