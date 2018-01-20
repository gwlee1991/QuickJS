import React, { Component } from 'react';
import { link } from 'react-router-dom';
import Chapter from '../chapters/chapters';
import curriculum from '../../../curriculum/quickJS';

class MainPage extends Component{
  constructor(props){
    super(props);
    this.array = curriculum;
  }

  renderChapterComponents(){
    return;
    // return(
    //   this.array.map((curriculum, i) => {
    //     return <Chapter key={i} chapter={curriculum} />;
    //   })
    // );
  }
  render(){
    return(
      <div>
        {this.renderChapterComponents()}
      </div>
    );
  }
}

export default MainPage;
