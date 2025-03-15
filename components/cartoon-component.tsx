"use client";

import React, { useEffect, useState } from "react";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import FilterCartoon from "@/components/filterCartoon";
import { CartoonCategories, CartoonType } from "@/types/type";

type props = {
	initialCartoons: CartoonType[];
	cartoonCategories: CartoonCategories[];
};

const CartoonComponent = ({ initialCartoons, cartoonCategories }: props) => {
	const [selectCategory, setSelectCategory] = useState("all");
	const [filteredCartoon, setFilteredCartoon] =
		useState<CartoonType[]>(initialCartoons);

	useEffect(() => {
		if (selectCategory === "all") {
			setFilteredCartoon(initialCartoons);
		} else {
			const filtered = initialCartoons.filter(
				(cartoon) => cartoon.ct_genre_id === +selectCategory
			);
			setFilteredCartoon(filtered);
		}
	}, [selectCategory, initialCartoons]);

	const handleCategoryChange = (category: string) => {
		setSelectCategory(category);
		console.log(category);
	};

	return (
		<Card>
			<CardContent>
				<div className="flex justify-between items-center">
					<FilterCartoon
						cartoonCategories={cartoonCategories}
						handleCategoryChange={handleCategoryChange}
						selectCategory={selectCategory}
					/>
				</div>
				<Separator className="my-2 border-[#087e8b] border-1" />
				<div className="grid grid-cols-2 max-sm:grid-cols-1 gap-14 mt-10 max-sm:place-items-center">
					{filteredCartoon.map((cartoon) => {
						return (
							<Link
								key={cartoon.id}
								href={{
									pathname: `/read-full-article/${cartoon.id}`,
									query: {
										type: "cartoon",
										name: "old school cartoons",
										title: cartoon.ct_title,
									},
								}}
							>
								<div className="flex w-full gap-4 flex-col items-center justify-center sm:items-start">
									<Image
										src={cartoon.image}
										alt={cartoon.ct_title}
										width={200}
										height={200}
										className="object-cover rounded-lg sm:w-[300px] sm:object-center shadow-xl drop-shadow-xl"
									/>
									<div className="flex flex-col justify-center">
										<h1 className="max-sm:mt-1 font-semibold">
											{cartoon.ct_title}
										</h1>
										<div className="flex gap-2 mt-1 text-sm items-center text-custom-secondary space-x-2">
											<div className="flex gap-1">
												<EyeIcon className="size-5" />
												<span>{cartoon.view_count} times</span>
											</div>
											<Separator
												orientation="vertical"
												className="border-1 h-4"
											/>
											<span>{cartoon.published_year.split("-")[0]}</span>
										</div>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</CardContent>
		</Card>
	);
};

export default CartoonComponent;
