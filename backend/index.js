import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({ hello: 'Hello Angular!' });
});

app.post('/question', (req, res) => {
  console.log(req.body);
  res.send({ status: 'Question is received' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
