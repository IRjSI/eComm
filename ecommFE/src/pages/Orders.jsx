import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

function Orders() {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className='pt-16 border-t'>
      <div className='text-2xl'>
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {
          products.slice(0,4).map((item,ind) => (
            <div key={ind} className='flex flex-col md:flex-row text-gray-700 border-t border-b py-4 md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
                <div>
                  <p>{item.name}</p>
                  <div>
                    <p>{currency}{item.price}</p>
                    <p>Quantity: </p>
                    <p>Size: </p>
                  </div>
                  <p>Date: </p>
                </div>
              </div>
              <div>
                <div>
                  <p>●</p>
                  <p>Ready to ship</p>
                </div>
                <button>TRACK ORDER</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
