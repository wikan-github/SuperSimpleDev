import './App.css';
import { HomePage } from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

   return (
    <BrowserRouter>
    <Routes>
      <Route index  element={<HomePage />} />
      <Route path='check-out' element={<div>Test Checkout Page</div>}/>
    </Routes>
  </BrowserRouter>
  ); 

   /*  return (
   <Route path="/" element={<HomePage />}></Route>
   <HomePage />
  ); */
}

export default App
