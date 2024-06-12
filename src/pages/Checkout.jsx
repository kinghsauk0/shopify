import React from "react";
import { UseCheckoutDataContext } from "../context/CheckoutData.context";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Checkoutcss from "../assets/styles/Checkout.module.css"
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { checkoutData } = UseCheckoutDataContext();
  const navigate = useNavigate()

  // Check if checkoutData and images property exist
  const images = checkoutData?.images ?? [];

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
    //backgroundSize: "cover",
    height: "400px",
  };

  return (
    <div className={Checkoutcss.container}>
      <div className={Checkoutcss.subcontainer1}>
        {images.length > 0 ? (
          <Slide>
            {images.map((item, index) => (
              <div key={index}>
                <div
                  style={{ ...divStyle,backgroundImage: `url(${item.src})` }}
                ></div>
              </div>
            ))}
          </Slide>
        ) : (
          <p>No images available</p>
        )}
      </div>
      <div className={Checkoutcss.subcontainer1}>
        <p className={Checkoutcss.id} ><span>Id:</span> {checkoutData.id}</p>
        <p className={Checkoutcss.des}><span>Description:</span> {checkoutData.handle}</p>
        <p className={Checkoutcss.cat}><span>Categories:</span> {checkoutData.product_type}</p>
        <p className={Checkoutcss.tag}><span>Tags:</span> {checkoutData.tags}</p>
        <p className={Checkoutcss.price}><span>Price:</span> {checkoutData.variants[0].price}</p>
      </div>

      <div className={Checkoutcss.btnContainer}>
        <button>ShopNow</button>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

export default Checkout;
