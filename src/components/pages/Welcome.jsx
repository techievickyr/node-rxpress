import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import DefaultLayout from '../layouts/Default'

class Welcome extends Component {
  render () {
    return (
      <DefaultLayout>
          <Helmet>
            <title>Node.js Web Application | Rxpress</title>
            <meta name="description" content="A node.js web application using with React and Express." />
          </Helmet>
          <div className="page-wrapper clearfix">
            <div className="main clearfix">
              <div className="content">
                <h2>Rxpress Framework</h2>
                <p>A node.js web application using with React and Express.</p>
              </div>
  		    </div>
          </div>{/* .page-wrapper End Here */}
      </DefaultLayout>
    );
  }
}

export default Welcome;
