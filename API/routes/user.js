const express = require('express');
const router = express.Router();

// Récupére les infos user
router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
  res.status(200).json({ message: `Infos de l'utilisateur ${userId}`, userId });
});

// Update profil user
router.put('/:userId', (req, res) => {
  const userId = req.params.userId;
  const { username, avatar } = req.body;
  res.status(200).json({ message: `Profil mis à jour pour l'utilisateur ${userId}`, username, avatar });
});

// Supprime un user
router.delete('/:userId', (req, res) => {
  const userId = req.params.userId;
  res.status(200).json({ message: `Utilisateur ${userId} supprimé` });
});

module.exports = router;