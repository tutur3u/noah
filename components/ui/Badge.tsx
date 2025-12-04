"use client";

import type { CSSProperties } from "react";

interface BadgeProps {
	children: string;
	variant?: "cyan" | "orange";
	className?: string;
	style?: CSSProperties;
}

export function Badge({
	children,
	variant = "cyan",
	className = "",
	style,
}: BadgeProps) {
	const borderColor =
		variant === "orange"
			? "rgba(249, 115, 22, 0.5)"
			: "rgba(6, 182, 212, 0.5)";
	const textColor =
		variant === "orange" ? "var(--brand-orange)" : "var(--brand-cyan)";

	return (
		<span
			className={className}
			style={{
				display: "inline-flex",
				alignItems: "center",
				gap: "0.5rem",
				padding: "0.5rem 1rem",
				borderRadius: "4px",
				border: `1px solid ${borderColor}`,
				background: "rgba(6, 182, 212, 0.1)",
				color: textColor,
				fontSize: "0.75rem",
				fontWeight: 500,
				textTransform: "uppercase",
				letterSpacing: "0.1em",
				fontFamily: "monospace",
				...style,
			}}
		>
			{children}
		</span>
	);
}
