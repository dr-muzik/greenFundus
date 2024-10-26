export interface Iform {
	username?: string;
	email?: string;
	password?: string;
}

export interface IActiveNavLink {
	activeLink: string;
}

export interface IFilters {
	list: string[];
	filterType: string;
}

export interface ICard {
	imageUrl: string;
	productName: string;
	amount: string;
	description: string;
}

export interface IproductCard {
	product: ICard;
}
