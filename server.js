require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./routes');

function startServer(server) {
  const { PORT } = process.env;

  server.listen(PORT || 3000, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is listening on ${PORT}`);
  });
}

async function init() {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());

  router(app);
  startServer(app);
}

init();
