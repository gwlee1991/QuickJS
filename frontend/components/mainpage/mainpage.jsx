import React, { Component } from 'react';
import { link } from 'react-router-dom';
import ChapterCard from '../chapters/chapterCard';
import curriculum from '../../../curriculum/quickJS';
import Chapter from '../chapters/Chapter';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.curriculum = curriculum;
    this.state = {
      content: false,
      chapter: null
    }
    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount(){
    const chapters = document.getElementsByClassName("card");
    for(let i = 0; i < chapters.length; i++) {
      let current = chapters[i];
      current.addEventListener("click", e => {
        e.preventDefault();
        if (this.state.chapter === i && this.state.content) {
          this.setState({ content: !this.state.content });
        } else if ((this.state.chapter !== i) && (this.state.content === false)) {
          this.setState({ content: true, chapter: i });
        } else if ((this.state.content) && this.state.chapter !== i) {
          this.setState({ chapter: i});
        }
      })
    }
  }

  renderChapterComponents() {
    return (
      this.curriculum.map((curriculum, i) => <ChapterCard key={i} chapter={curriculum}/>)
    );
  }

  renderContent() {
    if(this.state.chapter !== null && this.state.content) {
      return (
        <Chapter chapter={this.curriculum[this.state.chapter]} defaultContent={false} defaultChapter={null}/>
      )
    } else {
      return "";
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
