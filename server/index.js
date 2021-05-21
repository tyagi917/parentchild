const express=require('express');
const app=express();
const port=5000;
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
const  middlware=(req,res,next)=>
{
	if(req.body.name==null)
		return res.send("error")
	next();


}
app.get('/',(req,res)=>
{
	res.send("welcome");
})
app.get('/post',middlware,(req,res)=>
{
	return res.send("hello world");

})
app.listen(port,()=>{
	console.log(`server connected`);
})