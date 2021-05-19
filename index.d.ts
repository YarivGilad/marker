

type LogFunc = (...args: any[])=> string;
type ErrorLogFunc = (err: Error)=> {msg:string,stack:string[]};
interface Obj{
    [key: string]:any
}
type ObjectLogFunc = (obj:Obj,label?:string) => {actual_label:string};

interface Constants{
    Reset:string;
    Bold:string;
    Dim:string;
    Underscore:string;
    Blink:string; 
    Reverse:string;
    Hidden:string;
    //Colors
    NoColor:string;
    Black:string;
    Red:string;
    Green:string;
    Yellow:string;
    Blue:string;
    Magenta:string;
    Cyan:string;
    White:string;
    //Backgrounds
    BgBlack:string;
    BgRed:string;
    BgGreen:string;
    BgYellow:string;
    BgBlue:string;
    BgMagenta:string;
    BgCyan:string;
    BgWhite:string;
}

export interface Marker{
    //by levels shorthand
    n :         LogFunc,    
    v :         LogFunc,    
    d :         LogFunc,       
    i :         LogFunc,      
    w :         LogFunc,     
    e :         LogFunc,       
    //by explicit levels  
    none:       LogFunc,    
    verbose:    LogFunc,    
    debug:      LogFunc,       
    info:       LogFunc,      
    warn:       LogFunc,     
    err:        LogFunc,       
    //by color names
    red:        LogFunc,       
    green:      LogFunc,     
    blue:       LogFunc,      
    cyan:       LogFunc,      
    yellow:     LogFunc,  
    magenta:    LogFunc,   
    
    //some extras
    obj:        ObjectLogFunc;
    error:      ErrorLogFunc;
    constants:  Constants;  
}