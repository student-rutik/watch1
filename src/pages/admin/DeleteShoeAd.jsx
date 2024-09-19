import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./DeleteShoeAd.css";

const DeleteShoeAd = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteShoe = async () => {
    setLoading(true);
    try {
      await axios.delete(`https://wandering-plume-damselfly.glitch.me/api/admin/shoes/${id}`);
      toast.success("Shoe Deleted Successfully");
      navigate("/admin");
    } catch (error) {
      setError("Failed to delete shoe");
    } finally {
      setLoading(false);
    }
  };

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
      <div className="delete-container">
        <h2>Are You Sure You want to delete this shoe? </h2>
        <button className="delete-button" onClick={handleDeleteShoe}>
          Yes, Delete it
        </button>
      </div>
    </>
  );
};

export default DeleteShoeAd;

