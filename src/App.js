import "./App.css";
import PreNavbar from "./componenets/PreNavbar";
import "../src/styles/PreNavbar.css";
import Navbar from "./componenets/Navbar";
import Slider from "./componenets/Slider.jsx";
import Offers from "./componenets/Offers.jsx";
import Heading from "./componenets/Heading.jsx";
import StarProducts from "./componenets/StarProducts.jsx";
import HotAccessoriesMenu from "./componenets/HotAccessoriesMenu.jsx";
import HotAccessories from "./componenets/HotAccessories.jsx";
import ProductReview from "./componenets/ProductReview.jsx";
import Videos from "./componenets/Videos.jsx";
import Banner from "./componenets/Banner.jsx";
import Footer from "./componenets/Footer.jsx";
import NavOptions from "./componenets/NavOptions.jsx";
import { BrowserRouter } from "react-router-dom";
import data from "./data/data.json";

function App() {
  return (
    <BrowserRouter>
      <PreNavbar
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
        audio={data.audio}
        accessories={data.accessories}
      />
      <Navbar />

      <NavOptions />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text={"STAR PRODUCTS"} />
      <StarProducts starProducts={data.starProduct} />
      <Heading text={"HOT ACCESSORIES"} />
      <HotAccessoriesMenu />

      <HotAccessories
        music={data.hotAccessories.music}
        musicCover={data.hotAccessoriesCover.music}
      />
      {/*
      <HotAccessories
        smartDivice={data.hotAccessories.smartDevice}
        smartDeviceCover={data.hotAccessoriesCover.smartDevice}
      />
      <HotAccessories
        home={data.hotAccessories.home}
        homeCover={data.hotAccessoriesCover.home}
      />
      <HotAccessories
        lifeStyle={data.hotAccessories.lifeStyle}
        lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
      />
      <HotAccessories
        mobile={data.hotAccessories.mobileAccessories}
        mobileCover={data.hotAccessoriesCover.mobileAccessories}
      />
      */}

      <Heading text={"PRODUCT REVIEWS"} />
      <ProductReview productReview={data.productReviews} />
      <Heading text={"VIDEOS"} />
      <Videos Videos={data.videos} />
      <Heading text={"IN THE PRESS"} />
      <Banner banner={data.banner} />
      <Footer footer={data.footer} />
    </BrowserRouter>
  );
}

export default App;
