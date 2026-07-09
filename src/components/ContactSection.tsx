import { useState, ChangeEvent, FormEvent } from "react";
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle,
  Twitter, Linkedin, Youtube, Globe, HeartHandshake, BellRing
} from "lucide-react";

export default function ContactSection() {
  // Form fields
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Newsletter fields
  const [newsEmail, setNewsEmail] = useState("");
  const [newsSubmitted, setNewsSubmitted] = useState(false);
  const [newsError, setNewsError] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email format is invalid";
    }
    if (!formData.subject.trim()) errors.subject = "Subject matter is required";
    if (!formData.message.trim()) {
      errors.message = "Message payload is required";
    } else if (formData.message.trim().length < 15) {
      errors.message = "Message must be at least 15 characters to explain scientific inquiry";
    }
    return errors;
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormSubmitted(true);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleNewsSubmit = (e: FormEvent) => {
    e.preventDefault();
    setNewsError("");

    if (!newsEmail.trim()) {
      setNewsError("Email is required for subscription");
      return;
    } else if (!/\S+@\S+\.\S+/.test(newsEmail)) {
      setNewsError("Invalid email format");
      return;
    }

    setNewsSubmitted(true);
    setNewsEmail("");
    setTimeout(() => setNewsSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-100/50 dark:bg-emerald-950/20 px-3 py-1.5 rounded-full">
            Inquire Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mt-4 tracking-tight">
            Connect With Our Research Labs
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed font-sans">
            Have questions about clinical trials, corporate wellness workshops, or private biochemical consulting? Send us a payload, and our advisors will respond within 24 hours.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Info and Newsletter */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 space-y-6">
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">Institutional Channels</h3>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">Telephone Inquiry</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-200 font-display font-medium mt-1">619-954-5410</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">Electronic Mail</h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-sans break-all">
                    rao.anand@me.com
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-sans break-all">
                    arao@bigtappanalytics.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">Advisory Headquarters</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed font-sans">
                    NU-TRON'-E-ME Labs & Analytics Office,<br />San Diego, California, USA
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter widget */}
            <div className="bg-gradient-to-tr from-emerald-800 to-emerald-950 text-white p-8 rounded-3xl relative overflow-hidden shadow-md">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent)]" />
              <div className="relative z-10 space-y-4">
                <div className="flex gap-2 items-center text-emerald-300">
                  <BellRing className="w-4 h-4 animate-bounce" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest">Biweekly Circular</span>
                </div>
                <h4 className="text-lg font-display font-bold">Subscribe to Metabolic Dispatch</h4>
                <p className="text-xs text-emerald-100/90 leading-relaxed font-sans">
                  Join 15,000+ clinicians, food technologists, and biochemists. Get active research summaries directly to your inbox. No marketing fluff.
                </p>

                <form onSubmit={handleNewsSubmit} className="flex gap-2 pt-2">
                  <input
                    type="email"
                    id="newsletter-email"
                    value={newsEmail}
                    onChange={(e) => {
                      setNewsEmail(e.target.value);
                      if (newsError) setNewsError("");
                    }}
                    placeholder="clinical.reader@me.com"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/10 text-white text-xs placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  />
                  <button
                    type="submit"
                    id="btn-news-submit"
                    className="px-4 py-2.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-xs shrink-0 transition-colors shadow"
                  >
                    Subscribe
                  </button>
                </form>

                {newsError && (
                  <p className="text-[10px] text-amber-300 font-mono flex items-center gap-1.5">
                    <AlertCircle className="w-3 h-3" />
                    {newsError}
                  </p>
                )}

                {newsSubmitted && (
                  <p className="text-[10px] text-emerald-300 font-mono flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Subscription activated! Welcome to the loop.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/40 p-8 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-6">Send Biochemical/Advisory Inquiry</h3>
            
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Professor Anand Rao"
                    className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900 dark:text-white transition-all ${
                      formErrors.name ? "border-red-500 ring-2 ring-red-500/10" : "border-slate-200 dark:border-slate-800 focus:border-emerald-500"
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="rao.anand@me.com"
                    className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900 dark:text-white transition-all ${
                      formErrors.email ? "border-red-500 ring-2 ring-red-500/10" : "border-slate-200 dark:border-slate-800 focus:border-emerald-500"
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase block mb-2">
                  Subject Matter
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Request for Gut-Brain Axis Research Joint-Venture"
                  className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900 dark:text-white transition-all ${
                    formErrors.subject ? "border-red-500 ring-2 ring-red-500/10" : "border-slate-200 dark:border-slate-800 focus:border-emerald-500"
                  }`}
                />
                {formErrors.subject && (
                  <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-message" className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase block mb-2">
                  Inquiry Message Payload
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your clinical requirements, research bounds, or demographic variables here..."
                  className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900 dark:text-white transition-all resize-none ${
                    formErrors.message ? "border-red-500 ring-2 ring-red-500/10" : "border-slate-200 dark:border-slate-800 focus:border-emerald-500"
                  }`}
                />
                {formErrors.message && (
                  <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                id="btn-contact-submit"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-900/10 active:scale-[0.98] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Transmit Payload
              </button>

              {formSubmitted && (
                <div className="mt-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 flex items-center gap-2.5 text-xs font-semibold animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <div>
                    <strong>Transmission Success:</strong> Your scientific inquiry has been logged. Dr. Rao or an advisor will contact you within 24 hours.
                  </div>
                </div>
              )}
            </form>

            {/* Interactive Mock Map Placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 h-44 bg-slate-100 dark:bg-slate-950 relative flex flex-col justify-center items-center p-4">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              <MapPin className="w-8 h-8 text-emerald-500 animate-bounce mb-2 relative z-10" />
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 relative z-10">NU-TRON'-E-ME Labs</span>
              <span className="text-[10px] font-sans text-slate-400 mt-1 relative z-10">San Diego, California Grid Coordinates: 32.7157° N, 117.1611° W</span>
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-white/80 dark:bg-slate-900/80 rounded border border-slate-200 dark:border-slate-800 text-[9px] font-mono text-slate-400">
                Satellite Uplink Active
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
