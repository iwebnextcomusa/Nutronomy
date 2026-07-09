import { useState } from "react";
import { ARTICLES } from "../data";
import { Article } from "../types";
import { Search, Calendar, Clock, ArrowUpRight, BookOpen, User, X, Check, Share2, Tag } from "lucide-react";

export default function BlogSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Research" | "Insights" | "Tips" | "Discovery">("All");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  // Filter articles based on category and search query
  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredArticle = ARTICLES[0]; // Let's make the first article the "Featured Post"

  const handleShare = (artTitle: string) => {
    navigator.clipboard.writeText(`${window.location.origin}#insights?article=${artTitle.toLowerCase().replace(/\s+/g, "-")}`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="insights" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Blog Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1.5 rounded-full">
              Articles & Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mt-4 tracking-tight">
              Evidence-Based Discoveries & Nutrition Tips
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              Explore scientific articles covering metabolic health, nutrigenomic pathways, microbiome mechanics, and practical dietary advice.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full max-w-sm shrink-0">
            <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
            <input
              type="text"
              id="blog-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keywords, tags, metabolic profiles..."
              className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-900 dark:text-white font-sans transition-all"
            />
            {searchQuery && (
              <button
                id="blog-search-clear"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-3 px-1.5 py-0.5 text-[10px] bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded hover:bg-slate-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Featured Post (only displayed when no active search/category filter is selected) */}
        {searchQuery === "" && selectedCategory === "All" && featuredArticle && (
          <div className="mb-16 bg-gradient-to-tr from-slate-50 to-emerald-50/20 dark:from-slate-950/30 dark:to-slate-900/10 rounded-3xl p-6 sm:p-10 border border-slate-200/50 dark:border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded bg-emerald-600 text-white">
                  Featured Publication
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {featuredArticle.date}
                </span>
              </div>
              <h3 
                onClick={() => setActiveArticle(featuredArticle)}
                className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight cursor-pointer hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                {featuredArticle.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {featuredArticle.summary}
              </p>
              <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-emerald-500" />
                  <span>{featuredArticle.author.name}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>
              <div className="pt-4 flex gap-3">
                <button
                  id="btn-read-featured"
                  onClick={() => setActiveArticle(featuredArticle)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-semibold text-xs flex items-center gap-2 transition-all shadow-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  Read Full Publication
                </button>
                <button
                  id="btn-share-featured"
                  onClick={() => handleShare(featuredArticle.title)}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center text-xs gap-1.5 transition-all"
                  title="Copy share link"
                >
                  {isCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
                  <span className="hidden sm:inline">{isCopied ? "Copied" : "Share"}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-emerald-100 to-sky-100 dark:from-emerald-950/40 dark:to-sky-950/40 rounded-2xl h-64 flex flex-col justify-center p-8 border border-slate-200/40 dark:border-slate-800">
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-bold">Research Keywords</span>
              <div className="flex flex-wrap gap-2 mt-4">
                {featuredArticle.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-lg text-xs font-mono text-slate-600 dark:text-slate-300">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 border-b border-slate-100 dark:border-slate-800 pb-6 mb-10">
          {(["All", "Research", "Insights", "Tips", "Discovery"] as const).map((cat) => (
            <button
              key={cat}
              id={`category-tab-${cat}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedCategory === cat
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/10"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {cat === "All" ? "All Articles" : cat}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                id={`article-card-${article.id}`}
                className="hover-accent-line bg-white dark:bg-slate-900/40 rounded-2xl p-6 border border-slate-200 dark:border-slate-800/60 flex flex-col justify-between hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                    <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-300 rounded font-bold uppercase tracking-wider text-[10px]">
                      {article.category}
                    </span>
                    <span>{article.date}</span>
                  </div>

                  <h3 
                    onClick={() => setActiveArticle(article)}
                    className="text-lg font-display font-bold text-slate-900 dark:text-white mt-2 leading-tight cursor-pointer hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 font-sans leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/40 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 dark:text-slate-400">{article.author.name.split(",")[0]}</span>
                  <button
                    id={`btn-read-more-${article.id}`}
                    onClick={() => setActiveArticle(article)}
                    className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 hover:translate-x-1 transition-transform"
                  >
                    Read Article
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-50 dark:bg-slate-900/20 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-base font-display font-semibold text-slate-700 dark:text-slate-300">No Articles Found</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              We couldn't find any papers or summaries matching "{searchQuery}". Try modifying your search keywords.
            </p>
            <button
              id="btn-reset-filters"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-medium"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

        {/* Full Article Reader Dialog */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10 overflow-y-auto max-h-[90vh]">
              
              {/* Reader Header Controls */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button
                  id="btn-reader-share"
                  onClick={() => handleShare(activeArticle.title)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 bg-slate-100 dark:bg-slate-800 transition-colors"
                  title="Copy link"
                >
                  {isCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4.5 h-4.5" />}
                </button>
                <button
                  id="btn-reader-close"
                  onClick={() => setActiveArticle(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 bg-slate-100 dark:bg-slate-800 transition-colors"
                  aria-label="Close article"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Publication Details */}
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded font-bold uppercase">
                  {activeArticle.category} Publication
                </span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activeArticle.readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight mt-4 leading-tight">
                {activeArticle.title}
              </h2>

              {/* Author Meta */}
              <div className="flex gap-3 items-center mt-6 p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
                  {activeArticle.author.name.substring(0, 2)}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-850 dark:text-slate-200 font-mono">{activeArticle.author.name}</div>
                  <div className="text-[10px] text-slate-500 font-mono">{activeArticle.author.role}</div>
                </div>
              </div>

              {/* Rich Content Render */}
              <div className="mt-8 prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-sm sm:text-base space-y-6">
                <p className="font-semibold text-slate-800 dark:text-slate-100 text-base border-l-4 border-emerald-500 pl-4 italic">
                  {activeArticle.summary}
                </p>
                <div className="whitespace-pre-line mt-6">
                  {activeArticle.content}
                </div>
              </div>

              {/* Tags block */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
                  <Tag className="w-3.5 h-3.5" />
                  Associated Scientific Tags
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeArticle.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 rounded-md text-xs font-mono text-slate-500">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-150 dark:border-slate-800 flex justify-between items-center">
                <span className="text-[10px] font-mono text-slate-400">{isCopied ? "Link Copied!" : "Read officially with NU-TRON'-E-ME"}</span>
                <button
                  id={`btn-reader-close-foot-${activeArticle.id}`}
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-semibold text-xs transition-colors"
                >
                  Close Reader
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
