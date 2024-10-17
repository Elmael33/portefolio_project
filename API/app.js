const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); //traite les requêtes en JSON

// Importe les routes
const gameRoutes = require('./routes/game');
const userRoutes = require('./routes/user');
const leaderboardRoutes = require('./routes/leaderboard');
const levelRoutes = require('./routes/levels');
const endGameRoutes = require('./routes/endGame');

// Utilisation des routes dans l'app
app.use('/api/game', gameRoutes);
app.use('/api/user', userRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/levels', levelRoutes);
app.use('/api/end-game', endGameRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
