const express = require('express');
const router = express.Router();

// Récupére le classement
router.get('/', (req, res) => {
  const top = req.query.top || 10;
  res.status(200).json({ message: `Top ${top} scores`, scores: [] });
});

// Valide un nouveau score
router.post('/', (req, res) => {
  const { userId, score } = req.body;
  res.status(200).json({ message: 'Nouveau score soumis', userId, score });
});

// Update un score
router.put('/', (req, res) => {
  const { userId, score } = req.body;
  res.status(200).json({ message: 'Score mis à jour', userId, score });
});

module.exports = router;