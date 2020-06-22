import express from 'express';
import routes from './routes';

const app = express();

app.get('/', (req, res) => {
  res.json({ hello: 'World' });
});

app.listen(3333, () => {
  console.log('🚀 Server running on port 3333!');
});
