import React, { Component } from 'react';
import { connect } from 'react-redux';

import HamburgerBar from '../components/HamburgerBar.jsx';
import SideBarContainer from '../containers/SideBarContainer.jsx';
import DocsBody from '../components/DocsBody.jsx';

const mapStateToProps = store => ({
  section: store.docs.section,
  content: store.docs.content,
});

class DocsContainer extends Component {
  render() {
    return (
      <section>
        <HamburgerBar section={this.props.section} />
        <section id="DocsContainer">
          <SideBarContainer />
          <DocsBody />
          {/* <DocsBody content='asdfghjkl' /> */}

        </section>
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(DocsContainer);
