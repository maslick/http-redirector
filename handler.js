'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello world!',
      timestamp: Math.floor(new Date().getTime()/1000)
    }, null, 2)
  };
};
