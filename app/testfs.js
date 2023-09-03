const fs = require('fs');

fs.readFile('./msg.txt', 'utf-8', (error, data) => {
    console.log(data.toString())

    fs.mkdir('./files', () => {
        fs.writeFile('./files/test2.txt', `${data.trim()} aboba`, (error) => {
            error ? console.log(error) : null
        });
    });
});

setTimeout(()=> {
    if(fs.existsSync('./files/test2.txt')){
        fs.unlink('./files/test2.txt', () =>{});
    }
}, 4000);

setTimeout(()=> {
    if(fs.existsSync('./files')){
        fs.rmdir('./files', () =>{});
    }
}, 6000);
