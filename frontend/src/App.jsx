import { useState } from "react";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const [page, setPage] = useState("splash");

  return (
    <LanguageProvider>
      {page === "splash" && (
        <Splash onGetStarted={() => setPage("login")} />
      )}

      {page === "login" && (
        <Login onLogin={() => setPage("dashboard")} />
      )}

      {page === "dashboard" && <Dashboard />}
    </LanguageProvider>
  );
}

export default App;