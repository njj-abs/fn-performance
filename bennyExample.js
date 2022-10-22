const { suite, add, cycle, complete, save } = require('benny');
const { map, filter, find, reduce } = require('@laufire/utils/collection')

const numbers = [1, 2, 3, 4];

const odd = (value) => value % 2; 

const suites = [
	{
	  title: 'Array map',
	  tests: [
			{
				name: 'js-utils map',
				test: () => map(numbers, (num) => num + 1)
			},
			{
				name: 'native map',
				test: () => numbers.map((num) => num + 1),
			},
		]
	},
	{
		title: 'Array filter',
		tests: [
			{
				name: 'js-utils filter',
				test: () => filter(numbers, odd)
			},
			{
				name: 'native filter',
				test: () => numbers.filter(odd),
			},
		]
	},
	{
		title: 'Array find',
		tests: [
			{
				name: 'js-utils find',
				test: () => find(numbers, odd)
			},
			{
				name: 'native find',
				test: () => numbers.find(odd),
			},
		]
	},
	{
		title: 'Array reduce',
		tests: [
			{
				name: 'js-utils reduce',
				test: () => reduce(numbers, (acc, curr) => acc.concat(curr + 2), []),
			},
			{
				name: 'native reduce',
				test: () => numbers.reduce((acc, curr) => acc.concat(curr + 2), []),
			},
		]
	},
];

suites.forEach(({ tests, title }) => {
	suite(
		title,

		...tests.map(({ test, name }) =>
			add(name, test)),

		cycle(),
		complete(),
		save({ file: title, version: '1.0.0' }),
		save({ file: title, format: 'chart.html' }),
	)
});
