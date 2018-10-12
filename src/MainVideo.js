import React from 'react';
import Reflux from 'reflux';

import './MainVideo.css';

import Store from './Store';

class MainVideo extends Reflux.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.store = Store;
    this.storeKeys = ['allVideo'];                  
  }

  render() {
    let videoIdFromUrl = this.props.match.params.videoId;

    let currentVideo = this.state.allVideo.filter(video => {
      return video.id.videoId == videoIdFromUrl;
    });

    if (currentVideo.length == 0) {
      return (<h2>Видео не существует</h2>);
    }

    return (
      <div>
        <div className="selected">
          <iframe src={"https://www.youtube.com/embed/" + videoIdFromUrl} title="что-бы не ругалась консоль" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen autoPlay></iframe>
        </div>
        <button className="return" onClick={() => {this.props.history.goBack()}}>
          Вернуться назад!
        </button>
      </div>
    );  
  }
}

export default MainVideo;