import React from 'react'
import '../styles/Videos.css'
import VideoCard from '../componenets/VideoCard.jsx';
const Videos = ({Videos}) => {
  return (
    <div className='videos'>
      {
        Videos.map((item,index)=>(
            <VideoCard name={item.name} image={item.image} index={index}/>
        ))
      }
    </div>
  )
}

export default Videos
