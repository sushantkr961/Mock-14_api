const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Home");
// });

router.get("/", (req, res) => {
  const wordLength = Math.floor(Math.random() * (6 - 4 + 1) + 4);
  let word = "";
  const possibleCharacters = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < wordLength; i++) {
    word += possibleCharacters.charAt(
      Math.floor(Math.random() * possibleCharacters.length)
    );
  }
  res.send({ word });
});

router.get("/medium", (req, res) => {
  const wordLength = Math.floor(Math.random() * (8 - 6 + 1) + 6); // generates a random number between 6 and 8
  let word = "";
  const possibleCharacters = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < wordLength; i++) {
    word += possibleCharacters.charAt(
      Math.floor(Math.random() * possibleCharacters.length)
    );
  }

  res.send({ word });
});

router.get("/hard", (req, res) => {
  const word = (Math.random() + 1).toString(36).substring(3);
  res.send({ word });
});

module.exports = router;
