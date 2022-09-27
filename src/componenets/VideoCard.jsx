import React from "react";
import "../styles/Video.css";
const VideoCard = ({image}) => {
  return <div className="video">
  <img src={image} alt='${index} video' />
  </div>;
};

export default VideoCard;
