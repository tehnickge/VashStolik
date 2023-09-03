const fs = require('fs');

const readStream = fs.createReadStream('./docs/text.txt');
const writeStream = fs.createWriteStream('./docs/text2.txt')
// readStream.on('data', (chunk) => {
//     text = chunk.toString().toLocaleUpperCase();
//     console.log(text);
//     writeStream.write(text);/// readStream.pipe(writeStream);альтернативный варик
// });

const handlerError = () => {
    console.log("Error");
    readStream.destroy();
    writeStream.end('Finished with error...')
}

readStream
    .on('error', handlerError)
    .pipe(writeStream)
    .on('error', handlerError);