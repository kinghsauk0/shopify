import React, { useEffect, useState } from "react";
import Homecss from "../assets/styles/Home.module.css";
import axios from 'axios';
import Products from "../components/Products";
import { useNavigate } from "react-router-dom";
import { UseCheckoutDataContext } from "../context/CheckoutData.context";

function Home() {
  const [data, setData] = useState({ products: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const navigate = useNavigate()
  const {getcheckoutData} =UseCheckoutDataContext()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://messold101.myshopify.com/admin/api/2023-01/products.json', {
          headers: {
            'X-Shopify-Access-Token': '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',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      } 
    };

    fetchProducts();
  }, []);

   const heandelCheckOut = (products) => {
    navigate("/checkout")
    getcheckoutData(products)
   }

  //console.log(data.products)
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={Homecss.container}>
      <h2 className={Homecss.title}>Best Products</h2>
      <div className={Homecss.subcontainer}>

      
      {data.products && data.products.length > 0 ? (
        data.products.map((item, index) => (
          <Products key={index} 
          id={item.id}
          image={item.image.src}
          title={item.title}
          price={item.variants[0].price}
          onClick={()=>heandelCheckOut(item)}
           />
        ))
      ) : (
        <div>No products available</div>
      )}
      </div>
    </div>
  );
}

export default Home;
