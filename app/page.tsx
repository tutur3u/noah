'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Bento Grid */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
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
          <div className="max-w-6xl mx-auto">
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Main Title Box */}
              <div className="lg:col-span-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
                <div className="inline-block bg-blue-500/30 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Emergency Flood Kit
                </div>
                <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  NOAH
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-100">
                  Bộ Cứu Hộ Khẩn Cấp
                </h2>
                <p className="text-xl text-blue-50 mb-8 leading-relaxed max-w-2xl">
                  Được tạo nên để bảo vệ sự sống giữa dòng lũ. Tích hợp GPS, thực phẩm, lọc nước và thiết bị sinh tồn.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#products"
                    className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Khám phá sản phẩm
                  </a>
                  <a
                    href="#waitlist"
                    className="inline-block bg-blue-600/30 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600/50 transition-all"
                  >
                    Đăng ký ngay
                  </a>
                </div>
              </div>

              {/* Stats Boxes */}
              <div className="lg:col-span-4 grid grid-rows-2 gap-4">
                <div className="bg-gradient-to-br from-blue-500/30 to-blue-600/30 backdrop-blur-lg rounded-3xl p-8 border border-white/20 flex flex-col justify-center">
                  <div className="text-5xl font-bold mb-2">98%</div>
                  <div className="text-blue-100">thiên tai ở VN do bão lũ gây ra</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/30 to-blue-700/30 backdrop-blur-lg rounded-3xl p-8 border border-white/20 flex flex-col justify-center">
                  <div className="text-5xl font-bold mb-2">70%</div>
                  <div className="text-blue-100">dân số VN có nguy cơ thiên tai</div>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="lg:col-span-3 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🧭</div>
                <h3 className="text-xl font-bold mb-2">GPS Định vị</h3>
                <p className="text-blue-100 text-sm">Tìm kiếm cứu hộ nhanh chóng</p>
              </div>
              <div className="lg:col-span-3 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
                <div className="text-4xl mb-4">💧</div>
                <h3 className="text-xl font-bold mb-2">Lọc nước</h3>
                <p className="text-blue-100 text-sm">LifeStraw chính hãng</p>
              </div>
              <div className="lg:col-span-3 bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🍱</div>
                <h3 className="text-xl font-bold mb-2">Lương khô MRE</h3>
                <p className="text-blue-100 text-sm">Thực phẩm quân sự chuẩn</p>
              </div>
              <div className="lg:col-span-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-2">Đèn chiếu sáng</h3>
                <p className="text-blue-100 text-sm">Cree Zoom chuyên dụng</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Mission Section - Bento Style */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Câu chuyện của chúng tôi
              </span>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Tại sao NOAH ra đời?</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-10 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎓 Dự án sinh viên RMIT</h3>
                <p className="text-gray-700 leading-relaxed">
                  Noah là một dự án được khởi nguồn từ tâm huyết của nhóm sinh viên Đại học RMIT sau những chứng kiến tàn phá của lũ lụt đã cuốn trôi tài sản và lấy đi sinh mạng của nhiều người, đặc biệt ở khu vực miền Trung Việt Nam và các nước trong khu vực Đông Nam Á như Philippines.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-10 border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🌍 Biến đổi khí hậu</h3>
                <p className="text-gray-700 leading-relaxed">
                  Biến đổi khí hậu đang ngày càng nghiêm trọng hơn, người dân vùng lũ phải gánh chịu mất mát ngày càng lớn. Vì vậy, chúng tôi không thể khoanh tay đứng nhìn.
                </p>
              </div>

              <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-white border-2 border-blue-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    Sứ mệnh của chúng tôi
                  </div>
                  <p className="text-2xl font-semibold leading-relaxed">
                    Đó là lý do NOAH ra đời, NOAH được tạo ra với một sứ mệnh mang lại hy vọng và bảo vệ sự sống của người dân giữa dòng lũ.
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
                Sản phẩm
              </span>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Chọn bộ kit phù hợp với bạn</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ba gói sản phẩm được thiết kế để đáp ứng mọi nhu cầu và ngân sách
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Basic Kit */}
              <div className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Gói Cơ Bản</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">750K</span>
                    <span className="text-gray-300">VNĐ</span>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 mb-6 text-sm">
                    Thiết yếu cho sinh tồn ngắn hạn và cứu hộ khẩn cấp
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Áo phao cơ bản</div>
                        <div className="text-sm text-gray-500">Garan - 150K VNĐ</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">GPS định vị</div>
                        <div className="text-sm text-gray-500">Beitan BE-252i - 310K VNĐ</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Còi cứu hộ</div>
                        <div className="text-sm text-gray-500">20K VNĐ</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Lương khô MRE (0.5kg)</div>
                        <div className="text-sm text-gray-500">BB702 - 65K VNĐ</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 opacity-40">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </div>
                      <div className="font-semibold text-gray-500">Không có ống lọc nước</div>
                    </div>
                    <div className="flex items-start gap-3 opacity-40">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </div>
                      <div className="font-semibold text-gray-500">Không có đèn pin</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <p className="text-xs text-blue-600 font-semibold mb-1">PHÙ HỢP CHO:</p>
                    <p className="text-sm text-gray-700">Hộ gia đình tại khu vực có nguy cơ ngập úng thấp</p>
                  </div>
                </div>
              </div>

              {/* Medium Kit */}
              <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl overflow-hidden border-2 border-blue-300 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold">Gói Trung Cấp</h3>
                    <span className="bg-blue-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">PHỔ BIẾN</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">1.5M</span>
                    <span className="text-blue-100">VNĐ</span>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 mb-6 text-sm">
                    Bảo vệ toàn diện cho gia đình với thiết bị lọc nước
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Áo phao cơ bản</div>
                        <div className="text-sm text-gray-500">Garan - 150K VNĐ</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">GPS định vị</div>
                        <div className="text-sm text-gray-500">Beitan BE-252i - 310K VNĐ</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Còi cứu hộ</div>
                        <div className="text-sm text-gray-500">20K VNĐ</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Lương khô MRE (1kg)</div>
                        <div className="text-sm text-gray-500">BB702 - 130K VNĐ</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Ống lọc nước LifeStraw</div>
                        <div className="text-sm text-gray-500">VesterGaard - 500K VNĐ</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Đèn pin cơ bản</div>
                        <div className="text-sm text-gray-500">Cree Zoom SS001 - 150K VNĐ</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-500 text-white p-4 rounded-xl">
                    <p className="text-xs font-semibold mb-1 opacity-90">PHÙ HỢP CHO:</p>
                    <p className="text-sm">Hộ gia đình tại khu vực có nguy cơ lũ lụt trung bình</p>
                  </div>
                </div>
              </div>

              {/* Premium Kit */}
              <div className="group bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-3xl overflow-hidden border-2 border-orange-300 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                <div className="bg-gradient-to-r from-orange-600 via-red-600 to-red-700 p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold">Gói Cao Cấp</h3>
                      <span className="bg-yellow-400 text-red-900 text-xs font-bold px-3 py-1 rounded-full">KHUYẾN NGHỊ</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">2M</span>
                      <span className="text-orange-100">VNĐ</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 mb-6 text-sm">
                    Trang bị đầy đủ nhất cho sinh tồn kéo dài trong điều kiện khắc nghiệt
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Áo phao cao cấp</div>
                        <div className="text-sm text-gray-500">Dongtai - 650K VNĐ</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">GPS định vị</div>
                        <div className="text-sm text-gray-500">Beitan BE-252i - 310K VNĐ</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Còi cứu hộ</div>
                        <div className="text-sm text-gray-500">20K VNĐ</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Lương khô MRE (1kg)</div>
                        <div className="text-sm text-gray-500">BB702 - 130K VNĐ</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Ống lọc nước LifeStraw</div>
                        <div className="text-sm text-gray-500">VesterGaard - 500K VNĐ</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Đèn pin cao cấp</div>
                        <div className="text-sm text-gray-500">Haixnfire H010 - 250K VNĐ</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 rounded-xl">
                    <p className="text-xs font-semibold mb-1 opacity-90">PHÙ HỢP CHO:</p>
                    <p className="text-sm">Khu vực có nguy cơ lũ lụt cao và điều kiện khắc nghiệt</p>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Tất cả các gói đều bao gồm</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Chống nước hoàn toàn, siêu nhẹ, dễ sử dụng. Được thiết kế đặc biệt cho điều kiện lũ lụt tại Việt Nam. Đội ngũ RMIT cam kết chất lượng và hiệu quả của từng sản phẩm.
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
                Tác động xã hội
              </span>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Mục tiêu phát triển bền vững</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 border-2 border-emerald-200">
                <div className="text-5xl mb-4">🏘️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SDG 11: Thành phố bền vững</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Mục tiêu 11.5:</strong> Giảm tác động tiêu cực của thiên tai
                </p>
                <p className="text-gray-600 text-sm">
                  Sản phẩm giúp tăng cường khả năng phục hồi và thích ứng trong các khu vực dễ bị thiên tai, góp phần giảm số người bị ảnh hưởng bởi lũ lụt.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border-2 border-cyan-200">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SDG 13: Hành động khí hậu</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Mục tiêu 13.1:</strong> Tăng cường khả năng chống chịu
                </p>
                <p className="text-gray-600 text-sm">
                  Trang bị công cụ sinh tồn thiết yếu giúp người dân chuẩn bị tốt hơn và chống chịu các thảm họa liên quan đến khí hậu.
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
            Bạn đã sẵn sàng bảo vệ gia đình mình chưa?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Hãy là người đầu tiên sở hữu bộ kit cứu hộ NOAH khi chúng tôi ra mắt sản phẩm
          </p>
          <a
            href="#waitlist"
            className="inline-block bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl"
          >
            Đăng ký nhận thông báo ngay
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
                    ⚠️ Hiện tại tạm hết hàng
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Đang phát triển sản phẩm
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Chúng tôi đang hoàn thiện sản phẩm để đảm bảo chất lượng tốt nhất cho khách hàng.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    🎯 Ưu đãi đặc biệt
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Những người đăng ký sớm sẽ nhận được ưu tiên mua hàng và các ưu đãi độc quyền khi sản phẩm ra mắt!
                  </p>
                </div>
              </div>

              {/* Form Box */}
              <div className="lg:col-span-3 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 border-2 border-gray-200 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Đăng ký danh sách chờ
                </h2>
                <p className="text-gray-600 mb-8">
                  Để lại thông tin để nhận thông báo khi đợt sản xuất tiếp theo được ra mắt
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900 transition-colors"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900 transition-colors"
                      placeholder="0912345678"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900 transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Đăng ký ngay
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
                Liên hệ
              </span>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Kết nối với chúng tôi</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-10 text-white">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold mb-3">Hotline khách hàng</h3>
                <a href="tel:+84792774510" className="text-3xl font-bold hover:text-blue-100 transition-colors inline-block">
                  (+84) 792774510
                </a>
                <p className="text-blue-100 text-sm mt-3">Hỗ trợ 24/7</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-10 text-white">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-bold mb-3">Email</h3>
                <a href="mailto:noah@gmail.com.vn" className="text-2xl font-bold hover:text-purple-100 transition-colors break-all inline-block">
                  noah@gmail.com.vn
                </a>
                <p className="text-purple-100 text-sm mt-3">Phản hồi trong 24h</p>
              </div>

              <div className="md:col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 text-white">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">🤝</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Dành cho đối tác doanh nghiệp</h3>
                    <p className="text-gray-300 text-sm">Hợp tác cùng NOAH để mang sản phẩm đến với cộng đồng</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                    <p className="text-sm text-gray-300 mb-2">🇻🇳 Tiếng Việt:</p>
                    <a href="tel:+84" className="text-xl font-bold hover:text-gray-200 transition-colors">
                      (+84) [Đang cập nhật]
                    </a>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                    <p className="text-sm text-gray-300 mb-2">🇬🇧 English:</p>
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
                  Mang lại hy vọng và bảo vệ sự sống của người dân giữa dòng lũ
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4 text-blue-400">Về dự án</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Dự án của sinh viên Đại học RMIT nhằm giải quyết vấn đề lũ lụt tại Việt Nam thông qua công nghệ và đổi mới sáng tạo.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4 text-blue-400">SDG Goals</h4>
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center font-bold">11</div>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center font-bold">13</div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-500 text-sm">
                &copy; 2025 NOAH - Emergency Flood Kit. Một dự án của sinh viên Đại học RMIT.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
