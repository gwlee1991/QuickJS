import React, { Component } from 'react';
import YoutubePlayer from '../youtube/player';

class Chapter extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: this.props.defaultContent,
      chapter: this.props.defaultChapter
    }
    console.log(this.state); 
  }

  addEventListenerToLi(element, i){
    element.addEventListener("click", e => {
      e.preventDefault();
      this.setState({ content: true, chapter: i });
    });
  }

  componentDidMount() {
    const topics = document.querySelectorAll('li');
    for (let i = 0; i < topics.length; i++) {
      let current = topics[i];
      this.addEventListenerToLi(current, i);
    }
  }

  componentDidUpdate(){
    const topics = document.querySelectorAll("li");
    for (let i = 0; i < topics.length; i++) {
      let current = topics[i];
      this.addEventListenerToLi(current, i);
    }
  }

  renderTopicOptions(){
    return this.props.chapter.topics.map((topic, i) => {
      return <li key={i}>{i + 1}. {topic.title}</li>
    })
  }

  renderer(topic){

    return topic.headers.map((header, i) => {
      return <div key={i}>
        <h6>{header}</h6>
        {topic.contents[i].map((content, j) => {
          return <p key={j}>{content}</p>
        })}
        </div>
    })
  }

  renderTopicContent(){
    const topic = this.props.chapter.topics[this.state.chapter];
    return <div>
        <span
          onClick={e => this.setState({ content: false, chapter: null })}
        >
          {"< back"}
        </span>
        <h4>{topic.title}</h4>
        <h5>{topic.subtitle}</h5>
        <YoutubePlayer videoId={topic.videoId} />
        {this.renderer(topic)}
        <span
          onClick={e => this.setState({ content: false, chapter: null })}
        >
          {"< back"}
        </span>
      </div>;
    
  }

  render(){
    if (!this.state.content) {
      return(
        <section className="content-container">
          <h3>{this.props.chapter.title} - {this.props.chapter.subtitle}</h3>
          {this.renderTopicOptions()}
        </section>
      );
    } else {
      return(
        <section className="content-container">
          <h3>{this.props.chapter.title} - {this.props.chapter.subtitle}</h3>
          {this.renderTopicContent()}
        </section>
      )
    }
  }
}

export default Chapter;