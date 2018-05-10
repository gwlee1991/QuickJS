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

  // renderYTPlayer() {
    // const opts = {
    //   height: "390",
    //   width: "640",
    //   playerVars: {
    //     autoplay: 1
    //   }
    // };
    // if (this.state.data.length > 0) {
    //   return (
    //     <Youtube videoId={this.props.videoId} opts={opts} onReady={this.onReady} />
    //   );
    // }
  // }

  // onReady(e) {
  //   e.target.pauseVideo();
  // }

  componentDidMount() {
    fetchVideo(this.props.videoId).then(response =>
      this.setState({ data: response.items })
    );
  }

  render() {
    if (this.props.videoId !== "" && this.state.data.length > 0) {
      let videoId = this.props.videoId;
      return <div>
          <iframe width="690" height="390" src={`https://www.youtube.com/embed/${this.props.videoId}?enablejsapi=1`} />
        </div>;
    } else {
      return "";
    }
  }
}

export default YoutubePlayer;