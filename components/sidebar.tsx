"use client";

import React, { useEffect, useState } from "react";
import { menus } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import { Menu, SettingsIcon, X } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePathname } from "next/navigation";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(true);
	const isLargeScreen = useMediaQuery("(min-width:1024px)");

	useEffect(() => {
		setIsOpen(isLargeScreen);
	}, [isLargeScreen]);

	const pathname = usePathname();

	return (
		<>
			{/* Menu button */}
			{!isOpen && (
				<button
					onClick={() => setIsOpen(true)}
					className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
					aria-label="Open menu"
				>
					<Menu className="h-5 w-5" />
				</button>
			)}

			{/* Overlay */}
			{isOpen && !isLargeScreen && (
				<div
					className="fixed inset-0 bg-black/50 z-40"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Sidebar */}
			<div
				className={`
              fixed top-0 left-0 z-50 
              flex flex-col bg-white w-[22rem] sm:w-[29rem] pt-0 p-8 justify-start items-center min-h-screen 
              transition-all duration-300 ease-linear shadow-lg
              ${isOpen ? "translate-x-0" : "-translate-x-full"}
              ${isLargeScreen && isOpen ? "lg:relative lg:shadow-xs" : ""}
            `}
			>
				<button
					onClick={() => setIsOpen(false)}
					className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
					aria-label="Close menu"
				>
					<X className="h-5 w-5" />
				</button>

				{/* Profile */}
				<div className="flex flex-col gap-3 justify-center items-center mb-6 mt-6">
					<Image src="/profile.png" alt="profile" width={100} height={100} />
					<h2 className="font-semibold">Glorious Purpose</h2>
					<p className="text-custom-secondary">loki@gmail.com</p>
				</div>
				<ul className="flex flex-col gap-2 items-start">
					{menus.map((menu) => {
						const isActive = pathname === menu.link;

						return (
							<li key={menu.name} className="w-full">
								<Link
									href={menu.link}
									className={`flex gap-4 items-center  py-2 px-4 rounded-lg hover:bg-[#F5F7F8] ${
										isActive ? "bg-[#F5F7F8] hover:bg-[#dcdfe1]" : ""
									}`}
									onClick={() => !isLargeScreen && setIsOpen(false)}
								>
									<span className="text-custom-icon">{<menu.icon />}</span>
									<span>{menu.name}</span>
								</Link>
							</li>
						);
					})}
				</ul>
				<div className="mt-4 py-3 px-4 w-[60%] bg-[#F5F7F8] rounded-md flex items-center gap-4 mx-auto">
					<SettingsIcon />
					<span>Settings</span>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
