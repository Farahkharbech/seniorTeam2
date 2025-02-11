import React, { useContext, useState,useEffect } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'


const FlashSales = ({userID,products,addCart,singleAdd,refresh,setRefresh,refresh1,setRefresh1}) => {

  const navigate=useNavigate()
  const[showAddToCart,setShowAddToCart]=useState(false)
  const[index,setIndex]=useState(-1)
  const [CartImage,setCartImage]=useState('')
  const [Price,setPrice]=useState('')
  const [Quantity,setQuantity]=useState(1)
  const[hidden,setHidden]=useState(false)
  const[fa,setFa]=useState(1)
  const[e,setE]=useState(false)
  
  
  return (
    <div className='ml-10'>
    <div className='mb-10'>
    <div className=' w-5 h-10 bg-red rounded'></div>
    <h1 className='text-red absolute left-16 -mt-8 font-bold'>Today's</h1>
    </div>
    <div className='grid grid-cols-2'>
    <h1 className='text-5xl font-medium '>Flash Sales</h1>
    <div className=' w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute right-14'><FaArrowLeft /></div>
    <div className='w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute right-0' ><FaArrowRight /></div>
    
    </div>
    <div style={{}}  id="div-div" className='flex gap-7 overflow-auto'>
    {products.map((el,f)=>(
    <div  >
     {/* {fa===f&&hidden?"": */}
     <div >
      
        
      <div  className='w-80 h-80 bg-gray flex justify-center items-center mt-10'
         onMouseEnter={()=>{setShowAddToCart(!showAddToCart)
                             setIndex(f)
                           }}
        onMouseLeave={()=>{setShowAddToCart(!showAddToCart)
                           setIndex(-1)}}>
                             <div>
                            
           <div style={{    'margin-left': '-40%'}} className=' top-full left-0 w-20 rounded h-8 bg-red flex justify-center items-center text-white'>-{el.Discount}%</div>
           <div style={{'margin-left': '117%',
       'margin-top': '-30%'}}>
           <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center'><FaRegHeart size={20}/></div> 
           <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center'><MdOutlineRemoveRedEye onClick={()=>{products.splice(f,1)}} size={20}/></div>
   
           </div>
          <Link to={'/SingleProducts'}><img className=' w-40 ' src={el.ProductImage} alt="" onClick={()=>{singleAdd(el.ProductImage,el.Name,el.Price)}}
            /></Link> 
           </div>
   
         {index===f&&showAddToCart&&<div onClick={() => {
         addCart({ CartImage: el.ProductImage, Price: el.Price, Quantity: Quantity,userUserID:userID });
          setRefresh1(!refresh1)
       }} style={{'top': '140%'}} className='cursor-pointer w-80 h-11 bg-black text-white flex justify-center items-center absolute'>Add To Cart</div>}
       
    
         
          
            </div>
            
            <h1>{el.Name}</h1>
            <div className='flex gap-4'>
            <h1 className='text-red'>${el.Price}</h1><h1 className='text-gray-300 line-through	'>{(el.Price / (1 - el.Discount/ 100)).toFixed(2)}</h1>
            </div>
            </div>
            {/* }  */}
   
         </div>
      
    ))
    
        }
        </div>
        <div style={{'margin-left':'40%','margin-bottom':'10%'}} className='flex justify-center items-center w-80 h-16 bg-red mt-16 '>
         <Link to={'/AllProducts'} > <h1 onClick={()=>setRefresh(!refresh)} className='text-white cursor-pointer' > View All Products</h1>   </Link>
        </div>
      <hr className='w-5/6 ml-20 text-gray-300 mb-32'/>
        
   
    </div>
   
  )
}

export default FlashSales