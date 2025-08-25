// Importing React library and Component class
import React, { Component } from 'react';
// Importing external CSS file to style the component
import './App.css';

class App extends Component {
  render() {
    // Array of project details
    const projects = [
      { img: '/1.jpeg', title: 'Project One' },
      { img: '/2.jpeg', title: 'Project Two' },
      { img: '/3.jpeg', title: 'Project Three' },
      { img: '/4.jpeg', title: 'Project Four' },
      { img: '/5.jpeg', title: 'Project Five' },
      { img: '/6.jpeg', title: 'Project Six' },
      { img: '/7.jpeg', title: 'Project Seven' },
      { img: '/8.jpeg', title: 'Project Eight' },
      { img: '/9.jpeg', title: 'Project Nine' },
    ];

    return (
      <>
        {/* Header section */}
        <header>
          <div className="logo">My Projects</div>
        </header>

        {/* Main content section */}
        <section>
          {projects.map((p, index) => (
            <div className="card" key={index}>
              <img src={p.img} alt={p.title} />
              <label>{p.title}</label>
            </div>
          ))}
        </section>

        {/* Footer section */}
        <footer>
          Copyright @ 2025. All rights reserved.
        </footer>
      </>
    );
  }
}

export default App;
