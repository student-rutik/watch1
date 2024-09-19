import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const UpdateShoeAd = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShoe = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://wandering-plume-damselfly.glitch.me/api/admin/shoes/${id}`
        );
        const shoe = response.data;
        setName(shoe.name);
        setBrand(shoe.brand);
        setPrice(shoe.price);
      } catch (error) {
        setError("Failed to Fetch Shoe data Client-Side");
      } finally {
        setLoading(false);
      }
    };
    fetchShoe();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("brand", brand);
    formData.append("price", price);
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.put(`http://localhost:5000/api/admin/shoes/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Shoe Updated Successfully");
      navigate("/admin");
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        setError("Failed to Update Shoe Client-Side");
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
    return <div style={{ textAlign: "center", fontSize: "2rem" }}>{error}</div>;
  return (
    <>
      <button className="back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="create-shoe-container">
        <h2>Update Shoe</h2>
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
              <option value="Nike">Nike</option>
              <option value="Puma">Puma</option>
              <option value="Adidas">Adidas</option>
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
            />
          </div>

          <button type="submit" disabled={loading} className="my-btn">
            Update Shoe
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateShoeAd;
