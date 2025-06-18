import { useState } from "react";
import { WeatherContext } from "./WeatherContext";

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("London");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        location,
        setLocation,
        error,
        setError,isLoading, setIsLoading
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
