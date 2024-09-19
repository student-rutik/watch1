import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./createShoe.css";

const CreateShoe = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("brand", brand);
    formData.append("price",price);
    if (image) {
      formData.append("image", image);
    }

    try {
 
      const response = await axios.post(
        `https://wandering-plume-damselfly.glitch.me/api/admin/shoes`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Shoe Created Successfully");
      navigate("/admin");
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        setError("Unexpected error Client-Side");
      }
    } finally {
      setLoading(false);
    }
  };



  if (loading)
    return (
      <div style={{ textAlign: "center", fontSize: "2rem" }}>Loading...</div>
    );
  if (error)
    return <div style={{ textAlign: "center", fontSize: "2rem" }}>{error}</div>; // Handle error state
  return (
    <>
      <button className="back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="create-shoe-container">
        <h2>Create New Shoe</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="brand">Brand: </label>
            <select
              className="select-tag"
              id="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
            >
              <option value="">Select Brand</option>
              <option value="Rolex">Rolex</option>
              <option value="Richard Mille">Richard Mille</option>
              <option value="Jacob&Co">Jacob&Co</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              value={name}
              id="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              value={price}
              id="price"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>

          <button type="submit" disabled={loading} className="my-btn">
            Create Shoe
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateShoe;