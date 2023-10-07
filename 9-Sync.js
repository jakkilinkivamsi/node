const {readFileSync,writeFileSync}=require('fs');


const first=readFileSync('./first.txt','utf8');
const second=readFileSync('./second.txt','utf8');

/*

where generally the return files will display the buffer data so ,to convert it we use the utf8

Here the utf8 is used to convert the buffere data into the text.

*/

console.log(first);//display the data in first.txt
console.log(second);//display the data in Second.txt




writeFileSync(
    './third.txt',
    `Here is the result : ${first},${second}`,

    {flag:'a'}
)
    /*here the {flag:'a'} is used to append the same file text into it*/
  

    
/*
This will create a new file with name third.txt
 and
 after comma the text data will be added to the third.txt
 and 
 if already the file is there even though we write this
 will be over-write the data
 */


 const third=readFileSync('./third.txt','utf8');

 console.log(third);