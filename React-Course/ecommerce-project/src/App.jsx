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
	const loadCart = async () => {
		const response = await axios.get("api/cart-items?expand=product");
		setCart(response.data);
	}
	useEffect(() => {
		loadCart();
	}, []);

	return (
		<Routes>
			<Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
			<Route path="checkout" element={<CheckOutPage cart={cart} loadCart={loadCart} />} />
			<Route path="orders" element={<OrdersPage cart={cart} />} />
		</Routes>
	);

	/*  return (
	 <Route path="/" element={<HomePage />}></Route>
	 <HomePage />
	); */
}

export default App;
