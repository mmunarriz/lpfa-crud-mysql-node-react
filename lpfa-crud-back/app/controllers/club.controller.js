const Club = require("../models/club.model.js");

// Create and Save a new Club
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Club
  const club = new Club({
    name: req.body.name,
    full_name: req.body.full_name,
    address: req.body.address,
    phone: req.body.phone,
    accredited: req.body.accredited || false
  });

  // Save Club in the database
  Club.create(club, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Club."
      });
    else res.send(data);
  });
};

// Retrieve all Clubs from the database (with condition).
exports.findAll = (req, res) => {
  const name = req.query.name;

  Club.getAll(name, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clubs."
      });
    else res.send(data);
  });
};

// Find a single Club by Id
exports.findOne = (req, res) => {
  Club.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Club with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Club with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all accredited Clubs
exports.findAllAccredited = (req, res) => {
  Club.getAllAccredited((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clubs."
      });
    else res.send(data);
  });
};

// Update a Club identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Club.updateById(
    req.params.id,
    new Club(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Club with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Club with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Club with the specified id in the request
exports.delete = (req, res) => {
  Club.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Club with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Club with id " + req.params.id
        });
      }
    } else res.send({ message: `Club was deleted successfully!` });
  });
};

// Delete all Clubs from the database.
exports.deleteAll = (req, res) => {
  Club.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all clubs."
      });
    else res.send({ message: `All Clubs were deleted successfully!` });
  });
};
