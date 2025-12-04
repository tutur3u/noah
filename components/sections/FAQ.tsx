"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export function FAQ() {
	const { t } = useLanguage();
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	const faqs = [
		{ q: t.faq.q1, a: t.faq.a1 },
		{ q: t.faq.q2, a: t.faq.a2 },
		{ q: t.faq.q3, a: t.faq.a3 },
		{ q: t.faq.q4, a: t.faq.a4 },
	];

	return (
		<section
			style={{
				padding: "6rem 0",
				background: "var(--brand-surface)",
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
					maxWidth: "800px",
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
							{t.faq.badge}
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
						{t.faq.title}
					</h2>
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "0.75rem",
					}}
				>
					{faqs.map((faq, i) => (
						<div
							key={faq.q}
							className="glass-panel"
							style={{
								overflow: "hidden",
								position: "relative",
								border:
									openFaq === i
										? "1px solid rgba(249, 115, 22, 0.5)"
										: "1px solid rgba(6, 182, 212, 0.2)",
								transition: "border-color 0.3s ease",
							}}
						>
							<button
								type="button"
								onClick={() => setOpenFaq(openFaq === i ? null : i)}
								style={{
									width: "100%",
									padding: "1.25rem 1.5rem",
									border: "none",
									background: "transparent",
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									cursor: "pointer",
									textAlign: "left",
								}}
							>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: "1rem",
									}}
								>
									{/* HUD Number */}
									<span
										style={{
											fontFamily: "monospace",
											fontSize: "0.75rem",
											color:
												openFaq === i
													? "var(--brand-orange)"
													: "var(--brand-cyan)",
											transition: "color 0.3s ease",
										}}
									>
										[{String(i + 1).padStart(2, "0")}]
									</span>
									<span
										style={{
											fontSize: "1rem",
											fontWeight: 500,
											color: "var(--text-primary)",
										}}
									>
										{faq.q}
									</span>
								</div>
								<span
									style={{
										width: "28px",
										height: "28px",
										minWidth: "28px",
										flexShrink: 0,
										background:
											openFaq === i
												? "var(--brand-orange)"
												: "rgba(6, 182, 212, 0.2)",
										border: `1px solid ${openFaq === i ? "var(--brand-orange)" : "rgba(6, 182, 212, 0.3)"}`,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										transition: "all 0.3s ease",
										transform:
											openFaq === i ? "rotate(180deg)" : "rotate(0)",
									}}
								>
									<svg
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="none"
										stroke={openFaq === i ? "white" : "var(--brand-cyan)"}
										strokeWidth="2"
									>
										<path d="M19 9l-7 7-7-7" />
									</svg>
								</span>
							</button>
							<div
								style={{
									maxHeight: openFaq === i ? "200px" : "0",
									overflow: "hidden",
									transition: "max-height 0.3s ease",
								}}
							>
								<div
									style={{
										padding: "0 1.5rem 1.5rem",
										paddingLeft: "4rem",
									}}
								>
									<div
										style={{
											borderLeft: "2px solid var(--brand-cyan)",
											paddingLeft: "1rem",
										}}
									>
										<p
											style={{
												fontSize: "0.95rem",
												color: "var(--text-secondary)",
												lineHeight: 1.7,
											}}
										>
											{faq.a}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
