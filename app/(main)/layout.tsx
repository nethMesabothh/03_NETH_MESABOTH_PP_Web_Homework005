import Search from "@/components/search";
import Sidebar from "@/components/sidebar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<div className="flex">
				<Sidebar />
				<div className="mt-4 ml-17 flex flex-col gap-5 w-full mr-10">
					{children}
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
