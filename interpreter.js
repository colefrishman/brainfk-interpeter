function interpret(sourceCode, memsize, inputText){
	
	
	/* Intitialization stuff*/
	let input = inputText;
	const sclength = sourceCode.length;
	let output = "";
	
	let memory = [];
	let bracketStack = [];
	let ptr = 0;

	//Sets the memory to all 0s. There might be a more efficient way to do this.
	for(let i=0; i<memsize; ++i){
		memory.push(0);
	}
	
	for (let x=0; x<sclength; ++x){
		var ins = sourceCode.charAt(x);
		
		switch (ins) {
			case '<':
				--ptr;
				break;
			case '>':
				++ptr;
				break;
			case '-':
				--memory[ptr];
				break;
			case '+':
				++memory[ptr];
				break;
			case ',':
				if(input){
					memory[ptr] = input.charCodeAt(0);
					
					//removes the earliest input character after it used
					input = input.slice(1);
				}
				else{

				}
				break;
			case '.':
				output += String.fromCharCode(memory[ptr]);
				break;
			case '[':
				bracketStack.push(x)
				break;
			case ']':
				if(memory[ptr] === 0){
					bracketStack.pop()
				}
				else{
					x = bracketStack[bracketStack.length - 1];
				}
				break;
			default:
				break;
		}

		// < and > loops around
		if(ptr === -1){
			ptr = memsize-1;
		}
		if(ptr === memsize){
			ptr = 0;
		}
	}
	return output
}

module.exports = { interpret }
