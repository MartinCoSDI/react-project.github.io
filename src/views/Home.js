import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <h1>
DIGITAL SUPPLY CHAIN SOLUTIONS PROVEN TO HELP:</h1>
<ul>
  <li><span className="bold">Improve</span> Maintenance Wrench Time</li>
  <li>
<span className="bold">Reduce</span> Parts Related Downtime</li>
<li><span className="bold">Aggregate</span> and Leverage Spend</li>
</ul>
<div className="button">
  <button className="home-button">OUR SOLUTIONS</button>
  <button className="home-button">ABOUT US</button>
</div>
      </div>
    </div>
  );
}

export default Home;
