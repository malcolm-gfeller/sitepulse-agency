import { GoogleGenerativeAI } from '@google/generative-ai';

async function testKey() {
  const genAI = new GoogleGenerativeAI('AIzaSyBX8Dt8JZ3d8E3SWO0XhWI4TP9LFpiupbc');
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent("Hello, are you working?");
    const response = await result.response;
    console.log("Success! Response:", response.text());
  } catch (error) {
    console.error("Error testing key:", error.message);
    if (error.response) {
      console.error("Error details:", JSON.stringify(error.response, null, 2));
    }
  }
}

testKey();
