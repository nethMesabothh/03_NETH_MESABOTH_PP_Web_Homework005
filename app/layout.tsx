import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Search from "@/components/search";

const font = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: "500",
});

export const metadata: Metadata = {
	title: "Homework005-hrd",
	description: "Created by Nethmesaboth",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${font.variable} antialiased`}>
				<div className="flex">
					<Sidebar />
					{children}
				</div>
			</body>
		</html>
	);
}
