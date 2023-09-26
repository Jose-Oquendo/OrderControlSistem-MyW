 const express = require('express');
 const morgan = require('morgan');
 const app = express();
 
 //settings
 app.set('port', process.env.PORT || 3000)
 
 //middlewares
 app.use(morgan('dev'));
 app.use(express.json());
 
 //routes
 app.use('/task', require('./routes/task.js'))
 
 //static files
 app.use(express.static(__dirname + '/public'))
 
 // server is listening
 app.listen(app.get('port'), () => {
    console.log('Server is actived!');
    console.log(`http://localhost:${app.get('port')}/`)
 })
