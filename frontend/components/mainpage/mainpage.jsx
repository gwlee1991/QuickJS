import React, { Component } from 'react';
import { link } from 'react-router-dom';
import ChapterCard from '../chapters/chapterCard';
import curriculum from '../../../curriculum/quickJS';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.array = curriculum;
  }

  renderChapterComponents() {
    return (
      this.array.map((curriculum, i) => <ChapterCard key={i} chapter={curriculum} />)
    );
  }
  render() {
    return (
      <div className="chapter-container">
        {this.renderChapterComponents()}
      </div>
    );
  }
}

export default MainPage;
