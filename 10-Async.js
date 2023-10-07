const {readFile,writeFile}=require('fs')

readFile('./first.txt','utf8',(err,result)=>
/*If the file is exist then it will call the result
 and 
leave the if condition and print the result in console. 
 or
If the file is not exist then it will call the err
 and 
execute the if condition and print the err in console.
 */
{
    if(err)
    {
        console.log(`This is the error  ${err}`)
        return
    }


    const first=result;
    readFile('./second.txt','utf8',(err,result)=>
    {
        if(err)
        {
            console.log(`This is the error ${err}`)
            return
        }

        const second=result;

        writeFile
        (
            './third.txt',`Here is the ${first},${second}`,(err,result)=>{
                if(err){
                    console.log(`Here is the error: ${err}`);
                    return
                }
                console.log(result)
            }
            )
    }
    )
}
)





