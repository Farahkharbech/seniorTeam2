import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import axios from 'axios';

function AdminProducts() {
    const [adminData, setAdminData] = useState([]);
    const [refresh, setrefresh] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:3000/api/products/allProducts')
            .then((result) => {
                setAdminData(result.data)
                setrefresh(!refresh)
            })
            .catch((err) => {
                console.log(err)
            })
    },[refresh])
    const deleteProd=(id)=>{
        axios
        .delete(`http://localhost:3000/api/products/deleteProd/${id}`)
        .then(()=>{
         console.log('deleted')
         setrefresh(!refresh)
        })
        .catch((err)=>{
         console.error(err)
        })
      }
      const modify = (id) => {
        axios
          .put(`http://localhost:3000/api/products/updateProd/${id}`)
          .then(() => {
            setrefresh(!refresh)
          })
          .catch((err) => {
            console.error(err);
          });
      };
  return (
    <div>
         <nav >
        
        <div className='flex justify-center align-middle bg-black text-white h-20 gap-40 mb-6 items-center' >
         
          <NavLink to={'/administration'} >Administration</NavLink>
        <NavLink to={'/AdminClients'}>Clients</NavLink>
        <NavLink to={'/AdminSellers'}>Sellers</NavLink>
        <NavLink to={'/AdminCategories'}>Categories</NavLink>
        <NavLink to={'/AdminProducts'}>Products</NavLink>
        <div>
        <input type="search"
            placeholder='What are you looking for?'
            className='bg-gray-200 p-2 text-xs rounded w-56 h-9 right-36'/>
              <IoSearchOutline size={25} className='absolute right-10 top-7'/>
        </div>
        </div>
       </nav>
       <div>
     {adminData.map((el)=>{
         return(
            <div>
                <h1>{el.Name}</h1>
                <img src={el.ProductImage}/>
                <button onClick={()=>deleteProd(el._id)}>Delete</button>
                <button onClick={()=>modify(el._id)}>Modify</button>    
            </div>
         )
     })}
       </div>
    </div>
  )
}

export default AdminProducts