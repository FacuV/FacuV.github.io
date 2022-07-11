import React, {useRef, useEffect, useState} from 'react'
import images from '../../exports/images'
import './Slider.css'
import { motion } from 'framer-motion'

export const Slider = () => {
  const [width, setWidth] = useState(0)
  const sliderContainer = useRef()
  

  useEffect(() => {
    setWidth(sliderContainer.current.scrollWidth - sliderContainer.current.offsetWidth)
  }, [])
  
  return (
    <motion.div ref={sliderContainer} className={`sliderContainer ${sliderContainer}`} whileTap={{cursor:'grabbing'}}>
      <motion.div 
        drag='x' 
        dragConstraints={{right: 0, left: -width}} 
        className='slider'>
        {images.map(image => (
            <motion.div className='item' key={image}>
              <img src={image} alt='' />
            </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
