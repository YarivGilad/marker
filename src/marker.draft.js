const marker = require('./index');
const fetch = require('isomorphic-fetch');

//by levels shorthand
console.log('\n\nby levels shorthand\n')
marker.v('v','is short for verbose');    
marker.d('d','is short for debug');     
marker.i('i','is short for info');     
marker.w('w','is short for warn');     
marker.e('e','is short for err');    
//by explicit levels  
console.log('\nby explicit levels\n') 
marker.verbose('verbose','is explicit');
marker.debug('debug','is common');
marker.info('info','is trivial');  
marker.warn('warn','is important');  
marker.err('err','is critical'); 
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

async function getRate(base,currency) {
	try {

		const key = '36da8ac5af2456ef28de8ca6616b9c9c';
		const url = `http://data.fixer.io/api/latest?access_key=${key}&base=${base}&symbols=${currency}`

		const res = await fetch(url);
		const json = await res.json();

		if(json.rates[currency]) return json.rates[currency];
		else throw new Error('currency: '+currency+' doesn\'t exist in results.');

	} catch(error) {
		marker.error(error);
	}
};

async function main() {
    try {
          const base = 'EUR';
          const currencies = ['AUD','ILS','GBP','NZD','CAD','JPY','INR','PLN','SEK','HUF','MXN']
          let rates = await Promise.all(currencies.map( currency => getRate(base,currency) ))
        //   marker.cyan(`1 ${base} = `,`${rates[0]} ${currencies[0]} `);
        //   rates.forEach((rate,i)=> console.log(marker.cyan.call(null,'i')));//`1 ${base} = `,`${rate} ${currencies[i]} `))
          rates.forEach((rate,i)=> marker.cyan(`1 ${base} = `,`${rate} ${currencies[i]} `))
    } catch(error) {
          marker.error(error);
    }
  }
main()