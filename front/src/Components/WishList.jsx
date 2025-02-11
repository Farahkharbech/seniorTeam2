import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
const WishList = ({userID}) => {
    const[wishes,setWishes]=useState([])
    console.log(userID);
useEffect(()=>{
         axios.get(`http://localhost:3000/api/wish/getwishes/${userID}`)
        .then(r=>{
          console.log('wish',r.data)
          setWishes(r.data)}).catch(err=>console.log(err))
      },[])
  return (
    <div>
        <Navbar/>
        <h1 className='text-gray-300 ml-20 mt-10'>
          Home / <span className='text-black'> WishList</span>
        </h1>
        <div className='mb-20 mt-[35px] ml-20 shadow-md rounded w-5/6 h-20 bg-white flex items-center justify-center gap-96'>
            <h1>Product</h1>
            <h1>Price</h1>
            <h1>Image</h1>
        </div>
           

        {wishes.length && wishes.map((e,i)=>(
                    <div className='mb-20 mt-28 ml-20 shadow-md rounded w-5/6 h-20 bg-white flex items-center justify-center gap-96'>

     
        <h1>{e.NameWish}</h1>
        <h1>{e.WishPrice}$</h1>
        <img className='w-20 mb-10 mr-10' src={e.WishImage} alt="" />
       
        </div>

        ))}

        <Footer/>
    </div>
  )
}

export default WishList