const axios = require('axios');
const FileUtil = require('./file_util.js');

axios
  .get('https://script.google.com/macros/s/AKfycbxTo7fC-p46EIpfGonFQzAaNcAjXuJPYU1RIe9vmD5iiDDfvnYonlG6KakKP2N4p7mFAQ/exec')
  .then((response) => {
    const str = `export default ${JSON.stringify(response.data)}`;
    
    FileUtil.writeFile('./src/js/menu_data.js', str);
  })
  .catch((error) => {
    console.error(error);
  });
