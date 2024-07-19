import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from '../../public/list.json'
import Slider from "react-slick";
import Cards from './Cards';
function Freebook() {
    //filter is used to separate free courses
    //react slick is used for making cards, can directly browse react slick documentation
    //filter and map function is used with array only thats why we created data in list.json using array
    
    /*React Props:-
    In React,"props" (properties) are a way to pass data from a parent component to a child component.
    Props allows, components to be dynamic and flexible, once they receive different data and render accordingly.
    */

    const filterdata=list.filter((data)=>data.category==="Free");
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi dignissimos error, quo minus, modi harum quibusdam id ex voluptatibus libero quis tempore nam aspernatur reprehenderit</p>
                </div>
            
                <div className='slide-container'>
                    <Slider {...settings}>
                        {filterdata.map((item)=>{
                            return <Cards item={item} key={item.id}/>
                        })}
                    </Slider>
                </div>
            </div>
            
        </>
    
    );
}

export default Freebook