import React from "react";

export default class HamburgerBar extends React.Component {
  render() {
    return (
      <section className="hamburger-flex">
        <button>Toggle me</button>
        <h1>{this.props.section}</h1>
      </section>
    );
  }
}
