import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
	subsets: ["latin", "vietnamese"],
	weight: ["100", "300", "400", "500", "700", "900"],
	variable: "--font-oxygen",
});

const robotoMono = Roboto_Mono({
	subsets: ["latin", "vietnamese"],
	weight: ["100", "300", "400", "500", "700"],
	variable: "--font-oxygen-mono",
});

const font = {
	variable: `${roboto.variable} ${robotoMono.variable}`,
};

export const metadata: Metadata = {
	title: "NOAH - Bộ Cứu Hộ Khẩn Cấp",
	description:
		"NOAH - Áo phao thông minh được tạo nên để bảo vệ sự sống giữa dòng lũ. Tích hợp GPS, thực phẩm, lọc nước và thiết bị sinh tồn.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="vi">
			<body className={`${font.variable} antialiased`}>
				<Analytics />
				{children}
			</body>
		</html>
	);
}
