const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

const User = db.users;

const signup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const data = {
      userName,
      email,
      passwordHash: await bcrypt.hash(password, 10),
    };

    const user = await User.create(data);


    if (user) {
      let token = jwt.sign({ id: user.id }, process.env.SECRET_ACCESS_TOKEN, {
        expiresIn: 24 * 60 * 60 * 1000,
      });

      res.cookie("jwt", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
      console.log("user", JSON.stringify(user, null, 2));
      console.log(token);

      return res.status(201).send(user)
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


const login = async (req, res) => {
  try {
    const { login, password } = req.body;

    let user = await User.findOne({
      where: {
        [Op.or]: [
          { email: login },
          { userName: login }
        ]
      }
    });

    if (user) {
      const isSame = await bcrypt.compare(password, user.passwordHash);
      if (isSame) {
        let token = jwt.sign({ id: user.id }, process.env.SECRET_ACCESS_TOKEN, {
          expiresIn: 1 * 24 * 60 * 60 * 1000
        });

        res.cookie("jwt", token, {
          maxAge: 1 * 24 * 60 * 60,
          httpOnly: true,
        });
        const userWithtoken = {
          ...user,
          'token': token
        }
        return res.status(201).send(userWithtoken);
      } else {
        return res.status(401).send("Authentication failed, wrong password");
      }
    } else {
      return res.status(401).send("Authentication failed, user not found");
    }
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getName = async (req, res) => {
  try {
    const { id } = req.query;
    let user = await User.findOne({
      where: {
        id: id
      }
    });
    if (user) {
      return res.status(200).send(user);
    } else {
      return res.status(404).send("No user found")
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' })
  }
}

module.exports = {
  signup,
  login,
  getName
};


