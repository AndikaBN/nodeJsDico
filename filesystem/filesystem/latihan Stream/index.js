const fs = require('fs');

const readableStream = fs.createReadStream('filesystem/latihan Stream/input.txt',{
    highWaterMark:15
});

const writableStream = fs.createWriteStream('filesystem/latihan Stream/output.txt');

readableStream.on('readable',()=>{
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
        console.log("Error anying");
    }
});

readableStream.on('end',()=>{
    console.log('Done');
});

/* 
output readStream:

[or sit amet, co][nsectetur adipi][scing elit, sed][ do eiusmod tem][por incididunt ][ut labore et 
do][lore magna aliq][ua. Ut enim ad ][minim veniam, q][uis nostrud exe][rcitation ullam][co laboris nisi][ ut aliquip ex ][ea commodo cons][equat. Duis aut][e irure dolor i][n reprehenderit][ in voluptate v][elit esse cillu][m dolore eu fug][iat nulla paria][tur. Excepteur ][sint occaecat c][upidatat non pr][oident, sunt in][ culpa qui offi][cia 
deserunt mo][llit anim id es][t laborum.][null]
*/

writableStream.write('[Lorem ipsum dol]\n');
writableStream.write('[or sit amet, co]\n');
writableStream.write('[nsectetur adipi]\n');
writableStream.write('[scing elit, sed]\n');
writableStream.write('[ do eiusmod tem]\n');
writableStream.write('[por incididunt ]\n');
writableStream.write('[ut labore et do]\n');
writableStream.write('[lore magna aliq]\n');
writableStream.write('[ua. Ut enim ad ]\n');
writableStream.write('[minim veniam, q]\n');
writableStream.write('[uis nostrud exe]\n');
writableStream.write('[rcitation ullam]\n');
writableStream.write('[co laboris nisi]\n');
writableStream.write('[ ut aliquip ex ]\n');
writableStream.write('[ea commodo cons]\n');
writableStream.write('[equat. Duis aut]\n');
writableStream.write('[e irure dolor i]\n');
writableStream.write('[n reprehenderit]\n');
writableStream.write('[ in voluptate v]\n');
writableStream.write('[elit esse cillu]\n');
writableStream.write('[m dolore eu fug]\n');
writableStream.write('[iat nulla paria]\n');
writableStream.write('[tur. Excepteur ]\n');
writableStream.write('[sint occaecat c]\n');
writableStream.write('[upidatat non pr]\n');
writableStream.write('[oident, sunt in]\n');
writableStream.write('[ culpa qui offi]\n');
writableStream.write('[cia deserunt mo]\n');
writableStream.write('[llit anim id es]\n');
writableStream.write('[t laborum.]\n');
writableStream.write('[null]');


