/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

export default class Home extends React.Component {
  props: {
    onChange: Function,
  };

  static defaultProps = {
    onChange: () => {},
  }

  handleClick = () => {
    this.props.onChange();
  }

  render() {
    return (
      <div className="page-home">
        <div>
          Home page
        </div>
        <button onClick={this.handleClick}>Click</button>
        <Link to="/account">
          Go to Account
        </Link>
      </div>
    );
  }
}
