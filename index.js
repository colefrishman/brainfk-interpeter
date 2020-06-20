const interpreter = require('./interpreter');

const helloworld = "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.";
const testprog = ",[-],."
let out = interpreter.interpret(helloworld, 100, "aa");
console.log(out);