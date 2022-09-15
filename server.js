const express = require('express');
const {notes} = require('./data/db.json');

const PORT = process.env.PORT || 3001;
const app = express();


app.get('/notes', (req,res)=>{
    let results = notes;
    if (req.query) {
        console.log(req.query);
    }
    res.json(results); 
})

app.get('/*', (req,res)=>{
    let results = notes;
    if (req.query) {
        console.log(req.query);
    }
    res.json(results); 
})

app.get('/api/note', (req,res)=>{
    
    let results = notes;
    if (req.query) {
        console.log(results);
        console.log(req.query);
        // results = filterByQuery(req.query, results);
    }
    res.json(results); 
});



app.listen(PORT, ()=> {
    console.log(`API server now on port ${PORT}!`);
});
