"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export function Testimonials() {
	const { t } = useLanguage();
	const [activeTestimonial, setActiveTestimonial] = useState(0);

	const testimonials = [
		{
			quote: t.testimonials.t1.quote,
			name: t.testimonials.t1.name,
			location: t.testimonials.t1.location,
		},
		{
			quote: t.testimonials.t2.quote,
			name: t.testimonials.t2.name,
			location: t.testimonials.t2.location,
		},
		{
			quote: t.testimonials.t3.quote,
			name: t.testimonials.t3.name,
			location: t.testimonials.t3.location,
		},
	];

	// Auto-rotate testimonials
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [testimonials.length]);

	return (
		<section
			style={{
				padding: "6rem 0",
				background: "var(--brand-deep)",
				position: "relative",
			}}
		>
			<div
				className="tech-grid"
				style={{ position: "absolute", inset: 0, opacity: 0.3 }}
			/>

			<div
				style={{
					maxWidth: "1000px",
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
							{t.testimonials.badge}
						</span>
					</div>
					<h2
						style={{
							fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
							fontWeight: 700,
							color: "var(--text-primary)",
							letterSpacing: "0.05em",
						}}
					>
						{t.testimonials.title}
					</h2>
				</div>

				<div
					className="glass-panel"
					style={{
						borderRadius: "8px",
						padding: "2.5rem",
						textAlign: "center",
						position: "relative",
					}}
				>
					{/* HUD Number */}
					<div
						style={{
							position: "absolute",
							top: "1rem",
							right: "1rem",
							fontFamily: "monospace",
							fontSize: "0.7rem",
							color: "var(--brand-cyan)",
							opacity: 0.6,
						}}
					>
						[TESTIMONY #{String(activeTestimonial + 1).padStart(2, "0")}]
					</div>
					<div
						style={{
							fontSize: "3rem",
							marginBottom: "1rem",
							color: "var(--brand-orange)",
							opacity: 0.5,
						}}
					>
						"
					</div>
					<p
						style={{
							fontSize: "1.25rem",
							lineHeight: 1.7,
							color: "var(--text-primary)",
							marginBottom: "2rem",
							minHeight: "90px",
						}}
					>
						{testimonials[activeTestimonial].quote}
					</p>
					<div>
						<p style={{ fontWeight: 600, color: "var(--text-primary)" }}>
							{testimonials[activeTestimonial].name}
						</p>
						<p
							style={{
								fontSize: "0.85rem",
								color: "var(--text-muted)",
								fontFamily: "monospace",
							}}
						>
							{testimonials[activeTestimonial].location}
						</p>
					</div>

					<div
						style={{
							display: "flex",
							justifyContent: "center",
							gap: "0.5rem",
							marginTop: "2rem",
						}}
					>
						{testimonials.map((_, i) => (
							<button
								key={`testimonial-${i}`}
								type="button"
								onClick={() => setActiveTestimonial(i)}
								style={{
									width: i === activeTestimonial ? "28px" : "10px",
									height: "10px",
									borderRadius: "2px",
									border: "none",
									cursor: "pointer",
									background:
										i === activeTestimonial
											? "var(--brand-orange)"
											: "rgba(6, 182, 212, 0.3)",
									transition: "all 0.3s ease",
									boxShadow:
										i === activeTestimonial
											? "0 0 10px rgba(249, 115, 22, 0.5)"
											: "none",
								}}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
