const http=require('http');


/* 

The first parameter 
        req 
represents the incoming request.
ex: a cilent is requesting from the web browser to the web page.


The second parameter
           res 
 is the response what we are sending back




*/


/*


we should enter in the browser that

            localhost:5000

*/


const server=http.createServer((req,res)=>{
    if(req.url==='/')   // if the last character is / means->   localhost:5000/    --- This loop will work and print the statement.....
    {
        res.end('Welcome to our page..........')
    }
    else if(req.url==='/about')  // else-if the last character is /about means->   localhost:5000/about    --- This loop will work and print the statement.....
   
{
    res.end('Here is our short history..')  
   

}
else{   // else the last character is // or /+ or +dd any  means->   localhost:5000//   --- This loop will work and print the statement.....
res.end(`
    <h1>!Oops...</h1>

    <p>We can't seem to find the page you are lokking for </p>
    <a href="/">back home</a>`
);
}
});


server.listen(5000)//only 5000 will listen the request.