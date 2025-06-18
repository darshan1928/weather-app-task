
#  WeatherNow

A responsive and modern weather application built with **React + Vite**, powered by the **OpenWeatherMap API**. It allows users to search weather by location and delivers real-time weather updates with a clean UI, smooth animations, and detailed metrics like temperature, humidity, wind direction, visibility, and more.


---

## 🚀 Live Demo

👉 [View WeatherNow Live](https://weather-now-two-teal.vercel.app/)

---


## Features

- Search weather by city
- Dynamic gradient backgrounds based on current weather
- Displays temperature, humidity, pressure, visibility, wind, sunrise/sunset
- Graceful error handling with fallback UI
- Loading spinner during fetch
- Fully responsive for all devices
- Smooth transitions and modern UX

---



Run it locally as shown below.

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/darshan1928/weather-app-task.git
cd weather-app-task
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add your OpenWeatherMap API key:

```env
VITE_WEATHER_API_KEY=your_openweather_api_key_here
```

You can get a free API key from: [https://openweathermap.org/api](https://openweathermap.org/api)

### 4. Start the Development Server

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## Project Structure

```
src/
├── components/      # Reusable UI components (AppContent, SearchBar, WeatherInfo, etc.)
├── context/         # Global context for weather state
├── hooks/           # Custom hooks ( useWeather)
├── utils/           # Helper functions and gradient maps
├── assets/          # Icons, images
├── main.jsx         # Entry point
└── index.css        # Global styles
```

---

## Tech Stack

* React (Hooks + Context API)
* Vite
* CSS Modules
* React Icons
* OpenWeatherMap API

---

## Acknowledgments

* [OpenWeather](https://openweathermap.org/)
* [React Icons](https://react-icons.github.io/react-icons/)

---

## License

This project is open-source and available under the MIT License.

---

Made with ❤️ by [Darshan](https://github.com/darshan1928)

```

