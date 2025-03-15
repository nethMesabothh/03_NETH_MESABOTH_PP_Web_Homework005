import { BookCategories, CartoonCategories } from "@/types/type";
import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

type props = {
	bookCategories: BookCategories[];
	selectCategory: string;
	handleCategoryChange: (category: string) => void;
};

const FilterBook = ({
	bookCategories,
	selectCategory,
	handleCategoryChange,
}: props) => {
	return (
		<>
			<h1 className="py-3 px-4 bg-custom-primary text-custom-secondary rounded-lg text-center">
				{selectCategory === "all"
					? "All Books"
					: bookCategories.find((category) => category.id === +selectCategory)
							?.book_cate_name || "All Books"}
			</h1>
			<Select value={selectCategory} onValueChange={handleCategoryChange}>
				<SelectTrigger className="w-[280px]">
					<SelectValue placeholder="Category" />
				</SelectTrigger>
				<SelectContent className="h-[290px]">
					<SelectItem value="all" className="font-bold">
						All Categories
					</SelectItem>
					<SelectSeparator /> {/* Divider */}
					{bookCategories.map((category) => {
						return (
							<SelectItem key={category.id} value={category.id + ""}>
								{category.book_cate_name}
							</SelectItem>
						);
					})}
				</SelectContent>
			</Select>
		</>
	);
};

export default FilterBook;
