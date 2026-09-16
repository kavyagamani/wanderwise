import { useState } from "react";
import itineraries from "../data/itineraries";

function ItineraryPlanner({ city }) {
  const [showPlan, setShowPlan] = useState(false);

  const plan = itineraries[city];

  return (
    <section className="itinerary-section">

      <h2>✈️ Plan Your Trip To {city}</h2>

      <button
        className="generate-btn"
        onClick={() => setShowPlan(true)}
      >
        Generate Itinerary
      </button>

      {showPlan && plan ? (
        <div className="itinerary-container">

          {plan.map((day) => (
            <div
              key={day.day}
              className="day-card"
            >
              <h3>Day {day.day}</h3>

              <h4>{day.title}</h4>

              <ul>
                {day.activities.map((activity, index) => (
                  <li key={index}>
                    {activity}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      ) : (
        showPlan && (
          <p>No itinerary available for {city}</p>
        )
      )}

    </section>
  );
}

export default ItineraryPlanner;