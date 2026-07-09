import { useState } from "react";
import { FAQS } from "../data";
import { 
  Download, CheckCircle2, ChevronDown, BookOpen, AlertCircle, 
  HelpCircle, Sparkles, FileText, BarChart
} from "lucide-react";

export default function ResourcesSection() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [downloadingGuide, setDownloadingGuide] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const guides = [
    {
      id: "gut-brain-diet",
      title: "Intestinal Biomarkers & Cognitive Focus",
      type: "Comprehensive Whitepaper",
      size: "2.4 MB PDF",
      desc: "Scientific overview on dietary fiber fermentation and neural SCFA receptor pathways.",
      downloadCount: "1.4k downloads"
    },
    {
      id: "mthfr-methylation",
      title: "Epigenetic Methylation & MTHFR Guide",
      type: "Nutrigenomic Reference Sheet",
      size: "1.1 MB PDF",
      desc: "Bespoke grocery charts outlining active methylfolates and co-factors for genetic variants.",
      downloadCount: "2.8k downloads"
    },
    {
      id: "glucose-sequencing",
      title: "Glycemic Stability Meal Sequencing Chart",
      type: "Infographic Reference",
      size: "950 KB PDF",
      desc: "A printable refrigerator reference sheet demonstrating clinically-proven calorie ordering protocols.",
      downloadCount: "4.1k downloads"
    }
  ];

  const handleDownload = (guideId: string, guideTitle: string) => {
    setDownloadingGuide(guideId);
    setTimeout(() => {
      setDownloadingGuide(null);
      setDownloadSuccess(guideTitle);
      setTimeout(() => setDownloadSuccess(null), 3500);
    }, 1800);
  };

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <section id="resources" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Resources Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1.5 rounded-full">
            Knowledge Vault
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mt-4 tracking-tight">
            Downloadable Science Summaries & FAQs
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            Gain immediate access to peer-reviewed research papers, dietary summaries, functional food infographics, and active metabolic charts.
          </p>
        </div>

        {/* Downloads Grid */}
        <div className="mb-24">
          <div className="flex gap-2 items-center mb-8">
            <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">Featured Publications & Guides</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <div
                key={guide.id}
                id={`guide-card-${guide.id}`}
                className="hover-accent-line bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-6 border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-900 text-slate-600 dark:text-slate-400 font-mono text-[9px] font-bold uppercase tracking-wider">
                      {guide.type}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">{guide.size}</span>
                  </div>

                  <h4 className="text-base font-display font-bold text-slate-900 dark:text-white leading-snug">
                    {guide.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-sans leading-relaxed">
                    {guide.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/40 dark:border-slate-850 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">{guide.downloadCount}</span>
                  <button
                    id={`btn-dl-${guide.id}`}
                    onClick={() => handleDownload(guide.id, guide.title)}
                    disabled={downloadingGuide !== null}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white font-semibold text-xs flex items-center gap-1.5 transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    {downloadingGuide === guide.id ? (
                      <span className="flex items-center gap-1">
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Encrypting...
                      </span>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        Fetch PDF
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Download Success Notice */}
          {downloadSuccess && (
            <div className="mt-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 flex items-center gap-2.5 text-xs font-medium animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>
                <strong>Download Initiated:</strong> "{downloadSuccess}" has been compiled and is downloading to your files.
              </span>
            </div>
          )}
        </div>

        {/* FAQs Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-16">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex gap-2 items-center text-emerald-600 dark:text-emerald-400">
              <HelpCircle className="w-5 h-5" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">Scientific FAQ</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Frequently Queried Hypotheses
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Have burning questions about biochemistry, cellular energy cycles, or nutrigenomics? Read through our clinical responses, curated by Elena Rostova and the team.
            </p>
            <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-500/10 rounded-xl text-amber-800 dark:text-amber-400 text-xs flex gap-2 font-sans leading-relaxed">
              <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
              <div>
                <strong>Transparency Notice:</strong> All responses are fully referenced against current active clinical trials. They are for educational purposes and do not represent diagnostic therapy.
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {FAQS.map((faq) => {
              const isExpanded = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl overflow-hidden transition-all duration-350"
                >
                  <button
                    id={`btn-faq-trigger-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-900 text-slate-500 dark:text-slate-400 font-mono text-[9px] font-bold uppercase">
                        {faq.category}
                      </span>
                      <span className="text-sm font-display font-bold text-slate-900 dark:text-white leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-180 text-emerald-500" : ""}`} />
                  </button>

                  <div 
                    className={`transition-all duration-350 overflow-hidden ${
                      isExpanded ? "max-h-[300px] border-t border-slate-200/30 dark:border-slate-850" : "max-h-0"
                    }`}
                  >
                    <div className="p-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans bg-white dark:bg-slate-900/10">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
