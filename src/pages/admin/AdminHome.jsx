import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import {
  faPenToSquare,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./AdminHome.css";

const AdminHome = () => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        // const response = await axios.get("http://localhost:5000/api/admin/shoes");
        const response = await axios.get("https://wandering-plume-damselfly.glitch.me/api/admin/shoes");

        setShoes(response.data);
      } catch (error) {
        setError("Failed to fetch shoes");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchShoes();
  }, []);

  if (loading)
    return (
      <div style={{ textAlign: "center", fontSize: "2rem" }}>Loading...</div>
    );
  if (error)
    return <div style={{ textAlign: "center", fontSize: "2rem" }}>{error}</div>;

  return (
    <>
      <div className="all-shoe-container">
        <div className="shoe-header">
          <h1>All Shoes</h1>
          <div>
            <span className="add-new-shoe">Create: </span>
            <Link to={`/admin/shoes/create`} title="Create">
              <FontAwesomeIcon icon={faUserPlus} />
            </Link>
          </div>
        </div>

        {shoes.length === 0 ? (
          <div className="no-shoe-found">No shoes found.</div>
        ) : (
          <div className="shoe-card-container">
            {shoes.map((shoe) => (
              <div key={shoe._id} className="shoe-card">
                <div className="shoe-card-content">
                  <p>Name: {shoe.name} </p>
                  {/* <p>Brand: {shoe.brand} </p>
                  <p>Price: {shoe.price} </p> */}
                </div>

                <div className="card-actions">
                  <Link to={`/admin/shoes/details/${shoe._id}`} title="Read">
                    <FontAwesomeIcon icon={faReadme} />
                  </Link>
                  <Link to={`/admin/shoes/update/${shoe._id}`} title="Update">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
                  <Link to={`/admin/shoes/delete/${shoe._id}`} title="Delete">
                    <FontAwesomeIcon icon={faTrash} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminHome;

