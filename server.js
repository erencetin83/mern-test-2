import config from './config';
import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.send('asşdjsaşd');
});

server.use(express.static('public'));

// server.get('/about.html', (req, res) => {
//   fs.readFile('./about.html', (err, data) => {
//     res.send(data.toString());
//   });
// });

server.listen(config.port, () => {
  console.info('express listenign port' + config.port);
});