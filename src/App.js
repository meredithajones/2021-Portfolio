import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      title:'Meredith Jones', 
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: ''},
        { title: 'Contact', path: '/'}
      ]
    }
  }

  render() {
  return (
    <div>
      
      
    </div>
    );
  }
}

export default App;
