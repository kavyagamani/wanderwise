import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getDestinationImage }
from "../services/pexelsService";

function DestinationCard({ destination }) {

  const navigate = useNavigate();

  const [image, setImage] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function loadImage() {

      const imageUrl =
        await getDestinationImage(
          destination.city
        );

      setImage(imageUrl);

      setLoading(false);
    }

    loadImage();

  }, [destination.city]);

  return (
    <div className="destination-card">

      {loading ? (
        <div className="image-loader">
          Loading...
        </div>
      ) : (
        <img
          src={image}
          alt={destination.city}
        />
      )}

      <div className="card-content">

        <h3>{destination.city}</h3>

        <p>
          {destination.country}
        </p>

        <p>
          {destination.description}
        </p>

        <button
          onClick={() =>
            navigate(
              `/destination/${destination.city}`
            )
          }
        >
          Explore →
        </button>

      </div>

    </div>
  );
}

export default DestinationCard;