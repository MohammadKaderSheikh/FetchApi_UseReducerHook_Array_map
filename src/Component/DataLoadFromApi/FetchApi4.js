import React, { useEffect, useState } from 'react';

export default function FetchApi4() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[]);
    const items = data.map((item)=>{
        return <div>
                   <p>{item.name}</p>
                   <p>{item.email}</p>
               </div>
    });
  return (
    <div>
        <h1>FetchApi4</h1>
         <div>
             {items}
         </div>
    </div>
  )
}
