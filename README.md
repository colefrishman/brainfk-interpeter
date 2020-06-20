# brainfk-interpeter

**Usage:**



const interpreter = require('brainfk-interpreter');

interpreter.interpret(sourceCode, memsize, inputText);



interpret() arguments:

- sourceCode: The source code in the programming language brainfuck, formatted as a string. More information about this language, along with a complete list of instructions can be found [here](https://en.wikipedia.org/wiki/Brainfuck).
- memsize: The number of cells you can use in the program, formatted as an integer. Don't go too big obviously.
- inputText: The  input that will be fed into the program, fomratted as a string. Each input ( , ) instruction will take one character starting from the left of the string.



Each cell can hold 1 byte from 0-255 (will output ascii)