"use client";

import type { ReactNode, CSSProperties } from "react";

interface GlassPanelProps {
	children: ReactNode;
	variant?: "cyan" | "orange";
	className?: string;
	style?: CSSProperties;
	hover?: boolean;
}

export function GlassPanel({
	children,
	variant = "cyan",
	className = "",
	style,
	hover = false,
}: GlassPanelProps) {
	const baseClass = variant === "orange" ? "glass-panel-orange" : "glass-panel";
	const hoverClass = hover ? "hover-lift" : "";

	return (
		<div
			className={`${baseClass} ${hoverClass} ${className}`}
			style={style}
		>
			{children}
		</div>
	);
}
