/* file notes */
import axios from "axios";
import "./checkout-header.css";
import "./CheckOutPage.css";
import { useEffect } from "react";
import { useState } from "react";
import { CheckOutHeader } from "./CheckOutHeader";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";

export function CheckOutPage({ cart, loadCart }) {
	const [deliveryOptions, setDeliveryOptions] = useState([]);
	const [paymentSummary, setPaymentSummary] = useState(null);

	useEffect(() => {
		const fetchDeliveryOptions = async ()=> {
			let response = await axios.get("api/delivery-options?expand=estimatedDeliveryTime");
			setDeliveryOptions(response.data);
		}
		fetchDeliveryOptions();
	}, []);

	useEffect(()=> {
		const fetchPaymentSummary = async () => {
			//reload payment summary each time cart changes
			let response = await axios.get("/api/payment-summary");
			setPaymentSummary(response.data);
		}
		fetchPaymentSummary();
	},[cart]);

	return (
		<>
			<title>Checkout</title>

			<CheckOutHeader paymentSummary={paymentSummary}/>

			<div className="checkout-page">
				<div className="page-title">Review your order</div>

				<div className="checkout-grid">
				<OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />
				<PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
				</div>
			</div>
		</>
	);
}
