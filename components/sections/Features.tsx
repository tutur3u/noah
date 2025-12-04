"use client";

import { useLanguage } from "../context/LanguageContext";

export function Features() {
	const { t } = useLanguage();

	const features = [
		{
			icon: "📍",
			...t.features.gps,
			color: "var(--brand-success)",
			image: "/gps-tracking-app.png",
		},
		{
			icon: "💧",
			...t.features.water,
			color: "var(--brand-cyan)",
			image: "/Ông lọc nước - Sản phẩm.png",
		},
		{
			icon: "🍱",
			...t.features.food,
			color: "var(--brand-orange)",
			image: "/MRE Packaging.png",
		},
		{
			icon: "🔦",
			...t.features.light,
			color: "var(--brand-blue)",
			image: "/mock-2.png",
		},
	];

	return (
		<section
			style={{
				padding: "6rem 0",
				background: "var(--brand-surface)",
				position: "relative",
			}}
		>
			<div
				className="tech-grid"
				style={{ position: "absolute", inset: 0, opacity: 0.3 }}
			/>

			<div
				style={{
					maxWidth: "1400px",
					margin: "0 auto",
					padding: "0 2rem",
					position: "relative",
				}}
			>
				<h2
					style={{
						fontSize: "clamp(2rem, 5vw, 3rem)",
						fontWeight: 700,
						textAlign: "center",
						marginBottom: "4rem",
						color: "var(--text-primary)",
						letterSpacing: "0.05em",
					}}
				>
					{t.features.title}
				</h2>

				<div className="features-grid">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="glass-panel hover-lift feature-card"
							style={{
								borderRadius: "8px",
								overflow: "hidden",
							}}
						>
							<div style={{ padding: "1.5rem" }}>
								<div
									style={{
										width: "50px",
										height: "50px",
										borderRadius: "8px",
										background: `linear-gradient(135deg, ${feature.color}20, transparent)`,
										border: `1px solid ${feature.color}40`,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "1.5rem",
										marginBottom: "1.25rem",
									}}
								>
									{feature.icon}
								</div>
								<h3
									style={{
										fontSize: "1.1rem",
										fontWeight: 600,
										marginBottom: "0.75rem",
										color: "var(--text-primary)",
									}}
								>
									{feature.title}
								</h3>
								<p
									style={{
										fontSize: "0.85rem",
										lineHeight: 1.6,
										color: "var(--text-secondary)",
										marginBottom: "1.25rem",
									}}
								>
									{feature.desc}
								</p>
								<div
									style={{
										display: "flex",
										flexWrap: "wrap",
										gap: "0.4rem",
									}}
								>
									{feature.specs.map((spec) => (
										<span
											key={spec}
											style={{
												padding: "0.3rem 0.6rem",
												background: `${feature.color}15`,
												border: `1px solid ${feature.color}30`,
												color: feature.color,
												borderRadius: "2px",
												fontSize: "0.7rem",
												fontWeight: 500,
												fontFamily: "monospace",
											}}
										>
											{spec}
										</span>
									))}
								</div>
							</div>
							<div
								className="feature-card-image"
								style={{
									background: "var(--brand-dark)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									padding: "1rem",
									position: "relative",
								}}
							>
								{/* HUD corners */}
								<div
									style={{
										position: "absolute",
										top: "8px",
										left: "8px",
										width: "12px",
										height: "12px",
										borderTop: "2px solid var(--brand-cyan)",
										borderLeft: "2px solid var(--brand-cyan)",
									}}
								/>
								<div
									style={{
										position: "absolute",
										bottom: "8px",
										right: "8px",
										width: "12px",
										height: "12px",
										borderBottom: "2px solid var(--brand-cyan)",
										borderRight: "2px solid var(--brand-cyan)",
									}}
								/>
								<img
									src={feature.image}
									alt={feature.title}
									style={{
										maxWidth: "100%",
										maxHeight: "160px",
										objectFit: "contain",
										borderRadius: "4px",
									}}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
