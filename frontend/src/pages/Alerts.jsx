import { TriangleAlert, CheckCircle2, Droplets, ThermometerSun } from "lucide-react";

function Alerts() {
  return (
    <div className="crop-health-page">

      <section className="crop-health-header">

        <div>
          <span className="page-label">
            RISK ALERTS
          </span>

          <h1>
            Farm Risk Alerts
          </h1>

          <p>
            Monitor important conditions affecting your crops.
          </p>
        </div>

        <div className="crop-health-status">
          <CheckCircle2 size={20} />
          <span>Farm Safe</span>
        </div>

      </section>

      <section className="crop-health-summary">

        <div className="crop-health-score">

          <div className="health-score-circle">
            <span>0</span>
            <small>Alerts</small>
          </div>

          <div>
            <h2>No Critical Alerts</h2>
            <p>
              Your farm is currently being monitored.
            </p>
          </div>

        </div>

        <div className="health-stat">
          <Droplets size={23} />
          <div>
            <span>Soil Moisture</span>
            <strong>Good</strong>
          </div>
        </div>

        <div className="health-stat">
          <ThermometerSun size={23} />
          <div>
            <span>Temperature</span>
            <strong>28°C</strong>
          </div>
        </div>

      </section>

      <section className="crop-area-section">

        <div className="section-heading">

          <div>
            <h2>Risk Monitoring</h2>
            <p>
              Current farm conditions and alerts.
            </p>
          </div>

          <TriangleAlert size={25} />

        </div>

        <div className="crop-area-grid">

          <div className="crop-area-card">

            <div className="crop-area-icon">
              <CheckCircle2 size={24} />
            </div>

            <div className="crop-area-info">
              <h3>Crop Health</h3>
              <p>Crop condition is healthy.</p>
            </div>

            <strong>Good</strong>

          </div>

          <div className="crop-area-card">

            <div className="crop-area-icon">
              <CheckCircle2 size={24} />
            </div>

            <div className="crop-area-info">
              <h3>Weather Risk</h3>
              <p>No immediate weather risk.</p>
            </div>

            <strong>Low</strong>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Alerts;