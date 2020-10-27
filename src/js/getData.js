var address='cairo';
const unit='metric';
const API_KEY= '3a25707fd99906b92241742955c2c420';
const request=require('request');
const getDtata=(location,callback)=>
{
 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${API_KEY}`;
    //https://api.openweathermap.org/data/2.5/weather?q=ja&units=metric&appid=3a25707fd99906b92241742955c2c420
    request({url:url,json:true},(error,res)=>{

        if(error)
        {   
            
            callback('connection error',undefined);
        }
         else if(res.body.cod==404)
        {
          
            callback('wrong',undefined);
        } 
        else
        {
            
            callback(undefined,res.body.main.temp);
            
            
         
            
        }


    })

}
module.exports=getDtata;
