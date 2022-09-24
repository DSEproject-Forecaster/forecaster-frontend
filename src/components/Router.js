import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Error} from './Error';
import {Dashboard} from './Dashboard';
import {DailySummary} from './DailySummary';

export function Router(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<DailySummary />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    );
}