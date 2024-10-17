const express = require('express');
const router = express.Router();

// Enregistre les résultats de partie
router.post('/', (req, res) => {
  const { sessionId, finalScore } = req.body;
  res.status(200).json({ message: 'Résultats de la partie enregistrés', sessionId, finalScore });
});

// Récupére les détails de la dernière partie
router.get('/:sessionId', (req, res) => {
  const sessionId = req.params.sessionId;
  res.status(200).json({ message: `Détails de la partie ${sessionId}`, finalScore: 100 });
});

// Update les résultats de la partie
router.put('/:sessionId', (req, res) => {
  const sessionId = req.params.sessionId;
  const { finalScore } = req.body;
  res.status(200).json({ message: `Résultats mis à jour pour la session ${sessionId}`, finalScore });
});

// Supprime les résultats d'une partie
router.delete('/:sessionId', (req, res) => {
  const sessionId = req.params.sessionId;
  res.status(200).json({ message: `Résultats supprimés pour la session ${sessionId}` });
});

module.exports = router;