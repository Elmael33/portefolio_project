const express = require('express');
const router = express.Router();

// Démarre une session de jeu
router.get('/start-game', (req, res) => {
  const sessionId = Math.floor(Math.random() * 10000); // Génération d'un ID aléatoire pour la session
  res.status(200).json({ message: 'Nouvelle session de jeu démarrée', sessionId });
});

// Valide une réponse
router.post('/submit-answer', (req, res) => {
  const { answer, sessionId } = req.body;
  res.status(200).json({ message: 'Réponse soumise', sessionId, answer });
});

// Update une réponse
router.put('/submit-answer', (req, res) => {
  const { answer, sessionId } = req.body;
  res.status(200).json({ message: 'Réponse mise à jour', sessionId, answer });
});

// Supprime une réponse
router.delete('/submit-answer', (req, res) => {
  const { sessionId } = req.body;
  res.status(200).json({ message: 'Réponse annulée', sessionId });
});

module.exports = router;