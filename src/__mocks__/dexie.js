module.exports = function () {
	this.version = jest.fn(() => ({
		stores: jest.fn(),
	}));

	this.table = () => {
		this.add = jest.fn(() => Promise.resolve(2));
		this.update = jest.fn(() => Promise.resolve());
		this.delete = jest.fn(() => Promise.resolve());
		this.toArray = jest.fn(() =>
			Promise.resolve([
				{
					title: 'test',
					done: false,
					id: 1,
				},
			])
		);
		return this;
	};

	return this;
};
