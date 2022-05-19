export const fetchGalery = (searchWord, pages) => {
  const BASEurl = 'https://pixabay.com/api/';
  //параметры запроса
  const meta = new URLSearchParams({
    key: '25142623-5ec88ba8c20545ff15079e1b4',
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: pages, //получает состояние
    per_page: 12,
  });
  const url = `${BASEurl}?${meta}`;
  return url;
};
