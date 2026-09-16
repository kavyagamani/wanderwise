import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DestinationCard from "../components/DestinationCard";

import destinations from "../data/destinations";

import "../styles/destinations.css";

function Destinations() {

  const [search, setSearch] =
    useState("");

  const [continent, setContinent] =
    useState("All");

  const filteredDestinations =
    destinations.filter((destination) => {

      const matchesSearch =
        destination.city
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesFilter =
        continent === "All"
          ? true
          : destination.continent ===
            continent;

      return (
        matchesSearch &&
        matchesFilter
      );
    });

  return (
    <>
      <Navbar />

      <div className="destinations-page">

        <div className="page-header">

          <h1>
            Explore Destinations
          </h1>

          <p>
            Discover beautiful places
            around the world.
          </p>

        </div>

        <div className="controls">

          <input
            type="text"
            placeholder="Search destination..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

          <select
            value={continent}
            onChange={(e) =>
              setContinent(
                e.target.value
              )
            }
          >
            <option value="All">
              All Regions
            </option>

            <option value="Europe">
              Europe
            </option>

            <option value="Asia">
              Asia
            </option>

            <option value="Middle East">
              Middle East
            </option>

          </select>

        </div>

        <div className="destinations-grid">

          {filteredDestinations.map(
            (destination) => (
              <DestinationCard
                key={
                  destination.id
                }
                destination={
                  destination
                }
              />
            )
          )}

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Destinations;