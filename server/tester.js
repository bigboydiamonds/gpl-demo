const EasyGraphQLTester = require('easygraphql-tester');
const fs = require('fs');
const path = require('path');

const schemaCode = fs.readFileSync('./schema/schema.gql', 'utf8')

const tester = new EasyGraphQLTester(schemaCode);

const query = `
{
  books{
    name
    genre
    author{
      name
      age
    }
  }
}`

tester.test(true, query)