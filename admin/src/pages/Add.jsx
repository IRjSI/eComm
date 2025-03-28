import React, { useState } from 'react'
import axios from "axios"
import { assets } from '../assets/assets'
import { toast } from "react-toastify"

const Add = ({token}) => {
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('Men');
    const [subcategory,setSubcategory] = useState('Topwear');
    const [bestseller,setBestseller] = useState(false);
    const [sizes,setSizes] = useState([]);
    const [image1,setImage1] = useState(false);
    const [image2,setImage2] = useState(false);
    const [image3,setImage3] = useState(false);
    const [image4,setImage4] = useState(false);

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const modifiedSizes = JSON.stringify(sizes);

            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/product/add`, {
                name,description,price,sizes:modifiedSizes,bestseller,category,subCategory:subcategory,image1,image2,image3,image4
            }, {
                headers: { token }
            })

            if (response.data.status) {
                toast.success(response.data.message);
                setName('');
                setDescription('');
                setPrice('');
                setImage1(false);
                setImage2(false);
                setImage3(false);
                setImage4(false);
            }            
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-start w-full gap-3'>
        <div>
            <p className='mb-2'>Upload Image</p>

            <div className='flex gap-2'>
                <label htmlFor='image1'>
                    <img src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} className='w-20' alt="" />
                    <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
                </label>
                <label htmlFor='image2'>
                    <img src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} className='w-20' alt="" />
                    <input onChange={(e) => setImage2(e.target.files[0])}  type="file" id="image2" hidden />
                </label>
                <label htmlFor='image3'>
                    <img src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} className='w-20' alt="" />
                    <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
                </label>
                <label htmlFor='image4'>
                    <img src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} className='w-20' alt="" />
                    <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
                </label>
            </div>
        </div>

        <div className='w-full'>
            <p className='mb-2'>Product Name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type Here' required />
        </div>

        <div className='w-full'>
            <p className='mb-2'>Product Description</p>
            <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Describe...' required />
        </div>

        <div>
            <div>
                <p>Product Category</p>
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                </select>
            </div>
            <div>
                <p>Sub Category</p>
                <select onChange={(e) => setSubcategory(e.target.value)} value={subcategory}>
                    <option value="Topwear">Topwear</option>
                    <option value="Bottomwear">Bottomwear</option>
                    <option value="Winterwear">Winterwear</option>
                </select>
            </div>
            <div>
                <p>Product Price</p>
                <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder='24' />
            </div>
        </div>

        <div className='mb-2'>
            <p>Product Sizes</p>
            <div className='flex gap-3'>
                <div onClick={() => setSizes(prev => prev.includes('S') ? prev.filter(item => item !== 'S') : [...prev, 'S'])}>
                    <p>S</p>
                </div>
                <div onClick={() => setSizes(prev => prev.includes('M') ? prev.filter(item => item !== 'M') : [...prev, 'M'])}>
                    <p>M</p>
                </div>
                <div onClick={() => setSizes(prev => prev.includes('L') ? prev.filter(item => item !== 'L') : [...prev, 'L'])}>
                    <p>L</p>
                </div>
                <div onClick={() => setSizes(prev => prev.includes('XL') ? prev.filter(item => item !== 'XL') : [...prev, 'XL'])}>
                    <p>XL</p>
                </div>
                <div onClick={() => setSizes(prev => prev.includes('XXL') ? prev.filter(item => item !== 'XXL') : [...prev, 'XXL'])}>
                    <p>XXL</p>
                </div>
            </div>
        </div>

        <div>
            <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller" />
            <label htmlFor="bestseller" className='cursor-pointer'>Add to Best Seller</label>
        </div>

        <button type="submit" className='bg-black text-white py-2 px-12 mt-4'>Add Product</button>
    </form>
  )
}

export default Add
