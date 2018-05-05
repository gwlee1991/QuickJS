import React, { Component } from 'react';

class Chapter extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.chapter);
    return(
      <section className="content-container">
        Chapter Component
      </section>
    );
  }
}

export default Chapter;