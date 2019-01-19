[![marker](https://badgen.net/npm/v/@ajar/marker)](https://www.npmjs.com/package/@ajar/marker)
[![marker](https://badgen.net/npm/dt/@ajar/marker)](https://www.npmjs.com/package/@ajar/marker)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
[![jest](https://img.shields.io/bundlephobia/min/@ajar/marker.svg)](https://www.npmjs.com/package/@ajar/marker)


# Marker 
A simple color logging utility for your node.js console.

[![Marker](https://raw.githubusercontent.com/Ajar-Ajar/marker/master/marker.png)](https://www.npmjs.com/package/@ajar/marker)

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
const marker = require('@ajar/marker'); 
```

## ES6 modules
```javascript
import marker from '@ajar/marker'; 
```

## Usage
```javascript
marker.info('hello','marker'); 
```

## Examples
```javascript
//by levels  

marker.verbose('verbose','is explicit');
marker.debug('debug','is common');
marker.info('info','is trivial');  
marker.warn('warn','is important');  
marker.err('err','is critical'); 

//by levels shorthand

marker.v('v','is short for verbose');    
marker.d('d','is short for debug');     
marker.i('i','is short for info');     
marker.w('w','is short for warn');     
marker.e('e','is short for err');  

//by color names

marker.blue('blue','ocean');       
marker.magenta('magenta','is lighter then purple');    
marker.cyan('cyan','is lighter then blue');       
marker.green('green','peace');      
marker.yellow('yellow','mellow');     
marker.red('red','tape');        
   
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
marker.obj(complex_object,'This is a complex_object');

/**
 * use .error() to log errors
 * @param { Error } - an Error object to log
 */
try{
    define('is not defind')
}catch(err){
    marker.error(err)
}
```

## Example output
<img src="https://raw.githubusercontent.com/Ajar-Ajar/marker/master/screetshot.png" width="800" alt="Example output">