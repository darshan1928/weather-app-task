import { useContext, useCallback } from "react";
import { WeatherContext } from "../context";
import { getWeatherByCity } from "../services/weatherService";

export const useWeather = () => {
  const {
    weatherData,
    setWeatherData,
    location,
    setLocation,
    error,
    setError,
    setIsLoading,isLoading
    
  } = useContext(WeatherContext);

  const fetchWeather = useCallback(async (city) => {
    try {
      setIsLoading(true);
      setError("");
      const data = await getWeatherByCity(city);
      setWeatherData(data);
      setLocation(city);
      setError("");
    } catch (err) {
      setWeatherData(null);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, setError, setLocation, setWeatherData]);

  return { weatherData, location, error, fetchWeather,isLoading };
};
