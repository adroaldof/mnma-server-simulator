const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/pedido/enviar', handleGet);
app.post('/pedido/enviar', handlePost);

const startMessage = `Running at 'http://localhost:${port}'`;
app.listen(port, () => console.log(startMessage)); // eslint-disable-line no-console

function handleGet (req, res) {
  return res.send({
    method: 'GET',
    time: new Date(),
  })
}

function handlePost (req, res) {
  console.log('****************************************');
  console.log('req.body', JSON.stringify(req.body, null, 2));
  console.log(`***************** ${new Date()} ***********************`);
  console.log('');
  console.log('');
  console.log('');

  return res.send({
    qtdItems: req.body.qtdItens,
    numeroPedido: Math.floor(Math.random() * (999999 - 555555) + 555555),
    time: new Date(),
  });
}
