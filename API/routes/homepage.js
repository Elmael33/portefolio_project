// routes/homeRoutes.js
const express = require('express');
const router = express.Router();

// Page d'accueil
router.get('/', (req, res) => {
    res.json({
        message: "Bienvenue sur la page d'accueil",
        description: "Informations principales sur le jeu, statistiques globales, etc."
    });
});

module.exports = router;
