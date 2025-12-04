"use client";

import { useLanguage } from "../context/LanguageContext";

export function HowItWorks() {
	const { t } = useLanguage();

	const steps = [
		{
			num: "01",
			...t.howItWorks.step1,
			icon: "🎒",
			color: "var(--brand-cyan)",
		},
		{
			num: "02",
			...t.howItWorks.step2,
			icon: "📡",
			color: "var(--brand-blue)",
		},
		{
			num: "03",
			...t.howItWorks.step3,
			icon: "🏊",
			color: "var(--brand-orange)",
		},
		{
			num: "04",
			...t.howItWorks.step4,
			icon: "🚁",
			color: "var(--brand-success)",
		},
	];

	return (
		<section
			style={{
				padding: "6rem 0",
				background: "var(--brand-dark)",
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
				<div style={{ textAlign: "center", marginBottom: "4rem" }}>
					<div
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: "0.75rem",
							padding: "0.5rem 1rem",
							background: "rgba(6, 182, 212, 0.1)",
							border: "1px solid rgba(6, 182, 212, 0.3)",
							borderRadius: "4px",
							marginBottom: "1.5rem",
						}}
					>
						<span className="status-dot status-active" />
						<span
							style={{
								fontSize: "0.75rem",
								fontWeight: 600,
								color: "var(--brand-cyan)",
								textTransform: "uppercase",
								letterSpacing: "0.1em",
							}}
						>
							{t.howItWorks.badge}
						</span>
					</div>
					<h2
						style={{
							fontSize: "clamp(2rem, 5vw, 3rem)",
							fontWeight: 700,
							marginBottom: "1rem",
							color: "var(--text-primary)",
							letterSpacing: "0.05em",
						}}
					>
						{t.howItWorks.title}
					</h2>
					<p
						style={{
							fontSize: "1rem",
							color: "var(--text-secondary)",
							maxWidth: "600px",
							margin: "0 auto",
						}}
					>
						{t.howItWorks.subtitle}
					</p>
				</div>

				<div className="steps-grid steps-container">
					{/* Animated Connection Line - Hidden on tablet/mobile via CSS */}
					<div className="steps-connection-line" />
					{/* Data Flow Animation - Hidden on tablet/mobile via CSS */}
					<div className="steps-flow-dot animate-pulse-slow" />

					{steps.map((step) => (
						<div
							key={step.num}
							className="glass-panel hover-lift"
							style={{
								textAlign: "center",
								position: "relative",
								zIndex: 1,
								padding: "2rem 1.5rem",
								borderRadius: "8px",
								borderTop: `2px solid ${step.color}`,
							}}
						>
							{/* Hexagonal Icon Container */}
							<div
								style={{
									width: "80px",
									height: "80px",
									background: `linear-gradient(135deg, ${step.color}20, transparent)`,
									border: `2px solid ${step.color}`,
									borderRadius: "12px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									margin: "0 auto 1.5rem",
									fontSize: "2rem",
									boxShadow: `0 0 30px ${step.color}30`,
									transform: "rotate(0deg)",
								}}
							>
								{step.icon}
							</div>
							<div
								style={{
									fontFamily: "monospace",
									fontSize: "0.75rem",
									color: step.color,
									fontWeight: 600,
									marginBottom: "0.5rem",
									letterSpacing: "0.1em",
								}}
							>
								[{step.num}]
							</div>
							<h3
								style={{
									fontSize: "1.1rem",
									fontWeight: 600,
									marginBottom: "0.75rem",
									color: "var(--text-primary)",
								}}
							>
								{step.title}
							</h3>
							<p
								style={{
									fontSize: "0.85rem",
									color: "var(--text-secondary)",
									lineHeight: 1.6,
								}}
							>
								{step.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
