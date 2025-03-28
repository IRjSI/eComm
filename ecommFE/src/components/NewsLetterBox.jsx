import { motion } from 'framer-motion';
import React from 'react'

function NewsLetterBox() {

    const onSubmitHandler = (e) => {
        e.preventDefault();

    }

  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="w-full py-16">

      <div className='text-center'>
          <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 24% off</p>
          <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet.</p>
          <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
              <input className='w-full sm:flex-1 outline-none' required type="email" placeholder='Your Email' />
              <button className='text-white bg-black text-sm py-4 px-10' type='submit'>Subscribe</button>
          </form>
      </div>
    </motion.div>
  )
}

export default NewsLetterBox
