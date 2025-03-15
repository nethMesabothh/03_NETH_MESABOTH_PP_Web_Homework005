import CartoonComponent from "@/components/cartoon-component";
import { getAllCartoons, getAllCategoriesCartoon } from "@/services/services";

const Cartoon = async () => {
	const cartoons = await getAllCartoons();
	const cartoonCategories = await getAllCategoriesCartoon();

	return (
		<CartoonComponent
			initialCartoons={cartoons.payload}
			cartoonCategories={cartoonCategories.payload}
		/>
	);
};

export default Cartoon;
