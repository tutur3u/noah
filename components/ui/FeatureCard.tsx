"use client";

interface FeatureCardProps {
	icon: string;
	title: string;
	description: string;
	specs: string[];
}

export function FeatureCard({ icon, title, description, specs }: FeatureCardProps) {
	return (
		<div
			className="glass-panel hover-lift"
			style={{
				padding: "1.5rem",
				borderRadius: "12px",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: "1rem",
					marginBottom: "1rem",
				}}
			>
				<div
					style={{
						width: "48px",
						height: "48px",
						borderRadius: "8px",
						background: "rgba(6, 182, 212, 0.2)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						fontSize: "1.5rem",
					}}
				>
					{icon}
				</div>
				<h3
					style={{
						fontSize: "1.1rem",
						fontWeight: 600,
						color: "var(--text-primary)",
					}}
				>
					{title}
				</h3>
			</div>
			<p
				style={{
					fontSize: "0.9rem",
					color: "var(--text-secondary)",
					lineHeight: 1.6,
					marginBottom: "1rem",
				}}
			>
				{description}
			</p>
			<div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
				{specs.map((spec) => (
					<span
						key={spec}
						style={{
							padding: "0.25rem 0.75rem",
							borderRadius: "4px",
							background: "rgba(6, 182, 212, 0.15)",
							border: "1px solid rgba(6, 182, 212, 0.3)",
							fontSize: "0.75rem",
							color: "var(--brand-cyan)",
							fontFamily: "monospace",
						}}
					>
						{spec}
					</span>
				))}
			</div>
		</div>
	);
}
