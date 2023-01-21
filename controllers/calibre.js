const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;




const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db('hunters').collection('calibre').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
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
};
// creating contact method to add to the database.
const createCalibre = async (req, res) => {
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
    // age:req.body.age
  };

  const response = await mongodb.getDb().db("hunters").collection('calibre').insertOne(calibre);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};

const updateCalibre = async (req, res) => {
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
    // age:req.body.age
    
    
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