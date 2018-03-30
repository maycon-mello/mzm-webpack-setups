/* @flow */
import React from 'react';
import './Account.scss';

type AccountState = {
  count: number,
};

export default class Account extends React.Component {
  props: {
    onClick: Function,
  };

  state: AccountState = {
    count: 0,
  };

  static defaultProps = {
    onClick: () => {},
  };

  handleClick = () => {
    this.props.onClick();
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { count } = this.state;

    return (
      <div className="page-account">
        <div>
          Account page {count}
        </div>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
