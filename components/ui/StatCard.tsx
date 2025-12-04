"use client";

import type { RefObject } from "react";

interface StatCardProps {
	value: number | string;
	label: string;
	prefix?: string;
	suffix?: string;
	counterRef?: RefObject<HTMLDivElement | null>;
}

export function StatCard({
	value,
	label,
	prefix = "",
	suffix = "",
	counterRef,
}: StatCardProps) {
	return (
		<div
			ref={counterRef}
			className="glass-panel hover-lift"
			style={{
				padding: "1.5rem",
				textAlign: "center",
				borderRadius: "8px",
			}}
		>
			<div
				style={{
					fontSize: "2.5rem",
					fontWeight: 700,
					color: "var(--brand-orange)",
					fontFamily: "var(--font-display)",
					marginBottom: "0.5rem",
					textShadow: "0 0 20px rgba(249, 115, 22, 0.5)",
				}}
			>
				{prefix}
				{value}
				{suffix}
			</div>
			<div
				style={{
					fontSize: "0.85rem",
					color: "var(--text-secondary)",
					textTransform: "uppercase",
					letterSpacing: "0.05em",
				}}
			>
				{label}
			</div>
		</div>
	);
}
