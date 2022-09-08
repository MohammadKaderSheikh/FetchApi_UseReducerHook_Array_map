import React, { Component } from 'react';
import Data from './data.json';

export default class DataFetching extends Component {
  render() {
      const items = Data.map((item)=>{
        return <div>
                   <h1>{item.title}</h1>
                   <p>{item.desc}</p>
               </div>  
      });
    return (
      <div>{items}</div>
    )
  }
}
