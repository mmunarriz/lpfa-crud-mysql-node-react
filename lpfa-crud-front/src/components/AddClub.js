import React, { useState } from "react";
import ClubDataService from "../services/ClubService";

const AddClub = () => {
  const initialClubState = {
    id: null,
    name: "",
    full_name: "",
    address: "",
    phone: "",
    accredited: false
  };
  const [club, setClub] = useState(initialClubState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setClub({ ...club, [name]: value });
  };

  const saveClub = () => {
    var data = {
      name: club.name,
      full_name: club.full_name,
      address: club.address,
      phone: club.phone
    };

    ClubDataService.create(data)
      .then(response => {
        setClub({
          id: response.data.id,
          name: response.data.name,
          full_name: response.data.full_name,
          address: response.data.address,
          phone: response.data.phone,
          accredited: response.data.accredited
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newClub = () => {
    setClub(initialClubState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form mt-4">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newClub}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <h4>Add Club</h4>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={club.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="full_name">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="full_name"
              required
              value={club.full_name}
              onChange={handleInputChange}
              name="full_name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              required
              value={club.address}
              onChange={handleInputChange}
              name="address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              required
              value={club.phone}
              onChange={handleInputChange}
              name="phone"
            />
          </div>

          <button onClick={saveClub} className="btn btn-success mt-4">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddClub;
