import { CartoonCategories } from "@/types/type";
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
	cartoonCategories: CartoonCategories[];
	selectCategory: string;
	handleCategoryChange: (category: string) => void;
};

const FilterCartoon = ({
	cartoonCategories,
	selectCategory,
	handleCategoryChange,
}: props) => {
	return (
		<>
			<h1 className="py-3 px-4 bg-custom-primary text-custom-secondary rounded-lg text-center">
				{selectCategory === "all"
					? "Old School Cartoon"
					: cartoonCategories.find(
							(category) => category.id === +selectCategory
					  )?.cartoon_genre || "Old School Cartoon"}
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
					{cartoonCategories.map((category) => {
						return (
							<SelectItem key={category.id} value={category.id + ""}>
								{category.cartoon_genre}
							</SelectItem>
						);
					})}
				</SelectContent>
			</Select>
		</>
	);
};

export default FilterCartoon;
