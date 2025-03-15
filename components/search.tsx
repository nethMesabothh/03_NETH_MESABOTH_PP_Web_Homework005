import React from "react";
import { Input } from "@/components/ui/input";
import Form from "next/form";

const Search = () => {
	return (
		<Form action={"/"} scroll={false}>
			<Input
				name="query"
				className="w-full"
				placeholder="Search anything you want to..."
			/>
		</Form>
	);
};

export default Search;
