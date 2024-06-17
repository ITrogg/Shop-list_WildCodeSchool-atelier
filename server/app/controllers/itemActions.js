// Import access to database tables
const client = require("../../database/client");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const items = await client.query(
      `SELECT p.id AS id,
      p.product_name AS title,
      p.link_to AS link, 
      c.label AS category, 
      s.label AS status 
      FROM product AS p 
      INNER JOIN category AS c ON p.category_id = c.id 
      INNER JOIN status AS s ON p.status_id = s.id
      ORDER BY p.id`
    );

    // Respond with the items in JSON format
    res.status(200).json(items[0]);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const item = await client.query(
      `SELECT p.id AS id,
      p.product_name AS title,
      p.link_to AS link,
      c.label AS category, 
      s.label AS status 
      FROM product AS p
      INNER JOIN category AS c ON p.category_id = c.id 
      INNER JOIN status AS s ON p.status_id = s.id
      WHERE p.id = ?`,
      [req.params.id]
    );

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (item == null) {
      res.sendStatus(404);
    } else {
      res.json(item[0][0]);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const item = req.body;

  try {
    // Insert the item into the database
    const insertId = await client.query(
      "INSERT INTO product (product_name, link_to,  category_id, status_id) VALUES (?)",
      [item.title, item.link, item.category, item.status]
    );

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
