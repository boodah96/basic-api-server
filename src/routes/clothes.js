'use strict';
const express = require('express');
const validator = require('../middleware/validator.js');
const Cloth = require('../models/clothes.js');
const cloth = new Cloth;
const router = express.Router();


router.get('/', getCloth);
router.post('/', createCloth);
router.get('/:id', validator, getClothById);
router.put('/:id', validator, updateCloth);
router.delete('/:id', validator, deleteCloth);




//handlers
function getCloth(req, res) {
    const resObj = cloth.read();
    res.json(resObj);
}

function createCloth(req, res) {
    const clothObject = req.body;
    const resObj = cloth.create(clothObject);
    res.json(resObj);
}

function getClothById(req, res) {
    const resObj = cloth.read(req.params.id);
    res.json(resObj);

}


function updateCloth(req, res) {
    const clothObject = req.body;
    const resObj = cloth.update(req.params.id, clothObject)
    res.json(resObj);
}

function deleteCloth(req, res) {
    const resObj = cloth.delete(req.params.id);
    res.json(resObj);

}

module.exports = router;