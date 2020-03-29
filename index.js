const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use('/public', express.static('src/assets'));

//Home
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/src/index.html'));
});

app.use('/', router);
app.listen(process.env.PORT || 8080);