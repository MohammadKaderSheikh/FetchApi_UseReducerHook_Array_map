import React, { useEffect, useState } from 'react';

export default function FetchApi5() {
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[]);

    const items = data.map((item)=>{
        return <div>
                    <h1>{item.name}</h1>
                    <p>{item.email}</p>
                    <p>{item.body}</p>

                </div>
    });
  return (
    <div>
        <h1>FetchApi5</h1>
        <div>{items}</div>

    </div>
  )
}
