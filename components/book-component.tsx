"use client";

import React, { useEffect, useState } from "react";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { BookCategories, BookType } from "@/types/type";
import FilterBook from "./filterBook";
import { Loader2 } from "lucide-react";

type props = {
	initialBooks: BookType[];
	bookCategories: BookCategories[];
	query: string;
};

const BookComponent = ({ initialBooks, bookCategories, query }: props) => {
	const [selectCategory, setSelectCategory] = useState("all");
	const [filteredBook, setFilteredBook] = useState<BookType[]>(initialBooks);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (selectCategory === "all") {
			setFilteredBook(initialBooks);
		} else {
			setIsLoading(true);
			setTimeout(() => {
				const filtered = initialBooks.filter(
					(book) => book.book_cate_id === +selectCategory
				);
				setFilteredBook(filtered);
				setIsLoading(false);
			}, 300);
		}
		return () => {};
	}, [selectCategory, initialBooks]);

	useEffect(() => {
		if (query) {
			setIsLoading(true);
			setTimeout(() => {
				const filtered = initialBooks.filter((book) =>
					book.book_title
						.toLowerCase()
						.trim()
						.includes(query.toLowerCase().trim())
				);
				setFilteredBook(filtered);
				setIsLoading(false);
			}, 300);
		}
		return () => {};
	}, [query]);

	const handleCategoryChange = (category: string) => {
		setSelectCategory(category);
		console.log(category);
	};

	return (
		<Card>
			<CardContent className="h-[48rem] rounded-2xl overflow-y-scroll">
				<div className="flex justify-between items-center">
					<FilterBook
						bookCategories={bookCategories}
						handleCategoryChange={handleCategoryChange}
						selectCategory={selectCategory}
					/>
				</div>
				<Separator className="my-2 border-[#087e8b] border-1" />
				{isLoading ? (
					<Loader2 className="h-8 w-8 animate-spin text-[#087e8b]" />
				) : (
					<div className="grid grid-cols-2 max-sm:grid-cols-1 gap-14 sm:mt-20">
						{filteredBook.map((book) => {
							return (
								<div
									key={book.id}
									className="bg-custom-primary rounded-xl flex gap-10 px-5 py-4"
								>
									<div className="relative flex max-sm:flex-col">
										{/* Image & Read more */}
										<div className="flex justify-center items-center gap-4 sm:flex-col sm:flex-1.5 sm:absolute sm:-top-15">
											<Image
												src={book.image}
												alt={book.book_title}
												width={160}
												height={150}
												className="object-cover rounded-lg sm:w-[150px] sm:h-[185px] sm:object-top shadow-xl drop-shadow-xl"
											/>
											<Link
												href={{
													pathname: `/read-full-article/${book.id}`,
													query: {
														type: "book",
														name: "book categories",
														title: book.book_title,
													},
												}}
												scroll={false}
												className="uppercase text-center mx-2 rounded-lg bg-custom-third text-gray-700 sm:text-sm sm:p-2 p-1"
											>
												Read full article
											</Link>
										</div>
										{/* Title & Description */}
										<div className="flex flex-col gap-2 mx-2 mt-3 sm:flex-1 sm:ml-[11rem]">
											<h1 className="line-clamp-1 sm:text-lg">
												{book.book_title}
											</h1>
											<p className="line-clamp-5 text-xs text-muted-foreground leading-6">
												{book.description}
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				)}
			</CardContent>
		</Card>
	);
};

export default BookComponent;
