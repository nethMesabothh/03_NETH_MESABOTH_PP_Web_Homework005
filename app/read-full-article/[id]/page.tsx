import BreadCrumb from "@/components/breadcrumb";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getBookORCartoonByTypeAndId } from "@/services/services";
import { isBook } from "@/types/guards";
import { Separator } from "@radix-ui/react-separator";
import { Eye, EyeIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type SearchParams = {
	type: string;
	name: string;
	title: string;
};

const ReadDetail = async ({
	params,
	searchParams,
}: {
	params: Promise<{ id: string }>;
	searchParams: Promise<SearchParams>;
}) => {
	const { id } = await params;
	const { title, type, name } = await searchParams;

	const data = await getBookORCartoonByTypeAndId(+id, type);
	const payload = data.payload;

	return (
		<div>
			<BreadCrumb name={name} title={title} />
			{isBook(payload) ? (
				<div className="mt-30">
					<Card>
						<CardContent>
							<div className="flex max-sm:flex-col justify-center items-center space-y-2 sm:flex-row-reverse relative pt-40 max-sm:pt-0">
								<Image
									src={payload.image}
									alt={payload.book_title}
									width={250}
									height={250}
									className="rounded-xl sm:absolute -top-30 right-0 sm:w-[200px]"
								/>
								<div className="space-y-2 max-sm:mt-4">
									<h1 className="text-lg">{payload.book_title}</h1>
									<h2 className="text-sm">
										by :{" "}
										<span className="text-custom-secondary">
											{payload.book_author}
										</span>
									</h2>
									<p className="text-xs leading-5 text-muted-foreground">
										{payload.description}
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			) : (
				<div className="mt-30">
					<Card>
						<CardContent>
							<div className="flex max-sm:flex-col justify-center items-center space-y-2 sm:flex-row-reverse relative pt-40 max-sm:pt-0">
								<Image
									src={payload.image}
									alt={payload.ct_title}
									width={250}
									height={250}
									className="rounded-xl sm:absolute -top-15 right-5 sm:w-[200px]"
								/>
								<div className="space-y-2 max-sm:mt-4">
									<h1 className="text-lg">{payload.ct_title}</h1>
									<h2 className="text-sm">
										by :{" "}
										<span className="text-custom-secondary">
											{payload.ct_creator}
										</span>
									</h2>
									<div className="flex items-center space-x-2 text-custom-secondary">
										<EyeIcon className="size-4" />
										<h3 className="text-sm">{payload.view_count} times</h3>
										<Separator
											className="h-4 border-l-2 border-[#087e8b]"
											orientation="vertical"
										/>
										<h3 className="text-sm">
											{payload.published_year.split("-")[0]}
										</h3>
									</div>
									<p className="text-xs leading-5 text-muted-foreground">
										{payload.ct_description}
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			)}
		</div>
	);
};

export default ReadDetail;
