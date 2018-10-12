import React from 'react';

import './SearchForm.css';
import actions from './actions';

function SearchForm(props) {
	return (
	    <form className="search" onSubmit={ (e) => { e.preventDefault(); actions.searchVideo(); e.target.reset(); } }>
	      <input type="text" onChange={actions.getValue} />
	      <button type="submit"> Найти видео </button>
	    </form>
	)
}

export default SearchForm;