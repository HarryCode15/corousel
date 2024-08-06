import React from "react"
import "./App.css";
// import kaite from "../public/images/person.png";
import Navbar from "./components/Navbar";
import IntroSection from "./components/Intro_Section";
import Card from "./components/Card";
import data from "./Data"



function App() {

  const cards = data.map(items =>{
    return <Card
            img={items.coverImg}
            rating={items.stats.reviewCount}
            reviewCount={items.stats.reviewCount}
            country={items.location}
            title={items.title}
            price={items.price} />
  })

  return (
    <>
      <Navbar />
      <IntroSection />
      <section className="cards-list">
        {cards}
      </section>
      
            
    </>
  );
}

export default App;

