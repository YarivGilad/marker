declare module '@ajar/marker'{
    
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

    //by levels shorthand
    export const n :         LogFunc;    
    export const v :         LogFunc;    
    export const d :         LogFunc;       
    export const i :         LogFunc;      
    export const w :         LogFunc;     
    export const e :         LogFunc;       
    //by explicit levels  
    export const none:       LogFunc;    
    export const verbose:    LogFunc;    
    export const debug:      LogFunc;       
    export const info:       LogFunc;      
    export const warn:       LogFunc;     
    export const err:        LogFunc;       
    //by color names
    export const red:        LogFunc;       
    export const green:      LogFunc;     
    export const blue:       LogFunc;      
    export const cyan:       LogFunc;      
    export const yellow:     LogFunc;  
    export const magenta:    LogFunc;   
        
    //some extras
    export const obj:        ObjectLogFunc;
    export const error:      ErrorLogFunc;
    export const constants:  Constants;  
    
}