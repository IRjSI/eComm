import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const List = ({token}) => {
  const [list,setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/list`, {
        headers: { token }
      });
      if (response.data.status) {
        setList(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/product/remove`, { id }, {
        headers: { token }
      })

      if (response.data.status) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchList();
    console.log(list);
    
  }, [])

  return (
    <>
      <p className='mb-2'>All Products</p>
      <div className='flex flex-col gap-2'>
        <div className='hidden md:grid '>
          <b>Image</b>
          <b>Name</b>
          <b>Price</b>
          <b>Category</b>
          <b>Action</b>
        </div>

        {
          list.length > 0 && list.map((item,ind) => (
            <div key={ind} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr]'>
              <img src={item.image[0]} className='w-12' alt="" />
              <b>{item.name}</b>
              <b>{item.category}</b>
              <b>{item.price}</b>
              <b onClick={() => removeProduct(item._id)}>X</b>
            </div>
          ))
        }
      </div>   
    </>
  )
}

export default List
