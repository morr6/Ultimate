import React, { Component } from 'react';
import { Menu } from './components/menu/menu';
import { Slider } from './components/slider/slider';
import { Availability } from './components/Availability/availability';
import { Projects } from './components/Projects/projects';
import { Contact } from './components/Contact/contact';

class App extends Component {
  render() {
    return (
      <div style={{overflowX: 'hidden'}}>
        <Menu/>
        <Slider /> 
        <Availability />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
