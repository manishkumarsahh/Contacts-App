const express= require('express');
const path = require ('path');
const port=process.env.PORT || 8000;
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

app.get('/',function(req,res){
    return res.render('abc');
});

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
