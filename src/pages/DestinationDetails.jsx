import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import places from "../data/places";
import destinationInfo from "../data/destinationInfo";

import PlaceCard from "../components/PlaceCard";

import { getDestinationImage } from "../services/pexelsService";
import { getWeather }
from "../services/weatherService";
import "../styles/destinationDetails.css";
import ChatBot
from "../components/ChatBot";
import ItineraryPlanner
from "../components/ItineraryPlanner";

function DestinationDetails() {
  const { city } = useParams();

  const [heroImage, setHeroImage] = useState("");
  const [weather, setWeather] =
  useState(null);
useEffect(() => {

  async function loadData() {

    try {

      const image =
        await getDestinationImage(city);

      setHeroImage(image);

      const weatherData =
        await getWeather(city);

      setWeather(weatherData);

    } catch (error) {

      console.log(error);

    }

  }

  loadData();

}, [city]);

  const famousPlaces = places[city] || [];
  const destination = destinationInfo[city];

  return (
    <>
      <Navbar />

      <div className="details-page">

        <section
          className="details-hero"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="overlay">
            <h1>{city}</h1>

            <p>
              Discover amazing attractions, weather and travel tips.
            </p>
          </div>
        </section>

  {weather && (

<section className="weather-section">

  <h2>Current Weather</h2>

  <div className="weather-container">

    <div className="weather-card">

      <h3>{weather.name}</h3>

      <p>
        🌡 Temperature:
        {weather.main.temp}°C
      </p>

      <p>
        ☁ Condition:
        {weather.weather[0].main}
      </p>

      <p>
        💨 Wind:
        {weather.wind.speed} m/s
      </p>

      <p>
        💧 Humidity:
        {weather.main.humidity}%
      </p>

    </div>

  </div>

</section>

)}
<ChatBot city={city} />
<ItineraryPlanner city={city} />

        <section className="places-section">
          <div className="places-container">

            <h2>Top Places To Visit</h2>

            <div className="places-grid">
              {famousPlaces.map((place, index) => (
                <PlaceCard
                  key={index}
                  place={place}
                />
              ))}
            </div>

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
console.log(
  import.meta.env.VITE_OPENWEATHER_API_KEY
);
export default DestinationDetails;