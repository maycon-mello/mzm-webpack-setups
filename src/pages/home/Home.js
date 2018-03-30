import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

export default class Home extends React.Component {
  render() {
    return (
      <div className="page-home">
        <div>
          Home page
        </div>
        <Link to="/account">
          Go to Account
        </Link>
      </div>
    );
  }
}