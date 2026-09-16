import "../styles/featured.css";

function FeaturedDestinations() {

  const cities = [
    "Paris",
    "Tokyo",
    "Dubai",
    "Bali"
  ];

  return (
    <section className="featured">

      <h2>Popular Destinations</h2>

      <div className="destination-grid">

        {cities.map((city) => (
          <div
            className="destination-card"
            key={city}
          >
            <h3>{city}</h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default FeaturedDestinations;