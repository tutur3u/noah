'use client';

import { useState, useEffect, useRef } from 'react';

type Language = 'vi' | 'en';

const translations = {
  vi: {
    nav: {
      home: 'Trang chủ',
      products: 'Sản phẩm',
      about: 'Giới thiệu',
      contact: 'Liên hệ',
    },
    hero: {
      tagline: 'Kit Cứu Hộ Khẩn Cấp',
      title1: 'Đừng Để',
      title2: 'Quá Muộn',
      subtitle: 'Mỗi năm, hàng trăm người Việt Nam mất mạng vì lũ lụt. Đừng để gia đình bạn trở thành con số thống kê tiếp theo.',
      description: 'Kit cứu hộ NOAH được thiết kế từ nỗi đau của những mất mát. Mỗi tính năng đều được nghiên cứu từ thực tế lũ lụt tại Việt Nam.',
      cta: 'Tìm hiểu ngay',
      stats: {
        disasters: 'thiên tai từ bão lũ',
        population: 'dân số có nguy cơ',
      },
    },
    badges: {
      gps: 'GPS Định vị',
      gpsDesc: 'Để cứu hộ tìm thấy bạn',
      water: 'Lọc nước',
      waterDesc: 'Nước bẩn = Bệnh tật',
      sos: 'SOS Cứu hộ',
      sosDesc: 'Khi mọi thứ sụp đổ',
    },
    impact: {
      badge: 'Sự thật đau lòng',
      title: 'Thảm họa không chờ đợi',
      subtitle: 'Những con số này không chỉ là thống kê — đó là sinh mạng, là gia đình, là những giấc mơ bị cuốn trôi',
      stat1: 'Thiệt hại mỗi năm',
      stat2: 'Người bị ảnh hưởng',
      stat3: 'Tỉnh thành có nguy cơ',
      stat4: 'Tháng mùa lũ',
      caption1: 'Khi nước dâng, mọi thứ có thể mất chỉ trong vài giờ',
      caption2: 'Nhiều gia đình bị cô lập hoàn toàn, không thức ăn, không nước sạch',
    },
    warning: {
      badge: 'Cảnh báo quan trọng',
      title: 'Những điều bạn cần biết',
      note1: {
        title: '⚠️ Nước lũ rất nguy hiểm',
        desc: 'Chỉ 15cm nước chảy xiết có thể làm bạn ngã. 60cm nước có thể cuốn trôi xe hơi. Nước lũ chứa vi khuẩn, hóa chất độc hại và mảnh vỡ sắc nhọn.',
      },
      note2: {
        title: '🕐 Thời gian vàng chỉ 72 giờ',
        desc: 'Con người có thể sống 3 ngày không có nước, nhưng trong lũ lụt, nguy cơ nhiễm bệnh từ nước bẩn tăng gấp 10 lần. Chuẩn bị trước là sống còn.',
      },
      note3: {
        title: '📍 Cứu hộ không thể đến nếu không biết bạn ở đâu',
        desc: 'Trong trận lũ 2020 tại miền Trung, nhiều người mắc kẹt không được cứu kịp vì không có cách liên lạc. GPS có thể là sự khác biệt giữa sống và chết.',
      },
      note4: {
        title: '👨‍👩‍👧‍👦 Trẻ em và người già dễ tổn thương nhất',
        desc: 'Họ không thể tự bơi, dễ bị hạ thân nhiệt và mất nước nhanh hơn. Một bộ kit có thể cứu cả gia đình.',
      },
    },
    howItWorks: {
      badge: 'Cách hoạt động',
      title: 'Từ chuẩn bị đến cứu hộ',
      subtitle: 'Kit NOAH được thiết kế để sử dụng dễ dàng trong mọi tình huống khẩn cấp',
      step1: {
        title: 'Chuẩn bị sẵn sàng',
        desc: 'Đặt kit NOAH tại vị trí dễ tiếp cận trong nhà. Kit được đóng gói gọn nhẹ, chống nước.',
      },
      step2: {
        title: 'Kích hoạt GPS',
        desc: 'Khi có lũ, bật thiết bị GPS. Vị trí của bạn sẽ được gửi đến trung tâm cứu hộ.',
      },
      step3: {
        title: 'Sinh tồn an toàn',
        desc: 'Sử dụng áo phao, lọc nước sạch, và lương khô trong khi chờ cứu hộ.',
      },
      step4: {
        title: 'Được giải cứu',
        desc: 'Đội cứu hộ định vị và tiếp cận bạn nhanh chóng nhờ tín hiệu GPS.',
      },
    },
    products: {
      title: 'Chọn Gói Phù Hợp',
      subtitle: 'Ba gói sản phẩm được thiết kế để đáp ứng mọi nhu cầu',
      basic: {
        name: 'Cơ Bản',
        price: 'Liên hệ',
        desc: 'Sinh tồn ngắn hạn',
      },
      medium: {
        name: 'Trung Cấp',
        price: 'Liên hệ',
        desc: 'Bảo vệ toàn diện',
        tag: 'Phổ biến',
      },
      premium: {
        name: 'Cao Cấp',
        price: 'Liên hệ',
        desc: 'Trang bị đầy đủ',
        tag: 'Khuyến nghị',
      },
      compare: 'So sánh chi tiết',
    },
    comparison: {
      title: 'So sánh các gói',
      feature: 'Tính năng',
      lifeJacket: 'Áo phao',
      gps: 'GPS định vị',
      whistle: 'Còi cứu hộ',
      food: 'Lương khô MRE',
      waterFilter: 'Lọc nước LifeStraw',
      flashlight: 'Đèn pin',
      basic: 'Cơ bản',
      premium: 'Cao cấp',
      none: 'Không có',
      halfKg: '0.5kg',
      oneKg: '1kg',
    },
    features: {
      title: 'Tính Năng Nổi Bật',
      gps: {
        title: 'GPS Beitan BE-252i',
        desc: 'Thiết bị định vị giúp đội cứu hộ tìm thấy bạn nhanh chóng trong mọi tình huống khẩn cấp.',
        specs: ['Độ chính xác 2.5m', 'Pin 72 giờ', 'Chống nước IP68'],
      },
      water: {
        title: 'LifeStraw VesterGaard',
        desc: 'Ống lọc nước chính hãng, lọc 99.99% vi khuẩn và ký sinh trùng có hại.',
        specs: ['Lọc 4,000L nước', 'Không cần pin', 'Trọng lượng 57g'],
      },
      food: {
        title: 'Lương khô MRE BB702',
        desc: 'Thực phẩm quân sự tiêu chuẩn, bảo quản lâu dài, đầy đủ dinh dưỡng.',
        specs: ['Hạn sử dụng 5 năm', '2,400 kcal/gói', 'Ăn liền không nấu'],
      },
      light: {
        title: 'Đèn pin Cree Zoom',
        desc: 'Đèn chiếu sáng chuyên dụng với khả năng chịu nước tốt trong mọi điều kiện.',
        specs: ['1000 lumens', 'Zoom 500m', 'Chống va đập'],
      },
    },
    testimonials: {
      badge: 'Câu chuyện sống sót',
      title: 'Những người đã trải qua',
      t1: {
        quote: 'Năm 2020, nước dâng lúc 3 giờ sáng. Chúng tôi mất tất cả. Nếu có GPS, đội cứu hộ đã đến sớm hơn 6 tiếng. Mẹ tôi có thể vẫn còn sống.',
        name: 'Nguyễn Văn Minh',
        location: 'Quảng Bình',
      },
      t2: {
        quote: 'Con trai tôi uống nước lũ vì không còn nước sạch. Nó bị tiêu chảy nặng, suýt mất mạng. Bây giờ tôi luôn có sẵn ống lọc nước.',
        name: 'Trần Thị Hoa',
        location: 'Thừa Thiên Huế',
      },
      t3: {
        quote: 'Tôi đã chứng kiến học sinh của mình mất cha mẹ trong lũ. Các em không nên phải trải qua điều đó. Mỗi gia đình cần chuẩn bị trước.',
        name: 'Lê Minh Tuấn',
        location: 'Hà Tĩnh',
      },
    },
    gallery: {
      badge: 'Hình ảnh',
      title: 'Thực trạng lũ lụt',
      subtitle: 'Những hình ảnh cho thấy sự cần thiết của việc chuẩn bị',
    },
    mission: {
      badge: 'Câu chuyện',
      title: 'Tại sao NOAH ra đời?',
      story: 'Noah là dự án từ tâm huyết của sinh viên RMIT sau những chứng kiến tàn phá của lũ lụt tại miền Trung Việt Nam và các nước Đông Nam Á.',
      mission: 'Sứ mệnh của chúng tôi là mang lại hy vọng và bảo vệ sự sống của người dân giữa dòng lũ.',
      vision: 'Tầm nhìn',
      visionText: 'Mỗi gia đình Việt Nam trong vùng lũ đều có một bộ kit cứu hộ NOAH.',
      values: 'Giá trị cốt lõi',
      value1: 'An toàn là trên hết',
      value2: 'Chất lượng không thỏa hiệp',
      value3: 'Phục vụ cộng đồng',
    },
    sdg: {
      badge: 'Tác động xã hội',
      title: 'Mục tiêu phát triển bền vững',
      sdg11: 'SDG 11',
      sdg11Title: 'Thành phố bền vững',
      sdg11Desc: 'Giảm tác động tiêu cực của thiên tai, tăng khả năng phục hồi cộng đồng.',
      sdg13: 'SDG 13',
      sdg13Title: 'Hành động khí hậu',
      sdg13Desc: 'Trang bị công cụ giúp người dân thích ứng với biến đổi khí hậu.',
    },
    faq: {
      badge: 'FAQ',
      title: 'Câu hỏi thường gặp',
      q1: 'Kit NOAH có thể sử dụng trong bao lâu?',
      a1: 'Kit được thiết kế để hỗ trợ sinh tồn từ 3-7 ngày tùy theo gói. Lương khô có hạn sử dụng 5 năm, GPS có pin 72 giờ.',
      q2: 'GPS có hoạt động ở vùng không có sóng điện thoại?',
      a2: 'Có! GPS Beitan BE-252i sử dụng vệ tinh nên hoạt động độc lập với mạng di động. Tín hiệu được gửi qua sóng vô tuyến.',
      q3: 'Tôi có thể mua kit ở đâu?',
      a3: 'Hiện tại sản phẩm đang trong giai đoạn phát triển. Hãy đăng ký waitlist để được thông báo khi sản phẩm ra mắt.',
      q4: 'Kit có phù hợp cho trẻ em không?',
      a4: 'Có, áo phao có nhiều kích cỡ phù hợp cho cả người lớn và trẻ em. Lương khô MRE cũng an toàn cho mọi lứa tuổi.',
    },
    partners: {
      badge: 'Đối tác',
      title: 'Được hỗ trợ bởi',
    },
    waitlist: {
      title: 'Đăng Ký Nhận Thông Báo',
      subtitle: 'Mùa lũ sắp đến. Đừng đợi đến khi quá muộn.',
      name: 'Họ và tên',
      phone: 'Số điện thoại',
      email: 'Email',
      submit: 'Đăng ký ngay',
      success: 'Cảm ơn bạn đã đăng ký!',
      development: 'Đang phát triển',
      devDesc: 'Sản phẩm đang được hoàn thiện để đảm bảo chất lượng tốt nhất.',
      urgentNote: 'Lưu ý quan trọng',
      urgentDesc: 'Mùa mưa bão thường bắt đầu từ tháng 9-11. Hãy chuẩn bị trước ít nhất 2 tháng.',
      registered: 'gia đình đã đăng ký bảo vệ người thân',
    },
    contact: {
      title: 'Liên Hệ',
      hotline: 'Hotline 24/7',
      email: 'Email hỗ trợ',
      partner: 'Đối tác doanh nghiệp',
      address: 'Địa chỉ',
      addressText: 'RMIT University Vietnam, Quận 7, TP.HCM',
    },
    footer: {
      tagline: 'Vì mỗi sinh mạng đều đáng được bảo vệ',
      project: 'Dự án sinh viên RMIT',
      copyright: '© 2025 NOAH Emergency Flood Kit',
      privacy: 'Chính sách bảo mật',
      terms: 'Điều khoản sử dụng',
    },
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Emergency Flood Kit',
      title1: "Don't Let",
      title2: 'It Be Too Late',
      subtitle: "Every year, hundreds of Vietnamese lose their lives to floods. Don't let your family become the next statistic.",
      description: 'The NOAH rescue kit was designed from the pain of loss. Every feature is researched from real flood situations in Vietnam.',
      cta: 'Learn More',
      stats: {
        disasters: 'disasters from floods',
        population: 'population at risk',
      },
    },
    badges: {
      gps: 'GPS Tracking',
      gpsDesc: 'So rescuers can find you',
      water: 'Water Filter',
      waterDesc: 'Dirty water = Disease',
      sos: 'SOS Rescue',
      sosDesc: 'When everything falls apart',
    },
    impact: {
      badge: 'Painful Truths',
      title: 'Disaster Waits For No One',
      subtitle: "These numbers aren't just statistics — they are lives, families, and dreams swept away",
      stat1: 'Damage per year',
      stat2: 'People affected',
      stat3: 'Provinces at risk',
      stat4: 'Flood months',
      caption1: 'When water rises, everything can be lost in just hours',
      caption2: 'Many families are completely isolated, without food, without clean water',
    },
    warning: {
      badge: 'Critical Warning',
      title: 'What You Need to Know',
      note1: {
        title: '⚠️ Floodwater is extremely dangerous',
        desc: 'Just 6 inches of fast-moving water can knock you down. 2 feet of water can sweep away a car. Floodwater contains bacteria, toxic chemicals, and sharp debris.',
      },
      note2: {
        title: '🕐 The golden window is only 72 hours',
        desc: 'Humans can survive 3 days without water, but during floods, the risk of infection from dirty water increases 10x. Preparation is survival.',
      },
      note3: {
        title: "📍 Rescue can't come if they don't know where you are",
        desc: "During the 2020 floods in Central Vietnam, many trapped people weren't rescued in time because they had no way to communicate. GPS can be the difference between life and death.",
      },
      note4: {
        title: '👨‍👩‍👧‍👦 Children and elderly are most vulnerable',
        desc: "They can't swim on their own, are more prone to hypothermia and dehydrate faster. One kit can save an entire family.",
      },
    },
    howItWorks: {
      badge: 'How It Works',
      title: 'From Preparation to Rescue',
      subtitle: 'NOAH kit is designed for easy use in any emergency',
      step1: {
        title: 'Be Prepared',
        desc: 'Place NOAH kit in an accessible location. Kit is compact and waterproof.',
      },
      step2: {
        title: 'Activate GPS',
        desc: 'When flooding occurs, turn on GPS. Your location is sent to rescue center.',
      },
      step3: {
        title: 'Survive Safely',
        desc: 'Use life jacket, filter clean water, and eat rations while waiting.',
      },
      step4: {
        title: 'Get Rescued',
        desc: 'Rescue team locates and reaches you quickly via GPS signal.',
      },
    },
    products: {
      title: 'Choose Your Kit',
      subtitle: 'Three packages designed to meet all needs',
      basic: {
        name: 'Basic',
        price: 'Contact us',
        desc: 'Short-term survival',
      },
      medium: {
        name: 'Medium',
        price: 'Contact us',
        desc: 'Full protection',
        tag: 'Popular',
      },
      premium: {
        name: 'Premium',
        price: 'Contact us',
        desc: 'Fully equipped',
        tag: 'Recommended',
      },
      compare: 'Compare Details',
    },
    comparison: {
      title: 'Compare Packages',
      feature: 'Feature',
      lifeJacket: 'Life Jacket',
      gps: 'GPS Tracking',
      whistle: 'Emergency Whistle',
      food: 'MRE Rations',
      waterFilter: 'LifeStraw Filter',
      flashlight: 'Flashlight',
      basic: 'Basic',
      premium: 'Premium',
      none: 'None',
      halfKg: '0.5kg',
      oneKg: '1kg',
    },
    features: {
      title: 'Key Features',
      gps: {
        title: 'GPS Beitan BE-252i',
        desc: 'Tracking device helps rescue teams find you quickly in any emergency.',
        specs: ['2.5m accuracy', '72h battery', 'IP68 waterproof'],
      },
      water: {
        title: 'LifeStraw VesterGaard',
        desc: 'Authentic water filter that removes 99.99% of harmful bacteria and parasites.',
        specs: ['Filters 4,000L', 'No batteries', 'Weight 57g'],
      },
      food: {
        title: 'MRE Rations BB702',
        desc: 'Military-grade food with long-term storage and complete nutrition.',
        specs: ['5-year shelf life', '2,400 kcal/pack', 'Ready to eat'],
      },
      light: {
        title: 'Cree Zoom Flashlight',
        desc: 'Professional flashlight with powerful waterproof illumination.',
        specs: ['1000 lumens', '500m zoom', 'Shock resistant'],
      },
    },
    testimonials: {
      badge: 'Survivor Stories',
      title: 'Those Who Lived Through It',
      t1: {
        quote: 'In 2020, the water rose at 3 AM. We lost everything. If we had GPS, the rescue team would have arrived 6 hours earlier. My mother might still be alive.',
        name: 'Nguyen Van Minh',
        location: 'Quang Binh',
      },
      t2: {
        quote: 'My son drank floodwater because there was no clean water left. He got severe diarrhea, nearly died. Now I always keep a water filter ready.',
        name: 'Tran Thi Hoa',
        location: 'Thua Thien Hue',
      },
      t3: {
        quote: "I've witnessed my students lose their parents in floods. They shouldn't have to go through that. Every family needs to prepare in advance.",
        name: 'Le Minh Tuan',
        location: 'Ha Tinh',
      },
    },
    gallery: {
      badge: 'Gallery',
      title: 'Flood Reality',
      subtitle: 'Images showing the necessity of preparation',
    },
    mission: {
      badge: 'Our Story',
      title: 'Why NOAH?',
      story: 'Noah is a project born from RMIT students after witnessing flood devastation in Central Vietnam and Southeast Asian countries.',
      mission: 'Our mission is to bring hope and protect lives in the flood.',
      vision: 'Vision',
      visionText: 'Every Vietnamese family in flood zones has a NOAH rescue kit.',
      values: 'Core Values',
      value1: 'Safety first',
      value2: 'Uncompromised quality',
      value3: 'Community service',
    },
    sdg: {
      badge: 'Social Impact',
      title: 'Sustainable Development Goals',
      sdg11: 'SDG 11',
      sdg11Title: 'Sustainable Cities',
      sdg11Desc: 'Reduce adverse effects of disasters, strengthen community resilience.',
      sdg13: 'SDG 13',
      sdg13Title: 'Climate Action',
      sdg13Desc: 'Equip tools to help people adapt to climate change.',
    },
    faq: {
      badge: 'FAQ',
      title: 'Frequently Asked Questions',
      q1: 'How long can the NOAH kit support survival?',
      a1: 'Kit is designed to support 3-7 days depending on package. Rations have 5-year shelf life, GPS has 72-hour battery.',
      q2: 'Does GPS work without mobile signal?',
      a2: 'Yes! Beitan BE-252i GPS uses satellite so it works independently from mobile networks. Signal is sent via radio waves.',
      q3: 'Where can I buy the kit?',
      a3: 'Currently the product is in development. Register for waitlist to be notified when product launches.',
      q4: 'Is the kit suitable for children?',
      a4: 'Yes, life jackets come in multiple sizes for adults and children. MRE rations are also safe for all ages.',
    },
    partners: {
      badge: 'Partners',
      title: 'Supported By',
    },
    waitlist: {
      title: 'Register For Updates',
      subtitle: "Flood season is coming. Don't wait until it's too late.",
      name: 'Full name',
      phone: 'Phone number',
      email: 'Email',
      submit: 'Register now',
      success: 'Thank you for registering!',
      development: 'In Development',
      devDesc: 'Product is being perfected to ensure the best quality.',
      urgentNote: 'Important Note',
      urgentDesc: 'Storm season typically starts September-November. Prepare at least 2 months in advance.',
      registered: 'families registered to protect loved ones',
    },
    contact: {
      title: 'Contact',
      hotline: '24/7 Hotline',
      email: 'Support Email',
      partner: 'Business Partners',
      address: 'Address',
      addressText: 'RMIT University Vietnam, District 7, HCMC',
    },
    footer: {
      tagline: 'Because every life deserves protection',
      project: 'RMIT Student Project',
      copyright: '© 2025 NOAH Emergency Flood Kit',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
};

// Animated counter hook
function useCounter(end: number, duration: number = 2000, startOnView: boolean = true) {
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
        { threshold: 0.5 }
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
  const [language, setLanguage] = useState<Language>('vi');
  const [mounted, setMounted] = useState(false);
  const [activeProduct, setActiveProduct] = useState(1);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
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
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', phone: '', email: '' });
  };

  const products = [
    { id: 0, name: t.products.basic.name, price: t.products.basic.price, desc: t.products.basic.desc, image: '/mock-1.png' },
    { id: 1, name: t.products.medium.name, price: t.products.medium.price, desc: t.products.medium.desc, tag: t.products.medium.tag, image: '/mock-2.png' },
    { id: 2, name: t.products.premium.name, price: t.products.premium.price, desc: t.products.premium.desc, tag: t.products.premium.tag, image: '/mock-1.png' },
  ];

  const testimonials = [t.testimonials.t1, t.testimonials.t2, t.testimonials.t3];
  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

        :root {
          --color-cream: #FAF8F5;
          --color-cream-dark: #F0EDE8;
          --color-ink: #1A1A1A;
          --color-ink-light: #4A4A4A;
          --color-ink-muted: #8A8A8A;
          --color-accent: #2563EB;
          --color-accent-light: #DBEAFE;
          --color-success: #059669;
          --color-warning: #D97706;
          --color-danger: #DC2626;
          --font-display: 'Cormorant Garamond', Georgia, serif;
          --font-body: 'DM Sans', system-ui, sans-serif;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          font-family: var(--font-body);
          background: var(--color-cream);
          color: var(--color-ink);
          overflow-x: hidden;
        }
        ::selection { background: var(--color-accent); color: white; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
        .animate-marquee { animation: marquee 30s linear infinite; }

        .grain {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 1000;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
      `}</style>

      <div className="grain" />

      <div style={{ minHeight: '100vh', background: 'var(--color-cream)' }}>
        {/* Navigation */}
        <header style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          background: 'rgba(250, 248, 245, 0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
        }}>
          <nav style={{
            maxWidth: '1400px', margin: '0 auto', padding: '0 2rem',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700,
                letterSpacing: '-0.02em', color: 'var(--color-ink)',
              }}>NOAH</span>
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              background: 'white', padding: '0.5rem', borderRadius: '100px',
              boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
            }}>
              {[
                { label: t.nav.home, href: '#', active: true },
                { label: t.nav.products, href: '#products' },
                { label: t.nav.about, href: '#about' },
                { label: t.nav.contact, href: '#contact' },
              ].map((item, i) => (
                <a key={i} href={item.href} style={{
                  padding: '0.75rem 1.5rem', borderRadius: '100px',
                  fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  background: item.active ? 'var(--color-ink)' : 'transparent',
                  color: item.active ? 'white' : 'var(--color-ink-light)',
                }}>{item.label}</a>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                type="button"
                onClick={() => setLanguage(prev => (prev === 'vi' ? 'en' : 'vi'))}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.6rem 1rem', borderRadius: '100px',
                  border: '1.5px solid rgba(0,0,0,0.1)', background: 'transparent',
                  cursor: 'pointer', fontSize: '0.85rem', fontWeight: 500,
                  color: 'var(--color-ink)', transition: 'all 0.3s ease',
                }}
              >
                {language === 'vi' ? '🇻🇳 VI' : '🇬🇧 EN'}
              </button>
              <a href="#waitlist" style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.75rem 1.5rem', borderRadius: '100px',
                background: 'var(--color-ink)', color: 'white',
                fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none',
                transition: 'all 0.3s ease', boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              }}>
                {t.hero.cta}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center',
          paddingTop: '80px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '20%', right: '-10%',
            width: '60%', height: '80%',
            background: 'linear-gradient(135deg, #E0F2FE 0%, #DBEAFE 50%, #EDE9FE 100%)',
            borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%',
            opacity: 0.6, filter: 'blur(60px)',
          }} />

          <div style={{
            maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', width: '100%',
            display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem',
            alignItems: 'center', position: 'relative', zIndex: 1,
          }}>
            {/* Left Content */}
            <div className={mounted ? 'animate-fade-in-up' : ''} style={{ opacity: mounted ? 1 : 0 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.5rem 1rem', background: 'white', borderRadius: '100px',
                fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-accent)',
                marginBottom: '2rem', boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-success)' }} />
                {t.hero.tagline}
              </div>

              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', fontWeight: 600,
                lineHeight: 1, letterSpacing: '-0.02em',
                marginBottom: '1.5rem', color: 'var(--color-ink)',
              }}>
                {t.hero.title1}{' '}
                <span style={{ display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle', margin: '0 0.3rem' }}>
                  <img
                    src="/mock-2.png"
                    alt="Flood"
                    style={{
                      width: '70px', height: '70px', borderRadius: '50%',
                      objectFit: 'cover', border: '3px solid white',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    }}
                  />
                </span>
                <br />
                <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>
                  {t.hero.title2}
                </span>
              </h1>

              <p style={{
                fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--color-ink-light)',
                marginBottom: '2rem', maxWidth: '500px',
              }}>
                {t.hero.subtitle}
              </p>

              <div style={{
                display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem',
              }}>
                <div style={{
                  width: '50px', height: '80px', border: '2px solid rgba(0,0,0,0.15)',
                  borderRadius: '100px', display: 'flex', justifyContent: 'center', paddingTop: '12px',
                }}>
                  <div className="animate-float-slow" style={{
                    width: '6px', height: '20px', background: 'var(--color-ink)', borderRadius: '100px',
                  }} />
                </div>
              </div>

              <div style={{
                background: 'white', padding: '1.5rem', borderRadius: '20px',
                maxWidth: '400px', boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>🛟</span>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-ink-light)' }}>
                    {t.hero.description}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '3rem', marginTop: '2.5rem' }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: '2.5rem',
                    fontWeight: 600, color: 'var(--color-accent)',
                  }}>98%</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>
                    {t.hero.stats.disasters}
                  </div>
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: '2.5rem',
                    fontWeight: 600, color: 'var(--color-accent)',
                  }}>70%</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>
                    {t.hero.stats.population}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Product Showcase */}
            <div className={mounted ? 'animate-slide-in-right' : ''} style={{
              position: 'relative', height: '700px', opacity: mounted ? 1 : 0,
            }}>
              <div className="animate-float-slow" style={{
                position: 'absolute', top: '5%', right: '5%',
                width: '85%', height: '75%', borderRadius: '30px',
                overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.15)',
              }}>
                <img src="/mock-1.png" alt="Flood in Vietnam" style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                }} />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                }} />
                <div style={{
                  position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem',
                  color: 'white',
                }}>
                  <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>{t.impact.caption1}</p>
                </div>
                <div style={{
                  position: 'absolute', top: '2rem', right: '1.5rem',
                  writingMode: 'vertical-rl', textOrientation: 'mixed',
                  fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em',
                  color: 'white', textTransform: 'uppercase', opacity: 0.8,
                }}>NOAH RESCUE</div>
              </div>

              <div className="animate-float" style={{
                position: 'absolute', bottom: '15%', left: '-5%', width: '280px',
                borderRadius: '24px', overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                transform: 'rotate(-5deg)', zIndex: 10,
              }}>
                <img src="/gps-tracking-app.png" alt="GPS Tracking App" style={{
                  width: '100%', height: 'auto', display: 'block',
                }} />
              </div>

              {/* Floating Badges */}
              {[
                { top: '15%', left: '0', icon: '📍', title: t.badges.gps, desc: t.badges.gpsDesc, color: '#10B981', delay: '0.5s' },
                { top: '45%', right: '0', icon: '💧', title: t.badges.water, desc: t.badges.waterDesc, color: '#3B82F6', delay: '1s' },
                { bottom: '5%', right: '15%', icon: '🆘', title: t.badges.sos, desc: t.badges.sosDesc, color: '#EF4444', delay: '1.5s' },
              ].map((badge, i) => (
                <div key={i} className="animate-float" style={{
                  position: 'absolute', ...badge,
                  background: 'white', padding: '1rem 1.25rem', borderRadius: '16px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  animationDelay: badge.delay,
                }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '12px',
                    background: `linear-gradient(135deg, ${badge.color}, ${badge.color}dd)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
                  }}>{badge.icon}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-ink)' }}>{badge.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-ink-muted)' }}>{badge.desc}</div>
                  </div>
                </div>
              ))}

              <div style={{
                position: 'absolute', bottom: '25%', right: '0',
                display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end',
              }}>
                {['Waterproof', 'Lightweight', 'Durable', 'Life-saving'].map((tag, i) => (
                  <span key={tag} style={{
                    padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.9)',
                    borderRadius: '100px', fontSize: '0.75rem', fontWeight: 500,
                    color: 'var(--color-ink-light)', boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                    opacity: mounted ? 1 : 0, transition: `opacity 0.5s ease ${0.2 + i * 0.1}s`,
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics Section */}
        <section style={{ padding: '6rem 0', background: 'var(--color-ink)', color: 'white', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />

          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{
                display: 'inline-block', padding: '0.5rem 1rem',
                background: 'rgba(255,255,255,0.1)', borderRadius: '100px',
                fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem',
              }}>{t.impact.badge}</span>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 600, marginBottom: '1rem',
              }}>{t.impact.title}</h2>
              <p style={{ fontSize: '1.1rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
                {t.impact.subtitle}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
              {[
                { ref: counter1.ref, count: counter1.count, suffix: 'T USD', label: t.impact.stat1, icon: '💰' },
                { ref: counter2.ref, count: counter2.count, suffix: 'M+', label: t.impact.stat2, icon: '👥' },
                { ref: counter3.ref, count: counter3.count, suffix: '', label: t.impact.stat3, icon: '📍' },
                { ref: counter4.ref, count: counter4.count, suffix: '', label: t.impact.stat4, icon: '📅' },
              ].map((stat, i) => (
                <div key={i} ref={stat.ref} style={{
                  textAlign: 'center', padding: '2rem',
                  background: 'rgba(255,255,255,0.05)', borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{stat.icon}</div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: '3.5rem',
                    fontWeight: 600, color: '#60A5FA',
                  }}>{stat.count}{stat.suffix}</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Image Gallery */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
              <div style={{
                borderRadius: '24px', overflow: 'hidden', position: 'relative',
                height: '400px',
              }}>
                <img src="/mock-1.png" alt="Flood" style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                }} />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                }}>
                  <p style={{ fontSize: '0.9rem' }}>{t.impact.caption1}</p>
                </div>
              </div>
              <div style={{
                borderRadius: '24px', overflow: 'hidden', position: 'relative',
                height: '400px',
              }}>
                <img src="/mock-2.png" alt="Aerial flood view" style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                }} />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                }}>
                  <p style={{ fontSize: '0.85rem' }}>{t.impact.caption2}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Section */}
        <section style={{ padding: '5rem 0', background: '#1C1917' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{
                display: 'inline-block', padding: '0.5rem 1rem',
                background: 'rgba(220, 38, 38, 0.2)', color: '#FCA5A5',
                borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem',
                border: '1px solid rgba(220, 38, 38, 0.3)',
              }}>{t.warning.badge}</span>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600, color: 'white', marginBottom: '0.5rem',
              }}>{t.warning.title}</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              {[
                { ...t.warning.note1, color: '#DC2626' },
                { ...t.warning.note2, color: '#F59E0B' },
                { ...t.warning.note3, color: '#3B82F6' },
                { ...t.warning.note4, color: '#8B5CF6' },
              ].map((note, i) => (
                <div key={i} style={{
                  padding: '2rem',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderLeft: `4px solid ${note.color}`,
                }}>
                  <h3 style={{
                    fontSize: '1.1rem', fontWeight: 600, color: 'white',
                    marginBottom: '0.75rem', lineHeight: 1.4,
                  }}>{note.title}</h3>
                  <p style={{
                    fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.7,
                  }}>{note.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section style={{ padding: '6rem 0', background: 'white' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{
                display: 'inline-block', padding: '0.5rem 1rem',
                background: 'var(--color-accent-light)', color: 'var(--color-accent)',
                borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem',
              }}>{t.howItWorks.badge}</span>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 600, marginBottom: '1rem', color: 'var(--color-ink)',
              }}>{t.howItWorks.title}</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-ink-muted)', maxWidth: '600px', margin: '0 auto' }}>
                {t.howItWorks.subtitle}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', position: 'relative' }}>
              {/* Connection Line */}
              <div style={{
                position: 'absolute', top: '60px', left: '12.5%', right: '12.5%',
                height: '2px', background: 'linear-gradient(90deg, var(--color-accent), var(--color-success))',
                zIndex: 0,
              }} />

              {[
                { num: '01', ...t.howItWorks.step1, icon: '🎒', color: '#3B82F6' },
                { num: '02', ...t.howItWorks.step2, icon: '📡', color: '#8B5CF6' },
                { num: '03', ...t.howItWorks.step3, icon: '🏊', color: '#F59E0B' },
                { num: '04', ...t.howItWorks.step4, icon: '🚁', color: '#10B981' },
              ].map((step, i) => (
                <div key={i} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: '120px', height: '120px', borderRadius: '50%',
                    background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                    border: `3px solid ${step.color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1.5rem', fontSize: '3rem',
                    boxShadow: `0 10px 40px ${step.color}30`,
                  }}>{step.icon}</div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: '0.9rem',
                    color: step.color, fontWeight: 600, marginBottom: '0.5rem',
                  }}>{step.num}</div>
                  <h3 style={{
                    fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem',
                    color: 'var(--color-ink)',
                  }}>{step.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" style={{ padding: '6rem 0', background: 'var(--color-cream)' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem',
            }}>
              <div>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-ink)',
                }}>{t.products.title}</h2>
                <p style={{ color: 'var(--color-ink-muted)', fontSize: '1.1rem' }}>{t.products.subtitle}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500 }}>
                  <span style={{ color: 'var(--color-ink)' }}>{activeProduct + 1}</span>
                  <span style={{ color: 'var(--color-ink-muted)' }}>/3</span>
                </span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[
                    { dir: -1, icon: 'M19 12H5M12 19l-7-7 7-7' },
                    { dir: 1, icon: 'M5 12h14M12 5l7 7-7 7' },
                  ].map((btn, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveProduct(prev => (prev + btn.dir + 3) % 3)}
                      style={{
                        width: '44px', height: '44px', borderRadius: '50%',
                        border: '1.5px solid rgba(0,0,0,0.15)', background: 'white',
                        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d={btn.icon} />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {products.map((product, i) => (
                <div
                  key={product.id}
                  onClick={() => setActiveProduct(i)}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveProduct(i)}
                  role="button"
                  tabIndex={0}
                  style={{
                    position: 'relative', borderRadius: '24px', overflow: 'hidden', cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    transform: activeProduct === i ? 'scale(1)' : 'scale(0.95)',
                    opacity: activeProduct === i ? 1 : 0.6,
                    boxShadow: activeProduct === i ? '0 20px 60px rgba(0,0,0,0.15)' : '0 10px 30px rgba(0,0,0,0.08)',
                  }}
                >
                  <div style={{
                    height: '300px',
                    background: `linear-gradient(135deg, ${i === 0 ? '#F3F4F6, #E5E7EB' : i === 1 ? '#DBEAFE, #BFDBFE' : '#FEF3C7, #FDE68A'})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
                  }}>
                    <img src={product.image} alt={product.name} style={{
                      maxWidth: '90%', maxHeight: '90%', objectFit: 'cover', borderRadius: '16px',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
                    }} />
                    {product.tag && (
                      <span style={{
                        position: 'absolute', top: '1rem', right: '1rem',
                        padding: '0.4rem 0.8rem', background: i === 1 ? 'var(--color-accent)' : 'var(--color-warning)',
                        color: 'white', fontSize: '0.7rem', fontWeight: 600, borderRadius: '100px',
                        textTransform: 'uppercase', letterSpacing: '0.05em',
                      }}>{product.tag}</span>
                    )}
                  </div>
                  <div style={{ padding: '1.5rem', background: 'white' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <h3 style={{
                        fontFamily: 'var(--font-display)', fontSize: '1.5rem',
                        fontWeight: 600, color: 'var(--color-ink)',
                      }}>{product.name}</h3>
                      <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                        {product.price}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>{product.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section style={{ padding: '4rem 0', background: 'white' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 600,
              textAlign: 'center', marginBottom: '2rem', color: 'var(--color-ink)',
            }}>{t.comparison.title}</h3>

            <div style={{
              borderRadius: '24px', overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.1)', background: 'white',
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'var(--color-ink)' }}>
                    <th style={{ padding: '1.25rem', textAlign: 'left', color: 'white', fontWeight: 600 }}>{t.comparison.feature}</th>
                    <th style={{ padding: '1.25rem', textAlign: 'center', color: 'white', fontWeight: 600 }}>{t.products.basic.name}</th>
                    <th style={{ padding: '1.25rem', textAlign: 'center', color: 'white', fontWeight: 600, background: 'var(--color-accent)' }}>{t.products.medium.name}</th>
                    <th style={{ padding: '1.25rem', textAlign: 'center', color: 'white', fontWeight: 600 }}>{t.products.premium.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: t.comparison.lifeJacket, basic: t.comparison.basic, medium: t.comparison.basic, premium: t.comparison.premium },
                    { feature: t.comparison.gps, basic: '✓', medium: '✓', premium: '✓' },
                    { feature: t.comparison.whistle, basic: '✓', medium: '✓', premium: '✓' },
                    { feature: t.comparison.food, basic: t.comparison.halfKg, medium: t.comparison.oneKg, premium: t.comparison.oneKg },
                    { feature: t.comparison.waterFilter, basic: '✗', medium: '✓', premium: '✓' },
                    { feature: t.comparison.flashlight, basic: '✗', medium: t.comparison.basic, premium: t.comparison.premium },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: '1rem', textAlign: 'center', color: row.basic === '✗' ? 'var(--color-ink-muted)' : 'var(--color-ink)' }}>{row.basic}</td>
                      <td style={{ padding: '1rem', textAlign: 'center', background: 'var(--color-accent-light)', fontWeight: 500 }}>{row.medium}</td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>{row.premium}</td>
                    </tr>
                  ))}
                  <tr style={{ background: 'var(--color-cream)' }}>
                    <td style={{ padding: '1.25rem', fontWeight: 700, fontSize: '1.1rem' }}>{language === 'vi' ? 'Giá' : 'Price'}</td>
                    <td style={{ padding: '1.25rem', textAlign: 'center', fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-accent)' }}>{language === 'vi' ? 'Liên hệ' : 'Contact us'}</td>
                    <td style={{ padding: '1.25rem', textAlign: 'center', fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-accent)', background: 'var(--color-accent-light)' }}>{language === 'vi' ? 'Liên hệ' : 'Contact us'}</td>
                    <td style={{ padding: '1.25rem', textAlign: 'center', fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-accent)' }}>{language === 'vi' ? 'Liên hệ' : 'Contact us'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Features Detail Section */}
        <section style={{ padding: '6rem 0', background: 'var(--color-cream)' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 600, textAlign: 'center', marginBottom: '4rem', color: 'var(--color-ink)',
            }}>{t.features.title}</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
              {[
                { icon: '📍', ...t.features.gps, color: '#10B981', image: '/gps-tracking-app.png' },
                { icon: '💧', ...t.features.water, color: '#3B82F6', image: '/mock-2.png' },
                { icon: '🍱', ...t.features.food, color: '#F59E0B', image: '/mock-1.png' },
                { icon: '🔦', ...t.features.light, color: '#8B5CF6', image: '/mock-2.png' },
              ].map((feature, i) => (
                <div key={i} className="hover-lift" style={{
                  background: 'white', borderRadius: '24px', overflow: 'hidden',
                  display: 'grid', gridTemplateColumns: '1fr 1fr',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                }}>
                  <div style={{ padding: '2rem' }}>
                    <div style={{
                      width: '64px', height: '64px', borderRadius: '16px',
                      background: `${feature.color}15`, display: 'flex',
                      alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '1.5rem',
                    }}>{feature.icon}</div>
                    <h3 style={{
                      fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--color-ink)',
                    }}>{feature.title}</h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--color-ink-muted)', marginBottom: '1.5rem' }}>
                      {feature.desc}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {feature.specs.map((spec, j) => (
                        <span key={j} style={{
                          padding: '0.4rem 0.8rem', background: `${feature.color}10`,
                          color: feature.color, borderRadius: '100px', fontSize: '0.75rem', fontWeight: 500,
                        }}>{spec}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{
                    background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem',
                  }}>
                    <img src={feature.image} alt={feature.title} style={{
                      maxWidth: '100%', maxHeight: '200px', objectFit: 'contain', borderRadius: '12px',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section style={{ padding: '6rem 0', background: 'white' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{
                display: 'inline-block', padding: '0.5rem 1rem',
                background: 'var(--color-accent-light)', color: 'var(--color-accent)',
                borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem',
              }}>{t.testimonials.badge}</span>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600, color: 'var(--color-ink)',
              }}>{t.testimonials.title}</h2>
            </div>

            <div style={{
              background: 'var(--color-cream)', borderRadius: '32px', padding: '3rem',
              textAlign: 'center', position: 'relative',
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem', opacity: 0.3 }}>"</div>
              <p style={{
                fontSize: '1.5rem', lineHeight: 1.6, color: 'var(--color-ink)',
                fontFamily: 'var(--font-display)', fontStyle: 'italic', marginBottom: '2rem',
                minHeight: '100px',
              }}>
                {testimonials[activeTestimonial].quote}
              </p>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--color-ink)' }}>{testimonials[activeTestimonial].name}</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>{testimonials[activeTestimonial].location}</p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveTestimonial(i)}
                    style={{
                      width: i === activeTestimonial ? '32px' : '12px', height: '12px',
                      borderRadius: '100px', border: 'none', cursor: 'pointer',
                      background: i === activeTestimonial ? 'var(--color-accent)' : 'rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="about" style={{
          padding: '6rem 0', background: 'var(--color-ink)', color: 'white',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.05,
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />

          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <span style={{
                  display: 'inline-block', padding: '0.5rem 1rem',
                  background: 'rgba(255,255,255,0.1)', borderRadius: '100px',
                  fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem',
                }}>{t.mission.badge}</span>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 600, marginBottom: '1.5rem',
                }}>{t.mission.title}</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.8, marginBottom: '2rem' }}>
                  {t.mission.story}
                </p>
                <div style={{
                  background: 'linear-gradient(135deg, var(--color-accent), #1D4ED8)',
                  padding: '1.5rem 2rem', borderRadius: '20px',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-display)', fontSize: '1.25rem',
                    fontStyle: 'italic', lineHeight: 1.6,
                  }}>"{t.mission.mission}"</p>
                </div>
              </div>

              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.05)', borderRadius: '20px',
                  padding: '2rem', border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', color: '#60A5FA' }}>
                    {t.mission.vision}
                  </h3>
                  <p style={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.6 }}>{t.mission.visionText}</p>
                </div>
                <div style={{
                  background: 'rgba(255,255,255,0.05)', borderRadius: '20px',
                  padding: '2rem', border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', color: '#60A5FA' }}>
                    {t.mission.values}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {[t.mission.value1, t.mission.value2, t.mission.value3].map((value, i) => (
                      <span key={i} style={{
                        padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)',
                        borderRadius: '100px', fontSize: '0.85rem',
                      }}>{value}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SDG Section */}
        <section style={{ padding: '6rem 0', background: 'var(--color-cream)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{
                display: 'inline-block', padding: '0.5rem 1rem',
                background: '#D1FAE5', color: '#059669', borderRadius: '100px',
                fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem',
              }}>{t.sdg.badge}</span>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600, color: 'var(--color-ink)',
              }}>{t.sdg.title}</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
              {[
                { num: t.sdg.sdg11, title: t.sdg.sdg11Title, desc: t.sdg.sdg11Desc, color: '#F59E0B', icon: '🏘️' },
                { num: t.sdg.sdg13, title: t.sdg.sdg13Title, desc: t.sdg.sdg13Desc, color: '#10B981', icon: '🌍' },
              ].map((sdg, i) => (
                <div key={i} style={{
                  background: 'white', borderRadius: '24px', padding: '2rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: '80px', height: '80px', borderRadius: '16px',
                    background: sdg.color, color: 'white',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>{sdg.icon}</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>{sdg.num}</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-ink)' }}>
                      {sdg.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.6 }}>{sdg.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ padding: '6rem 0', background: 'white' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{
                display: 'inline-block', padding: '0.5rem 1rem',
                background: 'var(--color-accent-light)', color: 'var(--color-accent)',
                borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem',
              }}>{t.faq.badge}</span>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600, color: 'var(--color-ink)',
              }}>{t.faq.title}</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  background: 'var(--color-cream)', borderRadius: '16px', overflow: 'hidden',
                }}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%', padding: '1.5rem', border: 'none', background: 'transparent',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      cursor: 'pointer', textAlign: 'left',
                    }}
                  >
                    <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-ink)' }}>{faq.q}</span>
                    <span style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      background: openFaq === i ? 'var(--color-accent)' : 'white',
                      color: openFaq === i ? 'white' : 'var(--color-ink)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.3s ease', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)',
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div style={{
                    maxHeight: openFaq === i ? '200px' : '0', overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                  }}>
                    <p style={{
                      padding: '0 1.5rem 1.5rem', fontSize: '0.95rem',
                      color: 'var(--color-ink-muted)', lineHeight: 1.7,
                    }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" style={{ padding: '6rem 0', background: 'var(--color-cream)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{
                  background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)',
                  borderRadius: '24px', padding: '2rem', marginBottom: '1.5rem',
                }}>
                  <span style={{
                    display: 'inline-block', background: 'var(--color-warning)', color: 'white',
                    padding: '0.4rem 0.8rem', borderRadius: '100px', fontSize: '0.75rem',
                    fontWeight: 600, marginBottom: '1rem',
                  }}>{t.waitlist.development}</span>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-ink-light)' }}>
                    {t.waitlist.devDesc}
                  </p>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, #FEF2F2, #FEE2E2)',
                  borderRadius: '24px', padding: '2rem', marginBottom: '1.5rem',
                  borderLeft: '4px solid #DC2626',
                }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#991B1B' }}>
                    ⚠️ {t.waitlist.urgentNote}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#7F1D1D' }}>{t.waitlist.urgentDesc}</p>
                </div>

                <div style={{
                  background: 'white', borderRadius: '24px', padding: '2rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: '3rem',
                    fontWeight: 600, color: 'var(--color-accent)', marginBottom: '0.5rem',
                  }}>247+</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>{t.waitlist.registered}</p>
                </div>
              </div>

              <div style={{
                background: 'white', borderRadius: '32px', padding: '3rem',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
              }}>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontSize: '2rem',
                  fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-ink)',
                }}>{t.waitlist.title}</h2>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink-muted)', marginBottom: '2rem' }}>
                  {t.waitlist.subtitle}
                </p>

                <form onSubmit={handleSubmit}>
                  {[
                    { label: t.waitlist.name, type: 'text', key: 'name' as const },
                    { label: t.waitlist.phone, type: 'tel', key: 'phone' as const },
                    { label: t.waitlist.email, type: 'email', key: 'email' as const },
                  ].map((field) => (
                    <div key={field.key} style={{ marginBottom: '1.5rem' }}>
                      <label htmlFor={field.key} style={{
                        display: 'block', fontSize: '0.85rem', fontWeight: 600,
                        marginBottom: '0.5rem', color: 'var(--color-ink)',
                      }}>{field.label}</label>
                      <input
                        id={field.key}
                        type={field.type}
                        required
                        value={formData[field.key]}
                        onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                        style={{
                          width: '100%', padding: '1rem 1.25rem', borderRadius: '12px',
                          border: '2px solid #E5E7EB', fontSize: '1rem', outline: 'none',
                          transition: 'border-color 0.3s ease',
                        }}
                      />
                    </div>
                  ))}

                  <button type="submit" style={{
                    width: '100%', padding: '1.25rem', borderRadius: '12px', border: 'none',
                    background: submitted ? 'var(--color-success)' : 'var(--color-ink)',
                    color: 'white', fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
                    transition: 'all 0.3s ease', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', gap: '0.5rem',
                  }}>
                    {submitted ? (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {t.waitlist.success}
                      </>
                    ) : (
                      <>
                        {t.waitlist.submit}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        <section id="contact" style={{ padding: '6rem 0', background: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 600, textAlign: 'center', marginBottom: '4rem', color: 'var(--color-ink)',
            }}>{t.contact.title}</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
              {[
                { icon: '📞', title: t.contact.hotline, value: '(+84) 792 774 510', href: 'tel:+84792774510', color: '#3B82F6' },
                { icon: '✉️', title: t.contact.email, value: 'noah@gmail.com.vn', href: 'mailto:noah@gmail.com.vn', color: '#8B5CF6' },
                { icon: '🤝', title: t.contact.partner, value: '(+84) 979 744 571', href: 'tel:+84979744571', color: '#10B981' },
                { icon: '📍', title: t.contact.address, value: t.contact.addressText, href: '#', color: '#F59E0B' },
              ].map((contact, i) => (
                <a key={i} href={contact.href} style={{
                  background: `linear-gradient(135deg, ${contact.color}, ${contact.color}dd)`,
                  borderRadius: '24px', padding: '2rem', color: 'white', textDecoration: 'none',
                  display: 'block', transition: 'transform 0.3s ease',
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{contact.icon}</div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', opacity: 0.9 }}>
                    {contact.title}
                  </h3>
                  <p style={{ fontSize: '1rem', fontWeight: 600 }}>{contact.value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ background: 'var(--color-ink)', color: 'white', padding: '4rem 0 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '4rem', marginBottom: '3rem',
            }}>
              <div>
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700,
                }}>NOAH</span>
                <p style={{
                  fontSize: '1rem', opacity: 0.7, marginTop: '1rem', maxWidth: '300px', lineHeight: 1.6,
                }}>{t.footer.tagline}</p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                  {[
                    { bg: '#10B981', num: '11' },
                    { bg: '#3B82F6', num: '13' },
                  ].map((sdg, i) => (
                    <div key={i} style={{
                      width: '48px', height: '48px', background: sdg.bg, borderRadius: '12px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700,
                    }}>{sdg.num}</div>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem', color: '#60A5FA' }}>Quick Links</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[t.nav.home, t.nav.products, t.nav.about, t.nav.contact].map((link, i) => (
                    <a key={i} href={`#${link.toLowerCase()}`} style={{
                      color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '0.9rem',
                      transition: 'opacity 0.3s ease',
                    }}>{link}</a>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem', color: '#60A5FA' }}>Legal</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[t.footer.privacy, t.footer.terms].map((link, i) => (
                    <a key={i} href="#" style={{
                      color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '0.9rem',
                    }}>{link}</a>
                  ))}
                </div>
              </div>
            </div>

            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
            }}>
              <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>{t.footer.copyright}</p>
              <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>{t.footer.project}</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
