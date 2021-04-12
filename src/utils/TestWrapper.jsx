import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../store';

const TestWrapper = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
}

TestWrapper.propTypes = {
	children: PropTypes.node,
};

TestWrapper.defaultProps = {
	children: null,
};

export default TestWrapper;
