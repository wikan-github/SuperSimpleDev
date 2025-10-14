import axios from 'axios';
import "./HomePage.css";
import { Header } from "../components/Header";
// import { products } from "../../starting-code/data/products";
import { useEffect, useState } from 'react';

export function HomePage() {
	const [products,setProducts]= useState([]);

	useEffect(()=> {
		//useEffect let us control when some code run based on dependency array []
		//empty [] dependency array will make the code run once, after the component created
		//if dependency array [], not provided useEffect will run everytime component loaded 
		//<StrictMode> at root component will cause useEffect runs twice during development mode 
		//<StricMode> helps to catch bug during development, and ony run during development
		axios.get('http://localhost:3000/api/products')
		.then((res)=> {
			// save the loaded products into state data
			setProducts(res.data);
			// console.log(res.data);
		});
	},[]);

	/* fetch('http://localhost:3000/api/products')
		.then((res)=> {
			//kembalikan dalam format json, sehinga siap dikonsumsi oleh .then berikutnya
			return res.json();

			// respond.json().then((data) => { console.log(data)});
		}).then((products) => {
			console.log(products);
		});
		
		 */
		//axios lebih simple ketimbang fetch 
		
		

	return (
		<>
			<title>Ecommerce Project</title>
			<Header />
			<div className="home-page">
				<div className="products-grid">
					{products.map((product) => {
						return (
							<div key={product.id} className="product-container">
								<div className="product-image-container">
									<img
										className="product-image"
										src={product.image}
									/>
								</div>

								<div className="product-name limit-text-to-2-lines">
									{product.name}
								</div>

								<div className="product-rating-container">
									<img
										className="product-rating-stars"
										src={`images/ratings/rating-${product.rating.stars * 10}.png`}
									/>

									<div className="product-rating-count link-primary">{product.rating.count}</div>
								</div>
								{/* one dollar = 100 cents */}
								<div className="product-price">${(product.priceCents/100).toFixed(2)}</div>

								<div className="product-quantity-container">
									<select>
										<option value="1">1</option>

										<option value="2">2</option>

										<option value="3">3</option>

										<option value="4">4</option>

										<option value="5">5</option>

										<option value="6">6</option>

										<option value="7">7</option>

										<option value="8">8</option>

										<option value="9">9</option>

										<option value="10">10</option>
									</select>
								</div>

								<div className="product-spacer"></div>

								<div className="added-to-cart">
									<img src="images/icons/checkmark.png" />
									Added
								</div>

								<button className="add-to-cart-button button-primary">
									Add to Cart
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
