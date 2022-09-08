import React, { Component, Fragment } from 'react';
import Data from './data.json';

export default class DataFetching3 extends Component {
  render() {
      const items = Data.map((item)=>{
        return  <Fragment>
               <h1>{item.title}</h1>
               <p>{item.desc}</p>
          </Fragment>
      })
    return (
      <div>
          <h1>DataFetching3</h1>
          <div>
              {items}
          </div>
      </div>

    )
  }
}
