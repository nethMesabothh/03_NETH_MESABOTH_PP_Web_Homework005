import BookComponent from "@/components/book-component";
import Search from "@/components/search";
import { getAllBooks, getAllCategoriesBooks } from "@/services/services";

const Book = async ({
	searchParams,
}: {
	searchParams: Promise<{ query: string }>;
}) => {
	const books = await getAllBooks();
	const bookCategories = await getAllCategoriesBooks();
	const { query } = await searchParams;

	return (
		<>
			<Search page="book-categories" query={query} />
			<BookComponent
				initialBooks={books.payload}
				bookCategories={bookCategories.payload}
				query={query}
			/>
		</>
	);
};

export default Book;
