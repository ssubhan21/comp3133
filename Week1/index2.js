console.log (' week - 1 buffer examlples')

//create a bufffer from string data 
let buf1 = Buffer.from("hello")  //creates a array out of string data 

console.log(buf1);
//template literalas
console.log(`buf1 : ${buf1}`);


console.log(buf1.toString());

console.log(`Buffer in JSON format : ${buf1.toJSON()}`)
console.log(buf1.toJSON())


//task to write a loop to  iterate over the buffer
// show the value of the element 
console.log(`buf1[0] : ${buf1[0]}`);
console.log(`buf1[3] : ${buf1[3]}`);
console.log(`number of elements in buffer : ${buf1.length}`);


for (let i = 0 ; i < buf1.length ; i++){
    console.log(`i = ${i}, buf1[${i} : ${buf1[i]} ${String.fromCharCode(buf1[i])}]`)
}


buf1 = Buffer.from('🌺 🏀 🛝')
console.log(`buf1.toString() : ${buf1.toString()}`);
console.log(`buf1.toString() : ${JSON.stringify(buf1.toJSON())}`);
console.log(`buf1.toString('hex') : ${buf1.toString('hex')}`);
console.log(`buf1.toString('utf-8') : ${buf1.toString('utf-8')}`);
console.log(`buf1.toString('utf-16le') : ${buf1.toString('utf-16le')}`);


console.log(`\n Buffer.alloc() function`)


//allocate size of the bufffer when   craeting it 
let buf2 = Buffer.alloc(10)
console.log(buf2);
console.log(`buf2 : ${buf2}`);



buf2.write('j', 3)
buf2.write('k', 6)
buf2.write('l', 9)
console.log(buf2);
console.log(`buf2 : ${buf2}\n`);


buf2.write('comp', 5)
console.log(buf2);
console.log(`buf2 : ${buf2}\n`);

//buffer concat

let buf3 =  Buffer.concat([buf1, buf2])
console.log(`buf1 : ${buf1}`);
console.log(`buf2 : ${buf2}`);
console.log(`buf3 : ${buf3}\n`);



//buffer.copy
//copy a buffer into another
buf2.copy(buf1)

console.log(`\nBuffer.copy()`);
console.log(`buf1 : ${buf1}`);
console.log(`buf2 : ${buf2}`);

//buffer.compare()
//will return 0 if same 
//non-zero value otherwise
let output = Buffer.compare(buf2, buf3)
console.log(`${buf2} and ${buf3} are same?: ${output}\n`)


buf2 = Buffer.from('abc')
buf3 = Buffer.from('ABC')
output = Buffer.compare(buf2, buf3)
console.log(`${buf2} and ${buf3} are same?: ${output}\n`)


buf2 = Buffer.from('ABC')
buf3 = Buffer.from('ABC')
output = Buffer.compare(buf2, buf3)
console.log(`${buf2} and ${buf3} are same?: ${output}\n`)


buf2 = Buffer.from('ABC')
buf3 = Buffer.from('abc')
output = Buffer.compare(buf2, buf3)
console.log(`${buf2} and ${buf3} are same?: ${output}\n`)