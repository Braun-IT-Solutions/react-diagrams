const config = require('../../webpack.shared')(__dirname);
module.exports = {
	...config,
	output: {
		...config.output,
		library: '@bits_devel/react-diagrams-geometry'
	}
};
