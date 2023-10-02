import React from 'react'
// import './Blog.css';
import { BlogData } from './BlogData';
// import Slider from "react-slick";
const OtherBlog = () => {
    // var settings = {
    //     dots: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 991,
    //             settings: {
    //               slidesToShow: 2,
    //               slidesToScroll:1 ,
    //             },
    //           },
    //       {
    //         breakpoint: 767,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //         },
    //       },
    //     ],
    //   };
  return (
    <>
     <div className='otherpost_section'>
        <p className='otherpost_heading'>Other Posts</p>
        <div className='otherpost_slider'>

        {/* <Slider {...settings}>
           {
            BlogData.map((data)=>{
                return(
                    <>
                    <div className='otherpost_box'>
                        <img src={data.blogimg} alt="img"/>
                        <div style={{padding:"10px 10px"}}>
                        <div className='otherblogname_div'>
                      <p className='otherblog_name'>{data.name}</p>
                      <img src={data.line} alt='line' />{' '}
                      <span>17 min read</span>{' '}
                    </div>
                    <p className='otherblog_title'>{data.title}</p>
                    <p className='oterblog_para'>{data.para}</p>
                    <button className='otherblog_btn'>
                      {data.btn} <img src={data.btnicon} alt='icon' />
                    </button>
                    </div>
                    </div>
                    </>
                )
            })
           }
       
          </Slider> */}
        </div>

      </div>
    </>
  )
}

export default OtherBlog