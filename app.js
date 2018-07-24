const express = require('express'),
    app=express(),
    port=process.env.PORT || 5005,
    host='0.0.0.0',
    date=new Date(),
    bodyParser = require('body-parser'),
    mongo=require('mongodb').MongoClient;


app.use((req,res,next)=>{
        res.header('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
});

const server = app.listen(port, host, e => {
    if(e) throw e;
    console.warn('host : '+server.address().address+'\tport : '+server.address().port);
});