export function addParams(url = '?', query = {}) {
  url += '?';
  for (const key in query) {
    const element = query[key];
    console.log(element);
    if (query[key]) {
      for (const q in element) {
        url += `${q}=${(element[q])}&`;
      }
    }
  }
  return url;
}
