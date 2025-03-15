"use client";

import { X } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

export const SearchReset = ({ page }: { page: string }) => {
	const router = useRouter();
	const { pending } = useFormStatus();

	const handleReset = () => {
		router.push(`/${page}`);
	};

	return (
		<Button
			type="reset"
			variant="ghost"
			onClick={handleReset}
			className="cursor-pointer"
			disabled={pending}
		>
			<X className="size-5" />
		</Button>
	);
};
