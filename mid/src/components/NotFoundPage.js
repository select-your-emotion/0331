import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header/Header';

const NotFoundPage = () => {
  return (
    <React.Fragment>
      Page not found. Goto <Link to="/dashboard">Home Page</Link>
    </React.Fragment>
  );
};

export default NotFoundPage;
