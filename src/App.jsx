import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const pizzaData = [
  {
    Name: "Pizza 1",
    price: 60,
  },
  {
    Name: "Pizza 2",
    price: 70,
  },
  {
    Name: "Pepperoni Pizza",
    price: 80,
  },
  {
    Name: "Margherita Pizza",
    price: 65,
  },
  {
    Name: "BBQ Chicken Pizza",
    price: 90,
  },
  {
    Name: "Hawaiian Pizza",
    price: 85,
  },
  {
    Name: "Vegetarian Pizza",
    price: 75,
  },
  {
    Name: "Meat Lover's Pizza",
    price: 95,
  },
  {
    Name: "Seafood Pizza",
    price: 100,
  },
  {
    Name: "Four Cheese Pizza",
    price: 80,
  },
];



function App() {
  return <div>
  <h3>hello</h3>
  <Pizza /> 
  </div>
  
}


function Pizza(){
  return <h2>Pizza</h2>
}






export default App
