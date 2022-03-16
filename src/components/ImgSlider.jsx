import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../App.css';
const ImgSlider = () => {
    let settings = {
         dots: true,
         infinite: true,
         speed: 500,
         slidesToShow:1,
         slidesToScroll:1,
         autplay:true
      };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="./images/slider-badging.jpg"/>
      </Wrap>
      <Wrap>
        <img src="./images/slider-badag.jpg"/>
      </Wrap>
      <Wrap>
        <img src="./images/slider-badag.jpg"/>
      </Wrap>
      <Wrap>
        <img src="./images/slider-badag.jpg"/>
      </Wrap>
      <Wrap>
        <img src="./images/slider-badag.jpg"/>
      </Wrap>
    </Carousel>
  )
}

export default ImgSlider
const Carousel =styled(Slider)`
.slick-prev {
  left: 3% !important;
  z-index: 1;
}
.slick-next {
  right: 3% !important;
  z-index: 1;
}
  margin-top:20px;
  ul li button{
    &:before{
      font-size:10px;
      color:white;
    }
  }
  li.slick-active button::before{
    color:white
  }
  .slick-list{
    overflow:visible;
  }
   button{
      z-index:1
    }
`
// button{
//   z-index:100
// }
const Wrap=styled.div`
cursor:pointer;
  img {
      width:100%;
      height:100%;


      &:hover{
        border:4px solid rgba(249,249,249,0.8)
      }
  }

`