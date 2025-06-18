import {
  SearchBar,
  WeatherInfo,
  ErrorDisplay,
  Spinner,
} from "../../components";
import { useWeather } from "../../hooks/useWeather";
import { useEffect } from "react";
import { gradientMap } from "../../utils/weatherGradient";
import "./AppContent.css";
export const AppContent = () => {
  const { fetchWeather, location, weatherData, error, isLoading } =
    useWeather();

  useEffect(() => {
    fetchWeather(location);
  }, [fetchWeather, location]);

  const weatherMain = weatherData?.weather?.[0]?.main || "Default";
  const hasError = !!error;

  const backgroundStyle = {
    background: hasError
      ? "linear-gradient(to right, #232526, #414345)"
      : gradientMap[weatherMain] ||
        "linear-gradient(to right, #83a4d4, #b6fbff)",
  };
  return (
    <div className="weather-app-full" style={backgroundStyle}>
      <h1 className="weather-heading">WeatherNow</h1>
      <SearchBar />
      {isLoading ? <Spinner /> : error ? <ErrorDisplay /> : <WeatherInfo />}
    </div>
  );
};
