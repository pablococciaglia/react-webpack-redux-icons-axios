import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FcDownload } from "react-icons/fc";

const ordersList = require ('../orders.json');
import { getOrdersQty, getSelectedOrders } from '../selectors/selectors.js'
import { eraseChecks, tuggleOrders } from './action.js'
import { exlRequest } from '../service/service.js';

const Header = () => {

	const dispatch = useDispatch()
	const ordersQty = useSelector(getOrdersQty)
	const selectedOrders = useSelector(getSelectedOrders)
	const switchOrders = (e) => {
		if (!e.target.checked) {
			dispatch(eraseChecks())
		} else {
			let first20orders = [];
			const loops = ordersList.length >20 ? 20 : ordersList.length;
			for (let i = 0; i < loops; i++) {
				first20orders.push(ordersList[i].orderNumber);
			}
			dispatch(tuggleOrders(first20orders))
		}
	}

	const excelRequest = () => {
		exlRequest(selectedOrders)
	}

	return (
		<div>
			<input
				type="checkbox"
				checked={ordersQty?true:false}
				onChange={(e) => switchOrders(e)} 
			/>
			<label>De/select orders: {ordersQty}/20 <FcDownload onClick={excelRequest} /></label>
		</div>
	);
};

Header.propTypes = {
    orders: PropTypes.array
};

export default Header;