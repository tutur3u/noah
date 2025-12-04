"use client";

import { useLanguage } from "../context/LanguageContext";

export function Warning() {
	const { t } = useLanguage();

	const notes = [
		{ ...t.warning.note1, color: "var(--brand-alert)", num: "01" },
		{ ...t.warning.note2, color: "var(--brand-orange)", num: "02" },
		{ ...t.warning.note3, color: "var(--brand-cyan)", num: "03" },
		{ ...t.warning.note4, color: "var(--brand-blue)", num: "04" },
	];

	return (
		<section
			style={{
				padding: "5rem 0",
				background: "var(--brand-surface)",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Animated Alert Border */}
			<div
				className="animate-border-pulse"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					height: "2px",
					background:
						"linear-gradient(90deg, transparent, var(--brand-alert), transparent)",
				}}
			/>
			{/* Red Glow */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: "50%",
					transform: "translateX(-50%)",
					width: "80%",
					height: "200px",
					background:
						"radial-gradient(ellipse at top, rgba(239, 68, 68, 0.15) 0%, transparent 70%)",
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
				<div style={{ textAlign: "center", marginBottom: "3rem" }}>
					<div
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: "0.75rem",
							padding: "0.5rem 1rem",
							background: "rgba(239, 68, 68, 0.15)",
							border: "1px solid rgba(239, 68, 68, 0.4)",
							borderRadius: "4px",
							marginBottom: "1.5rem",
						}}
					>
						<span
							className="status-dot status-alert"
							style={{ animation: "pulse-slow 1s ease-in-out infinite" }}
						/>
						<span
							style={{
								fontSize: "0.75rem",
								fontWeight: 600,
								color: "var(--brand-alert)",
								textTransform: "uppercase",
								letterSpacing: "0.1em",
							}}
						>
							{t.warning.badge}
						</span>
					</div>
					<h2
						style={{
							fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
							fontWeight: 700,
							color: "var(--text-primary)",
							marginBottom: "0.5rem",
							letterSpacing: "0.05em",
						}}
					>
						{t.warning.title}
					</h2>
				</div>

				<div className="warning-cards-grid">
					{notes.map((note) => (
						<div
							key={note.num}
							className="glass-panel hover-lift"
							style={{
								padding: "1.5rem",
								borderRadius: "8px",
								borderLeft: `3px solid ${note.color}`,
								position: "relative",
							}}
						>
							{/* Number Badge */}
							<div
								style={{
									position: "absolute",
									top: "1rem",
									right: "1rem",
									fontFamily: "monospace",
									fontSize: "0.65rem",
									color: note.color,
									opacity: 0.6,
								}}
							>
								[{note.num}]
							</div>
							<h3
								style={{
									fontSize: "1rem",
									fontWeight: 600,
									color: "var(--text-primary)",
									marginBottom: "0.75rem",
									lineHeight: 1.4,
									paddingRight: "2rem",
								}}
							>
								{note.title}
							</h3>
							<p
								style={{
									fontSize: "0.9rem",
									color: "var(--text-secondary)",
									lineHeight: 1.7,
								}}
							>
								{note.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
