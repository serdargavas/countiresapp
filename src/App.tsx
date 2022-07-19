import axios from "axios";
import fetchCountry from "./api/fetchCountry";
import { useEffect, useState } from "react";
import Country from "./components/country";
import Loading from "./components/loading";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/main.scss";
import Observer from "./features/observer";
import Footer from "./components/footer";
import FlipContent from "./features/flip";
import Detail from "./components/detail";
import { useQuery } from "react-query";
import Header from "./components/header";
import ProgressBar from "./components/progressBar";

function App() {

  var items = document.querySelectorAll<HTMLElement>(".item");

  useEffect(() => {
    if(items) Observer(); FlipContent();
  }, [items])
  

  useEffect(() => {
    if(items)  ScrollTrigger.refresh(true);
  }, [items]);

  const { data, status } = useQuery("countries", fetchCountry);

  return (
    <div id="viewport">
      <div id="scroll-container">
        <Header />
        <section className="content">
          {status === "loading" && <Loading />}
          {status === "error" && <h1>Error Fetching Data</h1>}
          {status === "success" &&
            data.slice(4, 102).map((country, index) => {
              return <Country key={country.name.common} country={country} />;
            })}
        </section>
        <Footer />
      </div>
      <Detail/>
      <ProgressBar />
    </div>
  );
}

export default App;
