const express = require("express");
const db = require("../models");

const User = db.users;


const saveUser = async (req, res, next) => {
  try {
    const username = await User.findOne({
      where: {
        userName: req.body.userName,
      },
    });
    if(username) {
      return res.json(409).send("username is already taken");
    }

    const emailcheck = await User.findOne({
      where: {
        email: req.body.email,
      }
    });

    if(emailcheck) {
      return res.json(409).send("Email is already taken");
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  saveUser,
};
