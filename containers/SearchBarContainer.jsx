import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import { searchItem, toggleSearchRes, toggleSearchResOff} from '../actions/actions';
import { connect } from 'react-redux';
import Section from '../components/Section.jsx'

const mapStateToProps = store => ({
  searchBarActive: store.docs.searchBarActive
});

const mapDispatchToProps = dispatch => ({
  searchItem: item => dispatch(searchItem(item)),
  toggleSearchRes: () => dispatch(toggleSearchRes()),
  toggleSearchResOff: () => dispatch(toggleSearchResOff())
});

class SearchBarContainer extends Component {
  render() {
    // if (this.props.searchBarActive) {
      return (
        <section>
          <SearchBar
            searchItem={e => this.props.searchItem(e.target.value)}
            toggleSearchRes={() => this.props.toggleSearchRes()}
            toggleSearchResOff={() => this.props.toggleSearchResOff()}
          />
          { (this.props.searchBarActive) ? <Section id="searchRes" name="section from search bar" /> : null }
      </section> 
      );
    // } else
    //   return (
    //     <SearchBar
    //     searchItem={e => this.props.searchItem(e.target.value)}
    //     toggleSearchRes={() => this.props.toggleSearchRes()}
    //   />)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBarContainer);
