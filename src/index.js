import React from "react";
import { createRoot } from "react-dom/client";
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
            <Pizza />
        </main>
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

// Uppercase 
function Pizza(){
    return (
        <div>
            <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci"/>
            <h3>Pizza</h3>
        </div>
    )
}

const root = createRoot(document.getElementById("root"));
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
);