"use client";

import React, { useState } from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { slugify } from "@/lib/utils";
import { BookOpen, BookType, HomeIcon, Link } from "lucide-react";

type props = {
	name: string;
	title: string;
};

const BreadCrumb = ({ name, title }: props) => {
	const [isHoveredHome, setIsHoveredHome] = useState(false);
	const [isHoveredCategories, setIsHoveredCategories] = useState(false);

	return (
		<Breadcrumb className="ml-10">
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink
						href="/"
						className=" flex justify-center items-center gap-2 hover:text-custom-secondary"
						onMouseEnter={() => setIsHoveredHome(true)}
						onMouseLeave={() => setIsHoveredHome(false)}
					>
						{isHoveredHome ? (
							<Link className="size-4" />
						) : (
							<HomeIcon className="size-4" />
						)}
						Home
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink
						href={`/${slugify(name)}`}
						className="capitalize flex justify-center items-center gap-2 hover:text-custom-secondary"
						onMouseEnter={() => setIsHoveredCategories(true)}
						onMouseLeave={() => setIsHoveredCategories(false)}
					>
						{isHoveredCategories ? (
							<Link className="size-4" />
						) : (
							<BookType className="size-4" />
						)}
						{name}
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage className="text-custom-icon flex items-center justify-center gap-2">
						<BookOpen className="size-4" />
						{title}
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
};

export default BreadCrumb;
