var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  // [GET]
  app.get('/people/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('people').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  // [POST]
  app.post('/people', (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    db.collection('people').insert(note, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  // [PUT]
  app.put('/people/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = { text: req.body.body, title: req.body.title };
    db.collection('people').update(details, note, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(note);
      } 
    });
  });

  // [DELETE]
  app.delete('/people/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('people').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      } 
    });
  });
};