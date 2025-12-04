"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export function Navigation() {
	const { language, setLanguage, t } = useLanguage();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const navItems = [
		{ label: t.nav.home, href: "#", active: true },
		{ label: t.nav.products, href: "#products" },
		{ label: t.nav.about, href: "#about" },
		{ label: t.nav.contact, href: "#contact" },
	];

	const toggleLanguage = () => {
		setLanguage(language === "vi" ? "en" : "vi");
	};

	return (
		<header
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				zIndex: 50,
				background: "rgba(2, 6, 23, 0.95)",
				backdropFilter: "blur(20px)",
				borderBottom: "1px solid rgba(6, 182, 212, 0.1)",
			}}
		>
			<nav
				style={{
					maxWidth: "1400px",
					margin: "0 auto",
					padding: "0 1rem",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					height: "70px",
				}}
			>
				{/* Logo */}
				<div
					style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
				>
					<div
						style={{
							width: "36px",
							height: "36px",
							borderRadius: "8px",
							background:
								"linear-gradient(135deg, var(--brand-orange), var(--brand-alert))",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)",
						}}
					>
						<span style={{ fontSize: "1.1rem" }}>🛟</span>
					</div>
					<span
						style={{
							fontSize: "1.25rem",
							fontWeight: 700,
							letterSpacing: "0.1em",
							color: "var(--text-primary)",
							textShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
						}}
					>
						NOAH
					</span>
					<span
						className="hide-mobile"
						style={{
							fontSize: "0.6rem",
							color: "var(--brand-cyan)",
							fontFamily: "monospace",
							padding: "2px 6px",
							border: "1px solid var(--brand-cyan)",
							borderRadius: "2px",
						}}
					>
						v2.0
					</span>
				</div>

				{/* Desktop Navigation */}
				<div
					className="desktop-nav"
					style={{
						display: "flex",
						alignItems: "center",
						gap: "0.25rem",
						background: "rgba(15, 23, 42, 0.6)",
						padding: "0.35rem",
						border: "1px solid rgba(6, 182, 212, 0.2)",
						borderRadius: "4px",
					}}
				>
					{navItems.map((item) => (
						<a
							key={`nav-${item.href}`}
							href={item.href}
							style={{
								padding: "0.5rem 1rem",
								borderRadius: "2px",
								fontSize: "0.75rem",
								fontWeight: 500,
								textDecoration: "none",
								transition: "all 0.3s ease",
								textTransform: "uppercase",
								letterSpacing: "0.05em",
								background: item.active
									? "var(--brand-orange)"
									: "transparent",
								color: item.active ? "white" : "var(--text-secondary)",
								boxShadow: item.active
									? "0 0 15px rgba(249, 115, 22, 0.4)"
									: "none",
							}}
						>
							{item.label}
						</a>
					))}
				</div>

				{/* Desktop Right Actions */}
				<div
					className="desktop-nav"
					style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
				>
					<div
						style={{
							fontSize: "0.65rem",
							color: "var(--brand-cyan)",
							fontFamily: "monospace",
							display: "flex",
							alignItems: "center",
							gap: "0.5rem",
						}}
					>
						<span className="status-dot status-active" />
						<span className="hide-tablet">{t.hud.sysActive}</span>
					</div>
					<button
						type="button"
						onClick={toggleLanguage}
						style={{
							display: "flex",
							alignItems: "center",
							gap: "0.5rem",
							padding: "0.4rem 0.6rem",
							borderRadius: "4px",
							border: "1px solid rgba(6, 182, 212, 0.3)",
							background: "transparent",
							cursor: "pointer",
							fontSize: "0.75rem",
							fontWeight: 500,
							color: "var(--brand-cyan)",
							transition: "all 0.3s ease",
							fontFamily: "monospace",
						}}
					>
						{language === "vi" ? "VI" : "EN"}
					</button>
					<a
						href="#waitlist"
						style={{
							display: "flex",
							alignItems: "center",
							gap: "0.5rem",
							padding: "0.5rem 1rem",
							borderRadius: "4px",
							background: "var(--brand-orange)",
							color: "white",
							fontSize: "0.75rem",
							fontWeight: 600,
							textDecoration: "none",
							transition: "all 0.3s ease",
							boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)",
							textTransform: "uppercase",
							letterSpacing: "0.05em",
						}}
					>
						{t.hero.cta}
						<svg
							width="12"
							height="12"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							aria-hidden="true"
						>
							<title>Arrow</title>
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>
					</a>
				</div>

				{/* Mobile Menu Button */}
				<div
					style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
					className="mobile-only"
				>
					<button
						type="button"
						onClick={toggleLanguage}
						style={{
							padding: "0.4rem 0.6rem",
							borderRadius: "4px",
							border: "1px solid rgba(6, 182, 212, 0.3)",
							background: "transparent",
							cursor: "pointer",
							fontSize: "0.75rem",
							fontWeight: 500,
							color: "var(--brand-cyan)",
							fontFamily: "monospace",
						}}
					>
						{language === "vi" ? "VI" : "EN"}
					</button>
					<button
						type="button"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="mobile-menu-btn"
						aria-label="Toggle menu"
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "5px",
							padding: "8px",
							background: "transparent",
							border: "1px solid var(--brand-cyan)",
							borderRadius: "6px",
							cursor: "pointer",
						}}
					>
						<span
							style={{
								width: "20px",
								height: "2px",
								background: "var(--brand-cyan)",
								transform: mobileMenuOpen
									? "rotate(45deg) translateY(7px)"
									: "none",
								transition: "all 0.3s ease",
							}}
						/>
						<span
							style={{
								width: "20px",
								height: "2px",
								background: "var(--brand-cyan)",
								opacity: mobileMenuOpen ? 0 : 1,
								transition: "all 0.3s ease",
							}}
						/>
						<span
							style={{
								width: "20px",
								height: "2px",
								background: "var(--brand-cyan)",
								transform: mobileMenuOpen
									? "rotate(-45deg) translateY(-7px)"
									: "none",
								transition: "all 0.3s ease",
							}}
						/>
					</button>
				</div>
			</nav>

			{/* Mobile Navigation Menu */}
			{mobileMenuOpen && (
				<div
					className="mobile-nav"
					style={{
						position: "absolute",
						top: "70px",
						left: 0,
						right: 0,
						background: "rgba(2, 6, 23, 0.98)",
						backdropFilter: "blur(20px)",
						borderBottom: "1px solid var(--brand-cyan)",
						padding: "1rem",
						display: "flex",
						flexDirection: "column",
						gap: "0.5rem",
					}}
				>
					{navItems.map((item) => (
						<a
							key={`mobile-nav-${item.href}`}
							href={item.href}
							onClick={() => setMobileMenuOpen(false)}
							style={{
								padding: "1rem",
								borderRadius: "8px",
								fontSize: "1rem",
								fontWeight: 500,
								textDecoration: "none",
								textAlign: "center",
								textTransform: "uppercase",
								letterSpacing: "0.05em",
								background: item.active
									? "rgba(249, 115, 22, 0.2)"
									: "rgba(15, 23, 42, 0.6)",
								color: item.active
									? "var(--brand-orange)"
									: "var(--text-secondary)",
								border: item.active
									? "1px solid var(--brand-orange)"
									: "1px solid rgba(6, 182, 212, 0.1)",
							}}
						>
							{item.label}
						</a>
					))}
					<a
						href="#waitlist"
						onClick={() => setMobileMenuOpen(false)}
						style={{
							padding: "1rem",
							borderRadius: "8px",
							background: "var(--brand-orange)",
							color: "white",
							fontSize: "1rem",
							fontWeight: 600,
							textDecoration: "none",
							textAlign: "center",
							textTransform: "uppercase",
							letterSpacing: "0.05em",
							marginTop: "0.5rem",
						}}
					>
						{t.hero.cta}
					</a>
				</div>
			)}
		</header>
	);
}
