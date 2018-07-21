module.exports = {
	plugins: [
		require('stylelint'),
		require('postcss-reporter'),
		require('postcss-node-sass'),
		require('autoprefixer')({
			browsers: [
				'iOS >= 8'
			]
		}),
		require('postcss-csso')
	]
};
