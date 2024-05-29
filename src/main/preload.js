// preload.js
const { contextBridge } = require('electron');
const fs = require('fs');

contextBridge.exposeInMainWorld('api', {
    readFile: (filePath, callback) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            callback(err, data);
        });
    },
    getFilePath: (file, callback) => {
        console.log('file.path: ', file.path);


        callback(file.path);
    },
    writeFile: (filePath, content, callback) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            callback(err);
        });
    },
    // 可以继续添加更多的 fs 功能
});