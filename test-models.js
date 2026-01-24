import { GoogleGenerativeAI } from '@google/generative-ai';

async function listModels() {
  const genAI = new GoogleGenerativeAI('AIzaSyD0Or_YuJR0v8tWt9BhtC_q8tngEXRYpFQ');
  
  try {
    // This is a workaround if listModels isn't directly on genAI, getting a model to check responsiveness
    // But let's try to just use a very standard model name first to see if it's the key
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent("Test");
    console.log("Gemini-Pro works.");
  } catch (error) {
    console.log("Error with gemini-pro:", error.message);
  }

  try {
     const modelFlash = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
     const resultFlash = await modelFlash.generateContent("Test");
     console.log("Gemini-1.5-Flash works.");
  } catch (error) {
    console.log("Error with gemini-1.5-flash:", error.message);
  }
}

listModels();
