import { useLanguage } from "../context/LanguageContext";
import {
  CloudSun,
  Droplets,
  Wind,
  Umbrella,
  ThermometerSun,
  Sunrise,
  Sunset,
} from "lucide-react";

function Weather() {
  const { t } = useLanguage();

  return (
    <div className="weather-page">

      {/* HEADER */}
      <section className="weather-header">
        <div>
          <span className="page-label">
            {t("dashboard", "weather")}
          </span>

          <h1>{t("dashboard", "weather")}</h1>

          <p>
            {t("dashboard", "todaysFarmConditions")}
          </p>
        </div>

        <div className="weather-location">
          <span>●</span>
          {t("dashboard", "farmLocation")}
        </div>
      </section>

      {/* CURRENT WEATHER */}
      <section className="current-weather-card">

        <div className="current-weather-main">

          <div className="weather-icon-large">
            <CloudSun size={58} />
          </div>

          <div>
            <span className="weather-label">
              {t("dashboard", "currentWeather")}
            </span>

            <div className="big-temperature">
              28<span>°C</span>
            </div>

            <p>
              {t("dashboard", "partlyCloudy")}
            </p>
          </div>

        </div>

        <div className="weather-feels">
          <span>
            {t("dashboard", "feelsLike")}
          </span>

          <strong>29°C</strong>
        </div>

      </section>

      {/* WEATHER STATS */}
      <section className="weather-stats-grid">

        <div className="weather-stat-card">
          <div className="weather-stat-icon">
            <Droplets size={22} />
          </div>

          <span>
            {t("dashboard", "humidity")}
          </span>

          <strong>68%</strong>

          <small>
            {t("dashboard", "good")}
          </small>
        </div>

        <div className="weather-stat-card">
          <div className="weather-stat-icon">
            <Wind size={22} />
          </div>

          <span>
            {t("dashboard", "wind")}
          </span>

          <strong>12 km/h</strong>

          <small>
            {t("dashboard", "moderate")}
          </small>
        </div>

        <div className="weather-stat-card">
          <div className="weather-stat-icon">
            <Umbrella size={22} />
          </div>

          <span>
            {t("dashboard", "rainChance")}
          </span>

          <strong>20%</strong>

          <small>
            {t("dashboard", "lowChance")}
          </small>
        </div>

        <div className="weather-stat-card">
          <div className="weather-stat-icon">
            <ThermometerSun size={22} />
          </div>

          <span>
            {t("dashboard", "temperatureLabel")}
          </span>

          <strong>28°C</strong>

          <small>
            {t("dashboard", "normal")}
          </small>
        </div>

      </section>

      {/* TODAY'S FORECAST */}
      <section className="forecast-section">

        <div className="section-heading">

          <div>
            <h2>
              {t("dashboard", "todaysForecast")}
            </h2>

            <p>
              {t("dashboard", "hourlyWeather")}
            </p>
          </div>

          <CloudSun size={25} />

        </div>

        <div className="forecast-grid">

          <div className="forecast-item">
            <span>10 AM</span>
            <CloudSun size={27} />
            <strong>27°</strong>
          </div>

          <div className="forecast-item">
            <span>12 PM</span>
            <CloudSun size={27} />
            <strong>29°</strong>
          </div>

          <div className="forecast-item active">
            <span>2 PM</span>
            <CloudSun size={27} />
            <strong>30°</strong>
          </div>

          <div className="forecast-item">
            <span>4 PM</span>
            <CloudSun size={27} />
            <strong>29°</strong>
          </div>

          <div className="forecast-item">
            <span>6 PM</span>
            <CloudSun size={27} />
            <strong>26°</strong>
          </div>

        </div>

      </section>

      {/* SUN INFORMATION */}
      <section className="sun-section">

        <div className="sun-card">

          <div className="sun-icon">
            <Sunrise size={25} />
          </div>

          <div>
            <span>
              {t("dashboard", "sunrise")}
            </span>

            <strong>6:02 AM</strong>
          </div>

        </div>

        <div className="sun-card">

          <div className="sun-icon">
            <Sunset size={25} />
          </div>

          <div>
            <span>
              {t("dashboard", "sunset")}
            </span>

            <strong>6:08 PM</strong>
          </div>

        </div>

      </section>

      {/* FARM ADVISORY */}
      <section className="weather-advisory">

        <div className="advisory-icon">
          <SproutIcon />
        </div>

        <div>
          <h2>
            {t("dashboard", "farmWeatherAdvice")}
          </h2>

          <p>
            {t("dashboard", "farmWeatherAdviceText")}
          </p>
        </div>

      </section>

    </div>
  );
}

function SproutIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 20h10" />
      <path d="M12 20V9" />
      <path d="M12 13c-4 0-6-2.5-6-6 4 0 6 2.5 6 6Z" />
      <path d="M12 11c0-4 2-6 6-6 0 4-2 6-6 6Z" />
    </svg>
  );
}

export default Weather;