const donationController = require('../controllers/donation.controller');
//routes

function initRoutes(app){

//route for home
app.get('/',(req,res)=>{
    res.render('home')
});

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.get('/donate',(req,res)=>{
    res.render('donate')
})

app.get('/thankyou',(req,res)=>{
    res.render('thankyou')
})

app.get('/donate-form',(req,res)=>{
    res.render('donate-form')
})

app.post('/submit-donation', donationController().donation)
}

module.exports = initRoutes