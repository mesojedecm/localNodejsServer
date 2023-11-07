const http = require('http');

const dataToSend = JSON.stringify({
  message: 'Hello from another file!',
});

const options = {
  hostname: 'localhost',  // Update with your server's hostname or IP
  port: 3000,             // Update with the server's port
  path: '/',               // The endpoint you want to send data to
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': dataToSend.length,
  },
};

const req = http.request(options, (res) => {
  let responseData = '';

  res.on('data', (chunk) => {
    responseData += chunk;
  });

  res.on('end', () => {
    console.log('Server response:', responseData);
  });
});

req.on('error', (error) => {
  console.error('Request error:', error);
});

req.write(dataToSend);
req.end();
