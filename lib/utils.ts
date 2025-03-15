import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const slugify = (input: string): string => {
	return input
		.toLowerCase() // Convert to lowercase
		.trim() // Remove leading/trailing whitespace
		.replace(/[^\w\s-]/g, "") // Remove special characters
		.replace(/[\s+]+/g, "-") // Replace spaces and "+" with "-"
		.replace(/-+/g, "-"); // Collapse multiple hyphens
};
