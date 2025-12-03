import "./App.css";
import { CheckOutPage } from "./pages/CheckOutPage";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router";

// import '../styles/shared/general.css';
import "./styles/shared/general.css";
import { OrdersPage } from "./pages/OrdersPage";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		axios.get("api/cart-items?expand=product")
    .then((responds) => {
			// console.log(responds.data);
			setCart(responds.data);
		});
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
