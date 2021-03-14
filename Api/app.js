const express = require('express');
const bodyParser = require('body-parser');
//Cross Origin Resource Sharing
const cors = require('cors');
const sendGrid = require('@sendgrid/mail');

const app = express();

app.use(bodyParser.json());
  

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin' , '*')
    res.setHeader('Access-Control-Allow-Methods' , 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers' , 'Contect-Type, Authorization');
    next();

});

app.get('/api', (req, res, next ) => {
    res.send('API Status: Running')
});

app.post('/api/email', (req, res, next) => {

    sendGrid.setApiKey('');
        const msg= {
            to: 'mjonesp@gmail.com',
            from: req.body.email,
            subject:'Website Contact',
            text: req.body.message
        }

    sendGrid.send(msg)
    .then(result => {

        res.status(200).json    
            success: true

    });

})

    .catch(err => {

        console.log('error:', err);
        res.status(401).json({
            success: false
        });

    });

});

//setting up app to run on local host port 3030
app.listen(3030, '0.0.0.0');
console.log ('App is running on Port 3030!');

