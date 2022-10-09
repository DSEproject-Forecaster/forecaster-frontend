import Overview from "./components/Overview";
import DailyVisualization from "./components/DailyVisualization";
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dailyvisualization" element={<DailyVisualization/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
