const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemActions module for handling item-related operations
const itemActions = require("./controllers/itemActions");

// Route to get a list of items
router.get("/items", itemActions.browse);
// Route to get a specific item by ID
router.get("/items/:id", (req, res) => {
  const itemId = req.params.id;
  client
    .query(
      `SELECT p.product_name AS title,
      p.link_to AS link,
      c.label AS category, 
      s.label AS status 
      FROM product AS p
      INNER JOIN category AS c ON p.category_id = c.id 
      INNER JOIN status AS s ON p.status_id = s.id
      WHERE p.id = ?`,
      [itemId]
    )
    .then(([product]) => {
      res.status(200).json(product[0]);
    });
});

// Route to add a new item
router.post("/items", itemActions.add);

/* ************************************************************************* */

module.exports = router;
