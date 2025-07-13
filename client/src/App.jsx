import React, { useEffect, useState } from "react";
import Header from './components/Header';
import Home from './components/Home';
import Loader from './components/Loader'; // make sure this exists
import "./App.css"; // for error banner styling

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [error, setError] = useState("");

  useEffect(() => {
    // Internet status listeners
    const handleOnline = () => {
      setIsOnline(true);
      setError("");
    };
    const handleOffline = () => {
      setIsOnline(false);
      setError("No internet connection.");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Simulate server check or app init
    const checkServer = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/ping"); 
        if (!res.ok) throw new Error("Server error");
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (err) {
        if (!navigator.onLine) {
          setError("No internet connection.");
        } else {
          setError("Server is unavailable.");
        }
      } finally {
        setLoading(false);
      }
    };

    checkServer();

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (loading) return <Loader/>;
  if (error) return <div className="error-banner">⚠️ {error}</div>;

  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

export default App;
