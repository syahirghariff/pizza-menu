import React from "react";
import { createRoot } from "react-dom/client";
import { pizzaData } from "./data"
import "./index.css";

function App() {
    return (
        <div className="container"> 
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header () {
    // const style = {color: 'red', fontSize: "50px", textTransform: "uppercase"}; 
    const style = {};

    return (
        <header className="header">
            <h1 style={style} > 
                Fast React Pizza Co. 
            </h1>
        </header>
    )
}

function Menu () {
    return (
        <main className="menu">
            <h2> Our menu </h2>

            <ul className="pizzas"> 
                {pizzaData.map(p => 
                <Pizza pizza={p} key={p.name}/>)}
            </ul>

            {/* key: internal react prop, for performance optimzation */}

            {/* <Pizza 
            name="Pizza Spinaci" 
            ingredients="Tomato, mozarella" 
            photoName="pizzas/spinaci.jpg" 
            price={10} />

            <Pizza 
            name="Pizza Funghi" 
            ingredients="Tomato, mozarella" 
            photoName="pizzas/spinaci.jpg" 
            price="10" /> */}
        </main>
    ) 
}

// Uppercase 
function Pizza(props){
    console.log(props); 

    const pizza = props.pizza;

    return (
        <li className="pizza">
            <img src={pizza.photoName} alt={pizza.name} />
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <span>{pizza.price}</span>
            </div>
        </li>
    )
}

function Footer() {

    const hour = new Date().getHours(); 
    const openHour = 12; 
    const closeHour = 22; 
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {new Date().toLocaleTimeString()} We're currently open
        </footer>
    )
    //return React.createElement('footer', null, "We're currently open!");
}



const root = createRoot(document.getElementById("root"));
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
);