"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { Warning } from "@/components/sections/Warning";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Products } from "@/components/sections/Products";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Mission } from "@/components/sections/Mission";
import { SDG } from "@/components/sections/SDG";
import { FAQ } from "@/components/sections/FAQ";
import { Waitlist } from "@/components/sections/Waitlist";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
	return (
		<>
			<div className="scanlines" />
			<div
				className="tech-grid text-balance"
				style={{ minHeight: "100vh", background: "var(--brand-dark)" }}
			>
				<Navigation />
				<Hero />
				<Impact />
				<Warning />
				<HowItWorks />
				<Products />
				<Features />
				<Testimonials />
				<Mission />
				<SDG />
				<FAQ />
				<Waitlist />
				<Contact />
				<Footer />
			</div>
		</>
	);
}
