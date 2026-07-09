import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy-initialize Gemini AI client safely
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not configured in the Secrets panel.");
    }
    if (!aiClient) {
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
    return aiClient;
  }

  // Chatbot proxy API endpoint
  app.post("/api/chatbot", async (req, res) => {
    try {
      const { message, history } = req.body;
      let ai;
      try {
        ai = getGeminiClient();
      } catch (keyErr: any) {
        return res.status(400).json({ 
          error: "API Key Missing: " + keyErr.message + " Please provide a Gemini API Key via the Secrets panel." 
        });
      }

      // Convert history to @google/genai format
      const contents = [];
      if (history && Array.isArray(history)) {
        for (const turn of history) {
          contents.push({
            role: turn.role === "assistant" ? "model" : "user",
            parts: [{ text: turn.content }],
          });
        }
      }
      contents.push({
        role: "user",
        parts: [{ text: message }],
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents,
        config: {
          systemInstruction: `You are NU-TRON'-E-ME's AI chatbot, an advanced virtual food scientist and nutritional analytics companion.
Your tone is scientific yet approachable, research-driven, trustworthy, human-centered, and inspiring.
NU-TRON'-E-ME explores the art & science of food, nutrition, and personalized diet.
When answering:
1. Ground your answers in scientific evidence.
2. Acknowledge that food is both a biological necessity (science) and a cultural experience (art).
3. Do not make diagnostic health or cure claims, but feel free to reference metabolism, functional foods, microbiome, personalized nutrition, and AI-driven dietary analytics.
4. Keep answers relatively concise and highly engaging. Use formatting like bullet points or bold text to make answers readable.`,
        },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error in backend:", error);
      res.status(500).json({ error: error.message || "Failed to generate AI response." });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in development mode with Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in production mode with static assets...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
