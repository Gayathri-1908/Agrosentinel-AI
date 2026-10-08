import { Leaf, Lock, Phone, Eye } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Login({ onLogin }) {
  const { language, toggleLanguage } = useLanguage();

  const isTamil = language === "ta";

  return (
    <div className="splash-page">
      <div className="splash-content login-page">

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
            src="/src/assets/agrosentinel-logo.png"
            alt="AgroSentinel AI"
          />
        </div>

        {/* App Name */}
        <h1>AgroSentinel AI</h1>

        {/* Welcome */}
        <h2>
          {isTamil ? "மீண்டும் வரவேற்கிறோம்" : "Welcome Back"}
        </h2>

        <p className="tagline">
          {isTamil
            ? "தொடர உள்நுழையுங்கள்"
            : "Sign in to continue"}
        </p>

        {/* Login Form */}
        <div className="login-form">

          {/* Mobile Number */}
          <div className="input-box">
            <Phone size={20} />

            <input
              type="text"
              placeholder={
                isTamil ? "மொபைல் எண்" : "Mobile Number"
              }
            />
          </div>

          {/* Password */}
          <div className="input-box">
            <Lock size={20} />

            <input
              type="password"
              placeholder={
                isTamil ? "கடவுச்சொல்" : "Password"
              }
            />

            <Eye size={20} />
          </div>

          {/* Login */}
          <button
            className="start-button"
            onClick={onLogin}
          >
            {isTamil ? "உள்நுழைவு" : "Login"}
          </button>

          {/* Forgot Password */}
          <p className="forgot-password">
            {isTamil
              ? "கடவுச்சொல்லை மறந்துவிட்டீர்களா?"
              : "Forgot Password?"}
          </p>

          {/* Divider */}
          <div className="or-divider">
            <span>
              {isTamil ? "அல்லது" : "or"}
            </span>
          </div>

          {/* Google */}
          <button className="google-button">
            <strong>G</strong>

            {isTamil
              ? "Google மூலம் தொடரவும்"
              : "Continue with Google"}
          </button>

          {/* Register */}
          <p className="register-text">
            {isTamil
              ? "கணக்கு இல்லையா?"
              : "Don't have an account?"}{" "}

            <span>
              {isTamil ? "பதிவு செய்யுங்கள்" : "Register"}
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;