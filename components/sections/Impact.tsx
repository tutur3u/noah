"use client";

import { useLanguage } from "../context/LanguageContext";
import { useCounter } from "../hooks/useCounter";

export function Impact() {
	const { t } = useLanguage();

	const counter1 = useCounter(14300, 2000);
	const counter2 = useCounter(108, 2000);
	const counter3 = useCounter(5, 2000);
	const counter4 = useCounter(2025, 2000);

	const stats = [
		{
			ref: counter1.ref,
			count: counter1.count,
			suffix: "T VND",
			label: t.impact.stat1,
			icon: "💰",
			color: "var(--brand-orange)",
		},
		{
			ref: counter2.ref,
			count: counter2.count,
			suffix: "",
			label: t.impact.stat2,
			icon: "👥",
			color: "var(--brand-alert)",
		},
		{
			ref: counter3.ref,
			count: counter3.count,
			suffix: "",
			label: t.impact.stat3,
			icon: "📍",
			color: "var(--brand-cyan)",
		},
		{
			ref: counter4.ref,
			count: counter4.count,
			suffix: "",
			label: t.impact.stat4,
			icon: "📅",
			color: "var(--brand-success)",
		},
	];

	return (
		<section
			style={{
				padding: "6rem 0",
				background: "var(--brand-deep)",
				color: "white",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Tech Grid Background */}
			<div
				className="tech-grid"
				style={{ position: "absolute", inset: 0, opacity: 0.5 }}
			/>
			{/* Radial Glow */}
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "100%",
					height: "100%",
					background:
						"radial-gradient(ellipse at center, rgba(239, 68, 68, 0.1) 0%, transparent 60%)",
				}}
			/>

			<div
				style={{
					maxWidth: "1400px",
					margin: "0 auto",
					padding: "0 2rem",
					position: "relative",
				}}
			>
				{/* HUD Header */}
				<div style={{ textAlign: "center", marginBottom: "4rem" }}>
					<div
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: "0.75rem",
							padding: "0.5rem 1rem",
							background: "rgba(239, 68, 68, 0.1)",
							border: "1px solid rgba(239, 68, 68, 0.3)",
							borderRadius: "4px",
							marginBottom: "1.5rem",
						}}
					>
						<span className="status-dot status-alert" />
						<span
							style={{
								fontSize: "0.75rem",
								fontWeight: 600,
								color: "var(--brand-alert)",
								textTransform: "uppercase",
								letterSpacing: "0.1em",
							}}
						>
							{t.impact.badge}
						</span>
					</div>
					<h2
						style={{
							fontSize: "clamp(2rem, 5vw, 3.5rem)",
							fontWeight: 700,
							marginBottom: "1rem",
							letterSpacing: "0.05em",
						}}
					>
						{t.impact.title}
					</h2>
					<p
						style={{
							fontSize: "1rem",
							color: "var(--text-secondary)",
							maxWidth: "600px",
							margin: "0 auto",
						}}
					>
						{t.impact.subtitle}
					</p>
				</div>

				{/* Stats Grid - Two rows */}
				<div className="impact-stats-grid">
					{stats.map((stat) => (
						<div
							key={stat.label}
							ref={stat.ref}
							className="glass-panel hover-lift"
							style={{
								textAlign: "center",
								padding: "1.5rem",
								borderRadius: "8px",
								cursor: "default",
								borderTop: `2px solid ${stat.color}`,
							}}
						>
							<div
								style={{
									width: "40px",
									height: "40px",
									borderRadius: "8px",
									background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}10)`,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: "1.25rem",
									margin: "0 auto 0.75rem",
									border: `1px solid ${stat.color}30`,
								}}
							>
								{stat.icon}
							</div>
							<div
								style={{
									fontSize: "2.25rem",
									fontWeight: 700,
									color: stat.color,
									textShadow: `0 0 30px ${stat.color}50`,
								}}
							>
								{stat.count}
								{stat.suffix}
							</div>
							<div
								style={{
									fontSize: "0.7rem",
									color: "var(--text-muted)",
									marginTop: "0.35rem",
									textTransform: "uppercase",
									letterSpacing: "0.05em",
								}}
							>
								{stat.label}
							</div>
						</div>
					))}
				</div>

				{/* Image Gallery with HUD Overlays */}
				<div className="impact-gallery-grid">
					<div
						style={{
							borderRadius: "8px",
							overflow: "hidden",
							position: "relative",
							height: "400px",
							border: "1px solid rgba(6, 182, 212, 0.2)",
						}}
					>
						<img
							src="/Lũ lụt.png"
							alt="Flood"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								filter: "saturate(0.8)",
							}}
						/>
						{/* Scanlines */}
						<div
							style={{
								position: "absolute",
								inset: 0,
								background:
									"repeating-linear-gradient(0deg, rgba(0,0,0,0.03), rgba(0,0,0,0.03) 1px, transparent 1px, transparent 2px)",
							}}
						/>
						{/* HUD Overlay */}
						<div
							style={{
								position: "absolute",
								top: "1rem",
								left: "1rem",
								fontFamily: "monospace",
								fontSize: "0.65rem",
								color: "var(--brand-cyan)",
							}}
						>
							<div>{t.hud.sectorCentral}</div>
							<div style={{ color: "var(--brand-alert)" }}>
								{t.hud.alertActive}
							</div>
						</div>
						{/* Corner Brackets */}
						<div
							style={{
								position: "absolute",
								top: "8px",
								left: "8px",
								width: "20px",
								height: "20px",
								borderTop: "2px solid var(--brand-cyan)",
								borderLeft: "2px solid var(--brand-cyan)",
							}}
						/>
						<div
							style={{
								position: "absolute",
								top: "8px",
								right: "8px",
								width: "20px",
								height: "20px",
								borderTop: "2px solid var(--brand-cyan)",
								borderRight: "2px solid var(--brand-cyan)",
							}}
						/>
						<div
							style={{
								position: "absolute",
								bottom: "8px",
								left: "8px",
								width: "20px",
								height: "20px",
								borderBottom: "2px solid var(--brand-cyan)",
								borderLeft: "2px solid var(--brand-cyan)",
							}}
						/>
						<div
							style={{
								position: "absolute",
								bottom: "8px",
								right: "8px",
								width: "20px",
								height: "20px",
								borderBottom: "2px solid var(--brand-cyan)",
								borderRight: "2px solid var(--brand-cyan)",
							}}
						/>
						<div
							style={{
								position: "absolute",
								bottom: 0,
								left: 0,
								right: 0,
								padding: "2rem",
								background:
									"linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
							}}
						>
							<p
								style={{
									fontSize: "0.85rem",
									color: "var(--text-secondary)",
								}}
							>
								{t.impact.caption1}
							</p>
						</div>
					</div>
					<div
						style={{
							borderRadius: "8px",
							overflow: "hidden",
							position: "relative",
							height: "400px",
							border: "1px solid rgba(6, 182, 212, 0.2)",
						}}
					>
						<img
							src="/Cảnh hoang tàn sau lũ.png"
							alt="Post-flood devastation"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								filter: "saturate(0.8)",
							}}
						/>
						{/* Scanlines */}
						<div
							style={{
								position: "absolute",
								inset: 0,
								background:
									"repeating-linear-gradient(0deg, rgba(0,0,0,0.03), rgba(0,0,0,0.03) 1px, transparent 1px, transparent 2px)",
							}}
						/>
						{/* HUD Overlay */}
						<div
							style={{
								position: "absolute",
								top: "1rem",
								right: "1rem",
								fontFamily: "monospace",
								fontSize: "0.65rem",
								color: "var(--brand-orange)",
								textAlign: "right",
							}}
						>
							<div>POST-FLOOD</div>
							<div>DAMAGE: SEVERE</div>
						</div>
						<div
							style={{
								position: "absolute",
								bottom: 0,
								left: 0,
								right: 0,
								padding: "1.5rem",
								background:
									"linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
							}}
						>
							<p
								style={{
									fontSize: "0.8rem",
									color: "var(--text-secondary)",
								}}
							>
								{t.impact.caption2}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
