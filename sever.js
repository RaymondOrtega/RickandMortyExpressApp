const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db, collection;

const url = "mongodb+srv://raymond:raymond@rickandmorty-fvjpk.mongodb.net/test?retryWrites=true&w=majority";
const dbName = "cardGame";

app.listen(3000, () => {
  MongoClient.connect(url, {
    useNewUrlParser: true
  }, (error, client) => {
    if (error) {
      throw error;
    }
    db = client.db(dbName);
    console.log("Connected to `" + dbName + "` on 3000!");
  });
});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  //console.log(db)
  db.collection('pointTracker').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {
      pointTracker: result
    })
    // console.log(result);
  })
})



app.put('/changePoints', (req, res) => {
  console.log(req.body);
  db.collection('pointTracker')
    .findOneAndUpdate({
      name: req.body.name,
    }, {
      $set: {
        points: req.body.points 
      }
    }, {
      sort: {
        _id: -1
      },
      upsert: false
    }, (err, result) => {
      if (err) return res.send(err)
      //console.log();
      res.send(result)
    })
})


app.delete('/remove', (req, res) => {
  db.collection('pointTracker').findOneAndDelete({
    name: req.body.name,
  }, (err, result) => {
    console.log(req.body.name, req.body.quote);
    if (err) return res.send(500, err)
    res.send('Message deleted!')
  })
})
app.post('/quotes', (req, res) => {
  db.collection('pointTracker').save({
    name: req.body.name,
    quote: req.body.quote,
    points: 0
  }, (err, result) => {
    if (err) return console.log(err)
    // console.log(req.body, req, res)
    console.log('saved to datatbase')
    res.redirect('/');
  })

})
