import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Meredith Jones",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Creating Beautiful Online Spaces",
        subTitle: "Coding for the greater good",
        greeting: "Take a look at a few of my projects below",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Get In Touch",
      },
    };
  }
  render() {
    return <div>Projects</div>;
  }
}

export default App;
