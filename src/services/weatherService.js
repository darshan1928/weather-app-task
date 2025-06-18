const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeatherByCity = async (city) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${API_KEY}&units=metric&lang=en`
    );

    const data = await res.json();

    if (!res.ok) {
      if (data?.cod === 401) {
        throw new Error("Validation Error");
      }
      throw new Error(data?.message || "Failed to fetch weather data");
    }

    return data;
  } catch (error) {
    throw new Error(error.message || "Something went wrong");
  }
};
