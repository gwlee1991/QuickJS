import React, { Component } from 'react';
import { link } from 'react-router-dom';

class Chapter extends Component{
  render(){
    return(
      <div>
        {this.props.chapter}
      </div>
    );
  }
}

export default Chapter;
