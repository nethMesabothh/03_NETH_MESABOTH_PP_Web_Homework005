import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { TagIcon } from "lucide-react";
import Search from "@/components/search";

export default function Home() {
	return (
		<>
			<Search query="" page="" />
			{/* Main Content Homepage */}
			<Card>
				<CardContent className="w-full">
					<h1 className="py-3 px-4 bg-custom-primary text-custom-secondary rounded-lg text-center">
						Homepage
					</h1>
					<Separator className="my-2 border-[#087e8b] border-1" />
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  md:gap-4 lg:gap-2  place-items-center mt-5 items-center">
						<Link
							href="/book-categories"
							className="relative w-[20rem] h-[24rem] group max-sm:w-[15rem] max-sm:h-[20rem]"
						>
							<Image
								src="/book-cover.png"
								alt=""
								fill
								className="object-center rounded-2xl transition-transform duration-300 hover:scale-99"
							/>
							{/* Overlay */}
							<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-2xl" />
							<div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300 z-20">
								<h3 className="text-white font-semibold text-center text-3xl leading-12">
									View All <br /> Available <br /> Books
								</h3>
							</div>
							{/* Genre Tag */}
							<div className="absolute z-40 top-2 left-2  bg-white rounded-xl flex py-1 px-3 text-custom-secondary items-center justify-center gap-1 font-semibold">
								<TagIcon className="size-4" />
								<span className="text-xs">Book</span>
							</div>
						</Link>
						<Link
							href="/old-school-cartoons"
							className="relative w-[20rem] h-[24rem] group max-sm:w-[15rem] max-sm:h-[20rem]"
						>
							<Image
								src="/cartoon-cover.jpg"
								alt=""
								fill
								className="object-center rounded-2xl transition-transform duration-300 hover:scale-99"
							/>
							{/* Overlay */}
							<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-2xl" />
							<div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300 z-20">
								<h3 className="text-white font-semibold text-center text-3xl leading-12">
									View All <br /> Available <br /> Cartoons
								</h3>
							</div>
							{/* Genre Tag */}
							<div className="absolute z-60 top-2 left-2  bg-white rounded-xl flex py-1 px-3 text-custom-secondary items-center justify-center gap-1 font-semibold">
								<TagIcon className="size-4" />
								<span className="text-xs">Cartoon</span>
							</div>
						</Link>
					</div>
				</CardContent>
			</Card>
		</>
	);
}
