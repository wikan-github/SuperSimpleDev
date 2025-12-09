/* file notes */
import dayjs from "dayjs";
import axios from "axios";
import { formatMoney } from "../../utils/money";
import "./checkout-header.css";
import "./CheckOutPage.css";
import { useEffect } from "react";
import { useState } from "react";
import { CheckOutHeader } from "./CheckOutHeader";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";

export function CheckOutPage({ cart }) {
	const [deliveryOptions, setDeliveryOptions] = useState([]);
	const [paymentSummary, setPaymentSummary] = useState(null);

	useEffect(() => {
		const fetchData = async ()=> {
			let response = await axios.get("api/delivery-options?expand=estimatedDeliveryTime");
			setDeliveryOptions(response.data);

			response = await axios.get("/api/payment-summary");
			setPaymentSummary(response.data);
		}

		fetchData();
	}, []);

	return (
		<>
			<title>Checkout</title>

			<CheckOutHeader paymentSummary={paymentSummary}/>

			<div className="checkout-page">
				<div className="page-title">Review your order</div>

				<div className="checkout-grid">
				<OrderSummary cart={cart} deliveryOptions={deliveryOptions}/>
				<PaymentSummary paymentSummary={paymentSummary}/>

		
				</div>
			</div>
		</>
	);
}
