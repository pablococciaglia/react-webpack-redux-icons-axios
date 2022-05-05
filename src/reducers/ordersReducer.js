const initialState = {
    orders: []
};

export const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "tuggleOrders":
            let orders = state.orders
            if (typeof action.payload === 'string') {
                const index = orders.indexOf(action.payload);
                if (index > -1) {
                    const newArray = [...orders]
                    newArray.splice(index, 1);
                    orders = [...newArray]
                } else {
                    orders = [...orders, action.payload]
                }
            } else {
                orders = action.payload
            }
            return { orders };
        case "eraseChecks":
            return {orders:[]};
        default:
            return state;
    }
}
