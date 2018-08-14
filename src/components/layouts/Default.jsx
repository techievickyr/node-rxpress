import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class DefaultLayout extends Component {
  render() {
    return (
      <div className="wrapper">
        <Helmet>
            <title>Node.js Web Application | Rxpress</title>
            <meta name="description" content="A node.js web application using with React and Express." />
        </Helmet>
        {this.props.children}
      </div>
    );
  }
}

export default DefaultLayout;
