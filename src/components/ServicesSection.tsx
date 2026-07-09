import { SERVICES } from "../data";
import { ServiceItem } from "../types";
import { 
  Sparkles, FlaskConical, GraduationCap, Cpu, BarChart3,
  HelpCircle, Check, ArrowRight 
} from "lucide-react";

export default function ServicesSection() {

  // Helper to resolve Lucide Icon based on services list
  const renderIcon = (iconName: string, className: string = "w-6 h-6 text-emerald-600 dark:text-emerald-400") => {
    switch (iconName) {
      case "Sparkles": return <Sparkles className={className} />;
      case "FlaskConical": return <FlaskConical className={className} />;
      case "GraduationCap": return <GraduationCap className={className} />;
      case "Cpu": return <Cpu className={className} />;
      case "BarChart3": return <BarChart3 className={className} />;
      default: return <HelpCircle className={className} />;
    }
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
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-100/50 dark:bg-emerald-950/20 px-3 py-1.5 rounded-full">
            Our Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mt-4 tracking-tight">
            Comprehensive Nutrition & Analytics Services
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed font-sans">
            Whether you are an individual pursuing metabolic mastery or a food tech startup engineering clean-label proteins, our scientific advisory panel has dedicated pathways for your goals.
          </p>
        </div>

        {/* Services List Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES.map((serv) => (
            <div
              key={serv.id}
              id={`service-card-${serv.id}`}
              className="hover-accent-line bg-white dark:bg-slate-900/40 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="flex gap-4 items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/10 flex items-center justify-center shrink-0">
                    {renderIcon(serv.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {serv.title}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 uppercase mt-0.5 block">
                      Engagement: {serv.engagementModel}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-sans">
                  {serv.description}
                </p>

                {/* Sub-Offerings checkmarks */}
                <div className="bg-slate-50 dark:bg-slate-950/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800/40">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase block mb-3">Service Deliverables</span>
                  <ul className="space-y-3">
                    {serv.detailedOfferings.map((offering, idx) => (
                      <li key={idx} className="flex gap-3 text-xs text-slate-600 dark:text-slate-300 items-start">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-sans leading-relaxed">{offering}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/40 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Ready to initiate?</span>
                <button
                  id={`btn-service-cta-${serv.id}`}
                  onClick={scrollToContact}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-bold text-xs flex items-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
                >
                  Book Strategic Call
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Corporate Partnership Banner */}
        <div className="mt-16 bg-gradient-to-tr from-sky-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-white/5 relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(2,132,199,0.15),transparent)]" />
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-2xl text-left">
              <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded bg-sky-600 text-white">Enterprise Advisory</span>
              <h3 className="text-xl sm:text-2xl font-display font-bold mt-3 tracking-tight">Speaking Engagements & Corporate Advisory Boards</h3>
              <p className="text-sm text-sky-200 mt-2 font-sans leading-relaxed">
                Need keynotes or advisory expertise? Dr. Rao and our panel speak at global biotech conferences, food tech exhibitions, and corporate wellness events, providing custom summaries on nutritional longevity.
              </p>
            </div>
            <button
              id="btn-corp-advisory"
              onClick={scrollToContact}
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm shrink-0 shadow-md shadow-sky-900/30 active:scale-95 transition-all"
            >
              Inquire Availability
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
