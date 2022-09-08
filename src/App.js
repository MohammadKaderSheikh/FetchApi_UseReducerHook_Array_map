import React, { Component } from 'react'
import CounterApp from './Component/CounterApp';
import CounterApp2 from './Component/CounterApp2';
import CounterApp4 from './Component/CounterApp4';
import CounterApp5 from './Component/CounterApp5';
import Data from './Component/data.json';
import DataFetching from './Component/DataFetching';
import DataFetching2 from './Component/DataFetching2';
import DataFetching3 from './Component/DataFetching3';
import DataFetching4 from './Component/DataFetching4';
import DataFetching5 from './Component/DataFetching5';
import FetchApi2 from './Component/DataLoadFromApi/FetchApi2';
import FetchApi3 from './Component/DataLoadFromApi/FetchApi3';
import FetchApi4 from './Component/DataLoadFromApi/FetchApi4';
import FetchApi5 from './Component/DataLoadFromApi/FetchApi5';
import { FetchApi6 } from './Component/DataLoadFromApi/FetchApi6';
import FetchApi from './Component/FetchApi';
import UseReducer from './Component/UseReducerHook/UseReducer';
import UseReducer2 from './Component/UseReducerHook/UseReducer2';
import { UseReducer3 } from './Component/UseReducerHook/UseReducer3';
import { UseReducer4 } from './Component/UseReducerHook/UseReducer4';
import { UseReducer5 } from './Component/UseReducerHook/UseReducer5';
import { UseReducer6 } from './Component/UseReducerHook/UseReducer6';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      count : 0
    }
  }
  handleIncrese = ()=>{
    this.setState({
      count:this.state.count + 1
    })
   }
   handleDecrese=()=>{
     this.setState({
       count:this.state.count -1
     })
   }
  render() {
    let items =[];
    for(let x=0; x<Data.length;x++){
      items.push(<>
           <h1>{Data[x].title}</h1>
           <p>{Data[x].desc}</p>
      </>);
    }
    const {count}=this.state;
    return (
      <div>
        <h1> count {count}</h1>
        <button onClick={this.handleIncrese}>increse</button>
        <button onClick={this.handleDecrese}>Decrese</button> 
        {/* <FetchApi /> 
       <FetchApi2 />
       <FetchApi3 />
       <FetchApi4 />
       <FetchApi5 />
       */}
       <FetchApi6 />
       <UseReducer />
       <UseReducer6/>
       {/* <UseReducer2 />
       <UseReducer3 />
       <UseReducer4 />
       <UseReducer5 /> */}
        {/* <DataFetching />
        <DataFetching2 />
        <DataFetching3 />
        <DataFetching4 />
        <DataFetching5 /> */}
        {/* <div>
          {items}
        </div>
        
        <CounterApp />
        <CounterApp2 />
        <CounterApp4 />
        <CounterApp5 /> */}
      </div>
    )
  }
}
