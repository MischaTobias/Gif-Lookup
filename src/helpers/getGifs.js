export const getGifs = async (category) => {
  const limit = import.meta.env.VITE_GIPHY_LIMIT;
  const giphyUrl = import.meta.env.VITE_GIPHY_URL;
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

  const url = `${giphyUrl}?api_key=${apiKey}&q=${category}&limit=${limit}`;

  const response = await fetch(url)

  const { data } = await response.json();

  const gifs = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));

  return gifs;
}