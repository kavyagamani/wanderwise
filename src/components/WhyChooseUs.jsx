import "../styles/whychoose.css";

function WhyChooseUs() {
  return (
    <section className="why">
      <h2>Why Choose WanderWise?</h2>

      <div className="why-grid">

        <div className="why-card">
          <div className="why-icon">🌍</div>

          <h3>Explore Destinations</h3>

          <p>
            Discover amazing places around the world
            with detailed destination information.
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon">☀️</div>

          <h3>Live Weather</h3>

          <p>
            Check real-time weather conditions before
            planning your trip.
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon">🤖</div>

          <h3>AI Travel Planner</h3>

          <p>
            Generate personalized itineraries and
            get travel recommendations instantly.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;