import { useState } from "react";
import { TEAM_MEMBERS } from "../data";
import { User, Award, BookOpen, Lightbulb, ArrowRight, Compass } from "lucide-react";
import foodArtAndScienceImg from "../assets/images/food_art_and_science_1783620918552.jpg";

export default function AboutSection() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [activeMember, setActiveMember] = useState<string | null>(null);

  // Collect all unique specialties
  const allSpecialties = Array.from(
    new Set(TEAM_MEMBERS.flatMap((member) => member.specialties))
  );

  const filteredMembers = selectedSpecialty
    ? TEAM_MEMBERS.filter((m) => m.specialties.includes(selectedSpecialty))
    : TEAM_MEMBERS;

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1.5 rounded-full">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mt-4 tracking-tight">
            Bridging Academic Rigor with Practical Dietary Wisdom
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed font-sans">
            At NU-TRON'-E-ME, we believe understanding food is the key to human potential. We work at the bleeding edge of nutrigenomics, biochemistry, and alternative food formulation.
          </p>
        </div>

        {/* Philosophy Grid - Art & Science */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-slate-900 dark:text-white">Our Vision</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  To establish a world where nutrition is no longer governed by speculative guesswork or short-lived dietary fads, but by computational accuracy, deep biological feedback, and respectful food stewardship.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-sky-100 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-slate-900 dark:text-white">Our Mission</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  We translate cutting-edge scientific inquiries regarding biochemistry, digestion microbiome patterns, and ingredient innovations into custom dietary consulting, enterprise advisories, and public masterclasses.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-500 flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-slate-900 dark:text-white">The Synergy: Art & Science</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  Food is biochemistry (Science)—comprising complex biochemical structures, metabolic rates, and epigenetic keys. Yet, food is also culture, ritual, flavor, and visual composition (Art). True nutrition is only realized when physical biochemistry respects human culinary enjoyment.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-tr from-emerald-500 to-sky-400 opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl group">
              <img
                src={foodArtAndScienceImg}
                alt="Fine dining plate juxtaposed with glowing molecular chemical compounds"
                className="w-full h-[400px] object-cover hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-semibold bg-emerald-950/60 px-2 py-1 rounded border border-emerald-800/40">
                    Epistemic Framework
                  </span>
                  <h4 className="text-lg font-display font-bold mt-2">Food as a Multi-Dimensional Biochemical Masterpiece</h4>
                  <p className="text-xs text-slate-200 mt-1 max-w-xl font-sans">
                    Our laboratory profiles both flavor indices and cell-membrane assimilation, satisfying the gourmet's palate and the biochemist's metrics simultaneously.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Advisory Panel */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <span className="text-[11px] font-mono text-slate-500 tracking-widest uppercase">The Brain Trust</span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mt-1">
                Meet Our Scientific Advisors
              </h3>
            </div>

            {/* Specialties Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                id="btn-spec-all"
                onClick={() => setSelectedSpecialty(null)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedSpecialty === null
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                All Fields
              </button>
              {allSpecialties.map((spec) => (
                <button
                  key={spec}
                  id={`btn-spec-${spec.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setSelectedSpecialty(spec)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedSpecialty === spec
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredMembers.map((member) => {
              const isActive = activeMember === member.id;
              return (
                <div
                  key={member.id}
                  id={`team-card-${member.id}`}
                  className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-6 border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
                >
                  <div>
                    {/* Placeholder Avatar with initial character & colors */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-sky-500 text-white flex items-center justify-center font-display font-bold text-xl shadow-inner mb-4 group-hover:scale-105 transition-transform duration-300">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </div>

                    <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {member.name}
                    </h4>
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 block mt-0.5">
                      {member.role}
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 font-sans leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block mb-2">Specialties</span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.specialties.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded bg-slate-200/50 text-[10px] text-slate-600 dark:bg-slate-800 dark:text-slate-300 font-sans"
                        >
                          {s}
                        </span>
                      ))}
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
