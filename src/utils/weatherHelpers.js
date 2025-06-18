

export const formatTime = (timestamp, timezoneOffsetInSec = 0) => {
  const date = new Date((timestamp + timezoneOffsetInSec) * 1000);
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

export const formatDateTime = (timestamp, timezoneOffsetInSec = 0) => {
  const localTime = new Date((timestamp + timezoneOffsetInSec) * 1000);
  return localTime.toLocaleString("en-GB", {
    hour12: false,
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getWindDirection = (deg) => {
  const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return dirs[Math.round(deg / 45) % 8];
};
