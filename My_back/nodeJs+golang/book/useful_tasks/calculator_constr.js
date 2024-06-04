let Calculator = function() {
    this.map = {
        '-': (a, b) => +a + +b,
        '+': (a, b) => +a - +b,
    }
    this.calculate = function(str) {
        let s = str.split(' ')
        return this.map[s[1]](+s[0], +s[2])
    };
    this.addMethod = function (s, func) {
        this.map[s] = func
    }
}
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.map;
console.log( result ); // 8