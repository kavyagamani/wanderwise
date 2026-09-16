const API_KEY =
  import.meta.env.VITE_PEXELS_API_KEY;

export async function getDestinationImage(city) {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${city}&per_page=1`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );

    const data = await response.json();

    return data.photos[0]?.src?.large;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getPlaceImage(placeName) {

  try {

    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${placeName}&per_page=1`,
      {
        headers: {
          Authorization:
            import.meta.env.VITE_PEXELS_API_KEY,
        },
      }
    );

    const data = await response.json();

    return data.photos[0]?.src?.large;

  } catch (error) {

    console.error(error);

    return null;
  }
}