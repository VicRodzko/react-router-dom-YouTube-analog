import Reflux from 'reflux';
import axios from 'axios';

import actions from './actions';

class Store extends Reflux.Store {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      allVideo: [],
      videoId: ""  
    }

    this.listenables = actions;                  
  }
  onSelectVideo(index) {                        
    this.setState({ selected: this.state.allVideo[index] });
  }

  onGetValue(e) {                              
    let value = e.target.value;

    this.setState( {searchInput: value} );
    console.log(this.state)
  }
  
  onSearchVideo(e) {
    axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBrmaj7j0yIJGWcGPYH3THz_Rh8BYAtlQs&q=" + this.state.searchInput + "&type=video").then( res => {
      this.setState( { allVideo: res.data.items } );
    });
  }
}

export default Store;