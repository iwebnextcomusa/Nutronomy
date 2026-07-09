import { useState, useRef, useEffect, FormEvent } from "react";
import { Message } from "../types";
import { MessageSquare, X, Send, Bot, User, Sparkles, AlertTriangle } from "lucide-react";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-msg",
      role: "assistant",
      content: "Hello! I am your NU-TRON'-E-ME AI advisory companion. Ask me any question on biochemistry, metabolic metrics, nutrigenomics, gut-brain axis, or food tech innovations!",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [errorText, setErrorText] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    setErrorText("");

    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      role: "user",
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    const promptToSend = inputMessage;
    setInputMessage("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: promptToSend,
          history: messages.slice(1) // omit welcome message to save tokens
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Server failed to respond.");
      }

      const aiMessage: Message = {
        id: `msg-${Date.now() + 1}`,
        role: "assistant",
        content: data.text || "I was unable to formulate a metabolic response.",
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err: any) {
      console.error("Chat error:", err);
      setErrorText(err.message || "Uplink to AI service failed. Please check your network.");
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Action Button */}
      <button
        id="btn-chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 relative group cursor-pointer ${
          isOpen
            ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950"
            : "bg-gradient-to-tr from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800"
        }`}
        aria-label="Open AI Nutrition Assistant"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border-2 border-white dark:border-slate-900 text-[9px] text-white font-bold items-center justify-center">1</span>
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[500px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl mt-4 flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-emerald-800 to-teal-900 text-white flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-300">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-display font-bold">NU-TRON AI Advisor</h4>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-[10px] font-mono text-emerald-100">Evidential Uplink Online</span>
                </div>
              </div>
            </div>
            <button
              id="btn-chat-close-top"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages list */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-950/20 font-sans">
            {messages.map((msg) => {
              const isAi = msg.role === "assistant";
              return (
                <div key={msg.id} className={`flex gap-2.5 ${isAi ? "justify-start" : "justify-end"}`}>
                  {isAi && (
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-500/10 flex items-center justify-center shrink-0 text-xs">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}
                  <div className={`max-w-[75%] p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    isAi
                      ? "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200/50 dark:border-slate-800 shadow-sm"
                      : "bg-emerald-600 text-white shadow-md shadow-emerald-900/10"
                  }`}>
                    {/* Preserve line breaks and support raw markdown-like bullets simply */}
                    <div className="whitespace-pre-line">
                      {msg.content}
                    </div>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-500/10 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200/50 dark:border-slate-800 shadow-sm flex items-center gap-1.5 shrink-0">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            {errorText && (
              <div className="p-3.5 bg-red-50 dark:bg-red-950/40 border border-red-500/20 text-red-800 dark:text-red-300 rounded-2xl text-xs flex gap-2">
                <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                <div>{errorText}</div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Form input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white dark:bg-slate-900 border-t border-slate-150 dark:border-slate-800 flex gap-2 shrink-0">
            <input
              type="text"
              id="chatbot-input"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Query glucose pathways, nutrigenomics..."
              className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-900 dark:text-white"
            />
            <button
              type="submit"
              id="btn-chatbot-send"
              disabled={!inputMessage.trim() || isTyping}
              className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-200 dark:disabled:bg-slate-800 text-white disabled:text-slate-400 flex items-center justify-center transition-colors active:scale-95 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
