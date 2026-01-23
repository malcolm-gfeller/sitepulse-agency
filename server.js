import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Configuration pour les modules ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Servir les fichiers statiques du dossier 'dist' (généré par npm run build)
app.use(express.static(join(__dirname, 'dist')));

// Renvoyer index.html pour toutes les autres requêtes 
// (Permet au routing React de fonctionner en cas de rafraîchissement de page)
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`🚀 Serveur SitePulse démarré sur le port ${port}`);
  console.log(`👉 http://localhost:${port}`);
});
