import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createLogger } from "vite";

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
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1 style={{ color: "red", fontSize: "20px" }}>Fast Pizza co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2> our menu</h2>
      <Pizza
        Name="pizzzxaxa"
        ingredient="best pizza"
        photoName="src\assets\pizaa-1.jpg"
        price="10"
      />
    </div>
  );
}

function Pizza(props) {
  console.log(props);

  return (
    <div>
      <h2>BBQ Chicken Pizza</h2>
      <img src="src\assets\pizaa-1.jpg" alt="image food" />
    </div>
  );
}

function Footer() {
  const houre = new Date().getHours;
  const openHoure = 8;
  const close = 22;
  const isopen = houre >= openHoure && houre <= close;

  return (
    <footer>
      {new Date().toLocaleDateString()} .we Are best pizza food in world
    </footer>
  );
  // return  React.createElement('FOOTER', null, "we Are best pizza food in world" );
}

export default App;

// 42
