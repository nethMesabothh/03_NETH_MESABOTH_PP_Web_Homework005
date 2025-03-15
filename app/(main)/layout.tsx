import Search from "@/components/search";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="mt-4 ml-17 flex flex-col gap-5 w-full mr-10">
			<Search />
			{children}
		</div>
	);
};

export default MainLayout;
