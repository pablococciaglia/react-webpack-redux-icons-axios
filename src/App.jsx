import { Provider } from 'react-redux';

import { store } from './store/store.js';
import Header from './components/Header.jsx';
import Orders from './components/Orders.jsx';

const App = () => {
	
	return (
		<Provider store={ store }>
			<Header />
			<Orders />
		</Provider>
	);
};

export default App;
