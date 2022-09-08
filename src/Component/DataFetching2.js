import React, { Component } from 'react';
import Data from './data.json';

export default class DataFetching2 extends Component {
  render() {
      const items = Data.map((item)=>{
          return <div>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                  </div>
      });
    return (
      <div>
          <h1>DataFetching2</h1>
          <div>
              {items}
          </div>
          
          </div>
    )
  }
}
