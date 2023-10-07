//modules

const names=require('./3-submod.js')
const sayhi=require('./4-submod1.js')

 const data=require('./5-alternative-flavour.js')
 

require('./6-mind.js')
 
 console.log(data)
 sayhi('vamsi')
 sayhi(names.name1)
 sayhi(names.name2)