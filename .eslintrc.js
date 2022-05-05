module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true,
		},
		'ecmaVersion': 13,
		'sourceType': 'module',
	},
	'plugins': ['react'],
	'rules': {
		'indent': ['error', 'tab'],
		'linebreak-style': 0,
		'quotes': ['warning', 'single'],
		'semi': ['error', 'always'],
	},
};
