import { Satellite, CloudSun, Leaf } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/agrosentinel-logo.png";
import background from "../assets/agro-background.png";

function Splash({ onGetStarted }) {
  const { language, toggleLanguage } = useLanguage();

  const isTamil = language === "ta";

  return (
    <div
  className="splash-page"
  style={{ backgroundImage: `url(${background})` }}
>
      <div className="splash-content">

        {/* Language Switch */}
        <div className="splash-language">
          <button
            className={!isTamil ? "active-language" : ""}
            onClick={() => isTamil && toggleLanguage()}
          >
            English
          </button>

          <span>|</span>

          <button
            className={isTamil ? "active-language" : ""}
            onClick={() => !isTamil && toggleLanguage()}
          >
            தமிழ்
          </button>
        </div>

        {/* Logo */}
        <div className="brand-logo">
          <img
            src={logo}
            alt="AgroSentinel AI"
          />
        </div>

        {/* App Name */}
        <h1>AgroSentinel AI</h1>

        {/* Tamil / English Heading */}
        {isTamil ? (
          <h2>
            உங்கள் பயிர்களுக்கு
            <br />
            நவீன பாதுகாப்பு
          </h2>
        ) : (
          <h2>
            Smart Protection
            <br />
            for Your Crops
          </h2>
        )}

        {/* Tagline */}
        <p className="tagline">
          {isTamil
            ? "நவீன விவசாயம் • ஆரோக்கியமான பயிர்கள்"
            : "Smarter Farms • Healthier Crops"}
        </p>

        {/* Features */}
        <div className="features">

          <div>
            <Satellite size={30} />
            <span>
              {isTamil ? "செயற்கைக்கோள்" : "Satellite"}
            </span>
          </div>

          <div>
            <CloudSun size={30} />
            <span>
              {isTamil ? "வானிலை" : "Weather"}
            </span>
          </div>

          <div>
            <Leaf size={30} />
            <span>
              {isTamil ? "AI பயிர் பராமரிப்பு" : "AI Crop Care"}
            </span>
          </div>

        </div>

        {/* Get Started */}
        <button
          className="start-button"
          onClick={onGetStarted}
        >
          {isTamil ? "தொடங்குங்கள்" : "Get Started"}
        </button>

        {/* Login */}
        <button
          className="login-button"
          onClick={onGetStarted}
        >
          {isTamil ? "உள்நுழைய / Login" : "Login / பதிவு"}
        </button>

      </div>
    </div>
  );
}

export default Splash;