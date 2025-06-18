import { useState } from "react";
import { useWeather } from "../../hooks/useWeather";
import "./SearchBar.css";
export const SearchBar = () => {
  const [input, setInput] = useState("");
  const { fetchWeather } = useWeather();

  const handleSearch = () => {
    if (input.trim()) {
      fetchWeather(input.trim());
      setInput("");
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button onClick={handleSearch} disabled={!input.trim()}>
        Search
      </button>
    </div>
  );
};
