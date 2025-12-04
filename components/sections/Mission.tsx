"use client";

import { useLanguage } from "../context/LanguageContext";

export function Mission() {
	const { t } = useLanguage();

	return (
		<section
			id="about"
			style={{
				padding: "6rem 0",
				background: "var(--brand-deep)",
				color: "var(--text-primary)",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Tech Grid Background */}
			<div
				className="tech-grid"
				style={{ position: "absolute", inset: 0, opacity: 0.5 }}
			/>
			{/* Orange gradient glow */}
			<div
				style={{
					position: "absolute",
					top: "-200px",
					right: "-100px",
					width: "400px",
					height: "400px",
					borderRadius: "50%",
					background:
						"radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)",
					filter: "blur(60px)",
				}}
			/>

			<div
				style={{
					maxWidth: "1200px",
					margin: "0 auto",
					padding: "0 2rem",
					position: "relative",
				}}
			>
				{/* HUD Section Header */}
				<div style={{ textAlign: "center", marginBottom: "4rem" }}>
					<div
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: "0.75rem",
							padding: "0.5rem 1rem",
							border: "1px solid rgba(6, 182, 212, 0.3)",
							background: "rgba(6, 182, 212, 0.1)",
							marginBottom: "1rem",
						}}
					>
						<div
							style={{
								width: "8px",
								height: "8px",
								background: "var(--brand-cyan)",
								animation: "pulse-slow 2s ease-in-out infinite",
							}}
						/>
						<span
							style={{
								fontSize: "0.75rem",
								fontWeight: 600,
								color: "var(--brand-cyan)",
								textTransform: "uppercase",
								letterSpacing: "0.1em",
							}}
						>
							{t.mission.badge}
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
						{t.mission.title}
					</h2>
				</div>

				<div className="mission-grid">
					{/* Left: Story + Mission Quote */}
					<div>
						<p
							style={{
								fontSize: "1.1rem",
								lineHeight: 1.9,
								color: "var(--text-secondary)",
								marginBottom: "2rem",
							}}
						>
							{t.mission.story}
						</p>
						{/* Mission quote with orange gradient border */}
						<div
							style={{
								position: "relative",
								padding: "2rem",
								background: "rgba(249, 115, 22, 0.05)",
								borderLeft: "3px solid var(--brand-orange)",
							}}
						>
							{/* HUD corner */}
							<div
								style={{
									position: "absolute",
									top: 0,
									right: 0,
									width: "20px",
									height: "20px",
									borderTop: "2px solid var(--brand-orange)",
									borderRight: "2px solid var(--brand-orange)",
								}}
							/>
							<div
								style={{
									position: "absolute",
									bottom: 0,
									right: 0,
									width: "20px",
									height: "20px",
									borderBottom: "2px solid var(--brand-orange)",
									borderRight: "2px solid var(--brand-orange)",
								}}
							/>
							<p
								style={{
									fontSize: "1.15rem",
									fontStyle: "italic",
									lineHeight: 1.7,
									color: "var(--text-primary)",
								}}
							>
								"{t.mission.mission}"
							</p>
						</div>
					</div>

					{/* Right: Vision + Values Cards */}
					<div style={{ display: "grid", gap: "1.5rem" }}>
						{/* Vision Card */}
						<div
							className="glass-panel"
							style={{ padding: "2rem", position: "relative" }}
						>
							{/* HUD corners */}
							<div
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "15px",
									height: "15px",
									borderTop: "2px solid var(--brand-cyan)",
									borderLeft: "2px solid var(--brand-cyan)",
								}}
							/>
							<div
								style={{
									position: "absolute",
									bottom: 0,
									right: 0,
									width: "15px",
									height: "15px",
									borderBottom: "2px solid var(--brand-cyan)",
									borderRight: "2px solid var(--brand-cyan)",
								}}
							/>
							{/* Label */}
							<div
								style={{
									fontFamily: "monospace",
									fontSize: "0.7rem",
									color: "var(--brand-cyan)",
									marginBottom: "0.75rem",
									letterSpacing: "0.1em",
								}}
							>
								[VISION]
							</div>
							<h3
								style={{
									fontSize: "1.1rem",
									fontWeight: 600,
									marginBottom: "0.75rem",
									color: "var(--brand-cyan)",
								}}
							>
								{t.mission.vision}
							</h3>
							<p
								style={{
									fontSize: "0.95rem",
									color: "var(--text-secondary)",
									lineHeight: 1.7,
								}}
							>
								{t.mission.visionText}
							</p>
						</div>
						{/* Values Card */}
						<div
							className="glass-panel"
							style={{ padding: "2rem", position: "relative" }}
						>
							{/* HUD corners */}
							<div
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "15px",
									height: "15px",
									borderTop: "2px solid var(--brand-cyan)",
									borderLeft: "2px solid var(--brand-cyan)",
								}}
							/>
							<div
								style={{
									position: "absolute",
									bottom: 0,
									right: 0,
									width: "15px",
									height: "15px",
									borderBottom: "2px solid var(--brand-cyan)",
									borderRight: "2px solid var(--brand-cyan)",
								}}
							/>
							{/* Label */}
							<div
								style={{
									fontFamily: "monospace",
									fontSize: "0.7rem",
									color: "var(--brand-cyan)",
									marginBottom: "0.75rem",
									letterSpacing: "0.1em",
								}}
							>
								[CORE VALUES]
							</div>
							<h3
								style={{
									fontSize: "1.1rem",
									fontWeight: 600,
									marginBottom: "1rem",
									color: "var(--brand-cyan)",
								}}
							>
								{t.mission.values}
							</h3>
							<div
								style={{
									display: "flex",
									flexWrap: "wrap",
									gap: "0.75rem",
								}}
							>
								{[t.mission.value1, t.mission.value2, t.mission.value3].map(
									(value) => (
										<span
											key={value}
											style={{
												padding: "0.5rem 1rem",
												background: "rgba(6, 182, 212, 0.1)",
												border: "1px solid rgba(6, 182, 212, 0.3)",
												fontSize: "0.85rem",
												color: "var(--text-primary)",
											}}
										>
											{value}
										</span>
									),
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
