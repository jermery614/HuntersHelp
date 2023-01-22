const { validationResult } = require('express-validator');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;




const getAll = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()){
    return res.status(422).json({ errors:errors.array()})
  }

  try {
    const result = await mongodb.getDb().db('hunters').collection('calibre').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
  } catch (error) {
     res.status(400).json({error: 'Error:'+error})
  }
  
};

const getSingle = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    return res.status(422).json({errors: errors.array()})
  }
  
  if (req.params.id==null){
    return res.status(400).json({error: 'Need Id to process request.'})
  }
  try{
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
    .getDb()
    .db('hunters')
    .collection('calibre')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
  } catch(error){
    res.status(400).json({error: 'Error:'+error})
  }
  
};
// creating contact method to add to the database.
const createCalibre = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    return res.status(422).json({errors: errors.array()})
  }
  
  const calibre = {
    cartridgeName: req.body.cartridgeName,
    calibre: req.body.calibre,
    bulletWeight: req.body.bulletWeight,
    muzzleVelocity: req.body.muzzleVelocity,
    bulletEnergyAtMuzzle: req.body.bulletEnergyAtMuzzle,
    bulletMomentumAtMuzzle: req.body.bulletMomentumAtMuzzle,
    bulletSectionalDensity: req.body.bulletSectionalDensity,
    recoilEnergy: req.body.recoilEnergy,
    game: req.body.game
  
  };

  const response = await mongodb.getDb().db("hunters").collection('calibre').insertOne(calibre);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};

const updateCalibre = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    return res.status(422).json({errors: errors.array()})
  }
  const userId = new ObjectId(req.params.id);
  const calibre = {
    cartridgeName: req.body.cartridgeName,
    calibre: req.body.calibre,
    bulletWeight: req.body.bulletWeight,
    muzzleVelocity: req.body.muzzleVelocity,
    bulletEnergyAtMuzzle: req.body.bulletEnergyAtMuzzle,
    bulletMomentumAtMuzzle: req.body.bulletMomentumAtMuzzle,
    bulletSectionalDensity: req.body.bulletSectionalDensity,
    recoilEnergy: req.body.recoilEnergy,
    game: req.body.game
    
  };
  const response = await mongodb
    .getDb()
    .db("hunters")
    .collection('calibre')
    .replaceOne({ _id: userId }, calibre);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
  }
};

const deleteCalibre = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    return res.status(422).json({errors: errors.array()})
  }
  
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db("hunters").collection('calibre').remove({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};

module.exports = { getAll, getSingle, deleteCalibre, createCalibre, updateCalibre };