import React, { Component } from 'react';
import { link } from 'react-router-dom';
import Chapter from '../chapters/chapters';

class MainPage extends Component{
  constructor(props){
    super(props);
    this.array = ["Chapter 1","Chapter 2","Chapter 3","Chapter 4"];
  }
  renderChapterComponents(){
    return(
      this.array.map((chapter) => {
        return <Chapter chapter={chapter}/>;
      })
    );
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
