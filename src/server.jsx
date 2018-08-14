import React, { Component } from 'react'
import { StaticRouter } from 'react-router-dom'
import App from './components/App'

export default class Server extends Component {
    render() {
        const context = {}
        return (
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        );
    }
}
