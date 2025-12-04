"use client";

import { useLanguage } from "../context/LanguageContext";

export function SDG() {
	const { t } = useLanguage();

	const sdgs = [
		{
			num: t.sdg.sdg11,
			title: t.sdg.sdg11Title,
			desc: t.sdg.sdg11Desc,
			color: "#F59E0B",
			glowColor: "rgba(245, 158, 11, 0.3)",
		},
		{
			num: t.sdg.sdg13,
			title: t.sdg.sdg13Title,
			desc: t.sdg.sdg13Desc,
			color: "#10B981",
			glowColor: "rgba(16, 185, 129, 0.3)",
		},
	];

	return (
		<section
			style={{
				padding: "6rem 0",
				background: "var(--brand-dark)",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Subtle gradient glow */}
			<div
				style={{
					position: "absolute",
					bottom: "-100px",
					left: "50%",
					transform: "translateX(-50%)",
					width: "600px",
					height: "300px",
					borderRadius: "50%",
					background:
						"radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
					filter: "blur(60px)",
				}}
			/>

			<div
				style={{
					maxWidth: "1000px",
					margin: "0 auto",
					padding: "0 2rem",
					position: "relative",
				}}
			>
				{/* HUD Section Header */}
				<div style={{ textAlign: "center", marginBottom: "3rem" }}>
					<div
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: "0.75rem",
							padding: "0.5rem 1rem",
							border: "1px solid rgba(16, 185, 129, 0.3)",
							background: "rgba(16, 185, 129, 0.1)",
							marginBottom: "1rem",
						}}
					>
						<div
							style={{
								width: "8px",
								height: "8px",
								background: "var(--brand-success)",
								animation: "pulse-slow 2s ease-in-out infinite",
							}}
						/>
						<span
							style={{
								fontSize: "0.75rem",
								fontWeight: 600,
								color: "var(--brand-success)",
								textTransform: "uppercase",
								letterSpacing: "0.1em",
							}}
						>
							{t.sdg.badge}
						</span>
					</div>
					<h2
						style={{
							fontSize: "clamp(2rem, 4vw, 3rem)",
							fontWeight: 700,
							color: "var(--text-primary)",
							letterSpacing: "0.05em",
						}}
					>
						{t.sdg.title}
					</h2>
				</div>

				<div className="sdg-grid">
					{sdgs.map((sdg) => (
						<div
							key={sdg.num}
							className="glass-panel"
							style={{
								padding: "2rem",
								position: "relative",
								display: "flex",
								gap: "1.5rem",
								alignItems: "flex-start",
							}}
						>
							{/* HUD corners */}
							<div
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "15px",
									height: "15px",
									borderTop: `2px solid ${sdg.color}`,
									borderLeft: `2px solid ${sdg.color}`,
								}}
							/>
							<div
								style={{
									position: "absolute",
									bottom: 0,
									right: 0,
									width: "15px",
									height: "15px",
									borderBottom: `2px solid ${sdg.color}`,
									borderRight: `2px solid ${sdg.color}`,
								}}
							/>
							{/* SDG Number with glow ring */}
							<div style={{ position: "relative", flexShrink: 0 }}>
								{/* Glow ring */}
								<div
									style={{
										position: "absolute",
										inset: "-8px",
										borderRadius: "50%",
										border: `2px solid ${sdg.glowColor}`,
										animation: "pulse-slow 3s ease-in-out infinite",
									}}
								/>
								<div
									style={{
										width: "70px",
										height: "70px",
										borderRadius: "50%",
										background: `linear-gradient(135deg, ${sdg.color}, ${sdg.color}99)`,
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
										border: `2px solid ${sdg.color}`,
										boxShadow: `0 0 20px ${sdg.glowColor}`,
									}}
								>
									<span
										style={{
											fontSize: "1.5rem",
											fontWeight: 700,
											color: "white",
										}}
									>
										{sdg.num.replace("SDG ", "")}
									</span>
								</div>
							</div>
							<div>
								<div
									style={{
										fontFamily: "monospace",
										fontSize: "0.65rem",
										color: sdg.color,
										marginBottom: "0.5rem",
										letterSpacing: "0.1em",
									}}
								>
									[{sdg.num}]
								</div>
								<h3
									style={{
										fontSize: "1.15rem",
										fontWeight: 600,
										marginBottom: "0.5rem",
										color: "var(--text-primary)",
									}}
								>
									{sdg.title}
								</h3>
								<p
									style={{
										fontSize: "0.9rem",
										color: "var(--text-secondary)",
										lineHeight: 1.7,
									}}
								>
									{sdg.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
