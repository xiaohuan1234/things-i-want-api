const express = require("express");
const router = express.Router();
const {Bag} = require("../models/thing");
/*
    URL	                HTTP Verb   Action
1.  /api/bags/	        GET	        index
2.  /api/bags/new	      GET	        new
3.  /api/bags/	        POST	      create
4.  /api/bags/:id	      GET	        show
5.  /api/bags/:id/edit	GET	        edit
6.  /api/bags/:id	      PUT	        update
7.  /api/bags/:id	      DELETE	    destroy
*/

// 1. /api/bags/	        GET	        index
router.get("/", function(req, res, next) {
  Bag.find({})
    .then(bags => {res.send(bags);})
    .catch(err => next(err));
});

// 2. /api/bags/new	      GET	        new
//  does not need any read/write with the db

// 3.  /api/bags/	        POST	      create
router.post("/", function(req, res, next) {
  Bag.create(req.body)
    .then(bag => res.status(201).send(bag))
    .catch(err => next(err));
});

// 4.  /api/bags/:id	      GET	        show
router.get("/:id", function(req, res, next) {
  Bag.findById(req.params.id)
    .then(bag => res.send(bag))
    .catch(err => next(err));
});

// 5.  /api/bags/:id/edit	  GET	        edit
// interaction with db is the same as GET

// 6.  /api/bags/:id	      PUT	        update
router.put("/:id", function(req, res, next) {
  Bag.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(bag => res.status(202).send(bag))
    .catch(err => next(err));
});

// 7.  /api/bags/:id	      DELETE	    destroy
router.delete("/:id", function(req, res, next) {
  Bag.findByIdAndRemove(req.params.id)
    .then(bag => res.send(bag))
    .catch(err => next(err));
});

module.exports = router;
