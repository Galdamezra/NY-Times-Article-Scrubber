const axios = require("axios");
const router = require("express").Router();


//
router.get("/recipes", (req, res) => {
  axios
    .get("https://api.nytimes.com/svc/books/v3/lists.json", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
