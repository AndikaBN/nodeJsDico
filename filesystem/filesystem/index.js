const fs = require('fs');

const fileReadCallback = (err, data)=>{
    if (err){
        console.log('gagal membaca berkas');
        return;
    }

    console.log(data);
}

fs.readFile('filesystem/notes.txt', 'UTF-8', fileReadCallback);