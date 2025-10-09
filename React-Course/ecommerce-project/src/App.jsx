import './App.css';
import { CheckOut } from './pages/CheckOutPage';
import { HomePage } from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router"; 

// import '../styles/shared/general.css';
import './styles/shared/general.css';

function App() {

   return (
   
    <Routes>
      <Route index  element={<HomePage />} />
      <Route path='checkout' element={<CheckOut/>}/>
    </Routes>

  ); 

   /*  return (
   <Route path="/" element={<HomePage />}></Route>
   <HomePage />
  ); */
}

export default App
