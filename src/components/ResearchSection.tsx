import { useState } from "react";
import { RESEARCH_AREAS } from "../data";
import { ResearchArea } from "../types";
import { 
  Atom, Leaf, Dna, Globe, ShieldAlert, Cpu, Binary, BarChart3, Flame,
  CheckCircle, ArrowRight, X, Sparkles, TrendingUp, HelpCircle
} from "lucide-react";

export default function ResearchSection() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Science" | "Technology">("All");
  const [activeResearch, setActiveResearch] = useState<ResearchArea | null>(null);

  const filteredAreas = selectedCategory === "All"
    ? RESEARCH_AREAS
    : RESEARCH_AREAS.filter((a) => a.category === selectedCategory);

  // Helper to resolve Lucide Icon based on data representation
  const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
    switch (iconName) {
      case "Atom": return <Atom className={className} />;
      case "Leaf": return <Leaf className={className} />;
      case "Dna": return <Dna className={className} />;
      case "Globe": return <Globe className={className} />;
      case "ShieldAlert": return <ShieldAlert className={className} />;
      case "Cpu": return <Cpu className={className} />;
      case "Binary": return <Binary className={className} />;
      case "BarChart3": return <BarChart3 className={className} />;
      case "Flame": return <Flame className={className} />;
      default: return <HelpCircle className={className} />;
    }
  };

  return (
    <section id="research" className="py-24 bg-slate-50 dark:bg-slate-950/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Research Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-100/50 dark:bg-emerald-950/20 px-3 py-1.5 rounded-full">
              Areas of Exploration
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mt-4 tracking-tight">
              Investigating the Deep Biochemistry of Nutrition
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              We divide our active inquiries into fundamental Nutrition Sciences and next-generation Nutritional Technologies, analyzing nutrition at molecular resolution.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex bg-slate-200/60 dark:bg-slate-900/60 p-1.5 rounded-xl border border-slate-300/20 w-fit shrink-0">
            {["All", "Science", "Technology"].map((cat) => (
              <button
                key={cat}
                id={`tab-research-${cat.toLowerCase()}`}
                onClick={() => setSelectedCategory(cat as any)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  selectedCategory === cat
                    ? "bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat === "All" ? "All Fields" : cat === "Science" ? "Bio-Sciences" : "Computational Tech"}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              id={`research-card-${area.id}`}
              onClick={() => setActiveResearch(area)}
              className="hover-accent-line bg-white dark:bg-slate-900/40 rounded-2xl p-6 border border-slate-200 dark:border-slate-800/60 shadow-sm hover:shadow-md hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top decoration corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-tr-2xl group-hover:from-emerald-500/20 transition-all" />

              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  area.category === "Science"
                    ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400"
                    : "bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400"
                }`}>
                  {renderIcon(area.iconName)}
                </div>

                <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1">
                  {area.category} Division
                </span>

                <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {area.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/40 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
                <span>Explore Core Metrics</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Statistic Callouts */}
        <div className="mt-20 bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl shadow-emerald-950/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display font-bold text-3xl sm:text-4xl text-emerald-300">4,500+</div>
              <div className="text-xs font-mono text-emerald-100 uppercase mt-2 tracking-wider">Studies Peer-Reviewed</div>
            </div>
            <div>
              <div className="font-display font-bold text-3xl sm:text-4xl text-emerald-300">24M+</div>
              <div className="text-xs font-mono text-emerald-100 uppercase mt-2 tracking-wider">Nutrient Sims Run</div>
            </div>
            <div>
              <div className="font-display font-bold text-3xl sm:text-4xl text-emerald-300">12,000+</div>
              <div className="text-xs font-mono text-emerald-100 uppercase mt-2 tracking-wider">Genomic Profiles cataloged</div>
            </div>
            <div>
              <div className="font-display font-bold text-3xl sm:text-4xl text-emerald-300">94%</div>
              <div className="text-xs font-mono text-emerald-100 uppercase mt-2 tracking-wider">Metabolic Success</div>
            </div>
          </div>
        </div>

        {/* Interactive Detail Modal / Drawer */}
        {activeResearch && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
              
              {/* Close Button */}
              <button
                id="btn-close-research"
                onClick={() => setActiveResearch(null)}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 bg-slate-100 dark:bg-slate-800 transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex gap-4 items-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  activeResearch.category === "Science"
                    ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400"
                    : "bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400"
                }`}>
                  {renderIcon(activeResearch.iconName, "w-6 h-6")}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                    {activeResearch.category} DIVISION / ACTIVE FILE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white tracking-tight mt-0.5">
                    {activeResearch.title}
                  </h3>
                </div>
              </div>

              {/* Research Narrative */}
              <div className="mt-6 space-y-4">
                <h4 className="text-sm font-mono tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">Scientific Context</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {activeResearch.detailedInfo}
                </p>
              </div>

              {/* Research Metrics */}
              <div className="mt-8 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  Performance Metrics
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {activeResearch.metrics.map((met, index) => (
                    <div key={index} className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200/40 dark:border-slate-850">
                      <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase">{met.label}</div>
                      <div className="font-display font-bold text-lg text-slate-800 dark:text-slate-200 mt-1">{met.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bullet highlights */}
              <div className="mt-8">
                <h4 className="text-sm font-mono tracking-widest text-emerald-600 dark:text-emerald-400 uppercase mb-3">Research Focus Pillars</h4>
                <ul className="space-y-2.5">
                  {activeResearch.highlights.map((high, index) => (
                    <li key={index} className="flex gap-2.5 text-xs text-slate-600 dark:text-slate-300 items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="font-sans leading-relaxed">{high}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button
                  id={`btn-modal-close-foot-${activeResearch.id}`}
                  onClick={() => setActiveResearch(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-xs transition-colors"
                >
                  Close Framework
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
