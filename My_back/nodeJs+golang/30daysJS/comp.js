s =[x => x + 1, x => x * x, x => 2 * x]



var compose = function(functions) {
    return function(x) {
        return(functions.reduceRight((res, func) => (res = func(res)), x))
    }
};


let composed_func = compose(s)
console.log(composed_func(4))