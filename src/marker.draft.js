const marker = require('./index');

//by explicit levels  
console.log('\n\nby levels\n') 
marker.verbose('verbose','is explicit');
marker.debug('debug','is common');
marker.info('info','is trivial');  
marker.warn('warn','is important');  
marker.err('err','is critical'); 
//by levels shorthand
console.log('\nby levels shorthand\n')
marker.v('v','is short for verbose');    
marker.d('d','is short for debug');     
marker.i('i','is short for info');     
marker.w('w','is short for warn');     
marker.e('e','is short for err');    
//by color names
console.log('\nby color names\n')
marker.blue('blue','ocean');       
marker.magenta('magenta','is lighter then purple');    
marker.cyan('cyan','is lighter then blue');       
marker.green('green','peace');      
marker.yellow('yellow','mellow');     
marker.red('red','tape');        
   
const complex_object = {
    one:1,
    two:2,
    internal:{
        a:'first',
        b:'second',
        nested:{
            key:'value',
            some:'thing',
            fruits:['apple','orange','banana'],
            types:[{str:'one',int:2,bool:false,empty:null}]
        }
    },
    three:3,
    four:4
}
console.log('\n.obj()\n')
marker.obj(complex_object,'This is a complex_object');

/**
 * @throws let's throw some errors
 */
try{
    define('is not defind')
}catch(e){
    console.log('\n.error()\n')
    marker.error(e)
    console.log('\n\n')
}

//works with anonymus functions as well
['a','b','c'].forEach((char,i)=> marker.cyan(`index: ${i}`,`value: ${char}`))
  
