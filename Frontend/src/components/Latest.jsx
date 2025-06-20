import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const Latest = () => {
  const {products}=useContext(ShopContext)
  const [latestProducts ,serlatestProducts]=useState([])

  useEffect(()=>{
     serlatestProducts(products.slice(0,10))
  },[])
     return (
    <div className='my-10'>
     <div className="text-center py-8 text-3xl">
          <Title text1={`Latest`} text2={`Collection`}/>
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit amet consectetur.</p>
     </div>
      {/* rendering product */}
      <div className='grid grid-col-2 sm:grid-cols-3 md:grid-col-4 lg:grid-cols-5 gap-y-60'>
          {
            latestProducts.map((item,index)=>(
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
      </div>
    </div>
  )
}

export default Latest
