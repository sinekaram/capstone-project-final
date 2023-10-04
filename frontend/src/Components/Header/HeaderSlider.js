import React, { Fragment } from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'

const HeaderSlider = () => {
  return (
    <Fragment>
        <Carousel variant="dark" style={{maxHeight: "650px"}}>
            <CarouselItem>
                <img
                    className="d-block w-100"
                    style={{height: "100vh", objectFit: "cover"}}
                    src="https://www.natwest.com/content/dam/natwest/assets/personal/photography/dmm/hero/image.dim.667.young-woman-sitting-on-yellow-sofa-using-laptop-CASS-510x340.jpg" 
                    alt="slide1" 
                />
            </CarouselItem>
        </Carousel>
    </Fragment>
  )
}

export default HeaderSlider