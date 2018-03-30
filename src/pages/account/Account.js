/* @flow */
import React from 'react';
import './Account.scss';

type AccountState = {
  count: number,
};

export default class Account extends React.Component {

  state: AccountState = {
    count: 0,
  };

  inc = () => this.setState({
    count: this.state.count + 1,     
  });

  render() {
    const value = this.props.value;

    return (
      <div className="page-account">
        <div>
          Account page {this.state.count}
        </div>
        <button onClick={this.inc}>Increment</button>
      </div>
    );
  }
}
