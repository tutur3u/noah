"use client";

import { useLanguage } from "../context/LanguageContext";

export function Contact() {
	const { t } = useLanguage();

	const contacts = [
		{
			icon: "📞",
			title: t.contact.hotline,
			value: "(+84) 792 774 510",
			href: "tel:+84792774510",
			color: "var(--brand-cyan)",
		},
		{
			icon: "✉️",
			title: t.contact.email,
			value: "noah@gmail.com.vn",
			href: "mailto:noah@gmail.com.vn",
			color: "var(--brand-orange)",
		},
		{
			icon: "🤝",
			title: t.contact.partner,
			value: "(+84) 979 744 571",
			href: "tel:+84979744571",
			color: "var(--brand-success)",
		},
		{
			icon: "📍",
			title: t.contact.address,
			value: t.contact.addressText,
			href: "#",
			color: "var(--brand-orange)",
		},
	];

	return (
		<section
			id="contact"
			style={{
				padding: "6rem 0",
				background: "var(--brand-dark)",
				position: "relative",
				overflow: "hidden",
			}}
		>
			<div
				className="tech-grid"
				style={{ position: "absolute", inset: 0, opacity: 0.3 }}
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
							COMMUNICATION CHANNELS
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
						{t.contact.title}
					</h2>
				</div>

				<div className="stats-grid">
					{contacts.map((contact, i) => (
						<a
							key={contact.title}
							href={contact.href}
							className="glass-panel"
							style={{
								padding: "1.5rem",
								textDecoration: "none",
								display: "block",
								transition: "all 0.3s ease",
								position: "relative",
							}}
						>
							{/* HUD corners */}
							<div
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "12px",
									height: "12px",
									borderTop: `2px solid ${contact.color}`,
									borderLeft: `2px solid ${contact.color}`,
								}}
							/>
							<div
								style={{
									position: "absolute",
									bottom: 0,
									right: 0,
									width: "12px",
									height: "12px",
									borderBottom: `2px solid ${contact.color}`,
									borderRight: `2px solid ${contact.color}`,
								}}
							/>
							{/* Status indicator */}
							<div
								style={{
									position: "absolute",
									top: "1rem",
									right: "1rem",
									display: "flex",
									alignItems: "center",
									gap: "0.35rem",
								}}
							>
								<div
									style={{
										width: "6px",
										height: "6px",
										borderRadius: "50%",
										background: "var(--brand-success)",
										animation: "pulse-slow 2s ease-in-out infinite",
									}}
								/>
								<span
									style={{
										fontFamily: "monospace",
										fontSize: "0.6rem",
										color: "var(--brand-success)",
									}}
								>
									ONLINE
								</span>
							</div>
							<div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
								{contact.icon}
							</div>
							<div
								style={{
									fontFamily: "monospace",
									fontSize: "0.65rem",
									color: contact.color,
									marginBottom: "0.5rem",
									letterSpacing: "0.1em",
								}}
							>
								[{String(i + 1).padStart(2, "0")}]
							</div>
							<h3
								style={{
									fontSize: "0.9rem",
									fontWeight: 600,
									marginBottom: "0.5rem",
									color: "var(--text-secondary)",
								}}
							>
								{contact.title}
							</h3>
							<p
								style={{
									fontSize: "0.9rem",
									fontWeight: 600,
									color: "var(--text-primary)",
								}}
							>
								{contact.value}
							</p>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
