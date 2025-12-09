"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
	const { t } = useLanguage();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<section className="hero-section">
			{/* Tech Grid Background */}
			<div
				className="tech-grid"
				style={{ position: "absolute", inset: 0, opacity: 0.4 }}
			/>
			{/* Scanlines */}
			<div
				className="scanlines-overlay"
				style={{ position: "absolute", inset: 0, opacity: 0.3 }}
			/>
			{/* Moving Scan Line */}
			<div
				className="animate-scan-line"
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					height: "2px",
					background:
						"linear-gradient(90deg, transparent, var(--brand-cyan), transparent)",
					opacity: 0.3,
					pointerEvents: "none",
				}}
			/>
			{/* Radial gradient background - Hidden on mobile */}
			<div
				className="hero-glow-orb"
				style={{
					top: "30%",
					left: "20%",
					width: "600px",
					height: "600px",
					background:
						"radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 60%)",
					filter: "blur(60px)",
				}}
			/>
			{/* Orange accent glow - Hidden on mobile */}
			<div
				className="hero-glow-orb"
				style={{
					top: "40%",
					right: "20%",
					width: "500px",
					height: "500px",
					background:
						"radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 60%)",
					filter: "blur(80px)",
				}}
			/>

			{/* Left Data Stream - Hidden on mobile */}
			<div
				className="hide-mobile"
				style={{
					position: "absolute",
					left: "20px",
					top: "150px",
					bottom: "150px",
					width: "1px",
					background: "rgba(6, 182, 212, 0.2)",
					overflow: "hidden",
				}}
			>
				<div
					className="animate-data-scroll"
					style={{
						width: "100%",
						height: "200%",
						background:
							"repeating-linear-gradient(0deg, transparent 0px, transparent 8px, var(--brand-cyan) 8px, var(--brand-cyan) 12px, transparent 12px, transparent 20px)",
						opacity: 0.5,
					}}
				/>
			</div>

			{/* Right Data Stream - Hidden on mobile */}
			<div
				className="hide-mobile"
				style={{
					position: "absolute",
					right: "20px",
					top: "150px",
					bottom: "150px",
					width: "1px",
					background: "rgba(249, 115, 22, 0.2)",
					overflow: "hidden",
				}}
			>
				<div
					className="animate-data-scroll"
					style={{
						width: "100%",
						height: "200%",
						background:
							"repeating-linear-gradient(0deg, transparent 0px, transparent 8px, var(--brand-orange) 8px, var(--brand-orange) 12px, transparent 12px, transparent 20px)",
						opacity: 0.5,
						animationDirection: "reverse",
					}}
				/>
			</div>

			{/* Corner HUD Elements - Hidden on mobile */}
			<div
				className="hide-mobile"
				style={{
					position: "absolute",
					top: "100px",
					left: "20px",
					fontFamily: "monospace",
					fontSize: "0.6rem",
					color: "var(--brand-cyan)",
					opacity: 0.4,
				}}
			>
				<div>{t.hud.sysInit}</div>
				<div>{t.hud.version}</div>
				<div>{t.hud.statusReady}</div>
			</div>
			<div
				className="hide-mobile"
				style={{
					position: "absolute",
					top: "100px",
					right: "20px",
					fontFamily: "monospace",
					fontSize: "0.6rem",
					color: "var(--brand-orange)",
					opacity: 0.4,
					textAlign: "right",
				}}
			>
				<div>{t.hud.emergencyMode}</div>
				<div>{t.hud.freq}</div>
				<div>{t.hud.power}</div>
			</div>
			<div
				className="hide-mobile"
				style={{
					position: "absolute",
					bottom: "30px",
					left: "20px",
					fontFamily: "monospace",
					fontSize: "0.6rem",
					color: "var(--brand-cyan)",
					opacity: 0.4,
				}}
			>
				<div>{t.hud.coord}</div>
				<div>{t.hud.altHdop}</div>
			</div>
			<div
				className="hide-mobile animate-hud-flicker"
				style={{
					position: "absolute",
					bottom: "30px",
					right: "20px",
					fontFamily: "monospace",
					fontSize: "0.6rem",
					color: "var(--brand-success)",
					opacity: 0.5,
					textAlign: "right",
				}}
			>
				<div>{t.hud.satellite}</div>
				<div>{t.hud.network}</div>
				<div>{t.hud.gpsActive}</div>
			</div>

			<div
				className="hero-grid"
				style={{
					maxWidth: "1400px",
					margin: "0 auto",
					padding: "2rem",
					width: "100%",
					position: "relative",
					zIndex: 1,
				}}
			>
				{/* Left Content */}
				<div
					className={`hero-content ${mounted ? "animate-fade-in-up" : ""}`}
					style={{ opacity: mounted ? 1 : 0 }}
				>
					{/* System Status Bar */}
					<div
						className="system-status-bar hero-status-bar flex flex-col md:flex-row"
						style={{
							display: "flex",
							alignItems: "center",
							gap: "1.5rem",
							marginBottom: "1.5rem",
						}}
					>
						{/* HUD Badge - Bigger */}
						<div
							style={{
								display: "inline-flex",
								alignItems: "center",
								gap: "0.75rem",
								padding: "0.75rem 1.5rem",
								background: "rgba(15, 23, 42, 0.9)",
								border: "1px solid rgba(249, 115, 22, 0.4)",
								boxShadow:
									"0 0 20px rgba(249, 115, 22, 0.15), inset 0 0 20px rgba(249, 115, 22, 0.05)",
							}}
						>
							<span
								className="status-dot status-alert"
								style={{
									width: "10px",
									height: "10px",
									animation: "pulse-slow 1.5s ease-in-out infinite",
								}}
							/>
							<span
								style={{
									fontSize: "0.9rem",
									color: "var(--brand-orange)",
									textTransform: "uppercase",
									letterSpacing: "0.15em",
									fontFamily: "monospace",
									fontWeight: 600,
								}}
							>
								{t.hero.tagline}
							</span>
						</div>
						{/* Time display - Bigger */}
						<div
							style={{
								fontFamily: "monospace",
								fontSize: "0.85rem",
								color: "var(--brand-cyan)",
								opacity: 0.8,
								fontWeight: 500,
							}}
						>
							[{new Date().toLocaleTimeString("en-US", { hour12: false })}]
						</div>
					</div>

					{/* Main Title */}
					<h1
						style={{
							fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
							fontWeight: 700,
							lineHeight: 1.05,
							letterSpacing: "-0.02em",
							marginBottom: "1.5rem",
							color: "var(--text-primary)",
						}}
					>
						{t.hero.title1}
						<br />
						<span
							style={{
								color: "var(--brand-orange)",
								textShadow:
									"0 0 60px rgba(249, 115, 22, 0.6), 0 0 120px rgba(249, 115, 22, 0.3)",
								display: "inline-block",
							}}
						>
							{t.hero.title2}
						</span>
					</h1>

					{/* Subtitle */}
					<p
						style={{
							fontSize: "1.15rem",
							lineHeight: 1.8,
							color: "var(--text-secondary)",
							marginBottom: "2rem",
							maxWidth: "520px",
						}}
					>
						{t.hero.subtitle}
					</p>

					{/* Description Card with HUD styling */}
					<div
						style={{
							position: "relative",
							padding: "1.25rem 1.5rem",
							background: "rgba(15, 23, 42, 0.6)",
							backdropFilter: "blur(10px)",
							border: "1px solid rgba(249, 115, 22, 0.2)",
							maxWidth: "500px",
							marginBottom: "2rem",
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
								borderTop: "2px solid var(--brand-orange)",
								borderLeft: "2px solid var(--brand-orange)",
							}}
						/>
						<div
							style={{
								position: "absolute",
								bottom: 0,
								right: 0,
								width: "12px",
								height: "12px",
								borderBottom: "2px solid var(--brand-orange)",
								borderRight: "2px solid var(--brand-orange)",
							}}
						/>
						<div
							style={{
								display: "flex",
								alignItems: "flex-start",
								gap: "1rem",
							}}
						>
							<div
								style={{
									width: "44px",
									height: "44px",
									background:
										"linear-gradient(135deg, var(--brand-orange), var(--brand-alert))",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									flexShrink: 0,
									boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)",
								}}
							>
								<span style={{ fontSize: "1.3rem" }}>🛟</span>
							</div>
							<p
								style={{
									fontSize: "0.9rem",
									lineHeight: 1.7,
									color: "var(--text-secondary)",
								}}
							>
								{t.hero.description}
							</p>
						</div>
					</div>

					{/* Stats Row */}
					<div className="hero-stats-row">
						<div
							style={{
								position: "relative",
								padding: "1.25rem 1.5rem",
								background: "rgba(15, 23, 42, 0.7)",
								backdropFilter: "blur(10px)",
								border: "1px solid rgba(249, 115, 22, 0.3)",
							}}
						>
							<div
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "8px",
									height: "8px",
									borderTop: "2px solid var(--brand-orange)",
									borderLeft: "2px solid var(--brand-orange)",
								}}
							/>
							<div
								style={{
									fontSize: "2.5rem",
									fontWeight: 700,
									color: "var(--brand-orange)",
									textShadow: "0 0 30px rgba(249, 115, 22, 0.6)",
									lineHeight: 1,
								}}
							>
								98%
							</div>
							<div
								style={{
									fontSize: "0.7rem",
									color: "var(--text-muted)",
									textTransform: "uppercase",
									letterSpacing: "0.08em",
									marginTop: "0.5rem",
									fontFamily: "monospace",
								}}
							>
								{t.hero.stats.disasters}
							</div>
						</div>
						<div
							style={{
								position: "relative",
								padding: "1.25rem 1.5rem",
								background: "rgba(15, 23, 42, 0.7)",
								backdropFilter: "blur(10px)",
								border: "1px solid rgba(6, 182, 212, 0.3)",
							}}
						>
							<div
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "8px",
									height: "8px",
									borderTop: "2px solid var(--brand-cyan)",
									borderLeft: "2px solid var(--brand-cyan)",
								}}
							/>
							<div
								style={{
									fontSize: "2.5rem",
									fontWeight: 700,
									color: "var(--brand-cyan)",
									textShadow: "0 0 30px rgba(6, 182, 212, 0.6)",
									lineHeight: 1,
								}}
							>
								70%
							</div>
							<div
								style={{
									fontSize: "0.7rem",
									color: "var(--text-muted)",
									textTransform: "uppercase",
									letterSpacing: "0.08em",
									marginTop: "0.5rem",
									fontFamily: "monospace",
								}}
							>
								{t.hero.stats.population}
							</div>
						</div>
					</div>

					{/* CTA Button */}
					<button
						type="button"
						style={{
							padding: "1rem 2.5rem",
							background:
								"linear-gradient(135deg, var(--brand-orange), #ea580c)",
							border: "none",
							color: "white",
							fontSize: "0.9rem",
							fontWeight: 600,
							letterSpacing: "0.1em",
							textTransform: "uppercase",
							cursor: "pointer",
							position: "relative",
							boxShadow:
								"0 0 30px rgba(249, 115, 22, 0.4), 0 10px 40px rgba(0, 0, 0, 0.3)",
							transition: "all 0.3s ease",
						}}
					>
						<span
							style={{
								position: "relative",
								zIndex: 1,
								display: "flex",
								alignItems: "center",
								gap: "0.75rem",
							}}
						>
							{t.hero.cta}
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path d="M5 12h14M12 5l7 7-7 7" />
							</svg>
						</span>
					</button>

					{/* Coordinate label */}
					<div
						className="hero-coord-label"
						style={{
							marginTop: "2.5rem",
							fontFamily: "monospace",
							fontSize: "0.7rem",
							color: "var(--brand-cyan)",
							opacity: 0.5,
						}}
					>
						<span>{t.hud.coordBracket}</span>
						<span style={{ color: "var(--brand-success)" }}>
							{t.hud.systemOnline}
						</span>
					</div>

					{/* Feature Badges - Mobile Only */}
					<div className="feature-badges-mobile">
						<div
							className="feature-badge-item"
							style={{ borderLeft: "3px solid var(--brand-success)" }}
						>
							<div
								className="feature-badge-icon"
								style={{
									background:
										"linear-gradient(135deg, var(--brand-success), var(--brand-success)88)",
								}}
							>
								📍
							</div>
							<div className="feature-badge-text">
								<h4>{t.badges.gps}</h4>
								<p>{t.badges.gpsDesc}</p>
							</div>
						</div>
						<div
							className="feature-badge-item"
							style={{ borderLeft: "3px solid var(--brand-cyan)" }}
						>
							<div
								className="feature-badge-icon"
								style={{
									background:
										"linear-gradient(135deg, var(--brand-cyan), var(--brand-cyan)88)",
								}}
							>
								💧
							</div>
							<div className="feature-badge-text">
								<h4>{t.badges.water}</h4>
								<p>{t.badges.waterDesc}</p>
							</div>
						</div>
						<div
							className="feature-badge-item"
							style={{ borderLeft: "3px solid var(--brand-alert)" }}
						>
							<div
								className="feature-badge-icon"
								style={{
									background:
										"linear-gradient(135deg, var(--brand-alert), var(--brand-alert)88)",
								}}
							>
								🆘
							</div>
							<div className="feature-badge-text">
								<h4>{t.badges.sos}</h4>
								<p>{t.badges.sosDesc}</p>
							</div>
						</div>
					</div>
				</div>

				{/* Right Content - Life Vest + Compact Phone Mockup */}
				<div
					className={`hero-phone-mockup ${mounted ? "animate-slide-in-right" : ""}`}
					style={{
						position: "relative",
						opacity: mounted ? 1 : 0,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: "1rem",
					}}
				>
					{/* Main Life Vest + Phone Container */}
					<div
						style={{
							position: "relative",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						{/* Life Vest Front - Large */}
						<div
							style={{
								position: "relative",
								zIndex: 1,
							}}
						>
							{/* HUD Frame around vest */}
							<div
								style={{
									position: "absolute",
									top: "-10px",
									left: "-10px",
									width: "20px",
									height: "20px",
									borderTop: "2px solid var(--brand-orange)",
									borderLeft: "2px solid var(--brand-orange)",
								}}
							/>
							<div
								style={{
									position: "absolute",
									top: "-10px",
									right: "-10px",
									width: "20px",
									height: "20px",
									borderTop: "2px solid var(--brand-orange)",
									borderRight: "2px solid var(--brand-orange)",
								}}
							/>
							<div
								style={{
									position: "absolute",
									bottom: "-10px",
									left: "-10px",
									width: "20px",
									height: "20px",
									borderBottom: "2px solid var(--brand-orange)",
									borderLeft: "2px solid var(--brand-orange)",
								}}
							/>
							<div
								style={{
									position: "absolute",
									bottom: "-10px",
									right: "-10px",
									width: "20px",
									height: "20px",
									borderBottom: "2px solid var(--brand-orange)",
									borderRight: "2px solid var(--brand-orange)",
								}}
							/>
							<img
								src="/life-vest-front.png"
								alt="NOAH Life Vest Front"
								className="hero-life-vest-img"
								style={{
									width: "520px",
									height: "auto",
									filter: "drop-shadow(0 0 50px rgba(249, 115, 22, 0.5))",
								}}
							/>
						</div>

						{/* Compact Phone/Radar Mockup - Layered on top of vest, slightly to the right */}
						<div
							style={{
								position: "absolute",
								right: "-40px",
								top: "50%",
								transform: "translateY(-50%)",
								zIndex: 3,
							}}
						>
							{/* Outer HUD Frame */}
							<div
								style={{
									position: "relative",
									padding: "12px",
									background: "rgba(6, 182, 212, 0.02)",
									border: "1px solid rgba(6, 182, 212, 0.2)",
								}}
							>
								{/* HUD Corner Brackets */}
								<div
									style={{
										position: "absolute",
										top: 0,
										left: 0,
										width: "16px",
										height: "16px",
										borderTop: "2px solid var(--brand-cyan)",
										borderLeft: "2px solid var(--brand-cyan)",
									}}
								/>
								<div
									style={{
										position: "absolute",
										top: 0,
										right: 0,
										width: "16px",
										height: "16px",
										borderTop: "2px solid var(--brand-cyan)",
										borderRight: "2px solid var(--brand-cyan)",
									}}
								/>
								<div
									style={{
										position: "absolute",
										bottom: 0,
										left: 0,
										width: "16px",
										height: "16px",
										borderBottom: "2px solid var(--brand-cyan)",
										borderLeft: "2px solid var(--brand-cyan)",
									}}
								/>
								<div
									style={{
										position: "absolute",
										bottom: 0,
										right: 0,
										width: "16px",
										height: "16px",
										borderBottom: "2px solid var(--brand-cyan)",
										borderRight: "2px solid var(--brand-cyan)",
									}}
								/>

								{/* Compact Phone Frame */}
								<div
									style={{
										position: "relative",
										width: "160px",
										height: "320px",
										background:
											"linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
										borderRadius: "24px",
										padding: "4px",
										border: "2px solid rgba(6, 182, 212, 0.4)",
										boxShadow:
											"0 0 30px rgba(6, 182, 212, 0.15), 0 15px 40px rgba(0, 0, 0, 0.5)",
									}}
								>
									{/* Screen */}
									<div
										style={{
											width: "100%",
											height: "100%",
											borderRadius: "20px",
											background: "var(--brand-dark)",
											overflow: "hidden",
											position: "relative",
										}}
									>
										{/* Map Background */}
										<div
											style={{
												position: "absolute",
												inset: 0,
												opacity: 0.4,
											}}
										>
											<img
												src="/map-without-gps.png"
												alt=""
												style={{
													width: "100%",
													height: "100%",
													objectFit: "cover",
													filter:
														"hue-rotate(180deg) saturate(0.5) brightness(0.8)",
												}}
											/>
										</div>

										{/* Radar Overlay */}
										<div
											style={{
												position: "absolute",
												inset: 0,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											{/* Radar Circles */}
											<div
												style={{
													position: "relative",
													width: "120px",
													height: "120px",
												}}
											>
												{[100, 75, 50, 25].map((size, i) => (
													<div
														key={size}
														style={{
															position: "absolute",
															top: `${50 - size / 2}%`,
															left: `${50 - size / 2}%`,
															width: `${size}%`,
															height: `${size}%`,
															border: `1px solid rgba(6, 182, 212, ${0.5 - i * 0.1})`,
															borderRadius: "50%",
														}}
													/>
												))}

												{/* Rotating Sweep */}
												<div
													className="animate-spin-slow"
													style={{
														position: "absolute",
														top: 0,
														left: 0,
														right: 0,
														bottom: 0,
														transformOrigin: "center center",
													}}
												>
													<div
														style={{
															position: "absolute",
															top: "50%",
															left: "50%",
															width: "2px",
															height: "50%",
															transformOrigin: "top center",
															transform: "translateX(-50%)",
															background:
																"linear-gradient(to bottom, transparent, var(--brand-cyan))",
														}}
													/>
													<div
														style={{
															position: "absolute",
															top: 0,
															left: 0,
															right: 0,
															bottom: 0,
															background:
																"conic-gradient(from 0deg at 50% 50%, rgba(6, 182, 212, 0.4) 0deg, rgba(6, 182, 212, 0.1) 40deg, transparent 60deg, transparent 360deg)",
															borderRadius: "50%",
															clipPath: "circle(50% at 50% 50%)",
														}}
													/>
												</div>

												{/* Center Dot (User) */}
												<div
													style={{
														position: "absolute",
														top: "50%",
														left: "50%",
														transform: "translate(-50%, -50%)",
													}}
												>
													<div
														style={{
															width: "10px",
															height: "10px",
															borderRadius: "50%",
															background: "var(--brand-orange)",
															boxShadow: "0 0 20px rgba(249, 115, 22, 0.9)",
														}}
													/>
													<div
														className="animate-ping-slow"
														style={{
															position: "absolute",
															inset: "-8px",
															borderRadius: "50%",
															background: "var(--brand-orange)",
															opacity: 0.3,
														}}
													/>
												</div>

												{/* Nearby Points */}
												{[
													{
														top: "22%",
														left: "62%",
														color: "var(--brand-success)",
													},
													{
														top: "72%",
														left: "68%",
														color: "var(--brand-cyan)",
													},
												].map((point, i) => (
													<div
														key={`point-${i}`}
														className="animate-pulse-slow"
														style={{
															position: "absolute",
															top: point.top,
															left: point.left,
															width: "6px",
															height: "6px",
															borderRadius: "50%",
															background: point.color,
															boxShadow: `0 0 10px ${point.color}`,
															animationDelay: `${i * 0.5}s`,
														}}
													/>
												))}
											</div>
										</div>

										{/* Mini HUD Elements */}
										<div
											style={{
												position: "absolute",
												top: "8px",
												left: "8px",
												fontFamily: "monospace",
												fontSize: "0.45rem",
												color: "var(--brand-cyan)",
											}}
										>
											<div>{t.hud.gpsModule}</div>
											<div
												style={{
													color: "var(--brand-success)",
													marginTop: "2px",
												}}
											>
												{t.hud.signalActive}
											</div>
										</div>

										{/* Notification Card */}
										<div
											style={{
												position: "absolute",
												bottom: "45px",
												left: "6px",
												right: "6px",
												background: "rgba(15, 23, 42, 0.95)",
												backdropFilter: "blur(10px)",
												border: "1px solid rgba(16, 185, 129, 0.4)",
												padding: "6px 8px",
											}}
										>
											<div
												style={{
													display: "flex",
													alignItems: "center",
													gap: "6px",
												}}
											>
												<div className="status-dot status-active" />
												<span
													style={{
														fontSize: "0.55rem",
														color: "var(--brand-success)",
														fontFamily: "monospace",
													}}
												>
													{t.badges.rescueTeam}
												</span>
											</div>
										</div>

										{/* Bottom Nav */}
										<div
											style={{
												position: "absolute",
												bottom: "8px",
												left: "6px",
												right: "6px",
												display: "flex",
												justifyContent: "space-around",
												background: "rgba(15, 23, 42, 0.9)",
												borderRadius: "12px",
												padding: "5px",
											}}
										>
											{["📍", "🆘", "📞"].map((icon, i) => (
												<div
													key={icon}
													style={{
														width: "24px",
														height: "24px",
														borderRadius: "50%",
														background:
															i === 1
																? "var(--brand-alert)"
																: "rgba(6, 182, 212, 0.2)",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														fontSize: "0.65rem",
														boxShadow:
															i === 1
																? "0 0 15px rgba(239, 68, 68, 0.5)"
																: "none",
													}}
												>
													{icon}
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
