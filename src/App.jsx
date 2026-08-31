import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";

import calculator from "./exports/calculator";
import { add } from "./exports/calculator";
import * as calcFunctions from "./exports/calculator";

import "./App.css";
import image from "./images/expimp.avif";

function App() {
    console.log("App render");

    console.log(calculator(6, 12, "*"));
    console.log(add(1,2));
    console.log(calcFunctions.sub(100, 50));
    console.log(image);

    return (
        <>
            <Navbar />
            <div className="app-container">
                <img src={image} alt="React" style={{ maxWidth: '100%', height: 'auto' }} />
                <Counter />
            </div>
            <Footer />
        </>
    );
}

export default App;