/**
 * @author Ajar <yariv.gilad@gmail.com> [https://yarivgilad.com]
 * */
const constants = require('./constants');
const {
    Hidden,
    Reset,
    Bold,
    NoColor,
    Red,
    Green,
    Blue,
    Yellow,
    Magenta,
    Cyan,
    BgCyan,
    White,
    Black
} = constants;

let max_chars = 45;

/**
 * @returns { string } - filename of the script using the logger
 */
function get_filename(){
    try {
        throw new Error();
    } catch (e) {
        const lines = e.stack.split('\n');
        let line = lines[4];
        if(!line || 
            (line && line.includes('internal/modules/cjs')) || 
            (line.includes('<anonymous>')) ||
            (line.includes('_stream_writable.js')) ||
            (line.includes('next_tick.js')) ||
            (line.includes('task_queues')) ||
            (line.includes('node_modules')) ||
            (line.includes('module_job')) ||
            (line && line.includes('events.js'))) line = lines[3];
        if(!line) return '>>';
        const res = line.match(/([\w\d\-_.]*:\d+:\d+)/);
        if(!res) return '>>';
        const [info] = res;
        const [file , line_num] = info.split(':');
         return `${file}${Cyan} > ${White}${line_num}`
    }
}
function is_server() {
    return !(typeof window != 'undefined' && window.document && this == window);
}
/**
 * @param {string} color - one of the color hex constant values
 * @returns { Function } - args will be colored by the color you passed in.
 */
const log = (color,file_name) => (...args)=>  { 
    const hide = args[0] === Hidden || args.length === 0;
    const colored_msg = hide ? args.splice(0,2)[1] : args.shift() ;
    const user_text = [`${Bold}${color}${colored_msg}${Reset}`, ...args].join(' ');
    if(user_text.length > max_chars) max_chars = user_text.length;
    const pad = ' '.repeat(max_chars - user_text.length);
    const stamp = `${Magenta}🖍  ${White}${file_name||get_filename()} ${Reset}` 
    const text = `${user_text} ${pad} ${stamp}`;
    if(!hide){
        console.log(text);
    }
    return text;
}

const marker = {
    //by levels shorthand
    n :         log( NoColor ),    
    v :         log( Magenta ),    
    d :         log( Cyan ),       
    i :         log( Green ),      
    w :         log( Yellow ),     
    e :         log( Red ),       
    //by explicit levels  
    none:       log( NoColor ),    
    verbose:    log( Magenta ),    
    debug:      log( Cyan ),       
    info:       log( Green ),      
    warn:       log( Yellow ),     
    err:        log( Red ),       
    //by color names
    red:        log( Red ),       
    green:      log( Green ),     
    blue:       log( Blue ),      
    cyan:       log( Cyan ),      
    yellow:     log( Yellow ),  
    magenta:    log( Magenta ),   
    
    //some extras
    /**
     * @param { Object } obj - the Object to log 
     * @param { string } label - optional label 
     */
    obj:   (obj,label='object:')=> {

            if(Object(obj) !== obj){//verify value is an object
                throw new Error('.obj() expects at least 1 object argument');
            }
            const file_name = get_filename();
            const actual_label = log(Magenta,file_name)(label);
            console.dir(obj);
            return {actual_label}
    },
    /**
     * @param { Error } err - an Error object to log
     */
    error: (err)=> {
            if(toString.call(err) !== '[object Error]'){
                throw new Error('.error() expects 1 Error argument');
            }
            const file_name = get_filename();
            const msg = log(Red,file_name)('ERROR: ',err.message);
            let odd = true;
            let stack = err.stack? err.stack.split('\n') : [];
            //exclude stack traces from node internals or node_modules
            stack = stack.filter(line=> !line.includes('node_modules/') &&
                                        !line.includes('internal/modules/cjs') &&
                                        !line.includes('internal/bootstrap'));
            for(let line of stack){
                odd = !odd
                //keep it short
                line = line.substr(line.lastIndexOf('\\') - 35);
                //alternating row colors
                odd? log(NoColor,file_name)(line)  : log(Blue,file_name)(line) 
            }
            return {msg,stack}
    },
    constants   
}
module.exports = marker;