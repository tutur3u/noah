'use client';

import { useState } from 'react';

type Language = 'vi' | 'en';

const translations = {
  vi: {
    nav: {
      logo: 'Kit Cứu Hộ',
      home: 'Trang chủ',
      products: 'Sản phẩm',
      about: 'Giới thiệu',
      contact: 'Liên hệ',
      cta: 'Đăng ký ngay'
    },
    hero: {
      badge: 'Emergency Flood Kit',
      title1: 'Hy vọng giữa dòng lũ',
      subtitle: 'Bảo vệ những gì quan trọng nhất - gia đình và sự sống của bạn',
      description: 'Được thiết kế đặc biệt cho điều kiện lũ lụt tại Việt Nam. Tích hợp GPS, lọc nước, thực phẩm và thiết bị sinh tồn thiết yếu.',
      exploreBtn: 'Khám phá sản phẩm',
      registerBtn: 'Đăng ký ngay',
      stat1: 'thiên tai ở VN do bão lũ',
      stat2: 'dân số VN có nguy cơ',
      gps: 'GPS Tracking',
      gpsDesc: 'Real-time location',
      lifestraw: 'LifeStraw',
      lifestawDesc: 'Clean water',
      mre: 'MRE Food',
      mreDesc: 'Military grade'
    },
    features: {
      badge: 'Tính năng nổi bật',
      title: 'Trang bị đầy đủ để sinh tồn',
      subtitle: 'Mỗi bộ kit được thiết kế kỹ lưỡng với công nghệ tiên tiến',
      gpsTitle: 'GPS Định vị',
      gpsDesc: 'Thiết bị định vị GPS Beitan BE-252i giúp đội cứu hộ tìm thấy bạn nhanh chóng trong mọi tình huống khẩn cấp.',
      waterTitle: 'Lọc nước LifeStraw',
      waterDesc: 'Ống lọc nước LifeStraw chính hãng từ VesterGaard, lọc 99.99% vi khuẩn và ký sinh trùng có hại.',
      mreTitle: 'Lương khô MRE',
      mreDesc: 'Thực phẩm quân sự BB702 tiêu chuẩn, bảo quản lâu dài, cung cấp đầy đủ dinh dưỡng cần thiết.',
      flashlightTitle: 'Đèn chiếu sáng',
      flashlightDesc: 'Đèn pin Cree Zoom chuyên dụng với khả năng chiếu sáng mạnh mẽ, chịu nước tốt trong mọi điều kiện.',
      learnMore: 'Tìm hiểu thêm'
    },
    mission: {
      badge: 'Câu chuyện của chúng tôi',
      title: 'Tại sao NOAH ra đời?',
      rmitTitle: '🎓 Dự án sinh viên RMIT',
      rmitDesc: 'Noah là một dự án được khởi nguồn từ tâm huyết của nhóm sinh viên Đại học RMIT sau những chứng kiến tàn phá của lũ lụt đã cuốn trôi tài sản và lấy đi sinh mạng của nhiều người, đặc biệt ở khu vực miền Trung Việt Nam và các nước trong khu vực Đông Nam Á như Philippines.',
      climateTitle: '🌍 Biến đổi khí hậu',
      climateDesc: 'Biến đổi khí hậu đang ngày càng nghiêm trọng hơn, người dân vùng lũ phải gánh chịu mất mát ngày càng lớn. Vì vậy, chúng tôi không thể khoanh tay đứng nhìn.',
      missionBadge: 'Sứ mệnh của chúng tôi',
      missionDesc: 'Đó là lý do NOAH ra đời, NOAH được tạo ra với một sứ mệnh mang lại hy vọng và bảo vệ sự sống của người dân giữa dòng lũ.'
    },
    products: {
      badge: 'Sản phẩm',
      title: 'Chọn bộ kit phù hợp với bạn',
      subtitle: 'Ba gói sản phẩm được thiết kế để đáp ứng mọi nhu cầu và ngân sách',
      basicTitle: 'Gói Cơ Bản',
      basicDesc: 'Thiết yếu cho sinh tồn ngắn hạn và cứu hộ khẩn cấp',
      basicPrice: '750K',
      mediumTitle: 'Gói Trung Cấp',
      mediumDesc: 'Bảo vệ toàn diện cho gia đình với thiết bị lọc nước',
      mediumPrice: '1.5M',
      premiumTitle: 'Gói Cao Cấp',
      premiumDesc: 'Trang bị đầy đủ nhất cho sinh tồn kéo dài trong điều kiện khắc nghiệt',
      premiumPrice: '2M',
      currency: 'VNĐ',
      popular: 'PHỔ BIẾN',
      recommended: 'KHUYẾN NGHỊ',
      suitableFor: 'PHÙ HỢP CHO:',
      basicSuit: 'Hộ gia đình tại khu vực có nguy cơ ngập úng thấp',
      mediumSuit: 'Hộ gia đình tại khu vực có nguy cơ lũ lụt trung bình',
      premiumSuit: 'Khu vực có nguy cơ lũ lụt cao và điều kiện khắc nghiệt',
      allInclude: 'Tất cả các gói đều bao gồm',
      allIncludeDesc: 'Chống nước hoàn toàn, siêu nhẹ, dễ sử dụng. Được thiết kế đặc biệt cho điều kiện lũ lụt tại Việt Nam. Đội ngũ RMIT cam kết chất lượng và hiệu quả của từng sản phẩm.',
      basicLifeJacket: 'Áo phao cơ bản',
      basicLifeJacketPrice: 'Garan - 150K VNĐ',
      gps: 'GPS định vị',
      gpsPrice: 'Beitan BE-252i - 310K VNĐ',
      whistle: 'Còi cứu hộ',
      whistlePrice: '20K VNĐ',
      mreHalf: 'Lương khô MRE (0.5kg)',
      mreHalfPrice: 'BB702 - 65K VNĐ',
      mreOne: 'Lương khô MRE (1kg)',
      mreOnePrice: 'BB702 - 130K VNĐ',
      noWaterFilter: 'Không có ống lọc nước',
      noFlashlight: 'Không có đèn pin',
      lifeStraw: 'Ống lọc nước LifeStraw',
      lifeStrawPrice: 'VesterGaard - 500K VNĐ',
      basicFlashlight: 'Đèn pin cơ bản',
      basicFlashlightPrice: 'Cree Zoom SS001 - 150K VNĐ',
      premiumLifeJacket: 'Áo phao cao cấp',
      premiumLifeJacketPrice: 'Dongtai - 650K VNĐ',
      premiumFlashlight: 'Đèn pin cao cấp',
      premiumFlashlightPrice: 'Haixnfire H010 - 250K VNĐ'
    },
    sdg: {
      badge: 'Tác động xã hội',
      title: 'Mục tiêu phát triển bền vững',
      sdg11: 'SDG 11: Thành phố bền vững',
      sdg11Target: 'Mục tiêu 11.5:',
      sdg11Desc: 'Giảm tác động tiêu cực của thiên tai',
      sdg11Detail: 'Sản phẩm giúp tăng cường khả năng phục hồi và thích ứng trong các khu vực dễ bị thiên tai, góp phần giảm số người bị ảnh hưởng bởi lũ lụt.',
      sdg13: 'SDG 13: Hành động khí hậu',
      sdg13Target: 'Mục tiêu 13.1:',
      sdg13Desc: 'Tăng cường khả năng chống chịu',
      sdg13Detail: 'Trang bị công cụ sinh tồn thiết yếu giúp người dân chuẩn bị tốt hơn và chống chịu các thảm họa liên quan đến khí hậu.'
    },
    cta: {
      title: 'Bạn đã sẵn sàng bảo vệ gia đình mình chưa?',
      subtitle: 'Hãy là người đầu tiên sở hữu bộ kit cứu hộ NOAH khi chúng tôi ra mắt sản phẩm',
      button: 'Đăng ký nhận thông báo ngay'
    },
    waitlist: {
      outOfStock: '⚠️ Hiện tại tạm hết hàng',
      developmentTitle: 'Đang phát triển sản phẩm',
      developmentDesc: 'Chúng tôi đang hoàn thiện sản phẩm để đảm bảo chất lượng tốt nhất cho khách hàng.',
      specialOffer: '🎯 Ưu đãi đặc biệt',
      specialOfferDesc: 'Những người đăng ký sớm sẽ nhận được ưu tiên mua hàng và các ưu đãi độc quyền khi sản phẩm ra mắt!',
      formTitle: 'Đăng ký danh sách chờ',
      formSubtitle: 'Để lại thông tin để nhận thông báo khi đợt sản xuất tiếp theo được ra mắt',
      nameLabel: 'Họ và tên *',
      namePlaceholder: 'Nguyễn Văn A',
      phoneLabel: 'Số điện thoại *',
      phonePlaceholder: '0912345678',
      emailLabel: 'Email *',
      emailPlaceholder: 'example@email.com',
      submitBtn: 'Đăng ký ngay',
      successMsg: 'Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn sớm nhất.'
    },
    contact: {
      badge: 'Liên hệ',
      title: 'Kết nối với chúng tôi',
      hotlineTitle: 'Hotline khách hàng',
      hotlineSupport: 'Hỗ trợ 24/7',
      emailTitle: 'Email',
      emailResponse: 'Phản hồi trong 24h',
      partnerTitle: 'Dành cho đối tác doanh nghiệp',
      partnerDesc: 'Hợp tác cùng NOAH để mang sản phẩm đến với cộng đồng',
      vietnamese: '🇻🇳 Tiếng Việt:',
      english: '🇬🇧 English:'
    },
    footer: {
      tagline: 'Mang lại hy vọng và bảo vệ sự sống của người dân giữa dòng lũ',
      aboutTitle: 'Về dự án',
      aboutDesc: 'Dự án của sinh viên Đại học RMIT nhằm giải quyết vấn đề lũ lụt tại Việt Nam thông qua công nghệ và đổi mới sáng tạo.',
      sdgTitle: 'SDG Goals',
      copyright: '© 2025 NOAH - Emergency Flood Kit. Một dự án của sinh viên Đại học RMIT.'
    }
  },
  en: {
    nav: {
      logo: 'Emergency Kit',
      home: 'Home',
      products: 'Products',
      about: 'About',
      contact: 'Contact',
      cta: 'Sign Up Now'
    },
    hero: {
      badge: 'Emergency Flood Kit',
      title1: 'Hope in the Flood',
      subtitle: 'Protecting what matters most - your family and life',
      description: 'Specially designed for flood conditions in Vietnam. Integrated GPS, water filter, food and essential survival equipment.',
      exploreBtn: 'Explore Products',
      registerBtn: 'Sign Up Now',
      stat1: 'of VN disasters from storms/floods',
      stat2: 'of VN population at risk',
      gps: 'GPS Tracking',
      gpsDesc: 'Real-time location',
      lifestraw: 'LifeStraw',
      lifestawDesc: 'Clean water',
      mre: 'MRE Food',
      mreDesc: 'Military grade'
    },
    features: {
      badge: 'Key Features',
      title: 'Fully Equipped for Survival',
      subtitle: 'Each kit is carefully designed with advanced technology',
      gpsTitle: 'GPS Tracking',
      gpsDesc: 'Beitan BE-252i GPS device helps rescue teams find you quickly in any emergency situation.',
      waterTitle: 'LifeStraw Water Filter',
      waterDesc: 'Authentic LifeStraw water filter from VesterGaard, filters 99.99% of harmful bacteria and parasites.',
      mreTitle: 'MRE Rations',
      mreDesc: 'Standard BB702 military food, long-term storage, provides all necessary nutrition.',
      flashlightTitle: 'Flashlight',
      flashlightDesc: 'Cree Zoom professional flashlight with powerful illumination, waterproof in all conditions.',
      learnMore: 'Learn More'
    },
    mission: {
      badge: 'Our Story',
      title: 'Why NOAH was created?',
      rmitTitle: '🎓 RMIT Student Project',
      rmitDesc: 'Noah is a project born from the passion of RMIT University students after witnessing the devastation of floods that swept away property and took lives, especially in Central Vietnam and Southeast Asian countries like the Philippines.',
      climateTitle: '🌍 Climate Change',
      climateDesc: 'Climate change is becoming increasingly severe, people in flood areas are bearing greater losses. Therefore, we cannot stand by and watch.',
      missionBadge: 'Our Mission',
      missionDesc: "That's why NOAH was created, NOAH was made with a mission to bring hope and protect people's lives in the flood."
    },
    products: {
      badge: 'Products',
      title: 'Choose the kit that suits you',
      subtitle: 'Three product packages designed to meet all needs and budgets',
      basicTitle: 'Basic Kit',
      basicDesc: 'Essential for short-term survival and emergency rescue',
      basicPrice: '750K',
      mediumTitle: 'Medium Kit',
      mediumDesc: 'Comprehensive family protection with water filter',
      mediumPrice: '1.5M',
      premiumTitle: 'Premium Kit',
      premiumDesc: 'Most comprehensive equipment for prolonged survival in harsh conditions',
      premiumPrice: '2M',
      currency: 'VND',
      popular: 'POPULAR',
      recommended: 'RECOMMENDED',
      suitableFor: 'SUITABLE FOR:',
      basicSuit: 'Households in areas with low flood risk',
      mediumSuit: 'Households in areas with medium flood risk',
      premiumSuit: 'Areas with high flood risk and harsh conditions',
      allInclude: 'All packages include',
      allIncludeDesc: 'Completely waterproof, ultra-light, easy to use. Specially designed for flood conditions in Vietnam. RMIT team is committed to the quality and effectiveness of each product.',
      basicLifeJacket: 'Basic life jacket',
      basicLifeJacketPrice: 'Garan - 150K VND',
      gps: 'GPS Tracking',
      gpsPrice: 'Beitan BE-252i - 310K VND',
      whistle: 'Emergency whistle',
      whistlePrice: '20K VND',
      mreHalf: 'MRE Rations (0.5kg)',
      mreHalfPrice: 'BB702 - 65K VND',
      mreOne: 'MRE Rations (1kg)',
      mreOnePrice: 'BB702 - 130K VND',
      noWaterFilter: 'No water filter',
      noFlashlight: 'No flashlight',
      lifeStraw: 'LifeStraw Water Filter',
      lifeStrawPrice: 'VesterGaard - 500K VND',
      basicFlashlight: 'Basic flashlight',
      basicFlashlightPrice: 'Cree Zoom SS001 - 150K VND',
      premiumLifeJacket: 'Premium life jacket',
      premiumLifeJacketPrice: 'Dongtai - 650K VND',
      premiumFlashlight: 'Premium flashlight',
      premiumFlashlightPrice: 'Haixnfire H010 - 250K VND'
    },
    sdg: {
      badge: 'Social Impact',
      title: 'Sustainable Development Goals',
      sdg11: 'SDG 11: Sustainable Cities',
      sdg11Target: 'Target 11.5:',
      sdg11Desc: 'Reduce adverse effects of disasters',
      sdg11Detail: 'The product helps strengthen resilience and adaptation in disaster-prone areas, contributing to reducing the number of people affected by floods.',
      sdg13: 'SDG 13: Climate Action',
      sdg13Target: 'Target 13.1:',
      sdg13Desc: 'Strengthen resilience',
      sdg13Detail: 'Equipping essential survival tools helps people better prepare and withstand climate-related disasters.'
    },
    cta: {
      title: 'Are you ready to protect your family?',
      subtitle: 'Be the first to own the NOAH rescue kit when we launch the product',
      button: 'Sign Up for Notifications'
    },
    waitlist: {
      outOfStock: '⚠️ Currently Out of Stock',
      developmentTitle: 'Product in Development',
      developmentDesc: 'We are perfecting the product to ensure the best quality for customers.',
      specialOffer: '🎯 Special Offer',
      specialOfferDesc: 'Early registrants will receive priority purchase and exclusive offers when the product launches!',
      formTitle: 'Join the Waitlist',
      formSubtitle: 'Leave your information to receive notifications when the next production batch is released',
      nameLabel: 'Full Name *',
      namePlaceholder: 'John Doe',
      phoneLabel: 'Phone Number *',
      phonePlaceholder: '0912345678',
      emailLabel: 'Email *',
      emailPlaceholder: 'example@email.com',
      submitBtn: 'Sign Up Now',
      successMsg: 'Thank you for signing up! We will contact you soon.'
    },
    contact: {
      badge: 'Contact',
      title: 'Connect with us',
      hotlineTitle: 'Customer Hotline',
      hotlineSupport: '24/7 Support',
      emailTitle: 'Email',
      emailResponse: 'Response within 24h',
      partnerTitle: 'For Business Partners',
      partnerDesc: 'Partner with NOAH to bring products to the community',
      vietnamese: '🇻🇳 Vietnamese:',
      english: '🇬🇧 English:'
    },
    footer: {
      tagline: 'Bringing hope and protecting people\'s lives in the flood',
      aboutTitle: 'About the Project',
      aboutDesc: 'A project by RMIT University students aimed at solving flood problems in Vietnam through technology and innovation.',
      sdgTitle: 'SDG Goals',
      copyright: '© 2025 NOAH - Emergency Flood Kit. A project by RMIT University students.'
    }
  }
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('vi');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t.waitlist.successMsg);
    setFormData({ name: '', phone: '', email: '' });
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'vi' ? 'en' : 'vi');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                NOAH
              </div>
              <span className="text-xs text-gray-500 font-medium">{t.nav.logo}</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                {t.nav.home}
              </a>
              <a href="#products" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                {t.nav.products}
              </a>
              <a href="#waitlist" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                {t.nav.about}
              </a>
              <a href="#waitlist" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                {t.nav.contact}
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all"
                aria-label="Toggle language"
              >
                <span className="text-sm font-medium text-gray-700">{language === 'vi' ? '🇻🇳 VI' : '🇬🇧 EN'}</span>
              </button>

              <a
                href="#waitlist"
                className="hidden sm:inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
              >
                <span>{t.nav.cta}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden pt-20">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating water droplets animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Two Column Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Branding & Message */}
              <div className="space-y-8">
                {/* Logo/Brand */}
                <div className="space-y-4">
                  <div className="inline-block bg-blue-500/30 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold border border-blue-400/30">
                    {t.hero.badge}
                  </div>
                  <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight">
                    NOAH
                  </h1>
                </div>

                {/* Slogan & Positive Message */}
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    {t.hero.title1}
                  </h2>
                  <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-light">
                    {t.hero.subtitle}
                  </p>
                  <div className="flex items-start gap-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                    <div className="text-3xl">✨</div>
                    <div>
                      <p className="text-blue-50 leading-relaxed">
                        {t.hero.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="#products"
                    className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl"
                  >
                    <span>{t.hero.exploreBtn}</span>
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </a>
                  <a
                    href="#waitlist"
                    className="inline-flex items-center gap-2 bg-blue-600/30 backdrop-blur-sm border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600/50 hover:border-white/60 transition-all"
                  >
                    {t.hero.registerBtn}
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                    <div className="text-4xl font-bold text-blue-300 mb-1">98%</div>
                    <div className="text-sm text-blue-200">{t.hero.stat1}</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                    <div className="text-4xl font-bold text-blue-300 mb-1">70%</div>
                    <div className="text-sm text-blue-200">{t.hero.stat2}</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Product Mockups with Floating Elements */}
              <div className="relative lg:h-[700px] flex items-center justify-center">
                {/* Floating Elements */}
                <div className="absolute inset-0">
                  {/* Large floating circle */}
                  <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }}></div>

                  {/* Small floating badges */}
                  <div className="absolute top-20 left-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform animate-float">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">🧭</div>
                      <div>
                        <div className="text-sm font-bold">{t.hero.gps}</div>
                        <div className="text-xs text-blue-200">{t.hero.gpsDesc}</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-32 left-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl transform rotate-[5deg] hover:rotate-0 transition-transform animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">💧</div>
                      <div>
                        <div className="text-sm font-bold">{t.hero.lifestraw}</div>
                        <div className="text-xs text-blue-200">{t.hero.lifestawDesc}</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/3 right-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl transform rotate-[8deg] hover:rotate-0 transition-transform animate-float" style={{ animationDelay: '2s' }}>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">🍱</div>
                      <div>
                        <div className="text-sm font-bold">{t.hero.mre}</div>
                        <div className="text-xs text-blue-200">{t.hero.mreDesc}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Product Images */}
                <div className="relative z-10 w-full max-w-lg mx-auto">
                  {/* Primary mockup - larger, in front */}
                  <div className="relative transform hover:scale-105 transition-transform duration-500 animate-float-slow">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 to-purple-500/40 rounded-3xl blur-2xl animate-pulse"></div>
                    <img
                      src="/mock-1.png"
                      alt="Noah Emergency Kit - Main View"
                      className="relative rounded-3xl shadow-2xl border-4 border-white/20 w-full"
                    />
                  </div>

                  {/* Secondary mockup - smaller, offset behind */}
                  <div className="absolute -bottom-10 -right-10 w-3/5 transform rotate-6 hover:rotate-3 transition-transform duration-500 animate-float" style={{ animationDelay: '1.5s' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 rounded-3xl blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <img
                      src="/mock-2.png"
                      alt="Noah Emergency Kit - Detail View"
                      className="relative rounded-2xl shadow-2xl border-4 border-white/20 w-full"
                    />
                  </div>
                </div>

                {/* Floating accent elements */}
                <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-yellow-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-emerald-400/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Features Highlight Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {t.features.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t.features.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t.features.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* GPS Feature */}
              <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2">
                <div className="bg-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  🧭
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.features.gpsTitle}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t.features.gpsDesc}
                </p>
                <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold">
                  <span>{t.features.learnMore}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>
              </div>

              {/* Water Filter Feature */}
              <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2">
                <div className="bg-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  💧
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.features.waterTitle}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t.features.waterDesc}
                </p>
                <div className="inline-flex items-center gap-2 text-cyan-600 font-semibold">
                  <span>{t.features.learnMore}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>
              </div>

              {/* MRE Food Feature */}
              <div className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2">
                <div className="bg-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  🍱
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.features.mreTitle}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t.features.mreDesc}
                </p>
                <div className="inline-flex items-center gap-2 text-amber-600 font-semibold">
                  <span>{t.features.learnMore}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>
              </div>

              {/* Flashlight Feature */}
              <div className="group bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2">
                <div className="bg-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  💡
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.features.flashlightTitle}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t.features.flashlightDesc}
                </p>
                <div className="inline-flex items-center gap-2 text-purple-600 font-semibold">
                  <span>{t.features.learnMore}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Bento Style */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {t.mission.badge}
              </span>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">{t.mission.title}</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-10 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.mission.rmitTitle}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t.mission.rmitDesc}
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-10 border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.mission.climateTitle}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t.mission.climateDesc}
                </p>
              </div>

              <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-white border-2 border-blue-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    {t.mission.missionBadge}
                  </div>
                  <p className="text-2xl font-semibold leading-relaxed">
                    {t.mission.missionDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - Bento Style with 3 Tiers */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {t.products.badge}
              </span>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">{t.products.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t.products.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Basic Kit */}
              <div className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{t.products.basicTitle}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{t.products.basicPrice}</span>
                    <span className="text-gray-300">{t.products.currency}</span>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 mb-6 text-sm">
                    {t.products.basicDesc}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t.products.basicLifeJacket}</div>
                        <div className="text-sm text-gray-500">{t.products.basicLifeJacketPrice}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t.products.gps}</div>
                        <div className="text-sm text-gray-500">{t.products.gpsPrice}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t.products.whistle}</div>
                        <div className="text-sm text-gray-500">{t.products.whistlePrice}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t.products.mreHalf}</div>
                        <div className="text-sm text-gray-500">{t.products.mreHalfPrice}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 opacity-40">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </div>
                      <div className="font-semibold text-gray-500">{t.products.noWaterFilter}</div>
                    </div>
                    <div className="flex items-start gap-3 opacity-40">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </div>
                      <div className="font-semibold text-gray-500">{t.products.noFlashlight}</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <p className="text-xs text-blue-600 font-semibold mb-1">{t.products.suitableFor}</p>
                    <p className="text-sm text-gray-700">{t.products.basicSuit}</p>
                  </div>
                </div>
              </div>

              {/* Medium Kit */}
              <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl overflow-hidden border-2 border-blue-300 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold">{t.products.mediumTitle}</h3>
                    <span className="bg-blue-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">{t.products.popular}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{t.products.mediumPrice}</span>
                    <span className="text-blue-100">{t.products.currency}</span>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 mb-6 text-sm">
                    {t.products.mediumDesc}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t.products.basicLifeJacket}</div>
                        <div className="text-sm text-gray-500">{t.products.basicLifeJacketPrice}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t.products.gps}</div>
                        <div className="text-sm text-gray-500">{t.products.gpsPrice}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t.products.whistle}</div>
                        <div className="text-sm text-gray-500">{t.products.whistlePrice}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t.products.mreOne}</div>
                        <div className="text-sm text-gray-500">{t.products.mreOnePrice}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t.products.lifeStraw}</div>
                        <div className="text-sm text-gray-500">{t.products.lifeStrawPrice}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t.products.basicFlashlight}</div>
                        <div className="text-sm text-gray-500">{t.products.basicFlashlightPrice}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-500 text-white p-4 rounded-xl">
                    <p className="text-xs font-semibold mb-1 opacity-90">{t.products.suitableFor}</p>
                    <p className="text-sm">{t.products.mediumSuit}</p>
                  </div>
                </div>
              </div>

              {/* Premium Kit */}
              <div className="group bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-3xl overflow-hidden border-2 border-orange-300 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                <div className="bg-gradient-to-r from-orange-600 via-red-600 to-red-700 p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold">{t.products.premiumTitle}</h3>
                      <span className="bg-yellow-400 text-red-900 text-xs font-bold px-3 py-1 rounded-full">{t.products.recommended}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">{t.products.premiumPrice}</span>
                      <span className="text-orange-100">{t.products.currency}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 mb-6 text-sm">
                    {t.products.premiumDesc}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t.products.premiumLifeJacket}</div>
                        <div className="text-sm text-gray-500">{t.products.premiumLifeJacketPrice}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t.products.gps}</div>
                        <div className="text-sm text-gray-500">{t.products.gpsPrice}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t.products.whistle}</div>
                        <div className="text-sm text-gray-500">{t.products.whistlePrice}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t.products.mreOne}</div>
                        <div className="text-sm text-gray-500">{t.products.mreOnePrice}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t.products.lifeStraw}</div>
                        <div className="text-sm text-gray-500">{t.products.lifeStrawPrice}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t.products.premiumFlashlight}</div>
                        <div className="text-sm text-gray-500">{t.products.premiumFlashlightPrice}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 rounded-xl">
                    <p className="text-xs font-semibold mb-1 opacity-90">{t.products.suitableFor}</p>
                    <p className="text-sm">{t.products.premiumSuit}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Note */}
            <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.products.allInclude}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t.products.allIncludeDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section - Bento */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {t.sdg.badge}
              </span>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">{t.sdg.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 border-2 border-emerald-200">
                <div className="text-5xl mb-4">🏘️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.sdg.sdg11}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>{t.sdg.sdg11Target}</strong> {t.sdg.sdg11Desc}
                </p>
                <p className="text-gray-600 text-sm">
                  {t.sdg.sdg11Detail}
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border-2 border-cyan-200">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.sdg.sdg13}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>{t.sdg.sdg13Target}</strong> {t.sdg.sdg13Desc}
                </p>
                <p className="text-gray-600 text-sm">
                  {t.sdg.sdg13Detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <a
            href="#waitlist"
            className="inline-block bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl"
          >
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* Waitlist Section - Bento Form */}
      <section id="waitlist" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-6">
              {/* Info Box */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 border-2 border-yellow-200">
                  <div className="inline-block bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
                    {t.waitlist.outOfStock}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {t.waitlist.developmentTitle}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t.waitlist.developmentDesc}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t.waitlist.specialOffer}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t.waitlist.specialOfferDesc}
                  </p>
                </div>
              </div>

              {/* Form Box */}
              <div className="lg:col-span-3 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 border-2 border-gray-200 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {t.waitlist.formTitle}
                </h2>
                <p className="text-gray-600 mb-8">
                  {t.waitlist.formSubtitle}
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                      {t.waitlist.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900 transition-colors"
                      placeholder={t.waitlist.namePlaceholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                      {t.waitlist.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900 transition-colors"
                      placeholder={t.waitlist.phonePlaceholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      {t.waitlist.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900 transition-colors"
                      placeholder={t.waitlist.emailPlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {t.waitlist.submitBtn}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Bento Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {t.contact.badge}
              </span>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">{t.contact.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-10 text-white">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold mb-3">{t.contact.hotlineTitle}</h3>
                <a href="tel:+84792774510" className="text-3xl font-bold hover:text-blue-100 transition-colors inline-block">
                  (+84) 792774510
                </a>
                <p className="text-blue-100 text-sm mt-3">{t.contact.hotlineSupport}</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-10 text-white">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-bold mb-3">{t.contact.emailTitle}</h3>
                <a href="mailto:noah@gmail.com.vn" className="text-2xl font-bold hover:text-purple-100 transition-colors break-all inline-block">
                  noah@gmail.com.vn
                </a>
                <p className="text-purple-100 text-sm mt-3">{t.contact.emailResponse}</p>
              </div>

              <div className="md:col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 text-white">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">🤝</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{t.contact.partnerTitle}</h3>
                    <p className="text-gray-300 text-sm">{t.contact.partnerDesc}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                    <p className="text-sm text-gray-300 mb-2">{t.contact.vietnamese}</p>
                    <a href="tel:+84979744571" className="text-xl font-bold hover:text-gray-200 transition-colors">
                      (+84) 0979744571
                    </a>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                    <p className="text-sm text-gray-300 mb-2">{t.contact.english}</p>
                    <a href="tel:+84979744571" className="text-xl font-bold hover:text-gray-200 transition-colors">
                      (+84) 0979744571
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">NOAH</h3>
                <p className="text-gray-400 leading-relaxed">
                  {t.footer.tagline}
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4 text-blue-400">{t.footer.aboutTitle}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t.footer.aboutDesc}
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4 text-blue-400">{t.footer.sdgTitle}</h4>
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center font-bold">11</div>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center font-bold">13</div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-500 text-sm">
                {t.footer.copyright}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
