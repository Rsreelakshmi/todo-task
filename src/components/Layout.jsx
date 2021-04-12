import PropTypes from 'prop-types';
import Header from './Header';

const Layout = ({ children }) => {
	return (
		<div
			className="w-screen h-screen overflow-hidden flex flex-col"
			data-testid="layout"
		>
			<Header />
			<main className="flex-1 overflow-y-auto" data-testid="layout-main">
				{children}
			</main>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node,
};

Layout.defaultProps = {
	children: null,
};

export default Layout;
