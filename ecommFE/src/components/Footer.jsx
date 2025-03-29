import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="w-full py-16">
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div className=''>
                <img src={assets.logo} className='w-32 mb-5' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reiciendis dolorem et saepe voluptates amet accusamus impedit aliquid, voluptatem quas ratione laboriosam molestiae. Dolorum.</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-2424-2424</li>
                    <li>for@ever.com</li>
                </ul>
            </div>
        </div>

        <div className=''>
            <hr />
            <p className='py-5 text-center text-sm'>Copyright 2025@forever.com - All Rights Reserved</p>
        </div>
    </motion.div>
  )
}

export default Footer
