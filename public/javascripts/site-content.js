const rp = require('request-promise');

exports = {
  async getSiteContent(url) {
    const result = await rp(url);
    return result;
  }
};
