const Beer = require ('../models/Beer');

//; Créer (ajouter) une bière
exports.createBeer = (req, res, next) => {
    const beerObject = req.body;
    delete beerObject._id;
     const beer = new Beer({
      //les trois points veut dire qu'on recupere
        ...beerObject,
        likes: 0,
        dislikes: 0
     });
     beer.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré avec succès !' }))
        .catch(error => res.status(400).json({ error }));
  };

  //; Récupérer toutes les bières
exports.getAllBeers = (req, res, next) => {
   Beer.find()
      .then(beers => res.status(200).json(beers))
      .catch(error => res.status(400).json({ error }));
};