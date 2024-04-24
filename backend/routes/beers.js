 // il faut importer express en permier puis router, l'ordre est tres important........
 const express = require('express');
 const router = express.Router();
 
 const beerCtrl = require('../controllers/beer');
 
 
 // Middleware pour creetbeer
 const auth = require('../middleware/auth');

 //: Route pour creer les bières
 router.post('/',auth, beerCtrl.createBeer );
 
 //: Route pour récupérer toutes les bières
 router.get('/',auth, beerCtrl.getAllBeers);
 
 module.exports = router;

 //commentaire inutile lol
