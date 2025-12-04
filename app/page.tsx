"use client";

import { useEffect, useRef, useState } from "react";

type Language = "vi" | "en";

const translations = {
	vi: {
		nav: {
			home: "Trang chủ",
			products: "Sản phẩm",
			about: "Giới thiệu",
			contact: "Liên hệ",
		},
		hero: {
			tagline: "Kit Cứu Hộ Khẩn Cấp",
			title1: "Đừng Để",
			title2: "Quá Muộn",
			subtitle:
				"Mỗi năm, hàng trăm người Việt Nam mất mạng vì lũ lụt. Đừng để gia đình bạn trở thành con số thống kê tiếp theo.",
			description:
				"Kit cứu hộ NOAH được thiết kế từ nỗi đau của những mất mát. Mỗi tính năng đều được nghiên cứu từ thực tế lũ lụt tại Việt Nam.",
			cta: "Tìm hiểu ngay",
			stats: {
				disasters: "thiên tai từ bão lũ",
				population: "dân số có nguy cơ",
			},
		},
		badges: {
			gps: "GPS Định vị",
			gpsDesc: "Để cứu hộ tìm thấy bạn",
			water: "Lọc nước",
			waterDesc: "Nước bẩn = Bệnh tật",
			sos: "SOS Cứu hộ",
			sosDesc: "Khi mọi thứ sụp đổ",
			rescueTeam: "Đội cứu hộ - 2.3km",
		},
		impact: {
			badge: "Sự thật đau lòng",
			title: "Thảm họa không chờ đợi",
			subtitle:
				"Những con số này không chỉ là thống kê — đó là sinh mạng, là gia đình, là những giấc mơ bị cuốn trôi",
			stat1: "Thiệt hại mỗi năm",
			stat2: "Người bị ảnh hưởng",
			stat3: "Tỉnh thành có nguy cơ",
			stat4: "Tháng mùa lũ",
			caption1: "Khi nước dâng, mọi thứ có thể mất chỉ trong vài giờ",
			caption2:
				"Nhiều gia đình bị cô lập hoàn toàn, không thức ăn, không nước sạch",
		},
		warning: {
			badge: "Cảnh báo quan trọng",
			title: "Những điều bạn cần biết",
			note1: {
				title: "⚠️ Nước lũ rất nguy hiểm",
				desc: "Chỉ 15cm nước chảy xiết có thể làm bạn ngã. 60cm nước có thể cuốn trôi xe hơi. Nước lũ chứa vi khuẩn, hóa chất độc hại và mảnh vỡ sắc nhọn.",
			},
			note2: {
				title: "🕐 Thời gian vàng chỉ 72 giờ",
				desc: "Con người có thể sống 3 ngày không có nước, nhưng trong lũ lụt, nguy cơ nhiễm bệnh từ nước bẩn tăng gấp 10 lần. Chuẩn bị trước là sống còn.",
			},
			note3: {
				title: "📍 Cứu hộ không thể đến nếu không biết bạn ở đâu",
				desc: "Trong trận lũ 2020 tại miền Trung, nhiều người mắc kẹt không được cứu kịp vì không có cách liên lạc. GPS có thể là sự khác biệt giữa sống và chết.",
			},
			note4: {
				title: "👨‍👩‍👧‍👦 Trẻ em và người già dễ tổn thương nhất",
				desc: "Họ không thể tự bơi, dễ bị hạ thân nhiệt và mất nước nhanh hơn. Một bộ kit có thể cứu cả gia đình.",
			},
		},
		howItWorks: {
			badge: "Cách hoạt động",
			title: "Từ chuẩn bị đến cứu hộ",
			subtitle:
				"Kit NOAH được thiết kế để sử dụng dễ dàng trong mọi tình huống khẩn cấp",
			step1: {
				title: "Chuẩn bị sẵn sàng",
				desc: "Đặt kit NOAH tại vị trí dễ tiếp cận trong nhà. Kit được đóng gói gọn nhẹ, chống nước.",
			},
			step2: {
				title: "Kích hoạt GPS",
				desc: "Khi có lũ, bật thiết bị GPS. Vị trí của bạn sẽ được gửi đến trung tâm cứu hộ.",
			},
			step3: {
				title: "Sinh tồn an toàn",
				desc: "Sử dụng áo phao, lọc nước sạch, và lương khô trong khi chờ cứu hộ.",
			},
			step4: {
				title: "Được giải cứu",
				desc: "Đội cứu hộ định vị và tiếp cận bạn nhanh chóng nhờ tín hiệu GPS.",
			},
		},
		products: {
			title: "Chọn Gói Phù Hợp",
			subtitle: "Ba gói sản phẩm được thiết kế để đáp ứng mọi nhu cầu",
			basic: {
				name: "Cơ Bản",
				price: "Liên hệ",
				desc: "Sinh tồn ngắn hạn",
			},
			medium: {
				name: "Trung Cấp",
				price: "Liên hệ",
				desc: "Bảo vệ toàn diện",
				tag: "Phổ biến",
			},
			premium: {
				name: "Cao Cấp",
				price: "Liên hệ",
				desc: "Trang bị đầy đủ",
				tag: "Khuyến nghị",
			},
			compare: "So sánh chi tiết",
		},
		comparison: {
			title: "So sánh các gói",
			feature: "Tính năng",
			lifeJacket: "Áo phao",
			gps: "GPS định vị",
			whistle: "Còi cứu hộ",
			food: "Lương khô MRE",
			waterFilter: "Lọc nước LifeStraw",
			flashlight: "Đèn pin",
			basic: "Cơ bản",
			premium: "Cao cấp",
			none: "Không có",
			halfKg: "0.5kg",
			oneKg: "1kg",
		},
		features: {
			title: "Tính Năng Nổi Bật",
			gps: {
				title: "GPS Beitan BE-252i",
				desc: "Thiết bị định vị giúp đội cứu hộ tìm thấy bạn nhanh chóng trong mọi tình huống khẩn cấp.",
				specs: ["Độ chính xác 2.5m", "Pin 72 giờ", "Chống nước IP68"],
			},
			water: {
				title: "LifeStraw VesterGaard",
				desc: "Ống lọc nước chính hãng, lọc 99.99% vi khuẩn và ký sinh trùng có hại.",
				specs: ["Lọc 4,000L nước", "Không cần pin", "Trọng lượng 57g"],
			},
			food: {
				title: "Lương khô MRE BB702",
				desc: "Thực phẩm quân sự tiêu chuẩn, bảo quản lâu dài, đầy đủ dinh dưỡng.",
				specs: ["Hạn sử dụng 5 năm", "2,400 kcal/gói", "Ăn liền không nấu"],
			},
			light: {
				title: "Đèn pin Cree Zoom",
				desc: "Đèn chiếu sáng chuyên dụng với khả năng chịu nước tốt trong mọi điều kiện.",
				specs: ["1000 lumens", "Zoom 500m", "Chống va đập"],
			},
		},
		testimonials: {
			badge: "Câu chuyện sống sót",
			title: "Những người đã trải qua",
			t1: {
				quote:
					"Năm 2020, nước dâng lúc 3 giờ sáng. Chúng tôi mất tất cả. Nếu có GPS, đội cứu hộ đã đến sớm hơn 6 tiếng. Mẹ tôi có thể vẫn còn sống.",
				name: "Nguyễn Văn Minh",
				location: "Quảng Bình",
			},
			t2: {
				quote:
					"Con trai tôi uống nước lũ vì không còn nước sạch. Nó bị tiêu chảy nặng, suýt mất mạng. Bây giờ tôi luôn có sẵn ống lọc nước.",
				name: "Trần Thị Hoa",
				location: "Thừa Thiên Huế",
			},
			t3: {
				quote:
					"Tôi đã chứng kiến học sinh của mình mất cha mẹ trong lũ. Các em không nên phải trải qua điều đó. Mỗi gia đình cần chuẩn bị trước.",
				name: "Lê Minh Tuấn",
				location: "Hà Tĩnh",
			},
		},
		gallery: {
			badge: "Hình ảnh",
			title: "Thực trạng lũ lụt",
			subtitle: "Những hình ảnh cho thấy sự cần thiết của việc chuẩn bị",
		},
		mission: {
			badge: "Câu chuyện",
			title: "Tại sao NOAH ra đời?",
			story:
				"Noah là dự án từ tâm huyết của sinh viên RMIT sau những chứng kiến tàn phá của lũ lụt tại miền Trung Việt Nam và các nước Đông Nam Á.",
			mission:
				"Sứ mệnh của chúng tôi là mang lại hy vọng và bảo vệ sự sống của người dân giữa dòng lũ.",
			vision: "Tầm nhìn",
			visionText:
				"Mỗi gia đình Việt Nam trong vùng lũ đều có một bộ kit cứu hộ NOAH.",
			values: "Giá trị cốt lõi",
			value1: "An toàn là trên hết",
			value2: "Chất lượng không thỏa hiệp",
			value3: "Phục vụ cộng đồng",
		},
		sdg: {
			badge: "Tác động xã hội",
			title: "Mục tiêu phát triển bền vững",
			sdg11: "SDG 11",
			sdg11Title: "Thành phố bền vững",
			sdg11Desc:
				"Giảm tác động tiêu cực của thiên tai, tăng khả năng phục hồi cộng đồng.",
			sdg13: "SDG 13",
			sdg13Title: "Hành động khí hậu",
			sdg13Desc:
				"Trang bị công cụ giúp người dân thích ứng với biến đổi khí hậu.",
		},
		faq: {
			badge: "FAQ",
			title: "Câu hỏi thường gặp",
			q1: "Kit NOAH có thể sử dụng trong bao lâu?",
			a1: "Kit được thiết kế để hỗ trợ sinh tồn từ 3-7 ngày tùy theo gói. Lương khô có hạn sử dụng 5 năm, GPS có pin 72 giờ.",
			q2: "GPS có hoạt động ở vùng không có sóng điện thoại?",
			a2: "Có! GPS Beitan BE-252i sử dụng vệ tinh nên hoạt động độc lập với mạng di động. Tín hiệu được gửi qua sóng vô tuyến.",
			q3: "Tôi có thể mua kit ở đâu?",
			a3: "Hiện tại sản phẩm đang trong giai đoạn phát triển. Hãy đăng ký waitlist để được thông báo khi sản phẩm ra mắt.",
			q4: "Kit có phù hợp cho trẻ em không?",
			a4: "Có, áo phao có nhiều kích cỡ phù hợp cho cả người lớn và trẻ em. Lương khô MRE cũng an toàn cho mọi lứa tuổi.",
		},
		partners: {
			badge: "Đối tác",
			title: "Được hỗ trợ bởi",
		},
		waitlist: {
			title: "Đăng Ký Nhận Thông Báo",
			subtitle: "Mùa lũ sắp đến. Đừng đợi đến khi quá muộn.",
			name: "Họ và tên",
			phone: "Số điện thoại",
			email: "Email",
			submit: "Đăng ký ngay",
			success: "Cảm ơn bạn đã đăng ký!",
			development: "Đang phát triển",
			devDesc: "Sản phẩm đang được hoàn thiện để đảm bảo chất lượng tốt nhất.",
			urgentNote: "Lưu ý quan trọng",
			urgentDesc:
				"Mùa mưa bão thường bắt đầu từ tháng 9-11. Hãy chuẩn bị trước ít nhất 2 tháng.",
			registered: "gia đình đã đăng ký bảo vệ người thân",
		},
		contact: {
			title: "Liên Hệ",
			hotline: "Hotline 24/7",
			email: "Email hỗ trợ",
			partner: "Đối tác doanh nghiệp",
			address: "Địa chỉ",
			addressText: "RMIT University Vietnam, Quận 7, TP.HCM",
		},
		footer: {
			tagline: "Vì mỗi sinh mạng đều đáng được bảo vệ",
			project: "Dự án sinh viên RMIT",
			copyright: "© 2025 NOAH Emergency Flood Kit",
			privacy: "Chính sách bảo mật",
			terms: "Điều khoản sử dụng",
			navigation: "ĐIỀU HƯỚNG",
			legal: "PHÁP LÝ",
		},
		hud: {
			sysInit: "[HỆ THỐNG]",
			version: "NOAH_v2.0.1",
			statusReady: "TRẠNG THÁI: SẴN SÀNG",
			emergencyMode: "[CHẾ ĐỘ KHẨN CẤP]",
			freq: "TẦN SỐ: 121.5MHz",
			power: "PIN: ████████ 98%",
			coord: "TỌA ĐỘ: 16.0544°N, 108.2022°E",
			altHdop: "CAO ĐỘ: 12m | HDOP: 0.8",
			satellite: "● VỆ TINH: 12/12",
			network: "● MẠNG: ĐÃ KẾT NỐI",
			gpsActive: "● GPS: HOẠT ĐỘNG",
			gpsModule: "[MODULE GPS]",
			lat: "VĨ ĐỘ: 16.0544°N",
			lon: "KINH ĐỘ: 108.2022°E",
			alt: "CAO ĐỘ: 12.4m",
			signalActive: "● TÍN HIỆU: HOẠT ĐỘNG",
			satCount: "● VỆ TINH: 12/12",
			scanData: "[DỮ LIỆU QUÉT]",
			range: "PHẠM VI: 5KM",
			units: "ĐƠN VỊ: 3",
			freqShort: "TẦN SỐ: 121.5",
			powerShort: "PIN: ████ 92%",
			systemOnline: "● HỆ THỐNG TRỰC TUYẾN",
			systemActive: "HỆ THỐNG HOẠT ĐỘNG",
			sysActive: "HỆ THỐNG: HOẠT ĐỘNG",
			sectorCentral: "KHU VỰC: MIỀN TRUNG VN",
			alertActive: "● CẢNH BÁO: HOẠT ĐỘNG",
			coordBracket: "[VĨ ĐỘ: 16.0544° N | KINH ĐỘ: 108.2022° E]",
			footerLat: "VĨ ĐỘ: 10.7769° N",
			footerLon: "KINH ĐỘ: 106.7009° E",
		},
	},
	en: {
		nav: {
			home: "Home",
			products: "Products",
			about: "About",
			contact: "Contact",
		},
		hero: {
			tagline: "Emergency Flood Kit",
			title1: "Don't Let",
			title2: "It Be Too Late",
			subtitle:
				"Every year, hundreds of Vietnamese lose their lives to floods. Don't let your family become the next statistic.",
			description:
				"The NOAH rescue kit was designed from the pain of loss. Every feature is researched from real flood situations in Vietnam.",
			cta: "Learn More",
			stats: {
				disasters: "disasters from floods",
				population: "population at risk",
			},
		},
		badges: {
			gps: "GPS Tracking",
			gpsDesc: "So rescuers can find you",
			water: "Water Filter",
			waterDesc: "Dirty water = Disease",
			sos: "SOS Rescue",
			sosDesc: "When everything falls apart",
			rescueTeam: "Rescue team - 2.3km",
		},
		impact: {
			badge: "Painful Truths",
			title: "Disaster Waits For No One",
			subtitle:
				"These numbers aren't just statistics — they are lives, families, and dreams swept away",
			stat1: "Damage per year",
			stat2: "People affected",
			stat3: "Provinces at risk",
			stat4: "Flood months",
			caption1: "When water rises, everything can be lost in just hours",
			caption2:
				"Many families are completely isolated, without food, without clean water",
		},
		warning: {
			badge: "Critical Warning",
			title: "What You Need to Know",
			note1: {
				title: "⚠️ Floodwater is extremely dangerous",
				desc: "Just 6 inches of fast-moving water can knock you down. 2 feet of water can sweep away a car. Floodwater contains bacteria, toxic chemicals, and sharp debris.",
			},
			note2: {
				title: "🕐 The golden window is only 72 hours",
				desc: "Humans can survive 3 days without water, but during floods, the risk of infection from dirty water increases 10x. Preparation is survival.",
			},
			note3: {
				title: "📍 Rescue can't come if they don't know where you are",
				desc: "During the 2020 floods in Central Vietnam, many trapped people weren't rescued in time because they had no way to communicate. GPS can be the difference between life and death.",
			},
			note4: {
				title: "👨‍👩‍👧‍👦 Children and elderly are most vulnerable",
				desc: "They can't swim on their own, are more prone to hypothermia and dehydrate faster. One kit can save an entire family.",
			},
		},
		howItWorks: {
			badge: "How It Works",
			title: "From Preparation to Rescue",
			subtitle: "NOAH kit is designed for easy use in any emergency",
			step1: {
				title: "Be Prepared",
				desc: "Place NOAH kit in an accessible location. Kit is compact and waterproof.",
			},
			step2: {
				title: "Activate GPS",
				desc: "When flooding occurs, turn on GPS. Your location is sent to rescue center.",
			},
			step3: {
				title: "Survive Safely",
				desc: "Use life jacket, filter clean water, and eat rations while waiting.",
			},
			step4: {
				title: "Get Rescued",
				desc: "Rescue team locates and reaches you quickly via GPS signal.",
			},
		},
		products: {
			title: "Choose Your Kit",
			subtitle: "Three packages designed to meet all needs",
			basic: {
				name: "Basic",
				price: "Contact us",
				desc: "Short-term survival",
			},
			medium: {
				name: "Medium",
				price: "Contact us",
				desc: "Full protection",
				tag: "Popular",
			},
			premium: {
				name: "Premium",
				price: "Contact us",
				desc: "Fully equipped",
				tag: "Recommended",
			},
			compare: "Compare Details",
		},
		comparison: {
			title: "Compare Packages",
			feature: "Feature",
			lifeJacket: "Life Jacket",
			gps: "GPS Tracking",
			whistle: "Emergency Whistle",
			food: "MRE Rations",
			waterFilter: "LifeStraw Filter",
			flashlight: "Flashlight",
			basic: "Basic",
			premium: "Premium",
			none: "None",
			halfKg: "0.5kg",
			oneKg: "1kg",
		},
		features: {
			title: "Key Features",
			gps: {
				title: "GPS Beitan BE-252i",
				desc: "Tracking device helps rescue teams find you quickly in any emergency.",
				specs: ["2.5m accuracy", "72h battery", "IP68 waterproof"],
			},
			water: {
				title: "LifeStraw VesterGaard",
				desc: "Authentic water filter that removes 99.99% of harmful bacteria and parasites.",
				specs: ["Filters 4,000L", "No batteries", "Weight 57g"],
			},
			food: {
				title: "MRE Rations BB702",
				desc: "Military-grade food with long-term storage and complete nutrition.",
				specs: ["5-year shelf life", "2,400 kcal/pack", "Ready to eat"],
			},
			light: {
				title: "Cree Zoom Flashlight",
				desc: "Professional flashlight with powerful waterproof illumination.",
				specs: ["1000 lumens", "500m zoom", "Shock resistant"],
			},
		},
		testimonials: {
			badge: "Survivor Stories",
			title: "Those Who Lived Through It",
			t1: {
				quote:
					"In 2020, the water rose at 3 AM. We lost everything. If we had GPS, the rescue team would have arrived 6 hours earlier. My mother might still be alive.",
				name: "Nguyen Van Minh",
				location: "Quang Binh",
			},
			t2: {
				quote:
					"My son drank floodwater because there was no clean water left. He got severe diarrhea, nearly died. Now I always keep a water filter ready.",
				name: "Tran Thi Hoa",
				location: "Thua Thien Hue",
			},
			t3: {
				quote:
					"I've witnessed my students lose their parents in floods. They shouldn't have to go through that. Every family needs to prepare in advance.",
				name: "Le Minh Tuan",
				location: "Ha Tinh",
			},
		},
		gallery: {
			badge: "Gallery",
			title: "Flood Reality",
			subtitle: "Images showing the necessity of preparation",
		},
		mission: {
			badge: "Our Story",
			title: "Why NOAH?",
			story:
				"Noah is a project born from RMIT students after witnessing flood devastation in Central Vietnam and Southeast Asian countries.",
			mission: "Our mission is to bring hope and protect lives in the flood.",
			vision: "Vision",
			visionText:
				"Every Vietnamese family in flood zones has a NOAH rescue kit.",
			values: "Core Values",
			value1: "Safety first",
			value2: "Uncompromised quality",
			value3: "Community service",
		},
		sdg: {
			badge: "Social Impact",
			title: "Sustainable Development Goals",
			sdg11: "SDG 11",
			sdg11Title: "Sustainable Cities",
			sdg11Desc:
				"Reduce adverse effects of disasters, strengthen community resilience.",
			sdg13: "SDG 13",
			sdg13Title: "Climate Action",
			sdg13Desc: "Equip tools to help people adapt to climate change.",
		},
		faq: {
			badge: "FAQ",
			title: "Frequently Asked Questions",
			q1: "How long can the NOAH kit support survival?",
			a1: "Kit is designed to support 3-7 days depending on package. Rations have 5-year shelf life, GPS has 72-hour battery.",
			q2: "Does GPS work without mobile signal?",
			a2: "Yes! Beitan BE-252i GPS uses satellite so it works independently from mobile networks. Signal is sent via radio waves.",
			q3: "Where can I buy the kit?",
			a3: "Currently the product is in development. Register for waitlist to be notified when product launches.",
			q4: "Is the kit suitable for children?",
			a4: "Yes, life jackets come in multiple sizes for adults and children. MRE rations are also safe for all ages.",
		},
		partners: {
			badge: "Partners",
			title: "Supported By",
		},
		waitlist: {
			title: "Register For Updates",
			subtitle: "Flood season is coming. Don't wait until it's too late.",
			name: "Full name",
			phone: "Phone number",
			email: "Email",
			submit: "Register now",
			success: "Thank you for registering!",
			development: "In Development",
			devDesc: "Product is being perfected to ensure the best quality.",
			urgentNote: "Important Note",
			urgentDesc:
				"Storm season typically starts September-November. Prepare at least 2 months in advance.",
			registered: "families registered to protect loved ones",
		},
		contact: {
			title: "Contact",
			hotline: "24/7 Hotline",
			email: "Support Email",
			partner: "Business Partners",
			address: "Address",
			addressText: "RMIT University Vietnam, District 7, HCMC",
		},
		footer: {
			tagline: "Because every life deserves protection",
			project: "RMIT Student Project",
			copyright: "© 2025 NOAH Emergency Flood Kit",
			privacy: "Privacy Policy",
			terms: "Terms of Service",
			navigation: "NAVIGATION",
			legal: "LEGAL",
		},
		hud: {
			sysInit: "[SYS.INIT]",
			version: "NOAH_v2.0.1",
			statusReady: "STATUS: READY",
			emergencyMode: "[EMERGENCY.MODE]",
			freq: "FREQ: 121.5MHz",
			power: "PWR: ████████ 98%",
			coord: "COORD: 16.0544°N, 108.2022°E",
			altHdop: "ALT: 12m | HDOP: 0.8",
			satellite: "● SATELLITE: 12/12",
			network: "● NETWORK: CONNECTED",
			gpsActive: "● GPS: ACTIVE",
			gpsModule: "[GPS.MODULE]",
			lat: "LAT: 16.0544°N",
			lon: "LON: 108.2022°E",
			alt: "ALT: 12.4m",
			signalActive: "● SIGNAL: ACTIVE",
			satCount: "● SAT: 12/12",
			scanData: "[SCAN.DATA]",
			range: "RANGE: 5KM",
			units: "UNITS: 3",
			freqShort: "FREQ: 121.5",
			powerShort: "PWR: ████ 92%",
			systemOnline: "● SYSTEM ONLINE",
			systemActive: "SYSTEM ACTIVE",
			sysActive: "SYS: ACTIVE",
			sectorCentral: "SECTOR: CENTRAL VN",
			alertActive: "● ALERT: ACTIVE",
			coordBracket: "[LAT: 16.0544° N | LON: 108.2022° E]",
			footerLat: "LAT: 10.7769° N",
			footerLon: "LON: 106.7009° E",
		},
	},
};

// Animated counter hook
function useCounter(
	end: number,
	duration: number = 2000,
	startOnView: boolean = true,
) {
	const [count, setCount] = useState(0);
	const [hasStarted, setHasStarted] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!startOnView) {
			setHasStarted(true);
		}
	}, [startOnView]);

	useEffect(() => {
		if (startOnView && ref.current) {
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting && !hasStarted) {
						setHasStarted(true);
					}
				},
				{ threshold: 0.5 },
			);
			observer.observe(ref.current);
			return () => observer.disconnect();
		}
	}, [hasStarted, startOnView]);

	useEffect(() => {
		if (!hasStarted) return;

		let startTime: number;
		const step = (timestamp: number) => {
			if (!startTime) startTime = timestamp;
			const progress = Math.min((timestamp - startTime) / duration, 1);
			setCount(Math.floor(progress * end));
			if (progress < 1) {
				requestAnimationFrame(step);
			}
		};
		requestAnimationFrame(step);
	}, [end, duration, hasStarted]);

	return { count, ref };
}

export default function Home() {
	const [language, setLanguage] = useState<Language>("vi");
	const [mounted, setMounted] = useState(false);
	const [activeProduct, setActiveProduct] = useState(1);
	const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
	const [submitted, setSubmitted] = useState(false);
	const [openFaq, setOpenFaq] = useState<number | null>(null);
	const [activeTestimonial, setActiveTestimonial] = useState(0);

	const t = translations[language];

	const counter1 = useCounter(15, 2000);
	const counter2 = useCounter(7, 2000);
	const counter3 = useCounter(28, 2000);
	const counter4 = useCounter(6, 2000);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveTestimonial((prev) => (prev + 1) % 3);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		setSubmitted(true);
		setTimeout(() => setSubmitted(false), 3000);
		setFormData({ name: "", phone: "", email: "" });
	};

	const products = [
		{
			id: 0,
			name: t.products.basic.name,
			price: t.products.basic.price,
			desc: t.products.basic.desc,
			image: "/mock-1.png",
		},
		{
			id: 1,
			name: t.products.medium.name,
			price: t.products.medium.price,
			desc: t.products.medium.desc,
			tag: t.products.medium.tag,
			image: "/mock-2.png",
		},
		{
			id: 2,
			name: t.products.premium.name,
			price: t.products.premium.price,
			desc: t.products.premium.desc,
			tag: t.products.premium.tag,
			image: "/mock-1.png",
		},
	];

	const testimonials = [
		t.testimonials.t1,
		t.testimonials.t2,
		t.testimonials.t3,
	];
	const faqs = [
		{ q: t.faq.q1, a: t.faq.a1 },
		{ q: t.faq.q2, a: t.faq.a2 },
		{ q: t.faq.q3, a: t.faq.a3 },
		{ q: t.faq.q4, a: t.faq.a4 },
	];

	return (
		<>
			<style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Inter:wght@300;400;500;600;700&display=swap');

        :root {
          /* Dark Tech Color Palette */
          --brand-dark: #020617;
          --brand-deep: #000000;
          --brand-surface: #0f172a;
          --brand-surface-light: #1e293b;
          --brand-blue: #1d4ed8;
          --brand-orange: #f97316;
          --brand-alert: #ef4444;
          --brand-success: #10b981;
          --brand-cyan: #06b6d4;
          --text-primary: #f8fafc;
          --text-secondary: #94a3b8;
          --text-muted: #64748b;
          --glow-blue: rgba(29, 78, 216, 0.5);
          --glow-orange: rgba(249, 115, 22, 0.5);
          --glow-cyan: rgba(6, 182, 212, 0.4);
          --font-display: 'Orbitron', monospace;
          --font-body: 'Inter', system-ui, sans-serif;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          font-family: var(--font-body);
          background: var(--brand-dark);
          color: var(--text-primary);
          overflow-x: hidden;
        }
        ::selection { background: var(--brand-orange); color: white; }

        /* HUD Animations */
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes border-pulse {
          0%, 100% { border-color: var(--brand-cyan); }
          50% { border-color: var(--brand-orange); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px var(--glow-cyan); }
          50% { box-shadow: 0 0 40px var(--glow-orange); }
        }
        @keyframes data-stream {
          0% { background-position: 0 0; }
          100% { background-position: 0 100px; }
        }

        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
        .animate-border-pulse { animation: border-pulse 4s ease-in-out infinite; }
        .animate-glow-pulse { animation: glow-pulse 4s ease-in-out infinite; }

        /* Tech Grid Overlay */
        .tech-grid {
          background-image:
            linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        /* Scanlines Overlay */
        .scanlines {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 1000;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.02),
            rgba(0, 0, 0, 0.02) 1px,
            transparent 1px,
            transparent 2px
          );
        }

        /* Glass Morphism Panels */
        .glass-panel {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(6, 182, 212, 0.2);
          box-shadow: 0 0 30px rgba(6, 182, 212, 0.1);
        }
        .glass-panel-orange {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(249, 115, 22, 0.3);
          box-shadow: 0 0 30px rgba(249, 115, 22, 0.1);
        }

        /* Hover Effects */
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(6, 182, 212, 0.2);
        }
        .hover-glow:hover {
          box-shadow: 0 0 30px var(--glow-cyan);
        }

        /* HUD Corner Brackets */
        .hud-corners {
          position: relative;
        }
        .hud-corners::before,
        .hud-corners::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: var(--brand-cyan);
        }
        .hud-corners::before {
          top: -4px; left: -4px;
          border-top: 2px solid;
          border-left: 2px solid;
        }
        .hud-corners::after {
          bottom: -4px; right: -4px;
          border-bottom: 2px solid;
          border-right: 2px solid;
        }

        /* Status Indicators */
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: pulse-slow 2s ease-in-out infinite;
        }
        .status-active { background: var(--brand-success); }
        .status-warning { background: var(--brand-orange); }
        .status-alert { background: var(--brand-alert); }
      `}</style>

			<div className="scanlines" />

			<div
				style={{ minHeight: "100vh", background: "var(--brand-dark)" }}
				className="tech-grid"
			>
				{/* Navigation */}
				<header
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						zIndex: 50,
						background: "rgba(2, 6, 23, 0.9)",
						backdropFilter: "blur(20px)",
						borderBottom: "1px solid rgba(6, 182, 212, 0.1)",
					}}
				>
					<nav
						style={{
							maxWidth: "1400px",
							margin: "0 auto",
							padding: "0 2rem",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							height: "80px",
						}}
					>
						<div
							style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
						>
							<div
								style={{
									width: "40px",
									height: "40px",
									borderRadius: "8px",
									background:
										"linear-gradient(135deg, var(--brand-orange), var(--brand-alert))",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)",
								}}
							>
								<span style={{ fontSize: "1.2rem" }}>🛟</span>
							</div>
							<span
								style={{
									fontSize: "1.5rem",
									fontWeight: 700,
									letterSpacing: "0.1em",
									color: "var(--text-primary)",
									textShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
								}}
							>
								NOAH
							</span>
							<span
								style={{
									fontSize: "0.65rem",
									color: "var(--brand-cyan)",
									fontFamily: "monospace",
									padding: "2px 6px",
									border: "1px solid var(--brand-cyan)",
									borderRadius: "2px",
									marginLeft: "0.25rem",
								}}
							>
								v2.0
							</span>
						</div>

						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "0.25rem",
								background: "rgba(15, 23, 42, 0.6)",
								padding: "0.4rem",
								border: "1px solid rgba(6, 182, 212, 0.2)",
								borderRadius: "4px",
							}}
						>
							{[
								{ label: t.nav.home, href: "#", active: true },
								{ label: t.nav.products, href: "#products" },
								{ label: t.nav.about, href: "#about" },
								{ label: t.nav.contact, href: "#contact" },
							].map((item, i) => (
								<a
									key={i}
									href={item.href}
									style={{
										padding: "0.6rem 1.25rem",
										borderRadius: "2px",
										fontSize: "0.8rem",
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

						<div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
							<div
								style={{
									fontSize: "0.7rem",
									color: "var(--brand-cyan)",
									fontFamily: "monospace",
									display: "flex",
									alignItems: "center",
									gap: "0.5rem",
								}}
							>
								<span className="status-dot status-active" />
								<span>{t.hud.sysActive}</span>
							</div>
							<button
								type="button"
								onClick={() =>
									setLanguage((prev) => (prev === "vi" ? "en" : "vi"))
								}
								style={{
									display: "flex",
									alignItems: "center",
									gap: "0.5rem",
									padding: "0.5rem 0.75rem",
									borderRadius: "4px",
									border: "1px solid rgba(6, 182, 212, 0.3)",
									background: "transparent",
									cursor: "pointer",
									fontSize: "0.8rem",
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
									padding: "0.6rem 1.25rem",
									borderRadius: "4px",
									background: "var(--brand-orange)",
									color: "white",
									fontSize: "0.85rem",
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
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</a>
						</div>
					</nav>
				</header>

				{/* Hero Section */}
				<section
					style={{
						minHeight: "100vh",
						display: "flex",
						alignItems: "center",
						paddingTop: "100px",
						paddingBottom: "4rem",
						position: "relative",
						overflow: "hidden",
					}}
				>
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
					{/* Radial gradient background */}
					<div
						style={{
							position: "absolute",
							top: "30%",
							left: "20%",
							width: "600px",
							height: "600px",
							borderRadius: "50%",
							background:
								"radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 60%)",
							filter: "blur(60px)",
						}}
					/>
					{/* Orange accent glow */}
					<div
						style={{
							position: "absolute",
							top: "40%",
							right: "20%",
							width: "500px",
							height: "500px",
							borderRadius: "50%",
							background:
								"radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 60%)",
							filter: "blur(80px)",
						}}
					/>

					{/* Left Data Stream */}
					<div
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

					{/* Right Data Stream */}
					<div
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

					{/* Corner HUD Elements */}
					<div
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
						className="animate-hud-flicker"
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
						style={{
							maxWidth: "1400px",
							margin: "0 auto",
							padding: "0 2rem",
							width: "100%",
							display: "grid",
							gridTemplateColumns: "1.1fr 0.9fr",
							gap: "2rem",
							alignItems: "center",
							position: "relative",
							zIndex: 1,
						}}
					>
						{/* Left Content */}
						<div
							className={mounted ? "animate-fade-in-up" : ""}
							style={{ opacity: mounted ? 1 : 0 }}
						>
							{/* System Status Bar */}
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "1.5rem",
									marginBottom: "1.5rem",
								}}
							>
								{/* HUD Badge */}
								<div
									style={{
										display: "inline-flex",
										alignItems: "center",
										gap: "0.5rem",
										padding: "0.5rem 1rem",
										background: "rgba(15, 23, 42, 0.9)",
										border: "1px solid rgba(249, 115, 22, 0.4)",
										boxShadow:
											"0 0 20px rgba(249, 115, 22, 0.15), inset 0 0 20px rgba(249, 115, 22, 0.05)",
									}}
								>
									<span
										className="status-dot status-alert"
										style={{
											animation: "pulse-slow 1.5s ease-in-out infinite",
										}}
									/>
									<span
										style={{
											fontSize: "0.75rem",
											color: "var(--brand-orange)",
											textTransform: "uppercase",
											letterSpacing: "0.15em",
											fontFamily: "monospace",
										}}
									>
										{t.hero.tagline}
									</span>
								</div>
								{/* Time display */}
								<div
									style={{
										fontFamily: "monospace",
										fontSize: "0.65rem",
										color: "var(--brand-cyan)",
										opacity: 0.7,
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
							<div
								style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}
							>
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
								style={{
									marginTop: "2.5rem",
									fontFamily: "monospace",
									fontSize: "0.7rem",
									color: "var(--brand-cyan)",
									opacity: 0.5,
									display: "flex",
									alignItems: "center",
									gap: "1rem",
								}}
							>
								<span>{t.hud.coordBracket}</span>
								<span style={{ color: "var(--brand-success)" }}>
									{t.hud.systemOnline}
								</span>
							</div>
						</div>

						{/* Right Content - TechMap Radar Phone Mockup */}
						<div
							className={mounted ? "animate-slide-in-right" : ""}
							style={{
								position: "relative",
								opacity: mounted ? 1 : 0,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "2rem",
							}}
						>
							{/* Outer HUD Frame */}
							<div
								style={{
									position: "relative",
									padding: "20px",
									background: "rgba(6, 182, 212, 0.02)",
									border: "1px solid rgba(6, 182, 212, 0.2)",
								}}
							>
								{/* HUD Corner Brackets - Outer */}
								<div
									style={{
										position: "absolute",
										top: 0,
										left: 0,
										width: "30px",
										height: "30px",
										borderTop: "2px solid var(--brand-cyan)",
										borderLeft: "2px solid var(--brand-cyan)",
									}}
								/>
								<div
									style={{
										position: "absolute",
										top: 0,
										right: 0,
										width: "30px",
										height: "30px",
										borderTop: "2px solid var(--brand-cyan)",
										borderRight: "2px solid var(--brand-cyan)",
									}}
								/>
								<div
									style={{
										position: "absolute",
										bottom: 0,
										left: 0,
										width: "30px",
										height: "30px",
										borderBottom: "2px solid var(--brand-cyan)",
										borderLeft: "2px solid var(--brand-cyan)",
									}}
								/>
								<div
									style={{
										position: "absolute",
										bottom: 0,
										right: 0,
										width: "30px",
										height: "30px",
										borderBottom: "2px solid var(--brand-cyan)",
										borderRight: "2px solid var(--brand-cyan)",
									}}
								/>

								{/* Phone Frame */}
								<div
									style={{
										position: "relative",
										width: "280px",
										height: "560px",
										background:
											"linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
										borderRadius: "36px",
										padding: "6px",
										border: "2px solid rgba(6, 182, 212, 0.4)",
										boxShadow:
											"0 0 40px rgba(6, 182, 212, 0.15), 0 20px 50px rgba(0, 0, 0, 0.5)",
									}}
								>
									{/* Screen */}
									<div
										style={{
											width: "100%",
											height: "100%",
											borderRadius: "30px",
											background: "var(--brand-dark)",
											overflow: "hidden",
											position: "relative",
										}}
									>
										{/* Map Background */}
										<div
											style={{ position: "absolute", inset: 0, opacity: 0.4 }}
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
													width: "220px",
													height: "220px",
												}}
											>
												{[100, 75, 50, 25].map((size, i) => (
													<div
														key={i}
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

												{/* Rotating Sweep - Properly Centered */}
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
													{/* Sweep Line - from center outward */}
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
													{/* Sweep Cone - Circular */}
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
															width: "14px",
															height: "14px",
															borderRadius: "50%",
															background: "var(--brand-orange)",
															boxShadow: "0 0 25px rgba(249, 115, 22, 0.9)",
														}}
													/>
													<div
														className="animate-ping-slow"
														style={{
															position: "absolute",
															inset: "-10px",
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
														top: "38%",
														left: "22%",
														color: "var(--brand-success)",
													},
													{
														top: "72%",
														left: "68%",
														color: "var(--brand-cyan)",
													},
												].map((point, i) => (
													<div
														key={i}
														className="animate-pulse-slow"
														style={{
															position: "absolute",
															...point,
															width: "8px",
															height: "8px",
															borderRadius: "50%",
															background: point.color,
															boxShadow: `0 0 12px ${point.color}`,
															animationDelay: `${i * 0.5}s`,
														}}
													/>
												))}
											</div>
										</div>

										{/* HUD Elements - Enhanced */}
										<div
											style={{
												position: "absolute",
												top: "14px",
												left: "14px",
												fontFamily: "monospace",
												fontSize: "0.55rem",
												color: "var(--brand-cyan)",
											}}
										>
											<div style={{ marginBottom: "2px" }}>
												{t.hud.gpsModule}
											</div>
											<div>{t.hud.lat}</div>
											<div>{t.hud.lon}</div>
											<div>{t.hud.alt}</div>
											<div
												style={{
													marginTop: "4px",
													color: "var(--brand-success)",
												}}
											>
												{t.hud.signalActive}
											</div>
											<div style={{ color: "var(--brand-success)" }}>
												{t.hud.satCount}
											</div>
										</div>

										<div
											style={{
												position: "absolute",
												top: "14px",
												right: "14px",
												fontFamily: "monospace",
												fontSize: "0.55rem",
												color: "var(--brand-orange)",
												textAlign: "right",
											}}
										>
											<div style={{ marginBottom: "2px" }}>
												{t.hud.scanData}
											</div>
											<div>{t.hud.range}</div>
											<div>{t.hud.units}</div>
											<div>{t.hud.freqShort}</div>
											<div style={{ marginTop: "4px" }}>{t.hud.powerShort}</div>
										</div>

										{/* Crosshairs */}
										<div
											style={{
												position: "absolute",
												top: "50%",
												left: "10px",
												right: "10px",
												height: "1px",
												background:
													"linear-gradient(90deg, var(--brand-cyan), transparent 20%, transparent 80%, var(--brand-cyan))",
												opacity: 0.3,
											}}
										/>
										<div
											style={{
												position: "absolute",
												left: "50%",
												top: "100px",
												bottom: "100px",
												width: "1px",
												background:
													"linear-gradient(180deg, var(--brand-cyan), transparent 20%, transparent 80%, var(--brand-cyan))",
												opacity: 0.3,
											}}
										/>

										{/* Distance markers */}
										<div
											style={{
												position: "absolute",
												top: "50%",
												left: "25%",
												transform: "translate(-50%, -50%)",
												fontFamily: "monospace",
												fontSize: "0.45rem",
												color: "var(--brand-cyan)",
												opacity: 0.5,
											}}
										>
											1KM
										</div>
										<div
											style={{
												position: "absolute",
												top: "50%",
												left: "15%",
												transform: "translate(-50%, -50%)",
												fontFamily: "monospace",
												fontSize: "0.45rem",
												color: "var(--brand-cyan)",
												opacity: 0.5,
											}}
										>
											2KM
										</div>

										{/* Notification Card */}
										<div
											style={{
												position: "absolute",
												bottom: "70px",
												left: "10px",
												right: "10px",
												background: "rgba(15, 23, 42, 0.95)",
												backdropFilter: "blur(10px)",
												border: "1px solid rgba(16, 185, 129, 0.4)",
												padding: "10px 12px",
											}}
										>
											<div
												style={{
													display: "flex",
													alignItems: "center",
													gap: "8px",
												}}
											>
												<div className="status-dot status-active" />
												<span
													style={{
														fontSize: "0.7rem",
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
												bottom: "14px",
												left: "10px",
												right: "10px",
												display: "flex",
												justifyContent: "space-around",
												background: "rgba(15, 23, 42, 0.9)",
												borderRadius: "16px",
												padding: "8px",
											}}
										>
											{["📍", "🆘", "📞"].map((icon, i) => (
												<div
													key={i}
													style={{
														width: "36px",
														height: "36px",
														borderRadius: "50%",
														background:
															i === 1
																? "var(--brand-alert)"
																: "rgba(6, 182, 212, 0.2)",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														fontSize: "0.9rem",
														boxShadow:
															i === 1
																? "0 0 20px rgba(239, 68, 68, 0.5)"
																: "none",
													}}
												>
													{icon}
												</div>
											))}
										</div>
									</div>
								</div>

								{/* Feature Badges - Repositioned */}
								<div
									style={{
										position: "absolute",
										top: "8%",
										left: "-140px",
										padding: "0.6rem 1rem",
										background: "rgba(15, 23, 42, 0.9)",
										backdropFilter: "blur(10px)",
										border: "1px solid rgba(16, 185, 129, 0.3)",
										borderLeft: "3px solid var(--brand-success)",
										display: "flex",
										alignItems: "center",
										gap: "0.6rem",
									}}
								>
									<div
										style={{
											width: "32px",
											height: "32px",
											background:
												"linear-gradient(135deg, var(--brand-success), var(--brand-success)88)",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											fontSize: "0.9rem",
										}}
									>
										📍
									</div>
									<div>
										<div
											style={{
												fontWeight: 600,
												fontSize: "0.75rem",
												color: "var(--text-primary)",
											}}
										>
											{t.badges.gps}
										</div>
										<div
											style={{
												fontSize: "0.65rem",
												color: "var(--text-muted)",
											}}
										>
											{t.badges.gpsDesc}
										</div>
									</div>
								</div>

								<div
									style={{
										position: "absolute",
										top: "40%",
										right: "-130px",
										padding: "0.6rem 1rem",
										background: "rgba(15, 23, 42, 0.9)",
										backdropFilter: "blur(10px)",
										border: "1px solid rgba(6, 182, 212, 0.3)",
										borderLeft: "3px solid var(--brand-cyan)",
										display: "flex",
										alignItems: "center",
										gap: "0.6rem",
									}}
								>
									<div
										style={{
											width: "32px",
											height: "32px",
											background:
												"linear-gradient(135deg, var(--brand-cyan), var(--brand-cyan)88)",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											fontSize: "0.9rem",
										}}
									>
										💧
									</div>
									<div>
										<div
											style={{
												fontWeight: 600,
												fontSize: "0.75rem",
												color: "var(--text-primary)",
											}}
										>
											{t.badges.water}
										</div>
										<div
											style={{
												fontSize: "0.65rem",
												color: "var(--text-muted)",
											}}
										>
											{t.badges.waterDesc}
										</div>
									</div>
								</div>

								<div
									style={{
										position: "absolute",
										bottom: "15%",
										left: "-120px",
										padding: "0.6rem 1rem",
										background: "rgba(15, 23, 42, 0.9)",
										backdropFilter: "blur(10px)",
										border: "1px solid rgba(239, 68, 68, 0.3)",
										borderLeft: "3px solid var(--brand-alert)",
										display: "flex",
										alignItems: "center",
										gap: "0.6rem",
									}}
								>
									<div
										style={{
											width: "32px",
											height: "32px",
											background:
												"linear-gradient(135deg, var(--brand-alert), var(--brand-alert)88)",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											fontSize: "0.9rem",
										}}
									>
										🆘
									</div>
									<div>
										<div
											style={{
												fontWeight: 600,
												fontSize: "0.75rem",
												color: "var(--text-primary)",
											}}
										>
											{t.badges.sos}
										</div>
										<div
											style={{
												fontSize: "0.65rem",
												color: "var(--text-muted)",
											}}
										>
											{t.badges.sosDesc}
										</div>
									</div>
								</div>

								{/* Tech Specs Tags - Bottom Right */}
								<div
									style={{
										position: "absolute",
										bottom: "-60px",
										right: "0",
										display: "flex",
										gap: "0.5rem",
										flexWrap: "wrap",
										justifyContent: "flex-end",
										maxWidth: "250px",
									}}
								>
									{["IP68", "GPS", "72H", "SOS"].map((tag, i) => (
										<span
											key={tag}
											style={{
												padding: "0.35rem 0.7rem",
												background: "rgba(6, 182, 212, 0.1)",
												border: "1px solid rgba(6, 182, 212, 0.3)",
												fontSize: "0.6rem",
												fontWeight: 600,
												color: "var(--brand-cyan)",
												fontFamily: "monospace",
												letterSpacing: "0.08em",
												opacity: mounted ? 1 : 0,
												transition: `opacity 0.5s ease ${0.2 + i * 0.1}s`,
											}}
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Impact Statistics Section */}
				<section
					style={{
						padding: "6rem 0",
						background: "var(--brand-deep)",
						color: "white",
						position: "relative",
						overflow: "hidden",
					}}
				>
					{/* Tech Grid Background */}
					<div
						className="tech-grid"
						style={{ position: "absolute", inset: 0, opacity: 0.5 }}
					/>
					{/* Radial Glow */}
					<div
						style={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							width: "100%",
							height: "100%",
							background:
								"radial-gradient(ellipse at center, rgba(239, 68, 68, 0.1) 0%, transparent 60%)",
						}}
					/>

					<div
						style={{
							maxWidth: "1400px",
							margin: "0 auto",
							padding: "0 2rem",
							position: "relative",
						}}
					>
						{/* HUD Header */}
						<div style={{ textAlign: "center", marginBottom: "4rem" }}>
							<div
								style={{
									display: "inline-flex",
									alignItems: "center",
									gap: "0.75rem",
									padding: "0.5rem 1rem",
									background: "rgba(239, 68, 68, 0.1)",
									border: "1px solid rgba(239, 68, 68, 0.3)",
									borderRadius: "4px",
									marginBottom: "1.5rem",
								}}
							>
								<span className="status-dot status-alert" />
								<span
									style={{
										fontSize: "0.75rem",
										fontWeight: 600,
										color: "var(--brand-alert)",
										textTransform: "uppercase",
										letterSpacing: "0.1em",
									}}
								>
									{t.impact.badge}
								</span>
							</div>
							<h2
								style={{
									fontSize: "clamp(2rem, 5vw, 3.5rem)",
									fontWeight: 700,
									marginBottom: "1rem",
									letterSpacing: "0.05em",
								}}
							>
								{t.impact.title}
							</h2>
							<p
								style={{
									fontSize: "1rem",
									color: "var(--text-secondary)",
									maxWidth: "600px",
									margin: "0 auto",
								}}
							>
								{t.impact.subtitle}
							</p>
						</div>

						{/* Stats Grid */}
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(4, 1fr)",
								gap: "1.5rem",
								marginBottom: "4rem",
							}}
						>
							{[
								{
									ref: counter1.ref,
									count: counter1.count,
									suffix: "T USD",
									label: t.impact.stat1,
									icon: "💰",
									color: "var(--brand-orange)",
								},
								{
									ref: counter2.ref,
									count: counter2.count,
									suffix: "M+",
									label: t.impact.stat2,
									icon: "👥",
									color: "var(--brand-alert)",
								},
								{
									ref: counter3.ref,
									count: counter3.count,
									suffix: "",
									label: t.impact.stat3,
									icon: "📍",
									color: "var(--brand-cyan)",
								},
								{
									ref: counter4.ref,
									count: counter4.count,
									suffix: "",
									label: t.impact.stat4,
									icon: "📅",
									color: "var(--brand-success)",
								},
							].map((stat, i) => (
								<div
									key={i}
									ref={stat.ref}
									className="glass-panel hover-lift"
									style={{
										textAlign: "center",
										padding: "1.5rem",
										borderRadius: "8px",
										cursor: "default",
										borderTop: `2px solid ${stat.color}`,
									}}
								>
									<div
										style={{
											width: "50px",
											height: "50px",
											borderRadius: "8px",
											background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}10)`,
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											fontSize: "1.5rem",
											margin: "0 auto 1rem",
											border: `1px solid ${stat.color}30`,
										}}
									>
										{stat.icon}
									</div>
									<div
										style={{
											fontSize: "2.5rem",
											fontWeight: 700,
											color: stat.color,
											textShadow: `0 0 30px ${stat.color}50`,
										}}
									>
										{stat.count}
										{stat.suffix}
									</div>
									<div
										style={{
											fontSize: "0.8rem",
											color: "var(--text-muted)",
											marginTop: "0.5rem",
											textTransform: "uppercase",
											letterSpacing: "0.05em",
										}}
									>
										{stat.label}
									</div>
								</div>
							))}
						</div>

						{/* Image Gallery with HUD Overlays */}
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "2fr 1fr",
								gap: "1.5rem",
							}}
						>
							<div
								style={{
									borderRadius: "8px",
									overflow: "hidden",
									position: "relative",
									height: "400px",
									border: "1px solid rgba(6, 182, 212, 0.2)",
								}}
							>
								<img
									src="/Lũ lụt.png"
									alt="Flood"
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										filter: "saturate(0.8)",
									}}
								/>
								{/* Scanlines */}
								<div
									style={{
										position: "absolute",
										inset: 0,
										background:
											"repeating-linear-gradient(0deg, rgba(0,0,0,0.03), rgba(0,0,0,0.03) 1px, transparent 1px, transparent 2px)",
									}}
								/>
								{/* HUD Overlay */}
								<div
									style={{
										position: "absolute",
										top: "1rem",
										left: "1rem",
										fontFamily: "monospace",
										fontSize: "0.65rem",
										color: "var(--brand-cyan)",
									}}
								>
									<div>{t.hud.sectorCentral}</div>
									<div style={{ color: "var(--brand-alert)" }}>
										{t.hud.alertActive}
									</div>
								</div>
								{/* Corner Brackets */}
								<div
									style={{
										position: "absolute",
										top: "8px",
										left: "8px",
										width: "20px",
										height: "20px",
										borderTop: "2px solid var(--brand-cyan)",
										borderLeft: "2px solid var(--brand-cyan)",
									}}
								/>
								<div
									style={{
										position: "absolute",
										top: "8px",
										right: "8px",
										width: "20px",
										height: "20px",
										borderTop: "2px solid var(--brand-cyan)",
										borderRight: "2px solid var(--brand-cyan)",
									}}
								/>
								<div
									style={{
										position: "absolute",
										bottom: "8px",
										left: "8px",
										width: "20px",
										height: "20px",
										borderBottom: "2px solid var(--brand-cyan)",
										borderLeft: "2px solid var(--brand-cyan)",
									}}
								/>
								<div
									style={{
										position: "absolute",
										bottom: "8px",
										right: "8px",
										width: "20px",
										height: "20px",
										borderBottom: "2px solid var(--brand-cyan)",
										borderRight: "2px solid var(--brand-cyan)",
									}}
								/>
								<div
									style={{
										position: "absolute",
										bottom: 0,
										left: 0,
										right: 0,
										padding: "2rem",
										background:
											"linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
									}}
								>
									<p
										style={{
											fontSize: "0.85rem",
											color: "var(--text-secondary)",
										}}
									>
										{t.impact.caption1}
									</p>
								</div>
							</div>
							<div
								style={{
									borderRadius: "8px",
									overflow: "hidden",
									position: "relative",
									height: "400px",
									border: "1px solid rgba(6, 182, 212, 0.2)",
								}}
							>
								<img
									src="/Cảnh hoang tàn sau lũ.png"
									alt="Post-flood devastation"
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										filter: "saturate(0.8)",
									}}
								/>
								{/* Scanlines */}
								<div
									style={{
										position: "absolute",
										inset: 0,
										background:
											"repeating-linear-gradient(0deg, rgba(0,0,0,0.03), rgba(0,0,0,0.03) 1px, transparent 1px, transparent 2px)",
									}}
								/>
								{/* HUD Overlay */}
								<div
									style={{
										position: "absolute",
										top: "1rem",
										right: "1rem",
										fontFamily: "monospace",
										fontSize: "0.65rem",
										color: "var(--brand-orange)",
										textAlign: "right",
									}}
								>
									<div>POST-FLOOD</div>
									<div>DAMAGE: SEVERE</div>
								</div>
								<div
									style={{
										position: "absolute",
										bottom: 0,
										left: 0,
										right: 0,
										padding: "1.5rem",
										background:
											"linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
									}}
								>
									<p
										style={{
											fontSize: "0.8rem",
											color: "var(--text-secondary)",
										}}
									>
										{t.impact.caption2}
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Warning Section */}
				<section
					style={{
						padding: "5rem 0",
						background: "var(--brand-surface)",
						position: "relative",
						overflow: "hidden",
					}}
				>
					{/* Animated Alert Border */}
					<div
						className="animate-border-pulse"
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							height: "2px",
							background:
								"linear-gradient(90deg, transparent, var(--brand-alert), transparent)",
						}}
					/>
					{/* Red Glow */}
					<div
						style={{
							position: "absolute",
							top: 0,
							left: "50%",
							transform: "translateX(-50%)",
							width: "80%",
							height: "200px",
							background:
								"radial-gradient(ellipse at top, rgba(239, 68, 68, 0.15) 0%, transparent 70%)",
						}}
					/>

					<div
						style={{
							maxWidth: "1200px",
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
									background: "rgba(239, 68, 68, 0.15)",
									border: "1px solid rgba(239, 68, 68, 0.4)",
									borderRadius: "4px",
									marginBottom: "1.5rem",
								}}
							>
								<span
									className="status-dot status-alert"
									style={{ animation: "pulse-slow 1s ease-in-out infinite" }}
								/>
								<span
									style={{
										fontSize: "0.75rem",
										fontWeight: 600,
										color: "var(--brand-alert)",
										textTransform: "uppercase",
										letterSpacing: "0.1em",
									}}
								>
									{t.warning.badge}
								</span>
							</div>
							<h2
								style={{
									fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
									fontWeight: 700,
									color: "var(--text-primary)",
									marginBottom: "0.5rem",
									letterSpacing: "0.05em",
								}}
							>
								{t.warning.title}
							</h2>
						</div>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(2, 1fr)",
								gap: "1.25rem",
							}}
						>
							{[
								{ ...t.warning.note1, color: "var(--brand-alert)", num: "01" },
								{ ...t.warning.note2, color: "var(--brand-orange)", num: "02" },
								{ ...t.warning.note3, color: "var(--brand-cyan)", num: "03" },
								{ ...t.warning.note4, color: "var(--brand-blue)", num: "04" },
							].map((note, i) => (
								<div
									key={i}
									className="glass-panel hover-lift"
									style={{
										padding: "1.5rem",
										borderRadius: "8px",
										borderLeft: `3px solid ${note.color}`,
										position: "relative",
									}}
								>
									{/* Number Badge */}
									<div
										style={{
											position: "absolute",
											top: "1rem",
											right: "1rem",
											fontFamily: "monospace",
											fontSize: "0.65rem",
											color: note.color,
											opacity: 0.6,
										}}
									>
										[{note.num}]
									</div>
									<h3
										style={{
											fontSize: "1rem",
											fontWeight: 600,
											color: "var(--text-primary)",
											marginBottom: "0.75rem",
											lineHeight: 1.4,
											paddingRight: "2rem",
										}}
									>
										{note.title}
									</h3>
									<p
										style={{
											fontSize: "0.9rem",
											color: "var(--text-secondary)",
											lineHeight: 1.7,
										}}
									>
										{note.desc}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* How It Works Section */}
				<section
					style={{
						padding: "6rem 0",
						background: "var(--brand-dark)",
						position: "relative",
					}}
				>
					<div
						className="tech-grid"
						style={{ position: "absolute", inset: 0, opacity: 0.3 }}
					/>

					<div
						style={{
							maxWidth: "1400px",
							margin: "0 auto",
							padding: "0 2rem",
							position: "relative",
						}}
					>
						<div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
									{t.howItWorks.badge}
								</span>
							</div>
							<h2
								style={{
									fontSize: "clamp(2rem, 5vw, 3rem)",
									fontWeight: 700,
									marginBottom: "1rem",
									color: "var(--text-primary)",
									letterSpacing: "0.05em",
								}}
							>
								{t.howItWorks.title}
							</h2>
							<p
								style={{
									fontSize: "1rem",
									color: "var(--text-secondary)",
									maxWidth: "600px",
									margin: "0 auto",
								}}
							>
								{t.howItWorks.subtitle}
							</p>
						</div>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(4, 1fr)",
								gap: "1.5rem",
								position: "relative",
							}}
						>
							{/* Animated Connection Line */}
							<div
								style={{
									position: "absolute",
									top: "50px",
									left: "12.5%",
									right: "12.5%",
									height: "2px",
									background:
										"linear-gradient(90deg, var(--brand-cyan), var(--brand-orange), var(--brand-success))",
									zIndex: 0,
									boxShadow: "0 0 10px rgba(6, 182, 212, 0.5)",
								}}
							/>
							{/* Data Flow Animation */}
							<div
								className="animate-pulse-slow"
								style={{
									position: "absolute",
									top: "48px",
									left: "12.5%",
									width: "8px",
									height: "8px",
									borderRadius: "50%",
									background: "var(--brand-cyan)",
									boxShadow: "0 0 15px var(--brand-cyan)",
									zIndex: 1,
								}}
							/>

							{[
								{
									num: "01",
									...t.howItWorks.step1,
									icon: "🎒",
									color: "var(--brand-cyan)",
								},
								{
									num: "02",
									...t.howItWorks.step2,
									icon: "📡",
									color: "var(--brand-blue)",
								},
								{
									num: "03",
									...t.howItWorks.step3,
									icon: "🏊",
									color: "var(--brand-orange)",
								},
								{
									num: "04",
									...t.howItWorks.step4,
									icon: "🚁",
									color: "var(--brand-success)",
								},
							].map((step, i) => (
								<div
									key={i}
									className="glass-panel hover-lift"
									style={{
										textAlign: "center",
										position: "relative",
										zIndex: 1,
										padding: "2rem 1.5rem",
										borderRadius: "8px",
										borderTop: `2px solid ${step.color}`,
									}}
								>
									{/* Hexagonal Icon Container */}
									<div
										style={{
											width: "80px",
											height: "80px",
											background: `linear-gradient(135deg, ${step.color}20, transparent)`,
											border: `2px solid ${step.color}`,
											borderRadius: "12px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											margin: "0 auto 1.5rem",
											fontSize: "2rem",
											boxShadow: `0 0 30px ${step.color}30`,
											transform: "rotate(0deg)",
										}}
									>
										{step.icon}
									</div>
									<div
										style={{
											fontFamily: "monospace",
											fontSize: "0.75rem",
											color: step.color,
											fontWeight: 600,
											marginBottom: "0.5rem",
											letterSpacing: "0.1em",
										}}
									>
										[{step.num}]
									</div>
									<h3
										style={{
											fontSize: "1.1rem",
											fontWeight: 600,
											marginBottom: "0.75rem",
											color: "var(--text-primary)",
										}}
									>
										{step.title}
									</h3>
									<p
										style={{
											fontSize: "0.85rem",
											color: "var(--text-secondary)",
											lineHeight: 1.6,
										}}
									>
										{step.desc}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Products Section */}
				<section
					id="products"
					style={{
						padding: "6rem 0",
						background: "var(--brand-surface)",
						position: "relative",
					}}
				>
					<div
						className="tech-grid"
						style={{ position: "absolute", inset: 0, opacity: 0.3 }}
					/>

					<div
						style={{
							maxWidth: "1400px",
							margin: "0 auto",
							padding: "0 2rem",
							position: "relative",
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "flex-end",
								marginBottom: "3rem",
							}}
						>
							<div>
								<h2
									style={{
										fontSize: "clamp(2rem, 5vw, 3rem)",
										fontWeight: 700,
										marginBottom: "0.5rem",
										color: "var(--text-primary)",
										letterSpacing: "0.05em",
									}}
								>
									{t.products.title}
								</h2>
								<p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
									{t.products.subtitle}
								</p>
							</div>
							<div
								style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
							>
								<span
									style={{
										fontSize: "1.25rem",
										fontWeight: 500,
									}}
								>
									<span style={{ color: "var(--brand-orange)" }}>
										{activeProduct + 1}
									</span>
									<span style={{ color: "var(--text-muted)" }}>/3</span>
								</span>
								<div style={{ display: "flex", gap: "0.5rem" }}>
									{[
										{ dir: -1, icon: "M19 12H5M12 19l-7-7 7-7" },
										{ dir: 1, icon: "M5 12h14M12 5l7 7-7 7" },
									].map((btn, i) => (
										<button
											key={i}
											type="button"
											onClick={() =>
												setActiveProduct((prev) => (prev + btn.dir + 3) % 3)
											}
											style={{
												width: "40px",
												height: "40px",
												borderRadius: "4px",
												border: "1px solid rgba(6, 182, 212, 0.3)",
												background: "rgba(6, 182, 212, 0.1)",
												cursor: "pointer",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												color: "var(--brand-cyan)",
												transition: "all 0.3s ease",
											}}
										>
											<svg
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
											>
												<path d={btn.icon} />
											</svg>
										</button>
									))}
								</div>
							</div>
						</div>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(3, 1fr)",
								gap: "1.5rem",
							}}
						>
							{products.map((product, i) => (
								<div
									key={product.id}
									onClick={() => setActiveProduct(i)}
									onKeyDown={(e) => e.key === "Enter" && setActiveProduct(i)}
									role="button"
									tabIndex={0}
									className="glass-panel"
									style={{
										position: "relative",
										borderRadius: "8px",
										overflow: "hidden",
										cursor: "pointer",
										transition: "all 0.4s ease",
										transform: activeProduct === i ? "scale(1)" : "scale(0.95)",
										opacity: activeProduct === i ? 1 : 0.6,
										boxShadow:
											activeProduct === i
												? "0 0 40px rgba(249, 115, 22, 0.3)"
												: "0 10px 30px rgba(0,0,0,0.2)",
										borderColor:
											activeProduct === i
												? "var(--brand-orange)"
												: "rgba(6, 182, 212, 0.2)",
									}}
								>
									<div
										style={{
											height: "250px",
											background: "var(--brand-dark)",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											position: "relative",
										}}
									>
										<img
											src={product.image}
											alt={product.name}
											style={{
												maxWidth: "90%",
												maxHeight: "90%",
												objectFit: "cover",
												borderRadius: "8px",
												filter: activeProduct === i ? "none" : "grayscale(50%)",
												transition: "filter 0.3s ease",
											}}
										/>
										{/* HUD Overlay */}
										<div
											style={{
												position: "absolute",
												top: "8px",
												left: "8px",
												width: "16px",
												height: "16px",
												borderTop: "2px solid var(--brand-cyan)",
												borderLeft: "2px solid var(--brand-cyan)",
											}}
										/>
										<div
											style={{
												position: "absolute",
												top: "8px",
												right: "8px",
												width: "16px",
												height: "16px",
												borderTop: "2px solid var(--brand-cyan)",
												borderRight: "2px solid var(--brand-cyan)",
											}}
										/>
										{product.tag && (
											<span
												style={{
													position: "absolute",
													top: "1rem",
													right: "1rem",
													padding: "0.35rem 0.7rem",
													background:
														i === 1
															? "var(--brand-orange)"
															: "var(--brand-success)",
													color: "white",
													fontSize: "0.65rem",
													fontWeight: 600,
													borderRadius: "2px",
													textTransform: "uppercase",
													letterSpacing: "0.05em",
													boxShadow: `0 0 15px ${i === 1 ? "rgba(249, 115, 22, 0.5)" : "rgba(16, 185, 129, 0.5)"}`,
												}}
											>
												{product.tag}
											</span>
										)}
									</div>
									<div
										style={{
											padding: "1.25rem",
											background: "var(--brand-surface-light)",
										}}
									>
										<div
											style={{
												display: "flex",
												justifyContent: "space-between",
												alignItems: "center",
												marginBottom: "0.5rem",
											}}
										>
											<h3
												style={{
													fontSize: "1.25rem",
													fontWeight: 600,
													color: "var(--text-primary)",
												}}
											>
												{product.name}
											</h3>
											<span
												style={{
													fontSize: "1rem",
													fontWeight: 700,
													color: "var(--brand-orange)",
												}}
											>
												{product.price}
											</span>
										</div>
										<p
											style={{
												fontSize: "0.85rem",
												color: "var(--text-muted)",
											}}
										>
											{product.desc}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Comparison Table */}
				<section style={{ padding: "4rem 0", background: "var(--brand-dark)" }}>
					<div
						style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 2rem" }}
					>
						<h3
							style={{
								fontSize: "1.75rem",
								fontWeight: 700,
								textAlign: "center",
								marginBottom: "2rem",
								color: "var(--text-primary)",
								letterSpacing: "0.05em",
							}}
						>
							{t.comparison.title}
						</h3>

						<div
							className="glass-panel"
							style={{
								borderRadius: "8px",
								overflow: "hidden",
							}}
						>
							<table style={{ width: "100%", borderCollapse: "collapse" }}>
								<thead>
									<tr style={{ background: "var(--brand-surface-light)" }}>
										<th
											style={{
												padding: "1rem",
												textAlign: "left",
												color: "var(--text-primary)",
												fontWeight: 600,
												fontSize: "0.85rem",
												textTransform: "uppercase",
												letterSpacing: "0.05em",
											}}
										>
											{t.comparison.feature}
										</th>
										<th
											style={{
												padding: "1rem",
												textAlign: "center",
												color: "var(--text-secondary)",
												fontWeight: 600,
												fontSize: "0.85rem",
											}}
										>
											{t.products.basic.name}
										</th>
										<th
											style={{
												padding: "1rem",
												textAlign: "center",
												color: "var(--brand-orange)",
												fontWeight: 600,
												fontSize: "0.85rem",
												background: "rgba(249, 115, 22, 0.1)",
											}}
										>
											{t.products.medium.name}
										</th>
										<th
											style={{
												padding: "1rem",
												textAlign: "center",
												color: "var(--text-secondary)",
												fontWeight: 600,
												fontSize: "0.85rem",
											}}
										>
											{t.products.premium.name}
										</th>
									</tr>
								</thead>
								<tbody>
									{[
										{
											feature: t.comparison.lifeJacket,
											basic: t.comparison.basic,
											medium: t.comparison.basic,
											premium: t.comparison.premium,
										},
										{
											feature: t.comparison.gps,
											basic: "●",
											medium: "●",
											premium: "●",
										},
										{
											feature: t.comparison.whistle,
											basic: "●",
											medium: "●",
											premium: "●",
										},
										{
											feature: t.comparison.food,
											basic: t.comparison.halfKg,
											medium: t.comparison.oneKg,
											premium: t.comparison.oneKg,
										},
										{
											feature: t.comparison.waterFilter,
											basic: "○",
											medium: "●",
											premium: "●",
										},
										{
											feature: t.comparison.flashlight,
											basic: "○",
											medium: t.comparison.basic,
											premium: t.comparison.premium,
										},
									].map((row, i) => (
										<tr
											key={i}
											style={{
												borderBottom: "1px solid rgba(6, 182, 212, 0.1)",
											}}
										>
											<td
												style={{
													padding: "0.85rem 1rem",
													fontWeight: 500,
													color: "var(--text-primary)",
													fontSize: "0.9rem",
												}}
											>
												{row.feature}
											</td>
											<td
												style={{
													padding: "0.85rem",
													textAlign: "center",
													color:
														row.basic === "○"
															? "var(--text-muted)"
															: "var(--brand-success)",
													fontSize: "0.9rem",
												}}
											>
												{row.basic}
											</td>
											<td
												style={{
													padding: "0.85rem",
													textAlign: "center",
													background: "rgba(249, 115, 22, 0.05)",
													fontWeight: 500,
													color: "var(--brand-orange)",
													fontSize: "0.9rem",
												}}
											>
												{row.medium}
											</td>
											<td
												style={{
													padding: "0.85rem",
													textAlign: "center",
													color: "var(--brand-cyan)",
													fontSize: "0.9rem",
												}}
											>
												{row.premium}
											</td>
										</tr>
									))}
									<tr style={{ background: "var(--brand-surface)" }}>
										<td
											style={{
												padding: "1rem",
												fontWeight: 700,
												fontSize: "0.95rem",
												color: "var(--text-primary)",
											}}
										>
											{language === "vi" ? "Giá" : "Price"}
										</td>
										<td
											style={{
												padding: "1rem",
												textAlign: "center",
												fontWeight: 600,
												fontSize: "0.85rem",
												color: "var(--brand-cyan)",
											}}
										>
											{language === "vi" ? "Liên hệ" : "Contact us"}
										</td>
										<td
											style={{
												padding: "1rem",
												textAlign: "center",
												fontWeight: 600,
												fontSize: "0.85rem",
												color: "var(--brand-orange)",
												background: "rgba(249, 115, 22, 0.1)",
											}}
										>
											{language === "vi" ? "Liên hệ" : "Contact us"}
										</td>
										<td
											style={{
												padding: "1rem",
												textAlign: "center",
												fontWeight: 600,
												fontSize: "0.85rem",
												color: "var(--brand-cyan)",
											}}
										>
											{language === "vi" ? "Liên hệ" : "Contact us"}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* Features Detail Section */}
				<section
					style={{
						padding: "6rem 0",
						background: "var(--brand-surface)",
						position: "relative",
					}}
				>
					<div
						className="tech-grid"
						style={{ position: "absolute", inset: 0, opacity: 0.3 }}
					/>

					<div
						style={{
							maxWidth: "1400px",
							margin: "0 auto",
							padding: "0 2rem",
							position: "relative",
						}}
					>
						<h2
							style={{
								fontSize: "clamp(2rem, 5vw, 3rem)",
								fontWeight: 700,
								textAlign: "center",
								marginBottom: "4rem",
								color: "var(--text-primary)",
								letterSpacing: "0.05em",
							}}
						>
							{t.features.title}
						</h2>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(2, 1fr)",
								gap: "1.5rem",
							}}
						>
							{[
								{
									icon: "📍",
									...t.features.gps,
									color: "var(--brand-success)",
									image: "/gps-tracking-app.png",
								},
								{
									icon: "💧",
									...t.features.water,
									color: "var(--brand-cyan)",
									image: "/Ông lọc nước - Sản phẩm.png",
								},
								{
									icon: "🍱",
									...t.features.food,
									color: "var(--brand-orange)",
									image: "/MRE Packaging.png",
								},
								{
									icon: "🔦",
									...t.features.light,
									color: "var(--brand-blue)",
									image: "/mock-2.png",
								},
							].map((feature, i) => (
								<div
									key={i}
									className="glass-panel hover-lift"
									style={{
										borderRadius: "8px",
										overflow: "hidden",
										display: "grid",
										gridTemplateColumns: "1.2fr 1fr",
									}}
								>
									<div style={{ padding: "1.5rem" }}>
										<div
											style={{
												width: "50px",
												height: "50px",
												borderRadius: "8px",
												background: `linear-gradient(135deg, ${feature.color}20, transparent)`,
												border: `1px solid ${feature.color}40`,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												fontSize: "1.5rem",
												marginBottom: "1.25rem",
											}}
										>
											{feature.icon}
										</div>
										<h3
											style={{
												fontSize: "1.1rem",
												fontWeight: 600,
												marginBottom: "0.75rem",
												color: "var(--text-primary)",
											}}
										>
											{feature.title}
										</h3>
										<p
											style={{
												fontSize: "0.85rem",
												lineHeight: 1.6,
												color: "var(--text-secondary)",
												marginBottom: "1.25rem",
											}}
										>
											{feature.desc}
										</p>
										<div
											style={{
												display: "flex",
												flexWrap: "wrap",
												gap: "0.4rem",
											}}
										>
											{feature.specs.map((spec, j) => (
												<span
													key={j}
													style={{
														padding: "0.3rem 0.6rem",
														background: `${feature.color}15`,
														border: `1px solid ${feature.color}30`,
														color: feature.color,
														borderRadius: "2px",
														fontSize: "0.7rem",
														fontWeight: 500,
														fontFamily: "monospace",
													}}
												>
													{spec}
												</span>
											))}
										</div>
									</div>
									<div
										style={{
											background: "var(--brand-dark)",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											padding: "1rem",
											position: "relative",
										}}
									>
										{/* HUD corners */}
										<div
											style={{
												position: "absolute",
												top: "8px",
												left: "8px",
												width: "12px",
												height: "12px",
												borderTop: "2px solid var(--brand-cyan)",
												borderLeft: "2px solid var(--brand-cyan)",
											}}
										/>
										<div
											style={{
												position: "absolute",
												bottom: "8px",
												right: "8px",
												width: "12px",
												height: "12px",
												borderBottom: "2px solid var(--brand-cyan)",
												borderRight: "2px solid var(--brand-cyan)",
											}}
										/>
										<img
											src={feature.image}
											alt={feature.title}
											style={{
												maxWidth: "100%",
												maxHeight: "160px",
												objectFit: "contain",
												borderRadius: "4px",
											}}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Testimonials Section */}
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
										key={i}
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

				{/* Mission Section */}
				<section
					id="about"
					style={{
						padding: "6rem 0",
						background: "var(--brand-deep)",
						color: "var(--text-primary)",
						position: "relative",
						overflow: "hidden",
					}}
				>
					{/* Tech Grid Background */}
					<div
						className="tech-grid"
						style={{ position: "absolute", inset: 0, opacity: 0.5 }}
					/>
					{/* Orange gradient glow */}
					<div
						style={{
							position: "absolute",
							top: "-200px",
							right: "-100px",
							width: "400px",
							height: "400px",
							borderRadius: "50%",
							background:
								"radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)",
							filter: "blur(60px)",
						}}
					/>

					<div
						style={{
							maxWidth: "1200px",
							margin: "0 auto",
							padding: "0 2rem",
							position: "relative",
						}}
					>
						{/* HUD Section Header */}
						<div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
									{t.mission.badge}
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
								{t.mission.title}
							</h2>
						</div>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr 1fr",
								gap: "4rem",
								alignItems: "start",
							}}
						>
							{/* Left: Story + Mission Quote */}
							<div>
								<p
									style={{
										fontSize: "1.1rem",
										lineHeight: 1.9,
										color: "var(--text-secondary)",
										marginBottom: "2rem",
									}}
								>
									{t.mission.story}
								</p>
								{/* Mission quote with orange gradient border */}
								<div
									style={{
										position: "relative",
										padding: "2rem",
										background: "rgba(249, 115, 22, 0.05)",
										borderLeft: "3px solid var(--brand-orange)",
									}}
								>
									{/* HUD corner */}
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
											right: 0,
											width: "20px",
											height: "20px",
											borderBottom: "2px solid var(--brand-orange)",
											borderRight: "2px solid var(--brand-orange)",
										}}
									/>
									<p
										style={{
											fontSize: "1.15rem",
											fontStyle: "italic",
											lineHeight: 1.7,
											color: "var(--text-primary)",
										}}
									>
										"{t.mission.mission}"
									</p>
								</div>
							</div>

							{/* Right: Vision + Values Cards */}
							<div style={{ display: "grid", gap: "1.5rem" }}>
								{/* Vision Card */}
								<div
									className="glass-panel"
									style={{ padding: "2rem", position: "relative" }}
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
									{/* Label */}
									<div
										style={{
											fontFamily: "monospace",
											fontSize: "0.7rem",
											color: "var(--brand-cyan)",
											marginBottom: "0.75rem",
											letterSpacing: "0.1em",
										}}
									>
										[VISION]
									</div>
									<h3
										style={{
											fontSize: "1.1rem",
											fontWeight: 600,
											marginBottom: "0.75rem",
											color: "var(--brand-cyan)",
										}}
									>
										{t.mission.vision}
									</h3>
									<p
										style={{
											fontSize: "0.95rem",
											color: "var(--text-secondary)",
											lineHeight: 1.7,
										}}
									>
										{t.mission.visionText}
									</p>
								</div>
								{/* Values Card */}
								<div
									className="glass-panel"
									style={{ padding: "2rem", position: "relative" }}
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
									{/* Label */}
									<div
										style={{
											fontFamily: "monospace",
											fontSize: "0.7rem",
											color: "var(--brand-cyan)",
											marginBottom: "0.75rem",
											letterSpacing: "0.1em",
										}}
									>
										[CORE VALUES]
									</div>
									<h3
										style={{
											fontSize: "1.1rem",
											fontWeight: 600,
											marginBottom: "1rem",
											color: "var(--brand-cyan)",
										}}
									>
										{t.mission.values}
									</h3>
									<div
										style={{
											display: "flex",
											flexWrap: "wrap",
											gap: "0.75rem",
										}}
									>
										{[t.mission.value1, t.mission.value2, t.mission.value3].map(
											(value, i) => (
												<span
													key={i}
													style={{
														padding: "0.5rem 1rem",
														background: "rgba(6, 182, 212, 0.1)",
														border: "1px solid rgba(6, 182, 212, 0.3)",
														fontSize: "0.85rem",
														color: "var(--text-primary)",
													}}
												>
													{value}
												</span>
											),
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* SDG Section */}
				<section
					style={{
						padding: "6rem 0",
						background: "var(--brand-dark)",
						position: "relative",
						overflow: "hidden",
					}}
				>
					{/* Subtle gradient glow */}
					<div
						style={{
							position: "absolute",
							bottom: "-100px",
							left: "50%",
							transform: "translateX(-50%)",
							width: "600px",
							height: "300px",
							borderRadius: "50%",
							background:
								"radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
							filter: "blur(60px)",
						}}
					/>

					<div
						style={{
							maxWidth: "1000px",
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
									border: "1px solid rgba(16, 185, 129, 0.3)",
									background: "rgba(16, 185, 129, 0.1)",
									marginBottom: "1rem",
								}}
							>
								<div
									style={{
										width: "8px",
										height: "8px",
										background: "var(--brand-success)",
										animation: "pulse-slow 2s ease-in-out infinite",
									}}
								/>
								<span
									style={{
										fontSize: "0.75rem",
										fontWeight: 600,
										color: "var(--brand-success)",
										textTransform: "uppercase",
										letterSpacing: "0.1em",
									}}
								>
									{t.sdg.badge}
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
								{t.sdg.title}
							</h2>
						</div>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(2, 1fr)",
								gap: "2rem",
							}}
						>
							{[
								{
									num: t.sdg.sdg11,
									title: t.sdg.sdg11Title,
									desc: t.sdg.sdg11Desc,
									color: "#F59E0B",
									glowColor: "rgba(245, 158, 11, 0.3)",
								},
								{
									num: t.sdg.sdg13,
									title: t.sdg.sdg13Title,
									desc: t.sdg.sdg13Desc,
									color: "#10B981",
									glowColor: "rgba(16, 185, 129, 0.3)",
								},
							].map((sdg, i) => (
								<div
									key={i}
									className="glass-panel"
									style={{
										padding: "2rem",
										position: "relative",
										display: "flex",
										gap: "1.5rem",
										alignItems: "flex-start",
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
											borderTop: `2px solid ${sdg.color}`,
											borderLeft: `2px solid ${sdg.color}`,
										}}
									/>
									<div
										style={{
											position: "absolute",
											bottom: 0,
											right: 0,
											width: "15px",
											height: "15px",
											borderBottom: `2px solid ${sdg.color}`,
											borderRight: `2px solid ${sdg.color}`,
										}}
									/>
									{/* SDG Number with glow ring */}
									<div style={{ position: "relative", flexShrink: 0 }}>
										{/* Glow ring */}
										<div
											style={{
												position: "absolute",
												inset: "-8px",
												borderRadius: "50%",
												border: `2px solid ${sdg.glowColor}`,
												animation: "pulse-slow 3s ease-in-out infinite",
											}}
										/>
										<div
											style={{
												width: "70px",
												height: "70px",
												borderRadius: "50%",
												background: `linear-gradient(135deg, ${sdg.color}, ${sdg.color}99)`,
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												justifyContent: "center",
												border: `2px solid ${sdg.color}`,
												boxShadow: `0 0 20px ${sdg.glowColor}`,
											}}
										>
											<span
												style={{
													fontSize: "1.5rem",
													fontWeight: 700,
													color: "white",
												}}
											>
												{sdg.num.replace("SDG ", "")}
											</span>
										</div>
									</div>
									<div>
										<div
											style={{
												fontFamily: "monospace",
												fontSize: "0.65rem",
												color: sdg.color,
												marginBottom: "0.5rem",
												letterSpacing: "0.1em",
											}}
										>
											[{sdg.num}]
										</div>
										<h3
											style={{
												fontSize: "1.15rem",
												fontWeight: 600,
												marginBottom: "0.5rem",
												color: "var(--text-primary)",
											}}
										>
											{sdg.title}
										</h3>
										<p
											style={{
												fontSize: "0.9rem",
												color: "var(--text-secondary)",
												lineHeight: 1.7,
											}}
										>
											{sdg.desc}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* FAQ Section */}
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
									key={i}
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

				{/* Waitlist Section */}
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
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr 1.5fr",
								gap: "3rem",
								alignItems: "start",
							}}
						>
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
									{[
										{
											label: t.waitlist.name,
											type: "text",
											key: "name" as const,
										},
										{
											label: t.waitlist.phone,
											type: "tel",
											key: "phone" as const,
										},
										{
											label: t.waitlist.email,
											type: "email",
											key: "email" as const,
										},
									].map((field) => (
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

				{/* Contact Section */}
				<section
					id="contact"
					style={{
						padding: "6rem 0",
						background: "var(--brand-dark)",
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
							maxWidth: "1200px",
							margin: "0 auto",
							padding: "0 2rem",
							position: "relative",
						}}
					>
						{/* HUD Section Header */}
						<div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
									COMMUNICATION CHANNELS
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
								{t.contact.title}
							</h2>
						</div>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(4, 1fr)",
								gap: "1.5rem",
							}}
						>
							{[
								{
									icon: "📞",
									title: t.contact.hotline,
									value: "(+84) 792 774 510",
									href: "tel:+84792774510",
									color: "var(--brand-cyan)",
								},
								{
									icon: "✉️",
									title: t.contact.email,
									value: "noah@gmail.com.vn",
									href: "mailto:noah@gmail.com.vn",
									color: "var(--brand-orange)",
								},
								{
									icon: "🤝",
									title: t.contact.partner,
									value: "(+84) 979 744 571",
									href: "tel:+84979744571",
									color: "var(--brand-success)",
								},
								{
									icon: "📍",
									title: t.contact.address,
									value: t.contact.addressText,
									href: "#",
									color: "var(--brand-orange)",
								},
							].map((contact, i) => (
								<a
									key={i}
									href={contact.href}
									className="glass-panel"
									style={{
										padding: "1.5rem",
										textDecoration: "none",
										display: "block",
										transition: "all 0.3s ease",
										position: "relative",
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
											borderTop: `2px solid ${contact.color}`,
											borderLeft: `2px solid ${contact.color}`,
										}}
									/>
									<div
										style={{
											position: "absolute",
											bottom: 0,
											right: 0,
											width: "12px",
											height: "12px",
											borderBottom: `2px solid ${contact.color}`,
											borderRight: `2px solid ${contact.color}`,
										}}
									/>
									{/* Status indicator */}
									<div
										style={{
											position: "absolute",
											top: "1rem",
											right: "1rem",
											display: "flex",
											alignItems: "center",
											gap: "0.35rem",
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
												fontSize: "0.6rem",
												color: "var(--brand-success)",
											}}
										>
											ONLINE
										</span>
									</div>
									<div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
										{contact.icon}
									</div>
									<div
										style={{
											fontFamily: "monospace",
											fontSize: "0.65rem",
											color: contact.color,
											marginBottom: "0.5rem",
											letterSpacing: "0.1em",
										}}
									>
										[{String(i + 1).padStart(2, "0")}]
									</div>
									<h3
										style={{
											fontSize: "0.9rem",
											fontWeight: 600,
											marginBottom: "0.5rem",
											color: "var(--text-secondary)",
										}}
									>
										{contact.title}
									</h3>
									<p
										style={{
											fontSize: "0.9rem",
											fontWeight: 600,
											color: "var(--text-primary)",
										}}
									>
										{contact.value}
									</p>
								</a>
							))}
						</div>
					</div>
				</section>

				{/* Footer */}
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
							style={{
								display: "grid",
								gridTemplateColumns: "2fr 1fr 1fr",
								gap: "4rem",
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
									].map((sdg, i) => (
										<div
											key={i}
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
												key={i}
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
											key={i}
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
			</div>
		</>
	);
}
