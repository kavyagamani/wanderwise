import "../styles/aisection.css";

function AISection() {
  return (
    <section className="ai-section">

      <h2>AI Travel Assistant</h2>

      <p>
        Get destination recommendations,
        travel advice, and personalized itineraries
        powered by AI.
      </p>

      <div className="ai-features">

        <div className="ai-card">
          <h3>Ask Questions</h3>
          <p>
            Learn about destinations,
            weather, and attractions.
          </p>
        </div>

        <div className="ai-card">
          <h3>Travel Tips</h3>
          <p>
            Get smart recommendations
            before your trip.
          </p>
        </div>

        <div className="ai-card">
          <h3>Generate Itineraries</h3>
          <p>
            Create day-by-day travel plans
            instantly.
          </p>
        </div>

      </div>

    </section>
  );
}

export default AISection;