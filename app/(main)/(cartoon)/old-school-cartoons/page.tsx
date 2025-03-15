import CartoonComponent from "@/components/cartoon-component";
import Search from "@/components/search";
import { getAllCartoons, getAllCategoriesCartoon } from "@/services/services";

const Cartoon = async ({
	searchParams,
}: {
	searchParams: Promise<{ query: string }>;
}) => {
	const cartoons = await getAllCartoons();
	const cartoonCategories = await getAllCategoriesCartoon();
	const { query } = await searchParams;

	return (
		<>
			<Search page="old-school-cartoons" query={query} />
			<CartoonComponent
				initialCartoons={cartoons.payload}
				cartoonCategories={cartoonCategories.payload}
				query={query}
			/>
		</>
	);
};

export default Cartoon;
