import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('');
  const [size,setSize] = useState('');

  const fetchProduct = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);        
        setImage(item.image[0]);
        return null;
      }
    })
  }
  
  useEffect(() => {
    fetchProduct();
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex sm:flex-row gap-12 sm:gap-12'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData['image'].map((item,ind) => (
                <img onClick={() => setImage(item)} src={item} key={ind} className='w-[24%] sm:mb-3 sm:w-full flex shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:s-[80%]'>
            <img src={image} className='w-full h-auto' alt="" />
          </div>
        </div>

        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_dull_icon} className='w-3 5' alt="" />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='font-medium text-3xl mt-5'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='my-8 flex flex-col gap-4'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item,ind) => (
                  <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray- ${item === size ? 'border-orange-500' : ''}`} key={ind}>{item}</button>
                ))}
              </div>
            </div>
          <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white py-3 px-8 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product</p>
            <p>Cash on Delivery available</p>
            <p>Replaceable</p>
          </div>
        </div>

      </div>
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border py-6 px-6 text-sm text-gray-500'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere iusto delectus aliquam! Laborum ducimus minima laudantium exercitationem aperiam molestias sed ullam distinctio accusamus reiciendis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nam praesentium sint?
          </p>
        </div>
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : null
}

export default Product
