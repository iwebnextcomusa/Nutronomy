import { Twitter, Linkedin, Youtube, Leaf, Shield } from "lucide-react";
import logoIcon from "../assets/images/nutronomy_favicon_1783623317550.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Foot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Logo Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-slate-800 bg-white p-0.5 shadow-sm flex items-center justify-center">
                <img 
                  src={logoIcon} 
                  alt="Nutronomy Icon" 
                  className="w-full h-full object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-wider">
                NU-TRON'-E-ME
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-sm">
              Exploring the Art & Science of Food, Nutrition & Diet. Bridging clinical nutrigenomic biochemistry with artisanal culinary appreciation for systemic human bio-longevity.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-emerald-600 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-emerald-600 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-emerald-600 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-3 space-y-4 text-xs">
            <h4 className="font-mono font-bold uppercase text-slate-200 tracking-widest text-[10px]">Active Sectors</h4>
            <ul className="space-y-2.5 font-sans">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Nutrigenomics Advisory</a></li>
              <li><a href="#research" className="hover:text-emerald-400 transition-colors">Microbiome Biochemistry</a></li>
              <li><a href="#research" className="hover:text-emerald-400 transition-colors">Alternative Food Technology</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Continuous Biometric Analytics</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4 text-xs">
            <h4 className="font-mono font-bold uppercase text-slate-200 tracking-widest text-[10px]">Clinical Integrity</h4>
            <div className="flex gap-2 p-4 bg-slate-900/60 rounded-xl border border-slate-800">
              <Shield className="w-8 h-8 text-emerald-500 shrink-0" />
              <p className="text-[10px] text-slate-400 font-sans leading-relaxed">
                NU-TRON'-E-ME research processes strictly respect open science principles. All publications are cross-referenced with cataloged trial papers.
              </p>
            </div>
          </div>

        </div>

        {/* Center aligned bottom footer as explicitly requested */}
        <div className="pt-8 border-t border-slate-900 text-center text-xs space-y-2">
          <p className="font-sans text-slate-500">
            &copy; {currentYear} NU-TRON'-E-ME. All rights reserved.
          </p>
          <p className="font-mono text-slate-500">
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 font-semibold transition-colors underline underline-offset-4">iWebNext</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
