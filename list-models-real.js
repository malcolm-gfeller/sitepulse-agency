import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { GoogleGenerativeAI } from '@google/generative-ai';

async function list() {
  const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);
  try {
    const models = await genAI.listModels();
    console.log("Available models:");
    for (const m of models.models) {
      console.log(`- ${m.name} (${m.displayName})`);
    }
  } catch (error) {
    console.error("Error listing models:", error.message);
  }
}

list();
