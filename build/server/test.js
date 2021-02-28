const smb2 = require('smb2');

const share = new smb2({ 
  share: '\\\\192.168.1.200\\config',
  domain: 'WORKGROUP',
  username: 'taylor',
  password: 'taylor'
});
console.log('here');
share.readFile('.shopping_list.json', (error, data) => {
  if(error) {
    return console.log(error);
  }
  try {
    console.log(JSON.parse(data.toString()));
  } catch(e) {
    console.log(e);
  }
});