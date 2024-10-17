const express = require('express');
const router = express.Router();

// Récupére la liste des niveaux
router.get('/', (req, res) => {
  const limit = req.query.limit || 20;
  const difficulty = req.query.difficulty || 'tous';
  res.status(200).json({ message: 'Liste des niveaux récupérée', limit, difficulty });
});

// Ajoute un nouveau niveau
router.post('/', (req, res) => {
  const { title, difficulty, elements } = req.body;
  res.status(200).json({ message: 'Nouveau niveau ajouté', title, difficulty, elements });
});

// Modifie un niveau existant
router.put('/:levelId', (req, res) => {
  const levelId = req.params.levelId;
  const { title, difficulty, elements } = req.body;
  res.status(200).json({ message: `Niveau ${levelId} mis à jour`, title, difficulty, elements });
});

module.exports = router;
