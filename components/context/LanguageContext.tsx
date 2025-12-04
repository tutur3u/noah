"use client";

import {
	createContext,
	useContext,
	useState,
	type ReactNode,
} from "react";
import {
	translations,
	type Language,
	type TranslationKeys,
} from "../constants/translations";

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	toggleLanguage: () => void;
	t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<Language>("vi");

	const toggleLanguage = () => {
		setLanguage((prev) => (prev === "vi" ? "en" : "vi"));
	};

	return (
		<LanguageContext.Provider
			value={{
				language,
				setLanguage,
				toggleLanguage,
				t: translations[language],
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
}
