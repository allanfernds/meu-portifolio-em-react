import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <nav>
            <span>Logo</span>
            <ul>
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
