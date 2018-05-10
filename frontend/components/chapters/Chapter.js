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

  // renderer(topic){

  //   return topic.headers.map((header, i) => {
  //     return <div key={i}>
  //       <h6>{header}</h6>
  //       {topic.contents[i].map((content, j) => {
  //         return <p key={j}>{content}</p>
  //       })}
  //       </div>
  //   })
  // }

  // renderTopicContent(){
  //   const topic = this.props.chapter.topics[this.state.topic];
  //   return <div>
  //       <span
  //         onClick={e => this.setState({ content: false, topic: null })}
  //       >
  //         {"< back"}
  //       </span>
  //       <h4>{topic.title}</h4>
  //       <h5>{topic.subtitle}</h5>
  //       <YoutubePlayer videoId={topic.videoId} />
  //       {this.renderer(tospic)}
  //       <span
  //         onClick={e => this.setState({ content: false, topic: null })}
  //       >
  //         {"< back"}
  //       </span>
  //     </div>;
    
  // }

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