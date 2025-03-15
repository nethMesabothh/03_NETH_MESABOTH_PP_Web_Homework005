import {
	ApiResponse,
	ApiResponseOfCartoon,
	ApiResponsesOfBookCategories,
	ApiResponsesOfCartoon,
	ApiResponsesOfCartoonCategories,
	BookType,
	CartoonType,
} from "@/types/type";
import { ApiResponseOfBook, ApiResponsesOfBook } from "@/types/type";

export const getAllBooks = async () => {
	const response = await fetch(
		"https://nextjs-homework005.vercel.app/api/book"
	);

	const books: ApiResponsesOfBook = await response.json();

	return books;
};

export const getAllCartoons = async () => {
	const response = await fetch(
		"https://nextjs-homework005.vercel.app/api/cartoon"
	);

	const cartoons: ApiResponsesOfCartoon = await response.json();

	return cartoons;
};

export const getBookORCartoonByTypeAndId = async (
	id: number,
	type: string
): Promise<ApiResponse<BookType | CartoonType>> => {
	const response = await fetch(
		`https://nextjs-homework005.vercel.app/api/${type}/${id}`
	);

	const data = (await response.json()) as
		| ApiResponseOfBook
		| ApiResponseOfCartoon;

	const contentType = type === "book" ? "book" : "cartoon";

	return {
		status: response.status,
		message: "Successfully fetch data!",
		type: contentType,
		payload: data.payload,
	};
};

export const getAllCategoriesCartoon = async () => {
	const response = await fetch(
		"https://nextjs-homework005.vercel.app/api/cartoon_genre"
	);

	const cartoonCategories: ApiResponsesOfCartoonCategories =
		await response.json();

	return cartoonCategories;
};

export const getAllCategoriesBooks = async () => {
	const response = await fetch(
		"https://nextjs-homework005.vercel.app/api/book_category"
	);

	const BookCategories: ApiResponsesOfBookCategories = await response.json();

	return BookCategories;
};
