const express = require('express');

const app = express();
//mongodb+srv://<username>:<password>@cluster0.onxquvc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://demo:gt2910@cluster0.onxquvc.mongodb.net/sample_mflix?retryWrites=true&w=majority&appname=Cluster0'
)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));
app.use((req, res, next) => {
   console.log("Requête est reçue !");
   next();
});

const User = require('./models/User');
const bcrypt = require('bcrypt');

app.use((req, res, next) => {
  res.status(201);
   next();
});

app.use((req, res, next) => {
  res.json({message:'La requête a bien été reçue !'});
   next();
});

app.use((req, res, next) => {
 console.log('Réponse envoyée avec succès !');
 });
 
module.exports = app;