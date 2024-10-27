import { ICard } from '../interfaces/interface';

export const navLinks = ['Home', 'Products', 'Insurance', 'Payments', 'Community'];

export const navLinksTwo = ['Settings', 'Security'];

export const show = ['All Products', 'Vegetable', 'Milk'];
export const sortedBy1 = ['Low Prices', 'High Prices'];
export const sortedBy2 = ['Insurance', 'Morgage'];

export const productCard: ICard[] = [
	{
		imageUrl: '/images/tomatoes.png',
		amount: '$30/litre',
		productName: 'Organic Tomatoes',
		description:
			'Fresh, juicy organic tomatoes, grown without pesticides. Perfect for salads, sauces, or sandwiches.',
	},
	{
		imageUrl: '/images/eggs.png',
		amount: '$30/litre',
		productName: 'Free-range-eggs',
		description:
			'Eggs from free-range chickens, offering rich flavor and golden yolks. Ideal for baking or a hearty breakfast.',
	},
	{
		imageUrl: '/images/honey.png',
		amount: '$10/litre',
		productName: 'Raw Honey',
		description:
			'Pure honey collected from local bees, rich in natural enzymes. Great as a sweetener or spread',
	},
	{
		imageUrl: '/images/potatoes.png',
		amount: '$300',
		productName: 'Sweet Potatoes',
		description:
			'Potatoes with a naturally sweet flavor, rich in fiber and vitamin A. Ideal for roasting, mashing, or baking',
	},
	{
		imageUrl: '/images/berry.png',
		amount: '$300',
		productName: 'Fresh StrawBerries',
		description:
			'Sweet and juicy strawberries, hand-picked at peak ripeness. Perfect for snacking, desserts, or making jam',
	},
	{
		imageUrl: '/images/carrot.png',
		amount: '$300',
		productName: 'Organic Carrots',
		description:
			'Crunchy organic carrots, rich in beta-carotene and antioxidants. Ideal for snacking, salads, and soups',
	},
	{
		imageUrl: '/images/milk.png',
		amount: '$300',
		productName: 'Almond Milk',
		description:
			'Homemade milk from raw, organic almonds. Dairy-free and perfect for smoothies, cereals, and baking.',
	},
];
