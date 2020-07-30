'use strict';
var express = require('express');
var router = express.Router();
var problemsModel = require('../models/problems');
var userModel = require('../models/user');
/* GET home page. */
router.get('/', function (req, res) {
    try {
        //Retrieve all articles if there is any 
        problemsModel.find({}, function (err, foundProblems) {
            console.log(err);
            console.log(foundProblems);
            //Pass found articles from server to pug file
            res.render('problems/index', { problems: foundProblems });
        });
    } catch (err) {
        console.log(err);
        res.render('index', { title: 'Express' });
    }
});

/* GET insert page. */
router.get('/insert', function (req, res) {
    res.render('insert');
});

/* POST insert page */
router.post('/insert', function (req, res) {
    //Create a new article using the Articles Model Schema
    const problem = new problemsModel({ name: req.body.requesterName, description: req.body.description, address: req.body.address, city: req.body.city, state: req.body.state, mobile: req.body.mobile });
    //Insert article into DB
    problem.save(function (err) {
        console.log(err);
        res.redirect('/');
    });
});

/* GET update page */
router.get('/update/:id', function (req, res) {
    problemsModel.findById(req.params.id, function (err, foundProblem) {
        if (err) console.log(err);
        //Render update page with specific article
        res.render('update', { problem: foundProblem })
    })
});

/* POST update page */
router.post('/update', function (req, res) {
    console.log(req.body);
    //Find and update by id
    problemsModel.findByIdAndUpdate(req.body.id, { name: req.body.requesterName, description: req.body.description, address: req.body.address, city: req.body.city, state: req.body.state, mobile: req.body.mobile } , function (err, model) {
        console.log(err);
        res.redirect('/');
    });
});

/* POST delete page */
router.post('/delete/:id', function (req, res) {
    //Find and delete article
    problemsModel.findByIdAndDelete(req.params.id, function (err, model) {
        res.redirect('/');
    });
});
module.exports = router;
