const fs = require('fs')

let fileName = "data.txt"


/*
file modes

r - read only
w - write only
a - append
r+ - read and write
w+ - write and read

*/
//opens the file in given mode 
//returns err if unsuccessful
//return file discriptor if successful
fs.open(fileName, 'r+', (err, fd) => {
    if (err){
        console.log(`Unable to open file ${fileName}: 
        ${JSON.stringify(err)}`);
    }else{
        console.log(`File ${fileName} opened successfully`);

        let fileData = fs.readFileSync(fd)
        console.log(`fileData : \n${fileData}`);

        let dataToWrite = "Hey Thursday! Happy Friday !"
        fs.write(fd, dataToWrite, (err) => {
            if (err){
                console.log(`Unable to write to file ${fileName}: 
                    ${JSON.stringify(err)}`);
            }else{
                console.log(`Data written successfully to ${fileName}`);
                fs.close(fd)
            }
        })
    }
})