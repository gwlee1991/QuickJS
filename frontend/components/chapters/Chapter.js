import React, { Component } from 'react';

class Chapter extends Component {
  constructor(props){
    super(props);
  }

  renderTopicOptions(){
    return this.props.chapter.topics.map((topic, i) => {
      return <li key={i} className="topic-option">{i + 1}. {topic.title}</li>
    })
  }

  render(){
    return(
      <section className="content-container">
        <h3>{this.props.chapter.title} - {this.props.chapter.subtitle}</h3>
        {this.renderTopicOptions()}
      </section>
    );
  }
}

export default Chapter;