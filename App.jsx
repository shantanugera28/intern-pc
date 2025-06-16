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

  const selectPageHandler=(selectedPage)=>{
    if(selectedPage>=1 && 
      selectedPage <=products.length/3 &&
      selectedPage != page)
    setPage(selectedPage);
  };

  return (
    <div>
    {
      products.length>0 && (
        <div className="products">
        {
          products.slice(page*3-3,page*3).map((prod)=>{
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
    {
      products.length>0 &&(
      <div className='pagination'>
        <span onClick={()=>selectPageHandler(page-1)}
          className={page>1  ? "":"pagination-disabled"}  
        >⬅️</span>
        {
          [...Array(products.length/3)].map((_,i)=>{
            return <span 
                className={page===i+1 ?"pagination-selected":""}
                onClick={()=>selectPageHandler((i+1))} 
                key={i}>
                  {i+1}
                </span>
          })
        }
        <span onClick={()=>selectPageHandler(page+1)}
          className={page<products.length /3 ? "":"pagination-disabled"}
        >➡️</span>
      </div>
    )}
  </div>);
}
