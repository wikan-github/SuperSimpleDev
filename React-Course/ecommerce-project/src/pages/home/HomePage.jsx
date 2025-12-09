import axios from 'axios';
import "./HomePage.css";
import { Header } from "../../components/Header";
// import { products } from "../../starting-code/data/products";
import { useEffect, useState } from 'react';
import { ProductsGrid} from './ProductsGrid';
// import { formatMoney } from '../../utils/money';

//extract cart object from props
export function HomePage({cart}) {
	const [products,setProducts]= useState([]);

	useEffect(()=> {
		//useEffect let us control when some code run based on dependency array []
		//empty [] dependency array will make the code run once, after the component created
		//if dependency array [], not provided useEffect will run everytime component loaded 
		//<StrictMode> at root component will cause useEffect runs twice during development mode 
		//<StricMode> helps to catch bug during development, and ony run during development
		const fetchHomeData = async ()=> {
			const responseData = await axios.get('api/products');
			setProducts(responseData.data);
		}
		fetchHomeData();
		/* axios.get('api/products')
		.then((res)=> {
			// save the loaded products into state data
			setProducts(res.data);
			// console.log(res.data);
		});
 */

	},[]);

	return (
		<>
			<title>Ecommerce Project</title>
			<Header cart={cart}/>
			<div className="home-page">
			<ProductsGrid products={products}/>
			</div>
		</>
	);
}
