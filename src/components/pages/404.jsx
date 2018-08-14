import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import DefaultLayout from '../layouts/Default'

class NotFound extends Component
{
  render() {
    return (
      <DefaultLayout>
        <Helmet>
          <title>Page not found | Rxpress</title>
          <meta name="description" content="A node.js web application using with React and Express." />
        </Helmet>
        <div className="page-wrapper clearfix">
          <div className="main clearfix">
            <div className="content">
              <h2>Oops, nothing here!</h2>
              <p>It looks like nothing was found at this location.</p>
            </div>
          </div>
        </div>{/* .page-wrapper End Here */}
      </DefaultLayout>
	);
  }
}

export default NotFound;
