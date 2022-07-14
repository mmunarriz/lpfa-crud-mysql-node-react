const sql = require("./db.js");

// constructor
const Club = function(club) {
  this.name = club.name;
  this.full_name = club.full_name;
  this.address = club.address,
  this.phone = club.phone,
  this.accredited = club.accredited;
};

Club.create = (newClub, result) => {
  sql.query("INSERT INTO clubs SET ?", newClub, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created club: ", { id: res.insertId, ...newClub });
    result(null, { id: res.insertId, ...newClub });
  });
};

Club.findById = (id, result) => {
  sql.query(`SELECT * FROM clubs WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found club: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Club with the id
    result({ kind: "not_found" }, null);
  });
};

Club.getAll = (name, result) => {
  let query = "SELECT * FROM clubs";

  if (name) {
    query += ` WHERE name LIKE '%${name}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("clubs: ", res);
    result(null, res);
  });
};

Club.getAllAccredited = result => {
  sql.query("SELECT * FROM clubs WHERE accredited=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("clubs: ", res);
    result(null, res);
  });
};

Club.updateById = (id, club, result) => {
  sql.query(
    "UPDATE clubs SET name = ?, full_name = ?, address = ?, phone = ?, accredited = ? WHERE id = ?",
    [club.name, club.full_name, club.address, club.phone, club.accredited, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Club with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated club: ", { id: id, ...club });
      result(null, { id: id, ...club });
    }
  );
};

Club.remove = (id, result) => {
  sql.query("DELETE FROM clubs WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Club with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted club with id: ", id);
    result(null, res);
  });
};

Club.removeAll = result => {
  sql.query("DELETE FROM clubs", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} clubs`);
    result(null, res);
  });
};

module.exports = Club;
