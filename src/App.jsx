import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    // Generate an array of image objects (1.jpeg → 9.jpeg)
    const projects = Array.from({ length: 9 }, (_, i) => {
      const num = i + 1;
      return {
        img: `${import.meta.env.BASE_URL}${num}.jpeg`, // Correct path for GitHub Pages
        title: `Project ${num}`,
      };
    });

    return (
      <>
        {/* Header */}
        <header>
          <div className="logo">My Projects</div>
        </header>

        {/* Main section */}
        <section>
          {projects.map((p, index) => (
            <div className="card" key={index}>
              <img src={p.img} alt={p.title} />
              <label>{p.title}</label>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer>Copyright @ 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;
