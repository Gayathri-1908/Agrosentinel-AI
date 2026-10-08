import { useLanguage } from "../context/LanguageContext";
import {
  Sprout,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Leaf,
} from "lucide-react";

function CropHealth() {
  const { t } = useLanguage();

  return (
    <div className="crop-health-page">

      {/* Page Header */}
      <section className="crop-health-header">
        <div>
          <span className="page-label">
            {t("dashboard", "cropHealth")}
          </span>

          <h1>
            {t("dashboard", "cropHealth")}
          </h1>

          <p>
            {t("dashboard", "currentCropHealth")}
          </p>
        </div>

        <div className="crop-health-status">
          <CheckCircle2 size={20} />
          <span>{t("dashboard", "healthy")}</span>
        </div>
      </section>

      {/* Health Summary */}
      <section className="crop-health-summary">

        <div className="crop-health-score">

          <div className="health-score-circle">
            <span>86%</span>
            <small>{t("dashboard", "healthy")}</small>
          </div>

          <div>
            <h2>
              {t("dashboard", "healthy")}
            </h2>

            <p>
              {t("dashboard", "cropDescription")}
            </p>
          </div>

        </div>

        <div className="health-stat">
          <Sprout size={23} />
          <div>
            <span>{t("dashboard", "healthyArea")}</span>
            <strong>86%</strong>
          </div>
        </div>

        <div className="health-stat warning">
          <AlertTriangle size={23} />
          <div>
            <span>{t("dashboard", "needsAttention")}</span>
            <strong>14%</strong>
          </div>
        </div>

      </section>

      {/* Crop Areas */}
      <section className="crop-area-section">

        <div className="section-heading">
          <div>
            <h2>{t("dashboard", "cropHealth")}</h2>
            <p>{t("dashboard", "conditionsText")}</p>
          </div>

          <Leaf size={25} />
        </div>

        <div className="crop-area-grid">

          <div className="crop-area-card">

            <div className="crop-area-icon">
              <Sprout size={24} />
            </div>

            <div className="crop-area-info">
              <h3>Healthy Crop Area</h3>
              <p>86% of your monitored farm</p>
            </div>

            <strong>86%</strong>

          </div>

          <div className="crop-area-card">

            <div className="crop-area-icon warning-icon">
              <AlertTriangle size={24} />
            </div>

            <div className="crop-area-info">
              <h3>Needs Attention</h3>
              <p>Some areas require monitoring</p>
            </div>

            <strong>14%</strong>

          </div>

        </div>

      </section>

      {/* Growth Trend */}
      <section className="growth-card">

        <div className="section-heading">

          <div>
            <h2>Crop Growth</h2>
            <p>Current crop growth performance</p>
          </div>

          <TrendingUp size={25} />

        </div>

        <div className="growth-content">

          <div className="growth-number">
            <strong>Good</strong>
            <span>+12% growth</span>
          </div>

          <div className="growth-bars">
            <div className="growth-bar">
              <span style={{ height: "45%" }}></span>
            </div>

            <div className="growth-bar">
              <span style={{ height: "58%" }}></span>
            </div>

            <div className="growth-bar">
              <span style={{ height: "52%" }}></span>
            </div>

            <div className="growth-bar">
              <span style={{ height: "70%" }}></span>
            </div>

            <div className="growth-bar">
              <span style={{ height: "78%" }}></span>
            </div>

            <div className="growth-bar">
              <span style={{ height: "86%" }}></span>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default CropHealth;