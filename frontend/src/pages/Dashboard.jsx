import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

import CropHealth from "./CropHealth";
import Weather from "./Weather";
import Satellite from "./Satellite";
import Alerts from "./Alerts";

import {
  LayoutDashboard,
  Sprout,
  CloudSun,
  Satellite as SatelliteIcon,
  TriangleAlert,
  BarChart3,
  Settings,
  Menu,
  X,
  LogOut,
  Droplets,
  ThermometerSun,
  Leaf,
  MapPin,
  TrendingUp,
} from "lucide-react";

function Dashboard() {
  const { t, language, toggleLanguage } = useLanguage();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("overview");

  const menuItems = [
    { id: "overview", icon: LayoutDashboard, label: "overview" },
    { id: "crops", icon: Sprout, label: "cropHealth" },
    { id: "weather", icon: CloudSun, label: "weather" },
    { id: "satellite", icon: SatelliteIcon, label: "satellite" },
    { id: "alerts", icon: TriangleAlert, label: "riskAlerts" },
    { id: "analytics", icon: BarChart3, label: "analytics" },
  ];

  const handleNavigation = (id) => {
    setActivePage(id);
    setSidebarOpen(false);
  };

  return (
    <div className="dashboard-layout">

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`dashboard-sidebar ${
          sidebarOpen ? "sidebar-open" : ""
        }`}
      >

        {/* BRAND */}
        <div className="sidebar-brand">

          <div className="sidebar-logo">
            <Leaf size={22} />
          </div>

          <div>
            <h2>AgroSentinel</h2>
            <span>AI</span>
          </div>

          <button
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>

        </div>

        {/* NAVIGATION */}
        <nav className="sidebar-nav">

          <p className="nav-title">
            {t("dashboard", "main")}
          </p>

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                className={`nav-item ${
                  activePage === item.id ? "active" : ""
                }`}
                onClick={() => handleNavigation(item.id)}
              >
                <Icon size={19} />

                <span>
                  {t("dashboard", item.label)}
                </span>
              </button>
            );
          })}

        </nav>

        {/* SIDEBAR BOTTOM */}
        <div className="sidebar-bottom">

          <button className="nav-item">
            <Settings size={19} />
            <span>
              {t("dashboard", "settings")}
            </span>
          </button>

          <button className="nav-item logout-item">
            <LogOut size={19} />
            <span>
              {t("dashboard", "logout")}
            </span>
          </button>

        </div>

      </aside>

      {/* MAIN AREA */}
      <div className="dashboard-main">

        {/* HEADER */}
        <header className="dashboard-header">

          <div className="header-left">

            <button
              className="mobile-menu-button"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={22} />
            </button>

            <div>
              <h1>
                {t("dashboard", "greeting")} 👋
              </h1>

              <p>
                {t("dashboard", "welcome")}
              </p>
            </div>

          </div>

          {/* HEADER ACTIONS */}
          <div className="dashboard-header-actions">

            <button
              className="language-toggle"
              onClick={toggleLanguage}
            >
              {language === "en" ? "தமிழ்" : "English"}
            </button>

            <div className="profile">

              <div className="profile-avatar">
                F
              </div>

              <span>
                {t("dashboard", "farmer")}
              </span>

            </div>

          </div>

        </header>

        {/* =====================================================
            OVERVIEW PAGE
        ===================================================== */}

        {activePage === "overview" && (

          <main className="dashboard-content">

            {/* FARM OVERVIEW */}
            <section className="welcome-card">

              <div>

                <span className="welcome-label">
                  {t("dashboard", "farm")}
                </span>

                <h2>
                  {t("dashboard", "farmOverview")}
                </h2>

                <p>
                  {t("dashboard", "overviewText")}
                </p>

              </div>

              <div className="welcome-status">
                <span></span>
                {t("dashboard", "farmHealthy")}
              </div>

            </section>

            {/* DASHBOARD CARDS */}
            <section className="dashboard-grid">

              {/* CROP */}
              <div
                className="dashboard-card"
                onClick={() => handleNavigation("crops")}
                style={{ cursor: "pointer" }}
              >

                <div className="card-icon">
                  <Sprout size={25} />
                </div>

                <h3>
                  {t("dashboard", "cropHealth")}
                </h3>

                <p className="card-value">
                  {t("dashboard", "healthy")}
                </p>

                <span className="card-description">
                  {t("dashboard", "cropDescription")}
                </span>

              </div>

              {/* WEATHER */}
              <div
                className="dashboard-card"
                onClick={() => handleNavigation("weather")}
                style={{ cursor: "pointer" }}
              >

                <div className="card-icon">
                  <CloudSun size={25} />
                </div>

                <h3>
                  {t("dashboard", "weather")}
                </h3>

                <p className="card-value">
                  {t("dashboard", "temperature")}
                </p>

                <span className="card-description">
                  {t("dashboard", "weatherDescription")}
                </span>

              </div>

              {/* SATELLITE */}
              <div
                className="dashboard-card"
                onClick={() => handleNavigation("satellite")}
                style={{ cursor: "pointer" }}
              >

                <div className="card-icon">
                  <SatelliteIcon size={25} />
                </div>

                <h3>
                  {t("dashboard", "satellite")}
                </h3>

                <p className="card-value">
                  {t("dashboard", "farmMonitoring")}
                </p>

                <span className="card-description">
                  {t("dashboard", "satelliteDescription")}
                </span>

              </div>

              {/* ALERTS */}
              <div
                className="dashboard-card"
                onClick={() => handleNavigation("alerts")}
                style={{ cursor: "pointer" }}
              >

                <div className="card-icon">
                  <TriangleAlert size={25} />
                </div>

                <h3>
                  {t("dashboard", "riskAlerts")}
                </h3>

                <p className="card-value">
                  {t("dashboard", "noAlerts")}
                </p>

                <span className="card-description">
                  {t("dashboard", "safeDescription")}
                </span>

              </div>

            </section>

            {/* FARM CONDITIONS */}
            <section className="conditions-section">

              <div className="section-heading">

                <div>
                  <h2>
                    {t("dashboard", "conditions")}
                  </h2>

                  <p>
                    {t("dashboard", "conditionsText")}
                  </p>
                </div>

                <span className="live-indicator">
                  <span></span>
                  {t("dashboard", "live")}
                </span>

              </div>

              <div className="conditions-grid">

                <div className="condition-card">
                  <Droplets size={23} />

                  <div>
                    <span>
                      {t("dashboard", "soilMoisture")}
                    </span>

                    <strong>
                      {t("dashboard", "good")}
                    </strong>
                  </div>
                </div>

                <div className="condition-card">
                  <ThermometerSun size={23} />

                  <div>
                    <span>
                      {t("dashboard", "temperatureLabel")}
                    </span>

                    <strong>
                      {t("dashboard", "temperature")}
                    </strong>
                  </div>
                </div>

                <div className="condition-card">
                  <MapPin size={23} />

                  <div>
                    <span>
                      {t("dashboard", "farmLocation")}
                    </span>

                    <strong>
                      {t("dashboard", "connected")}
                    </strong>
                  </div>
                </div>

                <div className="condition-card">
                  <TrendingUp size={23} />

                  <div>
                    <span>
                      {t("dashboard", "cropGrowth")}
                    </span>

                    <strong>
                      {t("dashboard", "good")}
                    </strong>
                  </div>
                </div>

              </div>

            </section>

            {/* LOWER CARDS */}
            <section className="dashboard-lower-grid">

              <div className="dashboard-large-card">

                <div className="large-card-header">

                  <div>
                    <h2>
                      {t("dashboard", "cropHealth")}
                    </h2>

                    <p>
                      {t("dashboard", "currentCropHealth")}
                    </p>
                  </div>

                  <Sprout size={25} />

                </div>

                <div className="health-summary">

                  <div className="health-circle">
                    <span>86%</span>

                    <small>
                      {t("dashboard", "healthy")}
                    </small>
                  </div>

                  <div className="health-info">

                    <div>
                      <span>
                        {t("dashboard", "healthyArea")}
                      </span>

                      <strong>86%</strong>
                    </div>

                    <div>
                      <span>
                        {t("dashboard", "needsAttention")}
                      </span>

                      <strong>14%</strong>
                    </div>

                  </div>

                </div>

              </div>

              <div className="dashboard-large-card">

                <div className="large-card-header">

                  <div>
                    <h2>
                      {t("dashboard", "weather")}
                    </h2>

                    <p>
                      {t("dashboard", "todaysFarmConditions")}
                    </p>
                  </div>

                  <CloudSun size={25} />

                </div>

                <div className="weather-summary">

                  <div className="weather-temperature">
                    28°
                    <span>C</span>
                  </div>

                  <div className="weather-details">

                    <span>
                      {t("dashboard", "humidity")} 68%
                    </span>

                    <span>
                      {t("dashboard", "wind")} 12 km/h
                    </span>

                    <span>
                      {t("dashboard", "rainChance")} 20%
                    </span>

                  </div>

                </div>

              </div>

            </section>

            {/* SATELLITE PREVIEW */}
            <section className="satellite-card">

              <div className="satellite-info">

                <span className="welcome-label">
                  {t("dashboard", "satelliteMonitoring")}
                </span>

                <h2>
                  {t("dashboard", "satelliteView")}
                </h2>

                <p>
                  {t("dashboard", "satelliteText")}
                </p>

                <button
                  className="satellite-button"
                  onClick={() => handleNavigation("satellite")}
                >
                  <SatelliteIcon size={18} />
                  {t("dashboard", "viewSatellite")}
                </button>

              </div>

              <div className="satellite-visual">

                <SatelliteIcon size={55} />

                <span>
                  {t("dashboard", "satelliteMap")}
                </span>

              </div>

            </section>

            {/* ANALYTICS */}
            <section className="analytics-card">

              <div className="section-heading">

                <div>

                  <h2>
                    {t("dashboard", "farmAnalytics")}
                  </h2>

                  <p>
                    {t("dashboard", "analyticsText")}
                  </p>

                </div>

                <BarChart3 size={25} />

              </div>

              <div className="analytics-placeholder">

                <BarChart3 size={35} />

                <h3>
                  {t("dashboard", "analyticsComing")}
                </h3>

                <p>
                  {t("dashboard", "analyticsDescription")}
                </p>

              </div>

            </section>

          </main>
        )}

        {/* =====================================================
            CROP HEALTH
        ===================================================== */}

        {activePage === "crops" && <CropHealth />}

        {/* =====================================================
            WEATHER
        ===================================================== */}

        {activePage === "weather" && <Weather />}

        {/* =====================================================
            SATELLITE
        ===================================================== */}

        {activePage === "satellite" && <Satellite />}

        {/* =====================================================
            ALERTS
        ===================================================== */}

        {activePage === "alerts" && <Alerts />}

        {/* =====================================================
            ANALYTICS
        ===================================================== */}

        {activePage === "analytics" && (

          <section className="dashboard-placeholder">

            <div className="placeholder-icon">
              <BarChart3 size={30} />
            </div>

            <h2>
              {t("dashboard", "analytics")}
            </h2>

            <p>
              {t("dashboard", "backendComing")}
            </p>

          </section>

        )}

      </div>
    </div>
  );
}

export default Dashboard;