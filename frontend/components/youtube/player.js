import React, { Component } from 'react';
import Youtube from "react-youtube";
import { fetchVideo } from '../../util/youtube_api_util';

class YoutubePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  renderYTPlayer() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1
      }
    };
    if (this.state.data.length > 0) {
      return (
        <Youtube videoId="oFzGOw2dYpM" opts={opts} onReady={this.onReady} />
      );
    }
  }

  onReady(e) {
    e.target.pauseVideo();
  }

  componentDidMount() {
    fetchVideo("oFzGOw2dYpM").then(response =>
      this.setState({ data: response.items })
    );
  }

  render() {
    console.log(window);
    return (
      <div>
        {this.renderYTPlayer()}
      </div>
    );
  }
}

export default YoutubePlayer;