const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');

const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

// allow cross-origin request
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));







app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));