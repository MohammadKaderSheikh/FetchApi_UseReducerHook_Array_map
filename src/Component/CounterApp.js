import React, { Component } from 'react';
import Data from './data.json';

export default class CounterApp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    handleIncrese =()=>{
        this.setState({
            count : this.state.count + 1
        })
    }
    handleDecrese =()=>{
        this.setState({
            count: this.state.count -1
        })
    }
  render() {
      let items =[];
      for(let x =0; x<Data.length;x++){
        items.push( <>
                      <h1>{Data[x].title}</h1>
                      <p>{Data[x].desc}</p>
                    </>
                 )
      }
      const {count} = this.state;
    return (
      <div>
          <h1>counter app {count}</h1>
          <button onClick={this.handleIncrese}>Increse </button>
          <button onClick={this.handleDecrese}>Decrese</button>
          <div>
            {items}
          </div>
      </div>
    )
  }
}
