import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ResearchSection from "./components/ResearchSection";
import BlogSection from "./components/BlogSection";
import ServicesSection from "./components/ServicesSection";
import ResourcesSection from "./components/ResourcesSection";
import ContactSection from "./components/ContactSection";
import ChatbotWidget from "./components/ChatbotWidget";
import Footer from "./components/Footer";
import MoleculeCanvas from "./components/MoleculeCanvas";

import { 
  ArrowRight, ChevronUp, Brain, Sparkles, Star, FlaskConical, Database, Volume2, VolumeX
} from "lucide-react";

const HERO_VIDEO_URL = "https://br9i6jd5fw7yfczo.public.blob.vercel-storage.com/Nutronomy.mp4";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or default to dark mode for premium clinical feel
    const stored = localStorage.getItem("nu-theme");
    return stored === "dark" || !stored;
  });

  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHeroMuted, setIsHeroMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Synchronize dynamic muting state for the video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isHeroMuted;
    }
  }, [isHeroMuted]);

  // Apply Dark Mode Class
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("nu-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("nu-theme", "light");
    }
  }, [darkMode]);

  // Track scroll position to show/hide scroll-to-top button & handle spy navigation
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll top
      setShowScrollTop(window.scrollY > 400);

      // Simple scroll spy logic
      const sections = ["home", "about", "research", "insights", "services", "resources", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    const contactSec = document.getElementById("contact");
    if (contactSec) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elemRect = contactSec.getBoundingClientRect().top;
      const elemPos = elemRect - bodyRect;
      window.scrollTo({
        top: elemPos - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfdfc] dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Dynamic SEO JSON-LD Schema.org Data Injection */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "NU-TRON'-E-ME",
          "alternateName": "NU-TRON-E-ME",
          "url": "https://iwebnext.com",
          "logo": "https://iwebnext.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-619-954-5410",
            "contactType": "scientific advisory",
            "email": "rao.anand@me.com",
            "areaServed": "US",
            "availableLanguage": "en"
          },
          "knowsAbout": [
            "Nutrition Science",
            "Nutrigenomics",
            "Gut Microbiome",
            "Food Technology",
            "Personalized Nutrition",
            "Dietary Analytics"
          ]
        })}
      </script>

      {/* Header */}
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      {/* Main Content */}
      <main className="pt-20">
        
        {/* HERO SECTION */}
        <section id="home" className="relative py-20 lg:py-32 overflow-hidden bg-[#fcfdfc] dark:bg-slate-950">
          {/* Background video behind text */}
          <div className="absolute inset-0 z-0 select-none overflow-hidden">
            <video
              ref={videoRef}
              src={HERO_VIDEO_URL}
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover opacity-40 dark:opacity-50"
            />
            {/* Gradient overlays to maintain perfect text contrast and blend seamlessly with light/dark theme */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/30 via-[#fcfdfc]/80 to-[#fcfdfc] dark:from-emerald-950/15 dark:via-slate-950/80 dark:to-slate-950" />
          </div>

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-3xl z-0" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-sky-500/10 to-transparent rounded-full blur-3xl z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Hero Texts */}
              <div className="lg:col-span-12 space-y-6 text-center max-w-3xl mx-auto flex flex-col items-center justify-center">
                <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/15 rounded-full px-4 py-2 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                  <Brain className="w-3.5 h-3.5 animate-pulse" />
                  <span>Computational Nutrigenomics Institute</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
                  Exploring the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-500">Art & Science</span> of Food, Nutrition & Diet
                </h1>

                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
                  NU-TRON'-E-ME maps the deep biochemical codes of nutrition science, food technology, and personalized dietary pathways. We fuse rigorous scientific integrity with practical culinary application to optimize metabolic health.
                </p>

                {/* Star Ratings Advisory Panel */}
                <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
                  <div className="flex items-center justify-center gap-1.5 text-amber-500">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-500" />
                    ))}
                    <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 ml-1">Evidence-Based Integrity</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <button
                    id="btn-hero-cta-main"
                    onClick={scrollToContact}
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-sm shadow-lg shadow-emerald-950/20 active:scale-95 transition-all duration-200 flex items-center gap-2"
                  >
                    Initiate Advisory
                    <ArrowRight className="w-4.5 h-4.5" />
                  </button>
                  <a
                    href="#research"
                    className="px-6 py-3.5 rounded-xl border border-slate-200 dark:border-slate-850 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300 font-bold text-sm transition-all duration-200 flex items-center gap-2"
                  >
                    View active studies
                  </a>
                </div>

                {/* Small specs banner */}
                <div className="grid grid-cols-3 gap-8 pt-6 border-t border-slate-150 dark:border-slate-800/80 w-full max-w-md font-mono text-xs mx-auto">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">METABOLIC</div>
                    <div className="text-[10px] text-slate-400">Flexibility</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">GENOMIC</div>
                    <div className="text-[10px] text-slate-400">Epigenetics</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">MICROME</div>
                    <div className="text-[10px] text-slate-400">Symbiosis</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Hero Video Ambient Controls Overlay */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
            <button
              id="btn-hero-mute-toggle"
              onClick={() => setIsHeroMuted(!isHeroMuted)}
              className="flex items-center gap-2 px-3 py-2 text-xs font-mono font-medium rounded-xl backdrop-blur-md bg-white/25 dark:bg-slate-950/40 hover:bg-white/40 dark:hover:bg-slate-900/60 text-slate-850 dark:text-slate-200 border border-slate-300/40 dark:border-slate-800/40 transition-all shadow-md cursor-pointer"
              title={isHeroMuted ? "Unmute Ambient Sound" : "Mute Ambient Sound"}
            >
              {isHeroMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-rose-500 animate-pulse" />
                  <span>MUTED</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-500 animate-bounce" />
                  <span>AUDIO ON</span>
                </>
              )}
            </button>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <AboutSection />

        {/* RESEARCH SECTION */}
        <ResearchSection />

        {/* ARTICLES & INSIGHTS (BLOG) */}
        <BlogSection />

        {/* SERVICES SECTION */}
        <ServicesSection />

        {/* RESOURCES & FAQS SECTION */}
        <ResourcesSection />

        {/* CONTACT SECTION */}
        <ContactSection />

      </main>

      {/* FOOTER */}
      <Footer />

      {/* AI CHATBOT FLOAT WIDGET */}
      <ChatbotWidget />

      {/* FLOATING SCROLL TO TOP BUTTON */}
      {showScrollTop && (
        <button
          id="btn-scroll-top"
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 shadow-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-850 hover:-translate-y-1 transition-all duration-300 z-50 animate-fade-in group cursor-pointer"
          title="Back to topmost screen"
        >
          <ChevronUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      )}

    </div>
  );
}
