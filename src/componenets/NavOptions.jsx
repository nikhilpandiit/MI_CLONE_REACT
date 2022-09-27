import React from "react";
import NavCard from "../componenets/NavCard.jsx";
import '../styles/NavOptions.css';
import { useState } from "react";
import { useEffect } from "react";
const NavOptions = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
  audio,
  accessories,
}) => {
  const [miPhoneToggle, setMiPhoneToggle] = useState(false);
  const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopToggle, setLaptopToggle] = useState(false);
  const [fitnessToggle, setFitnessToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);

  useEffect(() => {
    if (window.location === "/miphones") {
      return setMiPhoneToggle(true);
    }
    if (window.location === "/redmiphones") {
      return setRedmiPhoneToggle(true);
    }
    if (window.location === "/tv") {
      return setTvToggle(true);
    }
    if (window.location === "/laptops") {
      return setLaptopToggle(true);
    }
    if (window.location === "/fitness") {
      return setFitnessToggle(true);
    }
    if (window.location === "/home") {
      return setHomeToggle(true);
    }
    if (window.location === "/audio") {
      return setAudioToggle(true);
    }
    if (window.location === "/accessories") {
      return setAccessoriesToggle(true);
    }
  }, []);

  return (
    <div>
      <div className="navOptions">
        {miPhoneToggle
          ? miPhones.map((item) => (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            ))
          : null}
        {redmiPhoneToggle
          ? redmiPhones.map((item) => (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            ))
          : null}
        {tvToggle
          ? tv.map((item) => (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            ))
          : null}
        {laptopToggle
          ? laptop.map((item) => (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            ))
          : null}
        {fitnessToggle
          ? fitnessAndLifeStyle.map((item) => (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            ))
          : null}
        {homeToggle
          ? home.map((item) => (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            ))
          : null}
        {audioToggle
          ? audio.map((item) => (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            ))
          : null}
        {accessoriesToggle
          ? accessories.map((item) => (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default NavOptions;
