import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

function OurPolicy() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="w-full py-16">

      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
          <div>
              <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
              <p className='font-semibold'>Easy exchange Policy</p>
              <p className='text-gray-400'>We offer hassle free exchange policy</p>
          </div>
          <div>
              <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
              <p className='font-semibold'>Easy exchange Policy</p>
              <p className='text-gray-400'>We offer hassle free exchange policy</p>
          </div>
          <div>
              <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
              <p className='font-semibold'>Easy exchange Policy</p>
              <p className='text-gray-400'>We offer hassle free exchange policy</p>
          </div>
      </div>
    </motion.div>
  )
}

export default OurPolicy
