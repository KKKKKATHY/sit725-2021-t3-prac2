var express = require('express')
var page = express()


page.use(express.static(__dirname + '/public'));


var adder=function(num1,num2){
    var result = num1 + num2;
    return result

}


page.get('/test',function(req,res){
    var username = req.query.username;
    console.log('Yes, I have been hint' + username);
    res.send ('hello you hint me'+username);

})

page.get('/adder', function(req,res){
    var num1=parseInt(req.query.num1);
    var num2=parseInt(req.query.num2);
    var result=adder(num1,num2);
    res.send('The result is'+result)
})

var port = 3000
page.listen(port)
console.log('Server listening on:'+ port)
