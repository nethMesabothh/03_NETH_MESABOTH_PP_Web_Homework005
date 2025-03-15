export type BookType = {
	id: number;
	created_at: string;
	book_title: string;
	book_author: string;
	description: string;
	image: string;
	book_cate_id: number;
};
export type CartoonType = {
	id: number;
	created_at: string;
	ct_title: string;
	ct_creator: string;
	image: string;
	view_count: number;
	published_year: string;
	ct_description: string;
	ct_genre_id: number;
};

export type CartoonCategories = {
	id: number;
	created_at: string;
	cartoon_genre: string;
};

export type BookCategories = {
	id: number;
	created_at: string;
	book_cate_name: string;
};

export type ApiResponsesOfCartoonCategories = {
	status: number;
	message: string;
	payload: CartoonCategories[];
};

export type ApiResponsesOfBookCategories = {
	status: number;
	message: string;
	payload: BookCategories[];
};

export type ApiResponsesOfBook = {
	status: number;
	message: string;
	payload: BookType[];
};
export type ApiResponseOfBook = {
	status: number;
	message: string;
	payload: BookType;
};

export type ApiResponsesOfCartoon = {
	status: number;
	message: string;
	payload: CartoonType[];
};

export type ApiResponseOfCartoon = {
	status: number;
	message: string;
	payload: CartoonType;
};

export type ApiResponse<T> = {
	status: number;
	message: string;
	type: "book" | "cartoon";
	payload: T;
};
