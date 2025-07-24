// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

import useGsapReveal from "./hooks/useGsapReveal";

function App() {
  useGsapReveal();
    return (
        <div>
            <div className="flex min-h-screen flex-col bg-white font-mono">
                <Header />
                <Hero />
                <Projects />
                <Footer />
            </div>
        </div>
    );
}

export default App;
