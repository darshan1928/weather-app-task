import { useWeather } from "../../hooks/useWeather";
import "./WeatherInfo.css";
import {
  WiThermometer,
  WiHumidity,
  WiStrongWind,
  WiCloudy,
  WiBarometer,
  WiSunrise,
  WiSunset,
  WiDayFog,
} from "react-icons/wi";
import { getWindDirection, formatDateTime, formatTime } from "../../utils";
export const WeatherInfo = () => {
  const { weatherData } = useWeather();
  if (!weatherData) return null;
  const {
    dt,
    timezone,
    name,
    sys: { country, sunrise, sunset },
    weather,
    main: { temp, feels_like, humidity, pressure },
    wind: { speed, deg },
    visibility,
    clouds: { all: cloudCover },
  } = weatherData;
  const iconCode = weather?.[0]?.icon;
  const iconUrl = iconCode
    ? `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    : "";

  const localDateTime = formatDateTime(dt, timezone);

  return (
    <div className="weather-info">
      <h2 className="location">
        {name}, {country}
      </h2>

      <p className="datetime">{localDateTime}</p>
      <div className="weather-icon">
        <img src={iconUrl} alt={weather[0].description} />
        <p className="weather-main">
          {weather[0].main} - {weather[0].description}
        </p>
      </div>

      <div className="weather-details">
        <div className="weather-box">
          <WiThermometer size={24} /> Temp: {temp}°C
        </div>
        <div className="weather-box">
          <WiDayFog size={24} /> Feels like: {feels_like}°C
        </div>
        <div className="weather-box">
          <WiHumidity size={24} /> Humidity: {humidity}%
        </div>
        <div className="weather-box">
          <WiStrongWind size={24} /> Wind: {speed} m/s {getWindDirection(deg)}
        </div>
        <div className="weather-box">
          <WiCloudy size={24} /> Cloud Cover: {cloudCover}%
        </div>
        <div className="weather-box">
          <WiBarometer size={24} /> Pressure: {pressure} hPa
        </div>
        <div className="weather-box">
          <WiDayFog size={24} /> Visibility:{" "}
          {visibility ? visibility / 1000 : "N/A"} km
        </div>
        <div className="weather-box">
          <WiSunrise size={24} /> Sunrise: {formatTime(sunrise, timezone)}
        </div>
        <div className="weather-box">
          <WiSunset size={24} /> Sunset: {formatTime(sunset, timezone)}
        </div>
      </div>
    </div>
  );
};
