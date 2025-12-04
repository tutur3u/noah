"use client";

import { useLanguage } from "../context/LanguageContext";

export function Footer() {
	const { t } = useLanguage();

	return (
		<footer
			style={{
				background: "var(--brand-deep)",
				color: "var(--text-primary)",
				padding: "4rem 0 2rem",
				position: "relative",
				borderTop: "1px solid var(--brand-cyan)",
			}}
		>
			{/* Scanlines overlay */}
			<div
				className="scanlines-overlay"
				style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
			/>

			<div
				style={{
					maxWidth: "1200px",
					margin: "0 auto",
					padding: "0 2rem",
					position: "relative",
				}}
			>
				<div
					className="footer-grid"
					style={{
						marginBottom: "3rem",
					}}
				>
					{/* Brand Column */}
					<div>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "0.5rem",
								marginBottom: "1rem",
							}}
						>
							<span
								style={{
									fontSize: "2rem",
									fontWeight: 700,
									color: "var(--text-primary)",
									letterSpacing: "0.1em",
								}}
							>
								NOAH
							</span>
							<span
								style={{
									fontSize: "0.6rem",
									color: "var(--brand-cyan)",
									fontFamily: "monospace",
									padding: "0.2rem 0.5rem",
									border: "1px solid rgba(6, 182, 212, 0.3)",
								}}
							>
								v2.0
							</span>
						</div>
						<p
							style={{
								fontSize: "0.9rem",
								color: "var(--text-secondary)",
								marginTop: "0.5rem",
								maxWidth: "300px",
								lineHeight: 1.7,
							}}
						>
							{t.footer.tagline}
						</p>
						{/* SDG badges with glow */}
						<div
							style={{
								display: "flex",
								gap: "0.75rem",
								marginTop: "1.5rem",
							}}
						>
							{[
								{ color: "#F59E0B", num: "11" },
								{ color: "#10B981", num: "13" },
							].map((sdg) => (
								<div
									key={sdg.num}
									style={{
										width: "44px",
										height: "44px",
										background: "rgba(15, 23, 42, 0.8)",
										border: `2px solid ${sdg.color}`,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontWeight: 700,
										fontSize: "0.9rem",
										color: sdg.color,
										boxShadow: `0 0 15px ${sdg.color}40`,
									}}
								>
									{sdg.num}
								</div>
							))}
						</div>
						{/* Coordinate display */}
						<div
							style={{
								marginTop: "1.5rem",
								fontFamily: "monospace",
								fontSize: "0.7rem",
								color: "var(--brand-cyan)",
								opacity: 0.6,
							}}
						>
							<div>{t.hud.footerLat}</div>
							<div>{t.hud.footerLon}</div>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4
							style={{
								fontSize: "0.75rem",
								fontWeight: 600,
								marginBottom: "1.5rem",
								color: "var(--brand-cyan)",
								fontFamily: "monospace",
								textTransform: "uppercase",
								letterSpacing: "0.1em",
							}}
						>
							[{t.footer.navigation}]
						</h4>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "0.75rem",
							}}
						>
							{[t.nav.home, t.nav.products, t.nav.about, t.nav.contact].map(
								(link, i) => (
									<a
										key={link}
										href={`#${link.toLowerCase()}`}
										style={{
											color: "var(--text-secondary)",
											textDecoration: "none",
											fontSize: "0.9rem",
											transition: "color 0.3s ease",
											display: "flex",
											alignItems: "center",
											gap: "0.5rem",
										}}
									>
										<span
											style={{
												fontFamily: "monospace",
												fontSize: "0.7rem",
												color: "var(--brand-cyan)",
											}}
										>
											{String(i + 1).padStart(2, "0")}
										</span>
										{link}
									</a>
								),
							)}
						</div>
					</div>

					{/* Legal */}
					<div>
						<h4
							style={{
								fontSize: "0.75rem",
								fontWeight: 600,
								marginBottom: "1.5rem",
								color: "var(--brand-cyan)",
								fontFamily: "monospace",
								textTransform: "uppercase",
								letterSpacing: "0.1em",
							}}
						>
							[{t.footer.legal}]
						</h4>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "0.75rem",
							}}
						>
							{[t.footer.privacy, t.footer.terms].map((link, i) => (
								<a
									key={link}
									href="#"
									style={{
										color: "var(--text-secondary)",
										textDecoration: "none",
										fontSize: "0.9rem",
										display: "flex",
										alignItems: "center",
										gap: "0.5rem",
									}}
								>
									<span
										style={{
											fontFamily: "monospace",
											fontSize: "0.7rem",
											color: "var(--brand-cyan)",
										}}
									>
										{String(i + 1).padStart(2, "0")}
									</span>
									{link}
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div
					style={{
						borderTop: "1px solid rgba(6, 182, 212, 0.2)",
						paddingTop: "2rem",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexWrap: "wrap",
						gap: "1rem",
					}}
				>
					<p
						style={{
							fontSize: "0.8rem",
							color: "var(--text-muted)",
							fontFamily: "monospace",
						}}
					>
						{t.footer.copyright}
					</p>
					<div
						style={{ display: "flex", alignItems: "center", gap: "1rem" }}
					>
						<p
							style={{
								fontSize: "0.8rem",
								color: "var(--text-muted)",
								fontFamily: "monospace",
							}}
						>
							{t.footer.project}
						</p>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "0.35rem",
								padding: "0.25rem 0.5rem",
								border: "1px solid rgba(16, 185, 129, 0.3)",
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
									fontSize: "0.65rem",
									color: "var(--brand-success)",
								}}
							>
								{t.hud.systemActive}
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
