const API_KEY =
  import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getWeather(city) {
  try {

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();

    return data;

  } catch (error) {

    console.log(error);

    return null;
  }
}