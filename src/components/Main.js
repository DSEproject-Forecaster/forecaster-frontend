import { Routes, Route} from "react-router-dom";
import {Error} from './Error';
import {Dashboard} from './Dashboard';
import {DailySummary} from './DailySummary';
import {Header} from './Header';
import {Footer} from './Footer';

export function Main(){
    return( 
    <>
      <Header/>   
      <Routes>
        <Route path="/" element={<DailySummary />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </>
    );
}