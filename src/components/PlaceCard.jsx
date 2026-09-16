import { useEffect, useState } from "react";
import { getDestinationImage } from "../services/pexelsService";

function PlaceCard({ place }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    async function loadImage() {
      const img = await getDestinationImage(place.name);
      setImage(img);
    }

    loadImage();
  }, [place.name]);

  return (
    <div className="place-card">

      <img
        src={image}
        alt={place.name}
      />

      <div className="place-content">

        <h3>{place.name}</h3>

        <p>{place.description}</p>

      </div>

    </div>
  );
}

export default PlaceCard;