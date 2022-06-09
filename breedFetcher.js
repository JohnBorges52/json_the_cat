const input = process.argv.slice(2);
const request = require('request');


request(`https://api.thecatapi.com/v1/breeds/search?q=` + input, (error, response, body) => {
  
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  
  console.log(typeof body);
  const data = JSON.parse(body);
  if (data.length > 0) {
    console.log(data[0].description);
  } else {
    console.log("ERROR, YOU PUT THE WRONG BREED");

  }
  
});
