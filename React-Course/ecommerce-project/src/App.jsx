import './App.css';
import { CheckOutPage } from './pages/CheckOutPage';
import { HomePage } from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router"; 

// import '../styles/shared/general.css';
import './styles/shared/general.css';
import { OrdersPage } from './pages/OrdersPage';

function App() {

   return (
   
    <Routes>
      <Route index  element={<HomePage />} />
      <Route path='checkout' element={<CheckOutPage />}/>
      <Route path='orders' element={<OrdersPage />} />
    </Routes>

  ); 

   /*  return (
   <Route path="/" element={<HomePage />}></Route>
   <HomePage />
  ); */
}

export default App
