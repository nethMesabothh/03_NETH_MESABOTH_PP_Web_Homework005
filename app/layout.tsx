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
			{/* <head>
				<script
					crossOrigin="anonymous"
					src="//unpkg.com/react-scan/dist/auto.global.js"
				/>
			</head> */}
			<body className={`${font.variable} antialiased`}>{children}</body>
		</html>
	);
}
