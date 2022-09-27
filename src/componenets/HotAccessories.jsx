import React from "react";
import HotItemCard from "../componenets/HotItemCard.jsx";
import "../styles/HotAccessories.css";
const HotAccessories = ({
  music,
  musicCover,
  smartDivice,
  smartDeviceCover,
  home,
  homeCover,
  lifeStyle,
  lifeStyleCover,
  mobile,
  mobileCover,
}) => {
  return (
    <div className="hotAccessories">
      <div>
        <img
          src={
            musicCover ||
            smartDeviceCover ||
            homeCover ||
            lifeStyleCover ||
            mobileCover
          }
          alt="cover"
        />
      </div>

      <div>
        {music &&
          music.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
        {smartDivice &&
          smartDivice.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
        {home &&
          home.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
        {lifeStyle &&
          lifeStyle.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
        {mobile &&
          mobile.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
          <HotItemCard  image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />

      </div>
    </div>
  );
};

export default HotAccessories;
