/* eslint-env node */
'use strict';

module.exports = {
  name: 'test-backend',

  isDevelopingAddon() {
    return true;
  },

  serverMiddleware({app}) {
    console.log('init test backend - /api - v1.0');

    app.get('/activities', (req, res) => {
      console.log(req.params);
    });
    
  }
};
