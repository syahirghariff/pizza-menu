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

    const pizzas = pizzaData;
    // const pizzas = null;

    return (
        <main className="menu">
            <h2> Our menu </h2>

            

            {/* { pizzas && (
                <ul className="pizzas"> 
                    {pizzas.map(p => 
                    <Pizza pizza={p} key={p.name}/>)}
                </ul>
            )} */}

            { pizzas ? (
                <>
                    <p> Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious </p>
                    <ul className="pizzas"> 
                        {pizzas.map(p => 
                        <Pizza pizza={p} key={p.name}/>)}
                    </ul>
                </>
            ) : ( <p> We're still working on our menu. Please come back later </p> ) }

            

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
function Pizza({pizza}){
  
    if (pizza.soldOut) {
        return null; 
    }

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
    const openHour = 8; 
    const closeHour = 22; 
    const isOpen = hour >= openHour && hour <= closeHour;


    if (!isOpen) {
        return (
        <p>  
            We're happy to welcome you between {openHour} and {closeHour}
        </p>
        )
    }

    return (
        <footer className="footer">
            {/* {new Date().toLocaleTimeString()} We're currently open */}

            {/* {isOpen && (
                <div className="order">
                    <p> We're open until {closeHour}. Come visit us or order online </p>
                    <button className="btn">Order</button>
                </div>
            )} */}

            {isOpen ? <Order openHour={openHour} closeHour={closeHour}/> : 
            (<p>  
                We're happy to welcome you between {openHour} and {closeHour}
            </p>)}
        </footer>
    )
    //return React.createElement('footer', null, "We're currently open!");
}

function Order({closeHour}) {
    return (
        <div className="order">
            <p> We're open until {closeHour}. Come visit us or order online </p>
            <button className="btn">Order</button>
        </div>
    )
}



const root = createRoot(document.getElementById("root"));
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
);