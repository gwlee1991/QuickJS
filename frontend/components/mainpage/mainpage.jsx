import React, { Component } from 'react';
import { link, Switch, Route } from 'react-router-dom';
import ChapterCard from '../chapters/chapterCard';
import curriculum from '../../../curriculum/quickJS';
import Chapter from '../chapters/Chapter';
import Topic from '../chapters/Topic';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.curriculum = curriculum;
    this.state = {
      chapter: null,
      topic: null
    }
    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount(){
    const chapters = document.getElementsByClassName("card");
    for(let i = 0; i < chapters.length; i++) {
      let current = chapters[i];
      current.addEventListener("click", e => {
        e.preventDefault();
        if (this.state.chapter === null) {
          this.setState({ chapter: i, topic: null});
        } else if (this.state.chapter === i) {
          this.setState({ chapter: null, topic: null });
        } else if (this.state.chapter !== null && this.state.chapter !== i) {
          this.setState({ chapter: i, topic: null });
        }
      })
    }

    if (document.getElementsByClassName("topic-option")) {
      this.addEventListenerOnTopicOptions();
    }
  }

  componentDidUpdate(){
    if(document.getElementsByClassName("topic-option")) {
      this.addEventListenerOnTopicOptions();
    }
  }

  addEventListenerOnTopicOptions(){
    const topics = document.getElementsByClassName("topic-option");
    for (let i = 0; i < topics.length; i++) {
      let current = topics[i];
      current.addEventListener("click", e => {
        e.preventDefault();
        if (this.state.topic === null) {
          this.setState({ topic: i });
        }
      });
    }
  }

  renderChapterComponents() {
    return (
      this.curriculum.map((curriculum, i) => <ChapterCard key={i} chapter={curriculum}/>)
    );
  }

  renderContent() {
    if(this.state.chapter !== null && this.state.topic === null) {
      let chapter = this.curriculum[this.state.chapter];
      return <Chapter chapter={chapter} />
    } else if (this.state.chapter !== null && this.state.topic !== null) {
      let chapter = this.curriculum[this.state.chapter];
      let topic = chapter.topics[this.state.topic];
      return (
        <section className="content-container">
          <span onClick={e => this.setState({ topic: null })}>{"< back"}</span>
          <Topic topic={topic}/>
          <span onClick={e => this.setState({ topic: null })}>{"< back"}</span>
        </section>
      )
    }
  }

  render() {
    return (
      <div className="chapter-container">
        <section className="chapter-card">{this.renderChapterComponents()}</section>
        {this.renderContent()}
      </div>
    );
  }
}

export default MainPage;
