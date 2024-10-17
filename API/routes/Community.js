const express = require('express');
const router = express.Router();

// Page communauté
router.get('/community', (req, res) => {
    res.status(200).json({
      message: 'Bienvenue sur la page Communauté',
      description: 'Discussions, niveaux créés par la communauté, etc.'
    });
  });
  
  module.exports = router;