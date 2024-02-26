import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return (
    <div> 
        <h1> Hello React </h1> 
        <Pizza />
        <Pizza />
    </div>
    );
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