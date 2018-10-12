import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router-dom';

import './VideoList.css';

import Store from './Store';
import actions from './actions';

class VideoList extends Reflux.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.store = Store; 
    this.storeKeys = ['allVideo'];
  }

  render() { 
    return (
      <div className="list">
        {this.state.allVideo.map((video, index)=>{
          return (
            <div key={video.id.videoId} onClick={ (props) => {actions.selectVideo(index)} }>
                <Link to={`/video/${video.id.videoId}`}>
                <img src={video.snippet.thumbnails.high.url} alt="что-бы не ругалась консоль"/>
                </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default VideoList;

