const express = require('express');
const router = express.Router();

// Créer un compte (create)
router.post('/create-account', (req, res) => {
  const { username, password, avatar } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Nom d\'utilisateur et mot de passe requis' });
  }
  // création de compte réussisse
  const userId = Math.floor(Math.random() * 10000);
  res.status(200).json({ message: 'Compte créé avec succès', userId, username, avatar });
});

// Connexion (Sign In)
router.post('/sign-in', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Nom d\'utilisateur et mot de passe requis' });
  }
  // connexion réussisse
  const userId = Math.floor(Math.random() * 10000);
  res.status(200).json({ message: 'Connexion réussie', userId, username });
});

module.exports = router;