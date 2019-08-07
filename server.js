const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/templates/index.html'));
});

router.get('/level2',function(req,res){
    res.sendFile(path.join(__dirname+'/templates/level2.html'));
});

router.get('/level1',function(req,res){
    res.sendFile(path.join(__dirname+'/templates/level1.html'));
});

router.get('/level3',function(req,res){
    res.sendFile(path.join(__dirname+'/templates/level3.html'));
});
app.use('/', router);


app.listen(5000,
    ()=>{console.log('Open at localhost:5000')});