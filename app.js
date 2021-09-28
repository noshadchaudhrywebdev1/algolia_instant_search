// Add here your javascript code
const instantsearch = require('instantsearch.js');
const search = instantsearch({
  appId: 'N3KG4D1C8I',
  apiKey: '16974b1c39d480513c4c26975915ca2a',
  indexName: 'res',
  routing: true
});

search.start();