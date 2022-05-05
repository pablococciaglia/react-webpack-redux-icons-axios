import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getOrdersQty, getSelectedOrders } from '../selectors/selectors.js'
import { tuggleOrders } from './action.js'
const ordersList = require ('../orders.json');

const Orders = () => {
    const dispatch = useDispatch();
	const ordersQty = useSelector(getOrdersQty)
	const selectedOrders = useSelector(getSelectedOrders)

    const switchOrder = (order) => {
        dispatch(tuggleOrders(order))
    }

    const disabledCheckbox = (orderNumber) => {
        if (ordersQty>19 && !selectedOrders.includes(orderNumber)) {
            return true
        }
        return false
    }

	return (
		<div className="App">
			<h3>Orders</h3>
			<ul>
				{ordersList.map(({ orderNumber, productsQty, bill }, index) => {
					return (
						<li key={index}>
							<div>
								<input
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    checked={selectedOrders.includes(orderNumber)}
                                    name={orderNumber}
                                    value={orderNumber}
                                    disabled={disabledCheckbox(orderNumber)}
                                    onChange={() => switchOrder(orderNumber)} 
                                />
                                <label htmlFor={`custom-checkbox-${index}`}>{orderNumber} | {productsQty} | ${bill}</label>
                            </div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

Orders.propTypes = {
    orders: PropTypes.array,
    setOrders: PropTypes.func
};

export default Orders;