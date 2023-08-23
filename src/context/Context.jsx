import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useReducer } from "react";
import React from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const [search, setSearch] = useState();

  
  const [list,setList] = useState([]);
  const productList = async()=>{
    const {data} = await axios.get("https://fakestoreapi.com/products");
    setList(data);
  }
  useEffect(()=>{
    productList();
  },[]);

  useEffect(()=>{
    dispatch({type: 'GET_PPRODUCT', payload:list}); 
  },[list]);

  useEffect(()=>{
    const filter = list.filter(item => item.title.toLowerCase().includes(search));
    dispatch({ type: "GET_PPRODUCT", payload: filter });  
  },[search])

  const initialState = {
    product: [],
    cart: []
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_PPRODUCT":
        return { ...state, product: action.payload};
      case "ADD_TOCART":
        return { ...state, cart:[...state.cart,action.payload]};
      case "DEL_BTN":
        return {...state, cart:state.cart.filter(e=>e.id !== action.payload)}
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  const data = { state, dispatch ,search, setSearch};
  return (<StateContext.Provider value={data}>{children}</StateContext.Provider>);
};
export const StateContextCustom =()=> useContext(StateContext);

