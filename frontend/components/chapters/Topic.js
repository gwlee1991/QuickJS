import React, { Component } from 'react';
import YoutubePlayer from '../youtube/player';

class Topic extends Component {
  constructor(props){
    super(props);
  }

  renderer(topic){
    return topic.headers.map((header, i) => {
      return <div key={i}>
        <h6>{header}</h6>
        {topic.contents[i].map((content, j) => {
          return <ul key={j}><p>{content}</p></ul>
        })}
        </div>
    })
  }

  render(){
    const topic = this.props.topic;
    return(
      <div>
        <h4>{topic.title}</h4>
        <h5>{topic.subtitle}</h5>
        <YoutubePlayer videoId={topic.videoId} />
        {this.renderer(topic)}
      </div>
    );
  }
}

export default Topic;