import React from 'react'
import Slider from 'react-slick'
import av01 from '../../assets/images/ava-1.jpg'
import av02 from '../../assets/images/ava-2.jpg'
import av03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slideToShow:3,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slideToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
              breakpoint:576,
              settings:{
                  slideToShow:1,
                  slidesToScroll:1,
              },
          },
        ]
    }
  return (
    <div className="container">
    <Slider {...settings}>
    <div className='testimonial py-4 px-3'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Accusamus veniam quo illo ad. Rerum recusandae et molestias earum? Ipsum, voluptate. <br />Itaque hic minima repudiandae id debitis qui eum, quasi fugiat.</p>
      <div className="d-flex align-items-center gap-4 mt-3">
        <img src={av01} className='w-25 h-25 rounded-2' alt="" />
        <div>
            <h5 className="mb-0 mt-3">John Doe</h5>
            <p>Customer</p>
        </div>
      </div>
    </div>
    <div className='testimonial py-4 px-3'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Accusamus veniam quo illo ad. Rerum recusandae et molestias earum? Ipsum, voluptate. <br />Itaque hic minima repudiandae id debitis qui eum, quasi fugiat.</p>
      <div className="d-flex align-items-center gap-4 mt-3">
        <img src={av02} className='w-25 h-25 rounded-2' alt="" />
        <div>
            <h5 className="mb-0 mt-3">Lia Franklyn</h5>
            <p>Customer</p>
        </div>
      </div>
    </div>
    <div className='testimonial py-4 px-3'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Accusamus veniam quo illo ad. Rerum recusandae et molestias earum? Ipsum, voluptate. <br />Itaque hic minima repudiandae id debitis qui eum, quasi fugiat.</p>
      <div className="d-flex align-items-center gap-4 mt-3">
        <img src={av03} className='w-25 h-25 rounded-2' alt="" />
        <div>
            <h5 className="mb-0 mt-3">Durvesh Vetale</h5>
            <p>Customer</p>
        </div>
      </div>
    </div>
    </Slider>
    </div>
  )
}

export default Testimonials
