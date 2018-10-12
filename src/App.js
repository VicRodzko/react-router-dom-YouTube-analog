import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import SearchForm from './SearchForm';
import VideoList from './VideoList';
import MainVideo from './MainVideo';

function App(props) {
  return (
  	<BrowserRouter>
	    <div>
				<Route exact path="/" component={SearchForm} />
		    <Route exact path="/" component={VideoList}  />
		    <Route path="/video/:videoId" component={MainVideo} />
	    </div>
    </BrowserRouter>
  );
}

export default App;