import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';

function Cart() {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);

  const [cartData,setCartData] = useState([]);

  useEffect(() => {
    let tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          
          tempData.push({
            _id:items,
            size:item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);
  }, [cartItems])

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {
          cartData.map((item,ind) => {
            const productData = products.find((product) => product._id === item._id);

            return (
              <div key={ind} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img src={productData.image[0]} className='w-16 sm:w-20' alt="" />
                  <div>
                    <p className='text-sm font-medium sm:text-lg'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input type="number" min={1} defaultValue={item.quantity} onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,e.target.value)} />
                <img onClick={() => updateQuantity(item._id,item.size,0)} src={assets.bin_icon} className='cursor-pointer w-4 mr-4 sm:w-5 ' alt="" />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cart
