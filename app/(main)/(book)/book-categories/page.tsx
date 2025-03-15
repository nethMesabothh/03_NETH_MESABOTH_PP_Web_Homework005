import BookComponent from "@/components/book-component";
import { getAllBooks, getAllCategoriesBooks } from "@/services/services";

const Book = async () => {
	const books = await getAllBooks();
	const bookCategories = await getAllCategoriesBooks();

	return (
		<BookComponent
			initialBooks={books.payload}
			bookCategories={bookCategories.payload}
		/>
	);
};

export default Book;
