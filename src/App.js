import {Home} from './components/Home'
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
