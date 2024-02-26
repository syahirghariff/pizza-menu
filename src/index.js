import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return (
        <div> 
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header () {
    return <h1> Fast React Pizza Co. </h1>
}

function Menu () {
    return (
        <div>
            <h2> Our menu </h2>
            <Pizza />
        </div>
    ) 

}

function Footer() {
    return <footer>{new Date().toLocaleTimeString()} We're currently open</footer>
    //return React.createElement('footer', null, "We're currently open!");
}

// Uppercase 
function Pizza(){
    return (
        <div>
            <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci"/>
            <h2>Pizza</h2>
        </div>
    )
}

const root = createRoot(document.getElementById("root"));
root.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
);