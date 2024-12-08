import express from "express";
import expressWsF from 'express-ws';

const app = express();
const expressWs = expressWsF(app);
const port = 3000;

app.ws('/commit', function(ws, req) {
  ws.on('message', function(msg) {
    ws.send(msg);
  });
});


app.listen(port, () => {
  console.log(`Raker app listening on port ${port}`);
});
