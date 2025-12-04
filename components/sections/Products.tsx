"use client";

import { useLanguage } from "../context/LanguageContext";

export function Products() {
	const { language, t } = useLanguage();

	const basePackageItems = [
		{
			feature: t.comparison.lifeJacket,
			detail: t.comparison.basic,
			icon: "🦺",
		},
		{
			feature: t.comparison.gps,
			detail: language === "vi" ? "Có" : "Included",
			icon: "📍",
		},
		{
			feature: t.comparison.whistle,
			detail: language === "vi" ? "Có" : "Included",
			icon: "📯",
		},
		{
			feature: t.comparison.food,
			detail: t.comparison.halfKg,
			icon: "🍞",
		},
	];

	const addons = [
		{
			feature: t.comparison.waterFilter,
			detail: language === "vi" ? "LifeStraw" : "LifeStraw Filter",
			icon: "💧",
		},
		{
			feature: t.comparison.flashlight,
			detail: language === "vi" ? "Đèn LED cao cấp" : "Premium LED",
			icon: "🔦",
		},
		{
			feature: t.comparison.food,
			detail: language === "vi" ? "Nâng lên 1kg" : "Upgrade to 1kg",
			icon: "📦",
		},
		{
			feature: t.comparison.lifeJacket,
			detail: language === "vi" ? "Nâng cấp cao cấp" : "Premium upgrade",
			icon: "⭐",
		},
	];

	const scrollToContact = () => {
		const waitlistSection = document.getElementById("contact");
		if (waitlistSection) {
			waitlistSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id="products"
			style={{ padding: "4rem 0", background: "var(--brand-dark)" }}
		>
			<div
				style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 2rem" }}
			>
				<h3
					style={{
						fontSize: "1.75rem",
						fontWeight: 700,
						textAlign: "center",
						marginBottom: "0.5rem",
						color: "var(--text-primary)",
						letterSpacing: "0.05em",
					}}
				>
					{language === "vi" ? "Bộ Kit Bao Gồm" : "What's Included"}
				</h3>
				<p
					style={{
						textAlign: "center",
						color: "var(--text-secondary)",
						marginBottom: "2rem",
						fontSize: "1rem",
					}}
				>
					{language === "vi"
						? "Tất cả các vật dụng thiết yếu trong một bộ kit"
						: "All essential items in one complete kit"}
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
					{/* Base Package */}
					<div
						className="glass-panel"
						style={{
							borderRadius: "16px",
							padding: "2rem",
							border: "2px solid var(--brand-cyan)",
							position: "relative",
						}}
					>
						<div
							style={{
								position: "absolute",
								top: "-12px",
								left: "50%",
								transform: "translateX(-50%)",
								background: "var(--brand-cyan)",
								color: "#ffffff",
								padding: "0.35rem 1.5rem",
								borderRadius: "20px",
								fontSize: "0.8rem",
								fontWeight: 600,
								textTransform: "uppercase",
								letterSpacing: "0.05em",
							}}
						>
							{language === "vi" ? "Gói Cơ Bản" : "Base Package"}
						</div>

						<div style={{ marginTop: "1rem" }}>
							{basePackageItems.map((item) => (
								<div
									key={item.feature}
									style={{
										display: "flex",
										alignItems: "center",
										gap: "1rem",
										padding: "1rem",
										marginBottom: "0.5rem",
										background: "rgba(6, 182, 212, 0.05)",
										borderRadius: "10px",
										border: "1px solid rgba(6, 182, 212, 0.1)",
									}}
								>
									<span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
									<div style={{ flex: 1 }}>
										<div
											style={{
												color: "var(--text-primary)",
												fontWeight: 500,
												fontSize: "0.95rem",
											}}
										>
											{item.feature}
										</div>
										<div
											style={{
												color: "var(--brand-cyan)",
												fontSize: "0.8rem",
												marginTop: "0.2rem",
											}}
										>
											{item.detail}
										</div>
									</div>
									<div
										style={{
											color: "var(--brand-success)",
											fontSize: "1.2rem",
										}}
									>
										✓
									</div>
								</div>
							))}
						</div>

						<div
							style={{
								marginTop: "1.5rem",
								textAlign: "center",
								padding: "1rem",
								background: "rgba(6, 182, 212, 0.1)",
								borderRadius: "10px",
							}}
						>
							<div
								style={{
									fontSize: "0.85rem",
									color: "var(--text-secondary)",
									marginBottom: "0.25rem",
								}}
							>
								{language === "vi" ? "Giá từ" : "Starting at"}
							</div>
							<div
								style={{
									fontSize: "1.5rem",
									fontWeight: 700,
									color: "var(--brand-cyan)",
								}}
							>
								{language === "vi" ? "Liên hệ" : "Contact us"}
							</div>
						</div>
					</div>

					{/* Optional Add-ons */}
					<div
						className="glass-panel"
						style={{
							borderRadius: "16px",
							padding: "2rem",
							border: "2px solid rgba(251, 146, 60, 0.3)",
							position: "relative",
						}}
					>
						<div
							style={{
								position: "absolute",
								top: "-12px",
								left: "50%",
								transform: "translateX(-50%)",
								background: "var(--brand-orange)",
								color: "#ffffff",
								padding: "0.35rem 1.5rem",
								borderRadius: "20px",
								fontSize: "0.8rem",
								fontWeight: 600,
								textTransform: "uppercase",
								letterSpacing: "0.05em",
							}}
						>
							{language === "vi" ? "Nâng Cấp Tùy Chọn" : "Optional Add-ons"}
						</div>

						<div style={{ marginTop: "1rem" }}>
							{addons.map((item, i) => (
								<div
									key={`${item.feature}-${i}`}
									style={{
										display: "flex",
										alignItems: "center",
										gap: "1rem",
										padding: "1rem",
										marginBottom: "0.5rem",
										background: "rgba(251, 146, 60, 0.05)",
										borderRadius: "10px",
										border: "1px solid rgba(251, 146, 60, 0.1)",
									}}
								>
									<span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
									<div style={{ flex: 1 }}>
										<div
											style={{
												color: "var(--text-primary)",
												fontWeight: 500,
												fontSize: "0.95rem",
											}}
										>
											{item.feature}
										</div>
										<div
											style={{
												color: "var(--brand-orange)",
												fontSize: "0.8rem",
												marginTop: "0.2rem",
											}}
										>
											{item.detail}
										</div>
									</div>
									<div
										style={{
											color: "var(--brand-orange)",
											fontSize: "0.85rem",
											fontWeight: 600,
											padding: "0.25rem 0.75rem",
											background: "rgba(251, 146, 60, 0.1)",
											borderRadius: "15px",
										}}
									>
										+
									</div>
								</div>
							))}
						</div>

						<div
							style={{
								marginTop: "1.5rem",
								textAlign: "center",
								padding: "1rem",
								background: "rgba(251, 146, 60, 0.1)",
								borderRadius: "10px",
							}}
						>
							<div
								style={{
									fontSize: "0.85rem",
									color: "var(--text-secondary)",
									marginBottom: "0.25rem",
								}}
							>
								{language === "vi"
									? "Tùy chỉnh theo nhu cầu"
									: "Customize to your needs"}
							</div>
							<div
								style={{
									fontSize: "1rem",
									fontWeight: 600,
									color: "var(--brand-orange)",
								}}
							>
								{language === "vi"
									? "Liên hệ để báo giá"
									: "Contact for pricing"}
							</div>
						</div>
					</div>
				</div>

				{/* CTA */}
				<div style={{ textAlign: "center", marginTop: "2rem" }}>
					<button
						type="button"
						onClick={scrollToContact}
						style={{
							padding: "1rem 3rem",
							fontSize: "1rem",
							fontWeight: 600,
							color: "#ffffff",
							background:
								"linear-gradient(135deg, var(--brand-orange) 0%, #f97316 100%)",
							border: "none",
							borderRadius: "50px",
							cursor: "pointer",
							textTransform: "uppercase",
							letterSpacing: "0.05em",
							transition: "all 0.3s ease",
						}}
					>
						{language === "vi" ? "Liên hệ ngay" : "Contact Us"}
					</button>
				</div>
			</div>
		</section>
	);
}
