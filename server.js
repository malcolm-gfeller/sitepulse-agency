import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config(); // Charge aussi .env par défaut si présent

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Configuration pour les modules ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json()); // Pour lire le JSON dans les requêtes POST
const port = process.env.PORT || 3000;

// Configuration Gemini 2.5 Flash
const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ 
  model: "gemini-2.5-flash",
  systemInstruction: `Tu es l'assistant IA de SitePulse, une agence de croissance digitale suisse d'élite.
Ton expertise : Développement web ultra-rapide, UI/UX de pointe, et SEO stratégique.
Ta personnalité : Professionnel, innovant, chaleureux et TRES CONCIS.
Tes directives : 
1. Réponds toujours en français (sauf si sollicité autrement).
2. Le fondateur est Malcolm Gfeller.
3. L'email de contact est info@sitepulse.ch (NE PAS utiliser d'autres emails).
4. Tes réponses doivent être courtes et directes. Évite les longs paragraphes inutiles.
5. Incite brièvement les utilisateurs à nous contacter pour leurs projets.`,
});

// Servir les fichiers statiques du dossier 'dist' (généré par npm run build)
app.use(express.static(join(__dirname, 'dist')));

// Endpoint API pour le Chat
app.post('/api/chat', async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message manquant.' });
  }

  try {
    const chat = model.startChat({
      history: history || [],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    res.json({ text });
  } catch (error) {
    console.error('Erreur Gemini Backend:', error);
    res.status(500).json({ error: 'Une erreur technique est survenue.' });
  }
});

// Renvoyer index.html pour toutes les autres requêtes 
// (Permet au routing React de fonctionner en cas de rafraîchissement de page)
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`🚀 Serveur SitePulse démarré sur le port ${port}`);
  console.log(`👉 http://localhost:${port}`);
});