[![marker](https://img.shields.io/npm/v/@ajar/marker.svg)](https://www.npmjs.com/package/@ajar/marker)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

# Marker 
Colored logs in your terminal, and much more

## installation
```
npm i @ajar/marker
```
## Features
1. colored logs  - by level, level shorthand or explicit colors
2. prefix logs with file name and line number
3. prints complex objects
4. smart error logs - 

   logs error message and stack  
   ignores node_modules and node internals to focus on your own code

## CommonJS
```javascript
const log = require('@ajar/marker');

log.info('hello','marker'); 
```

## ES6 modules
```javascript
import log from '@ajar/marker';

log.info('hello','marker'); 
```
## Demo usage
```javascript
//by levels shorthand

log.v('v','is short for verbose');    
log.d('d','is short for debug');     
log.i('i','is short for info');     
log.w('w','is short for warn');     
log.e('e','is short for err');  

//by explicit levels  

log.verbose('verbose','is explicit');
log.debug('debug','is common');
log.info('info','is trivial');  
log.warn('warn','is important');  
log.err('err','is critical'); 

//by color names

log.blue('blue','ocean');       
log.magenta('magenta','is lighter then purple');    
log.cyan('cyan','is lighter then blue');       
log.green('green','peace');      
log.yellow('yellow','mellow');     
log.red('red','tape');        
   
// .obj()
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
/**
 * Use .obj() to log complex objects
 * @param { Object } obj - the Object to log 
 * @param { string } label - optional label 
 */
log.obj(complex_object,'This is a complex_object');

/**
 * use .error() to log errors
 * @param { Error } - an Error object to log
 */
try{
    define('is not defind')
}catch(err){
    log.error(err)
}
```

## Demo output
<img src="https://gitlab.com/_Ajar_/marker/raw/master/screetshot.png" width="700" >
<!-- [![marker demo usage](https://gitlab.com/_Ajar_/marker/raw/master/screetshot.png)(https://www.npmjs.com/package/@ajar/marker) -->


<!-- https://img.shields.io/badge/marker-1.0.0-brightgreen.svg -->

<!-- [![DatePicker](https://img.shields.io/badge/Date_Picker-1.0.0-brightgreen.svg)]() -->
