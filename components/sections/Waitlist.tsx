"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "../context/LanguageContext";

export function Waitlist() {
	const { t } = useLanguage();
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setSubmitted(true);
		setTimeout(() => setSubmitted(false), 3000);
	};

	const fields = [
		{ label: t.waitlist.name, type: "text", key: "name" as const },
		{ label: t.waitlist.phone, type: "tel", key: "phone" as const },
		{ label: t.waitlist.email, type: "email", key: "email" as const },
	];

	return (
		<section
			id="waitlist"
			style={{
				padding: "6rem 0",
				background: "var(--brand-deep)",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Background effects */}
			<div
				className="tech-grid"
				style={{ position: "absolute", inset: 0, opacity: 0.3 }}
			/>
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "800px",
					height: "800px",
					borderRadius: "50%",
					background:
						"radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 60%)",
					filter: "blur(60px)",
				}}
			/>

			<div
				style={{
					maxWidth: "1100px",
					margin: "0 auto",
					padding: "0 2rem",
					position: "relative",
				}}
			>
				<div className="waitlist-section-grid">
					{/* Left Info Cards */}
					<div>
						{/* Development Status Card */}
						<div
							className="glass-panel"
							style={{
								padding: "1.5rem",
								marginBottom: "1.5rem",
								position: "relative",
								borderLeft: "3px solid var(--brand-orange)",
							}}
						>
							<div
								style={{
									display: "inline-flex",
									alignItems: "center",
									gap: "0.5rem",
									padding: "0.3rem 0.75rem",
									background: "rgba(249, 115, 22, 0.2)",
									border: "1px solid rgba(249, 115, 22, 0.3)",
									fontSize: "0.7rem",
									fontWeight: 600,
									color: "var(--brand-orange)",
									textTransform: "uppercase",
									letterSpacing: "0.05em",
									marginBottom: "1rem",
								}}
							>
								<div
									style={{
										width: "6px",
										height: "6px",
										background: "var(--brand-orange)",
										animation: "pulse-slow 2s ease-in-out infinite",
									}}
								/>
								{t.waitlist.development}
							</div>
							<p
								style={{
									fontSize: "0.9rem",
									lineHeight: 1.7,
									color: "var(--text-secondary)",
								}}
							>
								{t.waitlist.devDesc}
							</p>
						</div>

						{/* Urgent Note Card */}
						<div
							className="glass-panel"
							style={{
								padding: "1.5rem",
								marginBottom: "1.5rem",
								position: "relative",
								border: "1px solid rgba(239, 68, 68, 0.3)",
								animation: "border-pulse 2s ease-in-out infinite",
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
									borderTop: "2px solid var(--brand-alert)",
									borderLeft: "2px solid var(--brand-alert)",
								}}
							/>
							<div
								style={{
									position: "absolute",
									bottom: 0,
									right: 0,
									width: "12px",
									height: "12px",
									borderBottom: "2px solid var(--brand-alert)",
									borderRight: "2px solid var(--brand-alert)",
								}}
							/>
							<h3
								style={{
									fontSize: "1rem",
									fontWeight: 600,
									marginBottom: "0.5rem",
									color: "var(--brand-alert)",
									display: "flex",
									alignItems: "center",
									gap: "0.5rem",
								}}
							>
								<span style={{ fontFamily: "monospace" }}>[!]</span>{" "}
								{t.waitlist.urgentNote}
							</h3>
							<p
								style={{
									fontSize: "0.85rem",
									color: "rgba(239, 68, 68, 0.8)",
									lineHeight: 1.6,
								}}
							>
								{t.waitlist.urgentDesc}
							</p>
						</div>

						{/* LED Counter Card */}
						<div
							className="glass-panel"
							style={{
								padding: "2rem",
								position: "relative",
								textAlign: "center",
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
							<div
								style={{
									fontFamily: "monospace",
									fontSize: "0.7rem",
									color: "var(--brand-cyan)",
									marginBottom: "0.5rem",
									letterSpacing: "0.1em",
								}}
							>
								[REGISTERED USERS]
							</div>
							<div
								style={{
									fontSize: "3.5rem",
									fontWeight: 700,
									color: "var(--brand-orange)",
									marginBottom: "0.25rem",
									textShadow: "0 0 30px rgba(249, 115, 22, 0.5)",
								}}
							>
								247+
							</div>
							<p
								style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}
							>
								{t.waitlist.registered}
							</p>
						</div>
					</div>

					{/* Right Form Card */}
					<div
						className="glass-panel"
						style={{
							padding: "2.5rem",
							position: "relative",
							boxShadow: "0 0 40px rgba(249, 115, 22, 0.1)",
						}}
					>
						{/* HUD corners */}
						<div
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "20px",
								height: "20px",
								borderTop: "2px solid var(--brand-orange)",
								borderLeft: "2px solid var(--brand-orange)",
							}}
						/>
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
								left: 0,
								width: "20px",
								height: "20px",
								borderBottom: "2px solid var(--brand-orange)",
								borderLeft: "2px solid var(--brand-orange)",
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

						<div
							style={{
								fontFamily: "monospace",
								fontSize: "0.7rem",
								color: "var(--brand-cyan)",
								marginBottom: "0.5rem",
								letterSpacing: "0.1em",
							}}
						>
							[REGISTRATION FORM]
						</div>
						<h2
							style={{
								fontSize: "1.75rem",
								fontWeight: 700,
								marginBottom: "0.5rem",
								color: "var(--text-primary)",
								letterSpacing: "0.03em",
							}}
						>
							{t.waitlist.title}
						</h2>
						<p
							style={{
								fontSize: "0.95rem",
								color: "var(--text-secondary)",
								marginBottom: "2rem",
							}}
						>
							{t.waitlist.subtitle}
						</p>

						<form onSubmit={handleSubmit}>
							{fields.map((field) => (
								<div key={field.key} style={{ marginBottom: "1.25rem" }}>
									<label
										htmlFor={field.key}
										style={{
											display: "block",
											fontSize: "0.8rem",
											fontWeight: 500,
											marginBottom: "0.5rem",
											color: "var(--brand-cyan)",
											fontFamily: "monospace",
											textTransform: "uppercase",
											letterSpacing: "0.05em",
										}}
									>
										{field.label}
									</label>
									<input
										id={field.key}
										type={field.type}
										required
										value={formData[field.key]}
										onChange={(e) =>
											setFormData({
												...formData,
												[field.key]: e.target.value,
											})
										}
										style={{
											width: "100%",
											padding: "1rem 1.25rem",
											background: "rgba(0, 0, 0, 0.3)",
											border: "1px solid rgba(6, 182, 212, 0.3)",
											fontSize: "1rem",
											color: "var(--text-primary)",
											outline: "none",
											transition: "all 0.3s ease",
										}}
									/>
								</div>
							))}

							<button
								type="submit"
								style={{
									width: "100%",
									padding: "1.25rem",
									border: "none",
									background: submitted
										? "var(--brand-success)"
										: "var(--brand-orange)",
									color: "white",
									fontSize: "1rem",
									fontWeight: 600,
									cursor: "pointer",
									transition: "all 0.3s ease",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: "0.5rem",
									boxShadow: submitted
										? "0 0 20px rgba(16, 185, 129, 0.4)"
										: "0 0 20px rgba(249, 115, 22, 0.4)",
									letterSpacing: "0.05em",
								}}
							>
								{submitted ? (
									<>
										<svg
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
										>
											<path d="M20 6L9 17l-5-5" />
										</svg>
										{t.waitlist.success}
									</>
								) : (
									<>
										{t.waitlist.submit}
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
									</>
								)}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
