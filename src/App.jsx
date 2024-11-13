import React, { useState } from "react";
import "./App.css";

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
      <h2>Our Menu</h2>
      <Pizza
        name="Vegetarian Pizza"
        photoName="src/assets/pizaa-1.jpg"
        price="10$"
      />

      <hr />

      <Pizza
        name="Italian Pizza"
        photoName="src\assets\pizaa-2.jpg"
        price="15$"
      />
    </div>
  );
}

function Pizza(props) {
  console.log(props);

  return (
    <div className="bg-purple-700 rounded-xl flex justify-center items-center">
      <h2>{props.Name}</h2>
      <img src={props.photoName} alt={props.Name} className="w-72 h-60 rounded-full" />
      <p>Price: {props.price}</p> {/* اضافه کردن قیمت */}
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
}

export default App;
