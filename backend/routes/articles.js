const router = require('express').Router();
let Article = require('../models/articles.model');


router.route('/').get((req, res) => {
    Article.find()
      .then(articles => res.json(articles))
      .catch(err => res.status(400).json('Error: ' + err));
  });


router.route('/get').get((req, res) => {
  const id=req.query.id;
    Article.findById(id)
      .then(article => res.json(article))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports=router