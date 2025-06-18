import { useWeather } from "../../hooks/useWeather";
import { MdWarning } from "react-icons/md";
import "./ErrorDisplay.css";
export const ErrorDisplay = () => {
  const { error } = useWeather();

  return (
    <div className="fallback-card">
      <MdWarning className="fallback-icon" />
      <p className="fallback-text">{error.toUpperCase()}</p>

      {error !== "Validation Error" && (
        <p className="fallback-subtext">
          Please check your spelling or try a different city.
        </p>
      )}
    </div>
  );
};
