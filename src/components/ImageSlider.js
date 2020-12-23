import React, {useState} from 'react';
import {SliderData} from './SliderData';
import  {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Logo from '../assets/image/tiagenilogo.png';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)

};

const prevSlide = () => {
    setCurrent( current === 0 ? length -1 : current -1)
}
   console.log(current);
if(!Array.isArray(slides) || slides.length <= 0 ) {
    return null;
}
    return (
      

        
 <section clasName='slider'>
     <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
     <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
    
     <img src={Logo} alt='TiaGeniLogo' className='logo'/>

    {SliderData.map((slide, index) => {
        return (
            <div 
            className={index === current ? 'slide active' : 'slide'}
            key={index}
            >
                
            {index === current && (
                <img src={slide.image} alt='travel' className='image' />
            )}                
            </div>
        )
        
    })}
 

</section>

    );
}

export default ImageSlider;