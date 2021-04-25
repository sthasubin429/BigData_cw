db.income.aggregate([{ $match: { county: 'Queens', mortgage_indicator: 'Yes' } }, { $group: { _id: null, myCount: { $sum: 1 } } }, { $project: { _id: 0 } }]);

db.income.aggregate([
	{ $match: { county: 'Queens', mortgage_indicator: 'Yes', income: '$0 to <$10,000' } },
	{
		$count: 'Mortage_Yes',
	},
]);

db.income.aggregate([
	{ $match: { county: 'Queens' } },
	{
		$group: {
			_id: '$county',
			count: { $sum: 1 },
		},
	},
]);

db.income.aggregate([
	{ $match: { county: 'Queens' } },
	{
		$group: {
			_id: '$county',
			count: { $sum: 1 },
		},
	},
]);

db.income.aggregate([
	{ $match: { county: 'Queens' } },
	{
		$group: {
			_id: '$county',
			count: { $sum: 1 },
		},
	},
]);

db.income.aggregate(
	{ $match: { county: 'Queens' } },
	{
		$group: {
			_id: { county: '$county', income: '$income' },
			count: { $sum: 1 },
		},
	},
	{ $sort: { count: 1 } }
);

db.income.aggregate(
	{ $match: { income: '$50,000+' } },
	{
		$group: {
			_id: { income: '$income', income_groups: '$income_groups' },
			count: { $sum: 1 },
		},
	},
	{ $sort: { count: 1 } }
);

db.income.aggregate(
	{ $match: { income: '$50,000+' } },
	{
		$group: {
			_id: { income: '$income', education_level: '$education_level', income_groups: '$income_groups' },
			count: { $sum: 1 },
		},
	},
	{ $sort: { count: 1 } }
);
// { $group: { _id: { mortgage_indicator: '$mortgage_indicator' }, number: { $sum: 1 } } },
// { $group: { _id: '$_id.mortgage_indicator', number: { $sum: 1 } } }
db.income.aggregate([
	{
		$group: {
			_id: '$county',
			count: { $sum: 1 },
		},
	},
]);

db.income.aggregate(
	{
		$group: {
			_id: { income: '$income', education_level: '$education_level' },
			count: { $sum: 1 },
		},
	},
	{ $sort: { count: 1 } }
);

db.income.aggregate(
	{
		$group: {
			_id: { income: '$income' },
			count: { $sum: 1 },
		},
	},
	{ $sort: { count: 1 } }
);

db.income
	.aggregate(
		{
			$group: {
				_id: { income: '$income', income_groups: '$income_groups' },
				count: { $sum: 1 },
			},
		},
		{ $sort: { count: 1 } }
	)
	.pretty();

db.income
	.aggregate(
		{
			$group: {
				_id: { income: '$income', income_groups: '$income_groups' },
				count: { $sum: 1 },
			},
		},
		{ $sort: { count: -1 } }
	)
	.pretty();
