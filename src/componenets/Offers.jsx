import React from "react";
import Offer from '../componenets/Offer.jsx'
import '../styles/Offers.css';
const Offers = ({ offers }) => {
  return (
  <div className="offersSection">
  {
    offers.map((item,index)=>(
<Offer key={item.image} index={index} src={item.image} link={item.url}/>

    ))
  }
  </div>
  );
};

export default Offers;
