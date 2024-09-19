import React, { useEffect, useState } from "react";
  
  import "./Collection.css";
  import axios from "axios";
  import { useCart } from "react-use-cart";
  
  const File = () => {
    const [shoes, setShoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const { addItem } = useCart();
    useEffect(() => {
      const fetchShoes = async () => {
        try {
          const response = await axios.get(
            "https://wandering-plume-damselfly.glitch.me/api/admin/shoes"
          );
          // console.log(response.data);
          setShoes(response.data);
        } catch (error) {
          setError("Failed to fetch shoes");
        } finally {
          setLoading(false);
        }
      };
  
      fetchShoes();
    }, []);
  
    // if (loading)
    //   return (
    //     <div style={{ textAlign: "center", fontSize: "2rem" }}>Loading...</div>
    //   );
    // if (error)
    //   return <div style={{ textAlign: "center", fontSize: "2rem" }}>{error}</div>;
    return (
      <>
        
        <div className="my-container">
          {shoes.map((shoe) => (
            <div key={shoe._id} className="my-col-card">
              <div className="my-col-con">
                <img src={shoe.imageUrl} alt={shoe.name} className="my-col-img" />
                <p>{shoe.name}</p>
                <p>{shoe.brand}</p>
                <p>{shoe.price}</p>
                <button
                className="btn"
                  onClick={() => {
                    addItem({
                      id: shoe._id, // Ensure 'id' is present
                      name: shoe.name,
                      price: shoe.price,
                      image: shoe.imageUrl,
                      quantity: 1, // Default quantity
                    });
                    alert(`Added ${shoe.name} to cart!`);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>






      



     
      </>
    );




   
  };

  
  export default File;