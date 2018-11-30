const rp = require('request-promise');
const errors = require('request-promise/errors');



module.exports = {
  async getSiteContent(url) {
    try {
      const result = await rp(url);
      return {
        type: true,
        data: result
      };
    }
    catch(e){
      console.error(e);
      return {
        type: false,
        data: e
      };
    }
  }
};




// module.exports = {
//   async getSiteContent(url) {
//     try {
//       const result = await rp(url);
//       return {
//         type: true,
//         data: result
//       };
//     }
//     catch(e){
//       console.error(e);
//       return {
//         type: false,
//         data: e
//       };
//     }
//   }
// };
