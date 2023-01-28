const { validationResult } = require('express-validator');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;



// create USER
const createUser =async (req, res) => {
  const users = {
    userName: req.body.userName,
    userEmail: req.body.userEmail,
    userAge: req.body.userAge
  };
 const response = await mongodb.getDb().db("hunters").collection('users').insertOne(users);
 if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};

const getAllUsers = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
      return res.status(422).json({ errors:errors.array()})
    }
  
    try {
      const result = await mongodb.getDb().db('hunters').collection('users').find();
    result.toArray().then((lists) => {
  
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
    } catch (error) {
       res.status(400).json({error: 'Error:'+error})
    }
    
  };

const getSingleUSer = async (req, res, next) => {
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
      .collection('users')
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
    } catch(error){
      res.status(400).json({error: 'Error:'+error})
    }
    
  };

const deleteUsers = async (req, res) => {
    const errors = validationResult(req);
  if (!errors.isEmpty()){
    return res.status(422).json({errors: errors.array()})
  }

    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db("hunters").collection('users').remove({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while deleting the User.');
    }
  };
const updateUsers = async (req, res) => {

    const userId = new ObjectId(req.params.id);

    const users = {

        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userAge: req.body.userAge
    };
    const response = await mongodb
    .getDb()
    .db("hunters")
    .collection('users')
    .replaceOne({ _id: userId }, users);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
  }

}


module.exports = { createUser, getAllUsers, getSingleUSer, deleteUsers, updateUsers}