/* eslint-env node */
'use strict';

var request = require('request');

const activitiesMock = require('./activities-mock').activities;
// const ordersMock = require('./orders-mock').orders;
// const customersMock = require('./customers-mock').customers;
// const agentsMock = require('./agents-mock').agents;


/**
 * hook for authentication validation
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Callback} next
 */
function requireAuthentication(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).send('Unauthorized (Missing header "authorization"');
    res.end();
    return;
  }
  next();
}

/**
 * Generate a new token string
 * 
 * @returns {string} token
 */
function generateToken() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

module.exports = {
  name: 'test-backend',

  serverMiddleware({app}) {
    console.log('Init test-backend /api - v1.0');
    
    // Generate a related agents token by basic authorization
    app.post('/activities', (req, res) => {
      console.log(req);
      res.set({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authentication-token': token
      });

      res.status(200).send({
        activities: activitiesMock
      });

    });
    
    // Generate a related agents token by basic authorization
    // app.post('/tokens', (req, res) => {
      
    //   const token = generateToken();

    //   res.set({
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //     'authentication-token': token
    //   });

    //   res.status(200).send({});

    // });
    
    // Get an agent by token
    // app.get('/tokens/:token', (req, res) => {
      
    //   res.set({
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    //     "authentication-token": generateToken()
    //   });

    //   res.status(200).send({
    //     "token": {
    //       "id": req.params.token,
    //       "agent": "A111"     // Mario
    //       //"agent": "A222"  // Stefan
    //     }
    //   });

    // });

  }
};
