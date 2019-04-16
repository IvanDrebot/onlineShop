export function addParams(url = '?', query = {}) {
  url += '?';
  for (const key in query) {
    if (query[key]) {
      if (key === 'category' || key === 'producer') {
        const arrOfCat = query[key].split(`"`);
        url += `${key}=${arrOfCat[0]}&`;
      } else {
        url += `${key}=${(query[key])}&`;
      }
    }
  }
  return url;
}
