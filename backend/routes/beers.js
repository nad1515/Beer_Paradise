 // il faut importer express en permier puis router, l'ordre est tres important........
 const express = require('express');
 const router = express.Router();
 
//; Importation du middleware auth
 const auth = require('../middleware/auth');

 //; Importation du middleware multer-config /ATTENTION, l’ordre des middleware est important. Si, par exemple, nous plaçons multer avant le middleware auth, cela signifie que nous acceptons les images des requêtes non authentifiées, et que le téléchargement d’images sera toujours accepté. Nous ne voulons pas cela, et c’est pourquoi, nous veillons à placer le middleware multer après le middleware auth. 
const multer = require('../middleware/multer-config');

 const beerCtrl = require('../controllers/beer');
  

 //: Route pour creer les bières
//  router.post('/',auth, beerCtrl.createBeer );
 
 //: Route pour récupérer toutes les bières
 router.get('/',auth, beerCtrl.getAllBeers);

 //: Route pour récupérer une seule bière
 router.get('/:id', auth, beerCtrl.getOneBeer);

 //: Route pour modifier et mettre à jour une bière
 router.put('/:id', auth, beerCtrl.modifyBeer);

 //: Route pour modifier suprimer une bière
 router.delete('/:id', auth, beerCtrl.deleteBeer);

 //: Route pour créer ou ajouter une bière
 router.post('/',auth, multer, beerCtrl.createBeer );
 
 module.exports = router;

 //commentaire inutile lol
