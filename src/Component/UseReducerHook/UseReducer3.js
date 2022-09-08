import React, { useReducer } from 'react';


const initialState = 0;
const reducer =(state , action)=>{
    if(action.type==="increment"){
        return state + 1;
    }
    else if (action.type==="decrement"){
        return state -1;
    }
    else {
        return state;
    }

}

export const UseReducer3 = () => {
    const [state, dispatch]= useReducer(reducer,initialState);

  return (
    <div>
        <h1>UseReducer3</h1>
        <p>{state}</p>
        <button onClick={()=>dispatch({type:"increment"})}>increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>increment</button>
    </div>
  )
}