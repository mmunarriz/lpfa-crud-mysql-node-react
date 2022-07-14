import { Container } from "react-bootstrap"
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ClubDataService from "../services/ClubService";


const Club = props => {
  const { id } = useParams();
  let navigate = useNavigate();

  const initialClubState = {
    id: null,
    name: "",
    full_name: "",
    address: "",
    phone: "",
    accredited: false
  };
  const [currentClub, setCurrentClub] = useState(initialClubState);
  const [message, setMessage] = useState("");

  const getClub = id => {
    ClubDataService.get(id)
      .then(response => {
        setCurrentClub(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getClub(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentClub({ ...currentClub, [name]: value });
  };

  const updateAccredited = status => {
    var data = {
      id: currentClub.id,
      name: currentClub.name,
      full_name: currentClub.full_name,
      address: currentClub.address,
      phone: currentClub.phone,
      accredited: status
    };

    ClubDataService.update(currentClub.id, data)
      .then(response => {
        setCurrentClub({ ...currentClub, accredited: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateClub = () => {
    ClubDataService.update(currentClub.id, currentClub)
      .then(response => {
        console.log(response.data);
        setMessage("The club was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteClub = () => {
    ClubDataService.remove(currentClub.id)
      .then(response => {
        console.log(response.data);
        navigate("/clubs");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <Container>
      <div>
        {currentClub ? (
          <div className="edit-form mt-4">
            <h4>Club</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={currentClub.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="full_name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="full_name"
                  name="full_name"
                  value={currentClub.full_name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={currentClub.address}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={currentClub.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentClub.accredited ? "Accredited" : "Discredited"}
              </div>
            </form>

            {currentClub.accredited ? (
              <button
                className="btn btn-sm btn-primary mr-2"
                onClick={() => updateAccredited(false)}
              >
                Discredit
              </button>
            ) : (
              <button
                className="btn btn-sm btn-primary"
                onClick={() => updateAccredited(true)}
              >
                Accredit
              </button>
            )}

            <button className="btn btn-sm btn-danger mr-2" onClick={deleteClub}>
              Delete
            </button>

            <button
              type="submit"
              className="btn btn-sm btn-success"
              onClick={updateClub}
            >
              Update
            </button>
            <p>{message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Club...</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Club;
