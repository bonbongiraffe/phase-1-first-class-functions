function receivesAFunction(callbackFunction){
    callbackFunction();
    return;
}

function returnsANamedFunction(){
    const namedFunction = function(){
        console.log('I am a named function');
        return;
    }
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('I am an anonymous function');
    };
}

