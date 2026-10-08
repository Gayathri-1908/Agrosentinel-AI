import { useLanguage } from "../context/LanguageContext";
import {
  Satellite as SatelliteIcon,
  MapPin,
  Sprout,
  TriangleAlert,
  Layers,
  Maximize,
  Leaf,
} from "lucide-react";

function Satellite() {
  const { t } = useLanguage();

  return (
    <div className="satellite-page">

      {/* HEADER */}
      <section className="satellite-header">
        <div>
          <span className="page-label">
            {t("dashboard", "satellite")}
          </span>

          <h1>
            {t("dashboard", "satelliteMonitoring")}
          </h1>

          <p>
            {t("dashboard", "satelliteText")}
          </p>
        </div>

        <div className="satellite-status">
          <span></span>
          {t("dashboard", "connected")}
        </div>
      </section>

      {/* FARM MAP */}
      <section className="satellite-map-card">

        <div className="map-toolbar">

          <div className="map-title">
            <SatelliteIcon size={21} />

            <div>
              <h2>
                {t("dashboard", "satelliteView")}
              </h2>

              <p>
                {t("dashboard", "farmLocation")}
              </p>
            </div>
          </div>

          <div className="map-actions">

            <button>
              <Layers size={18} />
              <span>
                {t("dashboard", "layers")}
              </span>
            </button>

            <button>
              <Maximize size={18} />
            </button>

          </div>

        </div>

        <div className="farm-map">

          <div className="map-grid"></div>

          <div className="farm-field field-one">
            <Leaf size={25} />
          </div>

          <div className="farm-field field-two">
            <Sprout size={24} />
          </div>

          <div className="farm-field field-three">
            <Leaf size={24} />
          </div>

          <div className="farm-location-marker">
            <MapPin size={27} />
          </div>

          <div className="map-label label-one">
            Healthy
          </div>

          <div className="map-label label-two">
            Monitor
          </div>

          <div className="map-label label-three">
            Healthy
          </div>

          <div className="map-location">
            <MapPin size={15} />
            <span>
              {t("dashboard", "farmLocation")}
            </span>
          </div>

        </div>

      </section>

      {/* FARM SUMMARY */}
      <section className="satellite-summary">

        <div className="satellite-stat-card">

          <div className="satellite-stat-icon">
            <Sprout size={22} />
          </div>

          <div>
            <span>
              {t("dashboard", "healthyArea")}
            </span>

            <strong>86%</strong>

            <small>
              {t("dashboard", "healthy")}
            </small>
          </div>

        </div>

        <div className="satellite-stat-card">

          <div className="satellite-stat-icon warning">
            <TriangleAlert size={22} />
          </div>

          <div>
            <span>
              {t("dashboard", "needsAttention")}
            </span>

            <strong>14%</strong>

            <small>
              {t("dashboard", "monitor")}
            </small>
          </div>

        </div>

        <div className="satellite-stat-card">

          <div className="satellite-stat-icon">
            <Leaf size={22} />
          </div>

          <div>
            <span>
              {t("dashboard", "cropGrowth")}
            </span>

            <strong>Good</strong>

            <small>
              +12%
            </small>
          </div>

        </div>

      </section>

      {/* VEGETATION HEALTH */}
      <section className="vegetation-section">

        <div className="section-heading">

          <div>
            <h2>
              {t("dashboard", "vegetationHealth")}
            </h2>

            <p>
              {t("dashboard", "vegetationText")}
            </p>
          </div>

          <Leaf size={25} />

        </div>

        <div className="vegetation-bars">

          <div className="vegetation-row">
            <div>
              <span>
                Healthy
              </span>
              <strong>72%</strong>
            </div>

            <div className="vegetation-progress">
              <span style={{ width: "72%" }}></span>
            </div>
          </div>

          <div className="vegetation-row">
            <div>
              <span>
                Moderate
              </span>
              <strong>14%</strong>
            </div>

            <div className="vegetation-progress moderate">
              <span style={{ width: "14%" }}></span>
            </div>
          </div>

          <div className="vegetation-row">
            <div>
              <span>
                Needs Attention
              </span>
              <strong>14%</strong>
            </div>

            <div className="vegetation-progress attention">
              <span style={{ width: "14%" }}></span>
            </div>
          </div>

        </div>

      </section>

      {/* SATELLITE INFORMATION */}
      <section className="satellite-info-grid">

        <div className="satellite-info-card">

          <SatelliteIcon size={24} />

          <div>
            <span>
              {t("dashboard", "lastSatelliteUpdate")}
            </span>

            <strong>
              Today, 10:30 AM
            </strong>
          </div>

        </div>

        <div className="satellite-info-card">

          <MapPin size={24} />

          <div>
            <span>
              {t("dashboard", "farmArea")}
            </span>

            <strong>
              12.5 Acres
            </strong>
          </div>

        </div>

      </section>

      {/* ADVISORY */}
      <section className="satellite-advisory">

        <div className="advisory-icon">
          <Leaf size={24} />
        </div>

        <div>
          <h2>
            {t("dashboard", "satelliteAdvice")}
          </h2>

          <p>
            {t("dashboard", "satelliteAdviceText")}
          </p>
        </div>

      </section>

    </div>
  );
}

export default Satellite;