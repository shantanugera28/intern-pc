import { useEffect, useState } from 'react'
import './index.css'
export default function App(){

  const [products,setProducts]=useState([])
  const[page,setPage]=useState(1);

  const fetchProducts=async()=>{
    const res=await fetch("https://dummyjson.com/products")
    const data= await res.json()

    if(data&&data.products){
      setProducts(data.products)
    }
  };


  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <div>
    {
      products.length>0 && (
        <div className="products">
        {
          products.slice(0,6).map((prod)=>{
            return(
              <span className='products__single' key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            )
          })
        }
      </div>
    )}
  </div>);
}