import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    splash: {
      appName: "AgroSentinel AI",
      heading: "Smart protection for your crops",
      tagline: "Smarter Farms • Healthier Crops",
      satellite: "Satellite",
      weather: "Weather",
      cropCare: "AI Crop Care",
      getStarted: "Get Started",
      login: "Login",
    },

    login: {
      welcome: "Welcome Back",
      subtitle: "Sign in to continue",
      mobile: "Mobile Number",
      password: "Password",
      loginButton: "Login",
      forgotPassword: "Forgot Password?",
      or: "or",
      google: "Continue with Google",
      noAccount: "Don't have an account?",
      register: "Register",
    },

    dashboard: {
      greeting: "Good Morning",
      welcome: "Welcome back to AgroSentinel AI",
      farmer: "Farmer",

      main: "MAIN",
      overview: "Overview",
      cropHealth: "Crop Health",
      weather: "Weather",
      satellite: "Satellite",
      riskAlerts: "Risk Alerts",
      analytics: "Analytics",

      settings: "Settings",
      logout: "Logout",

      farm: "YOUR FARM",
      farmOverview: "Your Farm Overview",
      overviewText:
        "Monitor your crops, weather and farm health from one place.",
      farmHealthy: "Farm is healthy",

      healthy: "Healthy",
      cropDescription: "Your crops are doing well",

      temperature: "28°C",
      weatherDescription: "Today's weather conditions",

      farmMonitoring: "Monitoring",
      satelliteDescription: "Your farm is being monitored",

      noAlerts: "No Critical Alerts",
      safeDescription: "Your farm is currently safe",

      conditions: "Farm Conditions",
      conditionsText: "Today's important farm information",
      live: "LIVE",

      soilMoisture: "Soil Moisture",
      good: "Good",

      temperatureLabel: "Temperature",

      farmLocation: "Farm Location",
      connected: "Connected",

      cropGrowth: "Crop Growth",

      currentCropHealth: "Current crop health status",
      healthyArea: "Healthy Area",
      needsAttention: "Needs Attention",

      todaysFarmConditions: "Today's farm conditions",
      humidity: "Humidity",
      wind: "Wind",
      rainChance: "Rain Chance",

      satelliteMonitoring: "SATELLITE MONITORING",
      satelliteView: "Farm Satellite View",
      satelliteText:
        "Monitor crop health and farm changes using satellite imagery.",
      viewSatellite: "View Satellite Data",
      satelliteMap: "Satellite Map",

      farmAnalytics: "Farm Analytics",
      analyticsText: "Track your farm performance over time",
      analyticsComing: "Analytics will appear here",
      analyticsDescription:
        "Real farm performance data will be connected from your backend.",

      connectedSection: "Connected",
      backendComing: "This section will be connected to the backend data next.",
    },
  },

  ta: {
    splash: {
      appName: "AgroSentinel AI",
      heading: "உங்கள் பயிர்களுக்கு சிறந்த பாதுகாப்பு",
      tagline: "சிறந்த விவசாயம் • ஆரோக்கியமான பயிர்கள்",
      satellite: "செயற்கைக்கோள்",
      weather: "வானிலை",
      cropCare: "AI பயிர் பராமரிப்பு",
      getStarted: "தொடங்குங்கள்",
      login: "உள்நுழைவு",
    },

    login: {
      welcome: "மீண்டும் வரவேற்கிறோம்",
      subtitle: "தொடர உள்நுழையுங்கள்",
      mobile: "மொபைல் எண்",
      password: "கடவுச்சொல்",
      loginButton: "உள்நுழைவு",
      forgotPassword: "கடவுச்சொல்லை மறந்துவிட்டீர்களா?",
      or: "அல்லது",
      google: "Google மூலம் தொடரவும்",
      noAccount: "கணக்கு இல்லையா?",
      register: "பதிவு செய்யுங்கள்",
    },

    dashboard: {
      greeting: "காலை வணக்கம்",
      welcome: "AgroSentinel AI-க்கு மீண்டும் வரவேற்கிறோம்",
      farmer: "விவசாயி",

      main: "முக்கியம்",
      overview: "கண்ணோட்டம்",
      cropHealth: "பயிர் ஆரோக்கியம்",
      weather: "வானிலை",
      satellite: "செயற்கைக்கோள்",
      riskAlerts: "ஆபத்து எச்சரிக்கைகள்",
      analytics: "பகுப்பாய்வு",

      settings: "அமைப்புகள்",
      logout: "வெளியேறு",

      farm: "உங்கள் பண்ணை",
      farmOverview: "உங்கள் பண்ணை கண்ணோட்டம்",
      overviewText:
        "உங்கள் பயிர்கள், வானிலை மற்றும் பண்ணையின் ஆரோக்கியத்தை ஒரே இடத்தில் கண்காணிக்கவும்.",
      farmHealthy: "பண்ணை ஆரோக்கியமாக உள்ளது",

      healthy: "ஆரோக்கியமாக உள்ளது",
      cropDescription: "உங்கள் பயிர்கள் நன்றாக வளர்கின்றன",

      temperature: "28°C",
      weatherDescription: "இன்றைய வானிலை நிலவரம்",

      farmMonitoring: "கண்காணிப்பு",
      satelliteDescription: "உங்கள் பண்ணை கண்காணிக்கப்பட்டு வருகிறது",

      noAlerts: "முக்கியமான எச்சரிக்கைகள் இல்லை",
      safeDescription: "உங்கள் பண்ணை தற்போது பாதுகாப்பாக உள்ளது",

      conditions: "பண்ணை நிலைமைகள்",
      conditionsText: "இன்றைய முக்கியமான பண்ணை தகவல்கள்",
      live: "நேரலை",

      soilMoisture: "மண் ஈரப்பதம்",
      good: "நன்றாக உள்ளது",

      temperatureLabel: "வெப்பநிலை",

      farmLocation: "பண்ணை இருப்பிடம்",
      connected: "இணைக்கப்பட்டுள்ளது",

      cropGrowth: "பயிர் வளர்ச்சி",

      currentCropHealth: "தற்போதைய பயிர் ஆரோக்கிய நிலை",
      healthyArea: "ஆரோக்கியமான பகுதி",
      needsAttention: "கவனம் தேவை",

      todaysFarmConditions: "இன்றைய பண்ணை நிலைமைகள்",
      humidity: "ஈரப்பதம்",
      wind: "காற்று",
      rainChance: "மழைக்கான வாய்ப்பு",

      satelliteMonitoring: "செயற்கைக்கோள் கண்காணிப்பு",
      satelliteView: "பண்ணை செயற்கைக்கோள் காட்சி",
      satelliteText:
        "செயற்கைக்கோள் படங்களைப் பயன்படுத்தி பயிர் ஆரோக்கியம் மற்றும் பண்ணை மாற்றங்களை கண்காணிக்கவும்.",
      viewSatellite: "செயற்கைக்கோள் தரவைப் பார்க்கவும்",
      satelliteMap: "செயற்கைக்கோள் வரைபடம்",

      farmAnalytics: "பண்ணை பகுப்பாய்வு",
      analyticsText: "காலப்போக்கில் உங்கள் பண்ணையின் செயல்திறனை கண்காணிக்கவும்",
      analyticsComing: "பகுப்பாய்வு இங்கே தோன்றும்",
      analyticsDescription:
        "உண்மையான பண்ணை செயல்திறன் தரவு உங்கள் backend-ல் இருந்து இணைக்கப்படும்.",

      connectedSection: "இணைக்கப்பட்டுள்ளது",
      backendComing:
        "இந்த பகுதி அடுத்ததாக backend தரவுடன் இணைக்கப்படும்.",
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((currentLanguage) =>
      currentLanguage === "en" ? "ta" : "en"
    );
  };

  const t = (section, key) => {
    return translations[language]?.[section]?.[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}