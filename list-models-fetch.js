import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { GoogleGenerativeAI } from '@google/generative-ai';

async function list() {
  const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);
  try {
    // Attempting to use the listModels method if it's available in this version of the SDK
    // If not, we'll try a different approach or just use the names from CURL
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.VITE_GEMINI_API_KEY}`);
    const data = await response.json();
    console.log("Model names from API:");
    if (data.models) {
      data.models.forEach(m => console.log(m.name.replace('models/', '')));
    } else {
      console.log("No models found or error:", data);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

list();
