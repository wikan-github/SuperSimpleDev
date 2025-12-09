import "./App.css";
import { CheckOutPage } from "./pages/checkout/CheckOutPage";
import { BrowserRouter, Routes, Route } from "react-router";

// import '../styles/shared/general.css';
import "./styles/shared/general.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { HomePage } from "./pages/home/HomePage";
import { OrdersPage } from "./pages/orders/OrdersPage";

function App() {
	const [cart, setCart] = useState([]);

	useEffect(() => {

		const fetchCart = async ()=> {
			const response= await axios.get("api/cart-items?expand=product");
			setCart(response.data);
		} 
		fetchCart();
	}, []);

	return (
		<Routes>
			<Route index element={<HomePage cart={cart}/>} />
			<Route path="checkout" element={<CheckOutPage cart={cart}/>} />
			<Route path="orders" element={<OrdersPage cart={cart}/>} />
		</Routes>
	);

	/*  return (
   <Route path="/" element={<HomePage />}></Route>
   <HomePage />
  ); */
}

export default App;
