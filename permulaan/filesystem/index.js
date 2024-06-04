const fs = require('../node package manager/node_modules/fs-extra');

const fileReadCallback = (error, data) => {
  if (error) {
    console.log('gagal membaca berkas');
    return;
  }

  console.log(data);
};

fs.readFileAsync('todo.txt', 'UTF-8', fileReadCallback);
