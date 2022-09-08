import React, { useEffect, useState } from 'react'

export default function FetchApi3() {
    const [data , setData]=useState([]);

   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res)=>res.json())
    .then((data)=>setData(data))
   },[])

    const items = data.map((item)=>{
        return <div>
                   <img src={item.url} alt="image" />
                   <p>{item.title}</p>

               </div>
    });
  return (
    <div>
        <h1>FetchApi3 {data.length}</h1>
        <div>
            {items}
        </div>
    </div>
  )
}
