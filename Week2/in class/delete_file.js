const fs = require('fs')

let fileName = "file_to_delete.txt"
console.log(`Trying to delete ${fileName}`);
console.log(`Ensure that ${fileName} is created before you test this code`);

fs.unlink(fileName, (err) => {
    if (err){
        console.log(`Error while deleting ${fileName}:
         ${JSON.stringify(err)}`);
    }else{
        console.log(`${fileName} deleted successfully`);
    }
})