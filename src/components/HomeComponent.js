import React from 'react'
// import Product from './ProductComponent';
import Carousel from 'better-react-carousel'
import Products from './ProductComponent'

export default function Home() {
    return (
        <div className='home'>
            <Gallery/>
        </div>

    )
}

const Gallery = () => {
    return (
              <Carousel cols={1} rows={1} gap={10} loop autoplay={3000} showDots>
                  <Carousel.Item>
                      <img width="100%" src="/assets/images/background3.jpg" height='600'/>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img width="100%" src="/assets/images/background2.jpg" height='600' />
                  </Carousel.Item>
                  <Carousel.Item>
                      <img width="100%" src="https://wallpapercave.com/wp/wp4658655.jpg" height='600'/>
                  </Carousel.Item>
              </Carousel>
              )
  }