import React, { useEffect, useState } from 'react';

export default function FetchApi2() {
    const [data , setData]=useState([]);
    
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>response.json())
    .then((data)=>setData(data))

    },[]);

    const items= data.map((item)=>{
      return <div>
               <h1>{item.title}</h1>
               <p>{item.body}</p>
             </div>
    })

  return (
    <div>
      <h1>FetchApi2</h1>
      <div>
        {items}
      </div>

    </div>
    
  )
}

