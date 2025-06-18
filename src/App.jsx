import "./App.css";
import { AppContent } from "./components";
import { WeatherProvider } from "./context";

function App() {
  return (
    <>
      <WeatherProvider>
        <AppContent />
      </WeatherProvider>
    </>
  );
}
export default App;
