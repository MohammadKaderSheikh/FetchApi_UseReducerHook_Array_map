import React, { useEffect, useState } from 'react';

export const FetchApi6 = () => {
    const [ data, setData]= useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[]);
    const items =data.map((item)=>{
        return <div>    
                  <h1>{item.title}</h1>
                  <p>{item.body}</p>
               </div> 
    });
  return (
    <div>
        <h1>FetchApi6</h1>
        <h1>{data.length}</h1>
        <div>{items}</div>
    </div>
  )
}
