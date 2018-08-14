import express from 'express';
import { Helmet } from 'react-helmet';
let router = express.Router();

import { template } from '../config/template';

const renderHTML = (html, data = {}) => {
    const helmet = Helmet.renderStatic();
    return template(helmet, html, data);
};

router.use(function(req, res, next){
    global.req = req;

    // continue doing what we were doing and go to the route
    next();
});

router.get('*', function(req, res) {
    let data = {};
    res.render('server', { preloadedData: data }, (err, html) => res.send(renderHTML(html, data)));
});

module.exports = router;
