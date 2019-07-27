import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <input
        id="searchBar"
        type="text"
        onFocus={() => this.props.toggleSearchRes()}
        //any time i pass an argument to the handler is the event itself
        onChange={e => {
          this.props.toggleSearchRes()
          this.props.searchItem(e);
        }}
        onBlur={() => this.props.toggleSearchResOff()}
        //the 2 value is what will be the input for the call
      />
    );
  }
}

export default SearchBar;
