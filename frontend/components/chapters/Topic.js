import React, { Component } from 'react';

class Topic extends Component {
  constructor(props){
    super(props);
  }

  renderContent(){
    const topic = this.props.topic;
    return (
      <div>
        <span></span>
      </div>
    )
  }

  render(){
    return(
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default Topic;