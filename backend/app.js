const express = require('express');

const app = express();
//mongodb+srv://<username>:<password>@cluster0.onxquvc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nani:Projet-Node@cluster0.r4x5akq.mongodb.net/db_nad?retryWrites=true&w=majority&appName=Cluster0'
)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   res.setHeader('Access-Control-Allow-Credentials', true);
   next();
});
 //..importation de router.......
 const userRoutes = require('./routes/users');
 app.use('/api/auth', userRoutes);

 const beerRoutes = require('./routes/beers');
 app.use('/api/beers', beerRoutes);



module.exports = app;

