import "../styles/hero.css";
import video from "../assets/travel-video.mp4";

function Hero() {
  return (
    <section className="hero">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source
          src={video}
          type="video/mp4"
        />
      </video>

      <div className="overlay"></div>

      <div className="hero-content">
        <h1>Explore The World With WanderWise</h1>

        <p>
          Discover destinations, live weather,
          famous attractions and AI-powered
          travel planning.
        </p>

        <a
          href="/destinations"
          className="hero-btn"
        >
          Explore Destinations
        </a>
      </div>

    </section>
  );
}

export default Hero;