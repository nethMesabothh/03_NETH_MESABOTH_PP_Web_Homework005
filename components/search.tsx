"use client";
import { Input } from "@/components/ui/input";
import Form from "next/form";
import { Button } from "./ui/button";
import { Loader2, SearchIcon } from "lucide-react";
import { useFormStatus } from "react-dom";
import { SearchReset } from "./search-reset";

type props = {
	page: string;
	query: string;
};

const SearchButton = () => {
	const { pending } = useFormStatus();

	return (
		<Button
			type="submit"
			variant="link"
			className="cursor-pointer"
			disabled={pending}
		>
			{pending ? (
				<Loader2 className="size-5 animate-spin" />
			) : (
				<SearchIcon className="size-5" />
			)}
		</Button>
	);
};

const SearchInput = ({ query }: { query: string }) => {
	const { pending } = useFormStatus();

	return (
		<Input
			name="query"
			className="w-full"
			placeholder="Search anything you want to..."
			disabled={pending}
			defaultValue={query}
		/>
	);
};

const Search = ({ page, query }: props) => {
	return (
		<Form action={`/${page}`} scroll={false} className="flex items-center">
			<SearchInput query={query} />
			{query && <SearchReset page={page} />}
			<SearchButton />
		</Form>
	);
};

export default Search;
