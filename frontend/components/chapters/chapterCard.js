import React, { Component } from 'react';
import { link } from 'react-router-dom';

class ChapterCard extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <section>
        <div>{this.props.chapter.title}</div>
        <div>{this.props.chapter.subtitle}</div>
      </section>
    );
  }
}

export default ChapterCard;
