var express=require ('express')
var app=express();
app.get('/project7.html', function(req,res){
    res.sendFile(__dirname+"/"+"project7.html");

})
app.get('/process',function(req,res){
    response={
        firstname:req.query.firstname,
        lastname:req.query.lastname,
        gender:req.query.lastname,
        
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
app.listen(3020);
