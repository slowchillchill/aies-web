import React, { useState, useEffect } from 'react';
import { 
  Globe, Menu, X, ChevronRight, Shield, Bot, Database, 
  TrendingUp, ShoppingCart, GraduationCap, Target, Cpu, Server 
} from 'lucide-react';

// ==========================================
// 1. Data & Translations Dictionary
// ==========================================
const siteData = {
  en: {
    nav: {
      services: "Services",
      about: "About Us",
      contact: "Contact",
      switchLang: "中文"
    },
    hero: {
      title: "Artificial Intelligence Enterprise Service",
      subtitle: "Navigating technology cycles. We are the AI Special Forces that best understand business deployment. We turn cutting-edge technology into your competitive moat.",
      cta: "Discover Our Capabilities",
    },
    services: {
      header: "Our Core Services",
      items: [
        {
          id: "fde",
          icon: <Shield className="w-8 h-8 text-cyan-400" />,
          title: "Forward Deployed Engineer (FDE) Service",
          subtitle: "The 'Special Forces' solving business challenges on the frontlines.",
          desc: "Top-tier engineers mastering cutting-edge technologies like AI, acting as 'Special Forces' deep on the frontlines to solve business challenges. We have served industries such as finance, education, and cross-border e-commerce, accumulating rich practical deployment experience in sectors with extreme demands for efficiency, data, and technology.",
          points: [
            { title: "Finance", icon: <TrendingUp className="w-5 h-5 text-cyan-400"/>, text: "In the rapidly changing trading and risk control environment, we delve into business logic to build efficient automated decision-making tools and millisecond-level data processing architectures, helping enterprises accurately capture market opportunities while controlling risks." },
            { title: "Cross-border E-commerce", icon: <ShoppingCart className="w-5 h-5 text-cyan-400"/>, text: "Facing the complex global market, we go deep into the front end of supply and marketing chains to create customized intelligent operations and market insight systems, helping enterprises seize opportunities in fierce red ocean competition and achieve ultimate cost reduction." },
            { title: "Education", icon: <GraduationCap className="w-5 h-5 text-cyan-400"/>, text: "We deeply engage in the real scenarios of teaching and management, using technology to break the efficiency bottlenecks of traditional models, realizing the deployment of smarter, more personalized services tailored to users." }
          ],
          img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", // Engineer holding laptop in factory
          imgAlt: "Engineer holding laptop in factory / Forward Deployed Engineer"
        },
        {
          id: "agent",
          icon: <Bot className="w-8 h-8 text-cyan-400" />,
          title: "Enterprise AGENT Development",
          subtitle: "Building your exclusive team of 'Super Digital Employees'.",
          desc: "We develop customized AI Agents that integrate seamlessly into your existing workflows, transforming how your business operates across various domains.",
          points: [
            { title: "Finance & Investment", icon: <Target className="w-5 h-5 text-cyan-400"/>, text: "AI Quantitative Arbitrage Tools capture millisecond-level price spread opportunities. Marketing Intelligent Robo-Advisors act as 24/7 'Gold-tier Financial Advisors', lowering acquisition costs and boosting high-net-worth client conversions." },
            { title: "E-commerce & Retail", icon: <ShoppingCart className="w-5 h-5 text-cyan-400"/>, text: "Never-offline gold-tier sales and customer service teams. They identify multi-language intents and provide 'human-touch' interactions. E-commerce Product Sentiment Agents act as data radars, extracting consumer sentiment for R&D intelligence." },
            { title: "Education & Verticals", icon: <GraduationCap className="w-5 h-5 text-cyan-400"/>, text: "AI English Teaching AGENT breaks traditional teacher bottlenecks, providing massive numbers of students with '1-on-1 digital foreign teachers' featuring keen context perception and adaptive learning pacing." }
          ],
          img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800", // AI Robot vibe
          imgAlt: "Advanced AI Robot Interface"
        },
        {
          id: "data",
          icon: <Database className="w-8 h-8 text-cyan-400" />,
          title: "AI Data Service",
          subtitle: "Building the absolute cornerstone for enterprise intelligence.",
          desc: "Data is the true cornerstone for enterprises to realize AI transformation. And this is our invisible moat, highly praised by our clients.",
          points: [
            { title: "Business Digitization", icon: <Cpu className="w-5 h-5 text-cyan-400"/>, text: "Turning dormant data into AI fuel. We comprehensively convert unstructured experience and processes—previously scattered across independent systems, reports, and employees' minds—into machine-readable standard digital assets." },
            { title: "Data Cleaning & Refinement", icon: <Target className="w-5 h-5 text-cyan-400"/>, text: "Panning for gold in the gravel. We adopt rigorous data cleaning standards to eliminate redundancy and errors, purifying the highest quality corpora and datasets with the most commercial value, ensuring your AI wins from the starting line." },
            { title: "Data Pipeline Maintenance", icon: <Server className="w-5 h-5 text-cyan-400"/>, text: "Creating relentless digital arteries. From real-time collection to secure storage, we build robust high-concurrency, low-latency data pipelines ensuring your AI systems receive the freshest data lifeblood even during extreme business peaks." }
          ],
          img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800", // Infrastructure/Server vibe
          imgAlt: "Massive Data Center Infrastructure"
        }
      ]
    },
    about: {
      header: "About AIES",
      tagline: "Navigating technology cycles, acting as the AI Special Forces that best understand business deployment.",
      intro: "Many companies talk about the future of AI, but we have been grinding on this path for over a decade. We deeply know that any technology detached from real business scenarios and profit growth is a castle in the air.",
      timeline: [
        { year: "2012", title: "Inception & Business DNA", text: "Our core team assembled as early veterans in the mobile internet wave. Fighting on market frontlines, we engraved the DNA of 'agile delivery', 'user experience', and 'commercial monetization' into our bones. Technology must be accountable for real business results." },
        { year: "2017", title: "Diving Deep into Hardcore Tech", text: "We proactively entered the deep waters, engaging in AI security-related businesses. These rigorous scenarios demanded massive complex data processing and extreme fault tolerance, forging our solid underlying data governance and AI engineering foundation." },
        { year: "2022-Present", title: "Reshaping Enterprise AI", text: "Insightful of the chasm between cutting-edge tech and traditional business, we fully transitioned into AI enterprise services. We launched FDE, Enterprise Agent, and Data Services, dedicated to bridging the last mile between technology and commerce." },
        { year: "Evolution", title: "Cross-Boundary Empowerment", text: "Our AI deployment experience was typed out line by line in real battlefields. Starting from e-commerce to drive transactions and reduce costs, we successfully upgraded this system to the highly sensitive finance sector and the personalized education industry." },
        { year: "Future", title: "Rooted in Greater Bay Area", text: "Based in Shenzhen, we don't hype concepts; we solely focus on delivery quality. Relying on solid reputation and high repurchase rates, we've become the core technological driving force behind numerous top-tier enterprises across Guangdong Province." }
      ],
      footer: "From the mobile internet to Artificial Intelligence, times change, but our original intention of 'driving real commercial growth with technology' has never altered."
    },
    footerRights: "© 2026 Artificial Intelligence Enterprise Service (AIES). All rights reserved."
  },
  
  // ==================== CHINESE TRANSLATION ====================
  zh: {
    nav: {
      services: "核心业务",
      about: "关于我们",
      contact: "联系我们",
      switchLang: "English"
    },
    hero: {
      title: "AIES人工智能企业服务",
      subtitle: "穿越技术周期，做最懂业务落地的AI特种部队。我们将前沿科技转化为您坚不可摧的商业壁垒。",
      cta: "探索我们的服务",
    },
    services: {
      header: "我们的核心业务",
      items: [
        {
          id: "fde",
          icon: <Shield className="w-8 h-8 text-cyan-400" />,
          title: "前沿部署工程师（FDE）服务",
          subtitle: "深入一线解决商业难题的“特种部队”。",
          desc: "掌握人工智能等前沿技术的顶尖工程师，更是深入一线解决商业难题的“特种部队”。公司曾服务于金融、教育、跨境电商等行业。曾深度服务于多个对效率、数据和技术要求极度苛刻的行业，积累了丰富的实战落地经验：",
          points: [
            { title: "金融行业", icon: <TrendingUp className="w-5 h-5 text-cyan-400"/>, text: "在瞬息万变的交易与风控环境中，我们深入业务逻辑，构建了高效的自动化决策工具与毫秒级的数据处理架构，帮助企业在控制风险的同时，精准捕获市场机遇。" },
            { title: "跨境电商", icon: <ShoppingCart className="w-5 h-5 text-cyan-400"/>, text: "面对庞杂的全球化市场，我们深入供应链与营销链条前端，打造定制化的智能运营与市场洞察系统，帮助企业在激烈的红海竞争中抢占先机，实现极致的降本增效。" },
            { title: "教育行业", icon: <GraduationCap className="w-5 h-5 text-cyan-400"/>, text: "我们深入教学与管理的真实场景，用技术打破传统模式的效率瓶颈，实现更智能、更贴近用户的个性化服务落地。" }
          ],
          img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
          imgAlt: "工程师在工厂抱着电脑"
        },
        {
          id: "data",
          icon: <Database className="w-8 h-8 text-cyan-400" />,
          title: "AI数据服务",
          subtitle: "为您筑牢企业智能化的绝对基石。",
          desc: "数据，才是企业真正实现AI化的基石。而这，正是我们最为客户所称道的隐形壁垒。",
          points: [
            { title: "企业业务数据化", icon: <Cpu className="w-5 h-5 text-cyan-400"/>, text: "让沉睡的数据变成AI的燃料。将散落在各个独立系统、报表，甚至员工大脑里的非结构化经验与流程，转化为机器可读、可计算的标准数字资产。" },
            { title: "数据清洗与精炼", icon: <Target className="w-5 h-5 text-cyan-400"/>, text: "在沙砾中为您淘出真金。采用近乎苛刻的数据清洗标准，剔除冗余与错误，为您提纯出最具商业价值、最精准的高质量语料与数据集。" },
            { title: "数据管道维护", icon: <Server className="w-5 h-5 text-cyan-400"/>, text: "打造永不停歇的数字动脉。搭建并维护高并发、低延迟的坚固数据管道，确保极端业务洪峰下AI系统每时每刻接收到最稳定的数据血液。" }
          ],
          img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
          imgAlt: "基础建设风格数据中心"
        }
      ]
    },
    about: {
      header: "关于 AIES",
      tagline: "穿越技术周期，做最懂业务落地的AI特种部队",
      intro: "很多企业都在谈论AI的未来，而我们已经在这条路上摸爬滚打了十几年。我们深知，任何脱离了真实业务场景和利润增长的技术，都是空中楼阁。",
      timeline: [
        { year: "2012", title: "起步与商业基因", text: "我们的核心团队集结于2012年，在移动互联网野蛮生长的时代搏杀，将“敏捷交付”、“用户体验”与“商业变现”的基因深深地刻在了骨子里。技术必须为真实商业结果负责。" },
        { year: "2017", title: "深潜硬核技术场景", text: "我们主动挺进深水区，深度参与人工智能安防相关业务。安防场景极其严苛的要求，为我们锻造了极其扎实的底层数据治理能力和AI工程化底盘。" },
        { year: "2022至今", title: "全面重塑企业AI服务", text: "深刻洞察到前沿技术与传统业务之间的断层，我们全面转型人工智能企业服务。推出FDE、企业Agent研发与AI数据服务，致力于做打通最后一公里的“特种部队”。" },
        { year: "发展", title: "从单点突破到跨界赋能", text: "我们的AI落地经验是在商业战场敲出来的。从电商行业切入打造直接促成交易的方案，后成功跨界升级到门槛极高的金融行业，以及注重交互体验的教育行业。" },
        { year: "未来", title: "扎根大湾区，伴随企业生长", text: "立足深圳，不炒作概念，只拼交付质感。凭借扎实的落地口碑和极高复购率，我们的业务版图已从单点稳健拓展至全广东，成为众多头部企业背后的核心技术推手。" }
      ],
      footer: "从移动互联到人工智能，时代在变，但我们“用技术驱动商业真实增长”的初心从未改变。"
    },
    footerRights: "© 2026 深圳市阿奇秋人工智能有限公司 版权所有。"
  }
};

// ==========================================
// 2. Main Application Component
// ==========================================
export default function App() {
  const [lang, setLang] = useState('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = siteData[lang];

  // Handle Scroll for Navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'zh' : 'en');
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-900 selection:text-cyan-100">
      
      {/* ================= HEADER / NAVBAR ================= */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg shadow-cyan-900/20 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <Cpu className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wider">AIES</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-cyan-400 transition-colors">{t.nav.services}</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-cyan-400 transition-colors">{t.nav.about}</button>
              <button onClick={toggleLang} className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 transition-all text-sm font-medium">
                <Globe className="w-4 h-4" />
                {t.nav.switchLang}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300 hover:text-cyan-400 focus:outline-none">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 shadow-xl border-t border-slate-800 py-4">
            <div className="flex flex-col space-y-4 px-6">
              <button onClick={() => scrollToSection('services')} className="text-left text-lg font-medium hover:text-cyan-400">{t.nav.services}</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-lg font-medium hover:text-cyan-400">{t.nav.about}</button>
              <button onClick={toggleLang} className="flex items-center gap-2 text-lg font-medium hover:text-cyan-400 text-cyan-500">
                <Globe className="w-5 h-5" />
                {lang === 'en' ? 'Switch to Chinese (中文)' : 'Switch to English'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/20 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]"></div>
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik02MCAwaDF2NjBoLTF6TTAgNTloNjB2MWgtNnoiIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            <span className="block">{t.hero.title.split(' ')[0]} {t.hero.title.split(' ')[1]}</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mt-2">
               {lang === 'en' ? 'Enterprise Service' : '企业服务'}
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="group flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
            >
              {t.hero.cta}
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.services.header}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-32">
            {t.services.items.map((service, index) => (
              <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
                    {/* Overlay to darken image slightly */}
                    <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply z-10"></div>
                    <img src={service.img} alt={service.imgAlt} className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    
                    {/* Floating badge over image */}
                    <div className="absolute top-6 left-6 z-20 bg-slate-900/80 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 shadow-lg flex items-center gap-3">
                      {service.icon}
                      <span className="font-bold text-white tracking-wider">{service.id.toUpperCase()}</span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-cyan-400 font-medium text-lg mb-6">{service.subtitle}</p>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <div className="space-y-6">
                    {service.points.map((point, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="flex-shrink-0 mt-1 p-2 bg-slate-800 rounded-lg border border-slate-700">
                          {point.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{point.title}</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">{point.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT US (TIMELINE) SECTION ================= */}
      <section id="about" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.about.header}</h2>
            <p className="text-cyan-400 font-medium text-lg mb-6">{t.about.tagline}</p>
            <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed text-lg">
              {t.about.intro}
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative border-l-2 border-slate-800 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none space-y-12">
            
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-800 -translate-x-1/2"></div>

            {t.about.timeline.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-[-41px] md:left-1/2 w-5 h-5 rounded-full bg-slate-950 border-4 border-cyan-500 md:-translate-x-1/2 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-10"></div>

                {/* Empty Space for Desktop layout */}
                <div className="hidden md:block w-[45%]"></div>

                {/* Content Card */}
                <div className="w-full md:w-[45%] bg-slate-900/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors group">
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-cyan-400 bg-cyan-900/30 rounded-full border border-cyan-800/50">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {item.text}
                  </p>
                </div>

              </div>
            ))}
          </div>

          <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
             <p className="text-lg sm:text-xl font-medium text-slate-300 relative z-10 italic">
               "{t.about.footer}"
             </p>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Cpu className="w-6 h-6 text-slate-600" />
            <span className="text-xl font-bold text-slate-500 tracking-widest">AIES</span>
          </div>
          <p className="text-slate-500 text-sm text-center md:text-left">
            {t.footerRights}
          </p>
        </div>
      </footer>

    </div>
  );
}