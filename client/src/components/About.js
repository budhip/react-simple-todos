import React, { Component } from 'react';
import {Link} from 'react-router';

class About extends Component {
  render = () => {
    return(
      <div>
        <Link to={'/'}>Home</Link>
        <h2>Semua tentang saya</h2>
      </div>
    );
  }
}

export default About;
