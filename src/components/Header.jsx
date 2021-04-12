const Header = () => {
	return (
		<header
			className="w-full h-16 border-b border-gray-200 shadow flex justify-center items-center overflow-hidden"
			data-testid="header"
		>
			<img
				className="h-12"
				alt="Gale Todo"
				src={`${process.env.PUBLIC_URL}/GALE_Logo_Blue.png`}
				data-testid="header-logo"
			/>
		</header>
	);
};

export default Header;
