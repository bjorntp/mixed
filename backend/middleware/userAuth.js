const express = require("express");
const db = require("../models");
const jwt = require('jsonwebtoken');

const User = db.users;


const saveUser = async (req, res, next) => {
  try {
    const username = await User.findOne({
      where: {
        userName: req.body.userName,
      },
    });
    if (username) {
      return res.json(409).send("username is already taken");
    }

    const emailcheck = await User.findOne({
      where: {
        email: req.body.email,
      }
    });

    if (emailcheck) {
      return res.json(409).send("Email is already taken");
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

const authentication = async (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).send('No token provided, access denied.');
  try {
    const decoded = jwt.verify(token, process.env.SECRET_ACCESS_TOKEN);
    req.userId = decoded.id;
    console.log("Authenticated with userid ", decoded.id)
    next();
  } catch (error) {
    console.log(error);
    res.status(403).send('There was an error authenticating your token, perhaps it has expired.')
  }
}

module.exports = {
  saveUser,
  authentication
};
