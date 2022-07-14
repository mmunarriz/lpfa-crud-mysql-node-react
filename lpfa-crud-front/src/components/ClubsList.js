import { Container } from "react-bootstrap"
import React, { useState, useEffect } from "react";
import ClubDataService from "../services/ClubService";
import { Link } from "react-router-dom";

const ClubsList = () => {
  const [clubs, setClubs] = useState([]);
  const [currentClub, setCurrentClub] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    retrieveClubs();
  }, []);

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const retrieveClubs = () => {
    ClubDataService.getAll()
      .then(response => {
        setClubs(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveClubs();
    setCurrentClub(null);
    setCurrentIndex(-1);
  };

  const setActiveClub = (club, index) => {
    setCurrentClub(club);
    setCurrentIndex(index);
  };

  const removeAllClubs = () => {
    ClubDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByName = () => {
    ClubDataService.findByName(searchName)
      .then(response => {
        setClubs(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <Container>
      <div className="list row mt-4">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Name"
              value={searchName}
              onChange={onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={findByName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Clubs List</h4>

          <ul className="list-group">
            {clubs &&
              clubs.map((club, index) => (
                <li
                  className={
                    "list-group-item " + (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveClub(club, index)}
                  key={index}
                >
                  {club.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={removeAllClubs}
            disabled
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentClub ? (
            <div>
              <h4>Club</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentClub.name}
              </div>
              <div>
                <label>
                  <strong>Full Name:</strong>
                </label>{" "}
                {currentClub.full_name}
              </div>
              <div>
                <label>
                  <strong>Address:</strong>
                </label>{" "}
                {currentClub.address}
              </div>
              <div>
                <label>
                  <strong>Phone:</strong>
                </label>{" "}
                {currentClub.phone}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentClub.accredited ? "Accredited" : "Discredited"}
              </div>

              <Link
                to={"/clubs/" + currentClub.id}
                className="m-3 btn btn-sm btn-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Club...</p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ClubsList;
