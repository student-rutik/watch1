import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./ReadShoeAd.css";

const ReadShoeAd = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shoe, setShoe] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShoe = async () => {
      try {
        const response = await axios.get(
          `https://wandering-plume-damselfly.glitch.me/api/admin/shoes/${id}`
        );
        console.log(response.data);
        setShoe(response.data);
      } catch (error) {
        setError("Failed to fetch shoe");
      } finally {
        setLoading(false);
      }
    };

    fetchShoe();
  }, []);

  if (loading)
    return (
      <div style={{ textAlign: "center", fontSize: "2rem" }}>Loading...</div>
    );
  if (error)
    return <div style={{ textAlign: "center", fontSize: "2rem" }}>{error}</div>;
  return (
    <>
      <button className="back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="solo-card">
        <div className="solo-card-header">
          <h2 className="solo-header-title">Shoe Details</h2>
        </div>
        <div className="solo-card-body">
          <p>Name: {shoe.name}</p>
          <p>Brand: {shoe.brand}</p>
          <p>Price: {shoe.price}</p>
          <p>Image:</p>
          {shoe.imageUrl && (
            <div>
              <img
                src={shoe.imageUrl}
                alt={shoe.name}
                className="solo-shoe-image"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ReadShoeAd;
