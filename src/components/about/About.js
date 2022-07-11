import React from 'react'
import './About.css'
import aboutImg from '../../media/aboutImg.jpg'
import AnimatedNumber from 'react-animated-number/build/AnimatedNumber'

export const About = () => {
    const initialValue = 2128308;
    const currentValue = 23123123;
  
    return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>
                Let me tell you something about me
            </h3>
            <AnimatedNumber
                component="text"
                initialValue={initialValue}
                value={currentValue}
                stepPrecision={0}
                duration={1000}
            />
            <p> 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis provident iventore quod voluptates sequi. Quis, necessitatibus omnis iusto perferendis dolores voluptate et dolorum inventore autem nemo, quos eveniet magni nesciunt.
            </p>
        </div>
        <div className='about-img'>
            <img src={aboutImg} alt="about" />
        </div>
    </div>
  )
}
