const express = require('express'),
bodyParser = require('body-parser'),
app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: false}));
app.use('/static', express.static('public'));

app.get('/',(req,res)=>{
    res.render('bmi');
})

app.post('/',(req,res)=>{
const weight = Number(req.body.weight),
 height = Number(req.body.height),
 result = (weight / height/height)* 10000;
 res.render('bmi',{result: result.toFixed(1)})

})
app.listen(3000,()=>{
    console.log('The application is running on port 3000')
})