import React, { Component } from 'react';
import { link } from 'react-router-dom';

class Chapter extends Component{
  render(){
    return(
      <div>
        {this.props.chapter.title}
        {this.props.chapter.subtitle}
      </div>
    );
  }
}

export default Chapter;
