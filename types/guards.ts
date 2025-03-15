import { BookType, CartoonType } from "./type";

export const isBook = (
	content: BookType | CartoonType
): content is BookType => {
	return "book_title" in content;
};

export const isCartoon = (
	content: BookType | CartoonType
): content is CartoonType => {
	return "ct_title" in content;
};
