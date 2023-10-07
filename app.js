//  npm -   global command,comes with node
//  npm --version


//  local dependency    -   use it only in this particular project
//  npm i   <packageName>


//  global dependency   -   use it in the any project
//  npm install -g  <packageName>
//  sudo npm install    -g  <packagename>   (mac)


//  package.json - manifesr file (stores important info about project/package)
//  manual approach (create package.json in the root,create  properties etc)
//  npm init(step by step,press enter to skip)
//  npm init   -y   (everything default) 




const _=require('lodash')

const items=[1,[2,[3,[4]]]]

const newItems=_.flattenDeep(items) 
/*

flattenDeep will remove all the sub array braces and give it as single array

output: [1,2,3,4]

*/

console.log(newItems)