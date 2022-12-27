import {Home} from './components/Home'
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from './components/Header';
import {WeeklyPredictions} from "./components/WeeklyPredictions"

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/weekly" element={<WeeklyPredictions/>} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
