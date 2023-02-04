"use strict";

const fs = require("fs");

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numberTaken = [];

// let file1Raw = fs.readFileSync("_metadata.json");
// let file1 = JSON.parse(file1Raw);

// console.log(file1);

// file1.forEach((element) => {
//   //console.log(element.attributes);
//   element.image = element.edition + ".png";
//   element.properties.files[0].uri = element.edition + ".png";
//   element.description = `You may have stumbled upon this through a seemingly random chain of events. Beyond here is something like a utopia - Solana Rats roaming the Metaverse. Many future rewards will be provided to diamond hands for ratting around the NFT community. This is the number ${
//     element.edition + 1
//   }/999.`;
//   element.collection =
//     "You may have stumbled upon this through a seemingly random chain of events. Beyond here is something like a utopia - Solana Rats roaming the Metaverse. Many future rewards will be provided to diamond hands for ratting around the NFT community.";
// });

// let writeData = JSON.stringify(file1, null, 2);

// fs.writeFile("LastMetadata-2.json", writeData, (err) => {
//   if (err) throw err;
//   console.log(`File was written...`);
// });

// AQUA
fs.readdir('./OP 999/AQUA', (err, files) => {
    files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item)); // regex to ignore DS_STORE or hidden files
    files.forEach(file => {
      // console.log(file.slice(0, -4));
      let jsonName = file.slice(0, -4) + "json"
      console.log(jsonName)
      let file1Raw = fs.readFileSync(`./OP 999 JSON/AQUA JSON/${jsonName}`);
      let file1 = JSON.parse(file1Raw);

      let renamed = false;

      while(!renamed) {
        let num = randomNum(1,999)
        if (!numberTaken.includes(num)) {
        numberTaken.push(num)
        // fs.rename(`./new/${i}.json`, `./new/${num}.json`, function(err) {
        // if ( err ) console.log('ERROR: ' + err);
        // })
        file1.name = "#" + num.toString().padStart(3, '0')
        // file1.image = `/${num}.png`;
        file1.edition = num;
        let writeData = JSON.stringify(file1, null, 2);

        fs.writeFile(`./json/${num}.json`, writeData, (err) => {
          if (err) throw err;
          console.log(`File was written...`);
        });

        // rename png image files on their folder
        fs.rename(`./OP 999/AQUA/${file}`, `./images/${num}.jpeg`, function(err) {
        if ( err ) console.log('ERROR: ' + err);
        })
        renamed = true;
      } else {
        console.log(`Number already taken at ${num} please check at file ${file} again`)
      }
      }

})});  

// CHAOTIC
fs.readdir('./OP 999/CHAOTIC', (err, files) => {
    files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    files.forEach(file => {
      // console.log(file.slice(0, -4));
      let jsonName = file.slice(0, -4) + "json"
      console.log(jsonName)
      let file1Raw = fs.readFileSync(`./OP 999 JSON/CHAOTIC JSON/${jsonName}`);
      let file1 = JSON.parse(file1Raw);

      let renamed = false;

      while(!renamed) {
        let num = randomNum(1,999)
        if (!numberTaken.includes(num)) {
        numberTaken.push(num)
        // fs.rename(`./new/${i}.json`, `./new/${num}.json`, function(err) {
        // if ( err ) console.log('ERROR: ' + err);
        // })
        file1.name = "#" + num.toString().padStart(3, '0')
        // file1.image = `/${num}.png`;
        file1.edition = num;
        let writeData = JSON.stringify(file1, null, 2);

        fs.writeFile(`./json/${num}.json`, writeData, (err) => {
          if (err) throw err;
          console.log(`File was written...`);
        });

        // rename png image files on their folder
        fs.rename(`./OP 999/CHAOTIC/${file}`, `./images/${num}.jpeg`, function(err) {
        if ( err ) console.log('ERROR: ' + err);
        })
        renamed = true;
      } else {
        console.log(`Number already taken at ${num} please check at file ${file} again`)
      }
      }

})});  

// MIDNIGHT
fs.readdir('./OP 999/MIDNIGHT', (err, files) => {
    files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    files.forEach(file => {
      // console.log(file.slice(0, -4));
      let jsonName = file.slice(0, -4) + "json"
      console.log(jsonName)
      let file1Raw = fs.readFileSync(`./OP 999 JSON/MIDNIGHT JSON/${jsonName}`);
      let file1 = JSON.parse(file1Raw);

      let renamed = false;

      while(!renamed) {
        let num = randomNum(1,999)
        if (!numberTaken.includes(num)) {
        numberTaken.push(num)
        // fs.rename(`./new/${i}.json`, `./new/${num}.json`, function(err) {
        // if ( err ) console.log('ERROR: ' + err);
        // })
        file1.name = "#" + num.toString().padStart(3, '0')
        // file1.image = `/${num}.png`;
        file1.edition = num;
        let writeData = JSON.stringify(file1, null, 2);

        fs.writeFile(`./json/${num}.json`, writeData, (err) => {
          if (err) throw err;
          console.log(`File was written...`);
        });

        // rename png image files on their folder
        fs.rename(`./OP 999/MIDNIGHT/${file}`, `./images/${num}.jpeg`, function(err) {
        if ( err ) console.log('ERROR: ' + err);
        })
        renamed = true;
      } else {
        console.log(`Number already taken at ${num} please check at file ${file} again`)
      }
      }

})});  

// OCEANIC
fs.readdir('./OP 999/OCEANIC', (err, files) => {
    files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    files.forEach(file => {
      // console.log(file.slice(0, -4));
      let jsonName = file.slice(0, -4) + "json"
      console.log(jsonName)
      let file1Raw = fs.readFileSync(`./OP 999 JSON/OCEANIC JSON/${jsonName}`);
      let file1 = JSON.parse(file1Raw);

      let renamed = false;

      while(!renamed) {
        let num = randomNum(1,999)
        if (!numberTaken.includes(num)) {
        numberTaken.push(num)
        // fs.rename(`./new/${i}.json`, `./new/${num}.json`, function(err) {
        // if ( err ) console.log('ERROR: ' + err);
        // })
        file1.name = "#" + num.toString().padStart(3, '0')
        // file1.image = `/${num}.png`;
        file1.edition = num;
        let writeData = JSON.stringify(file1, null, 2);

        fs.writeFile(`./json/${num}.json`, writeData, (err) => {
          if (err) throw err;
          console.log(`File was written...`);
        });

        // rename png image files on their folder
        fs.rename(`./OP 999/OCEANIC/${file}`, `./images/${num}.jpeg`, function(err) {
        if ( err ) console.log('ERROR: ' + err);
        })
        renamed = true;
      } else {
        console.log(`Number already taken at ${num} please check at file ${file} again`)
      }
      }

})});

// PSYCHADELIC
fs.readdir('./OP 999/PSYCHADELIC', (err, files) => {
    files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    files.forEach(file => {
      // console.log(file.slice(0, -4));
      let jsonName = file.slice(0, -4) + "json"
      console.log(jsonName)
      let file1Raw = fs.readFileSync(`./OP 999 JSON/PSYCHADELIC JSON/${jsonName}`);
      let file1 = JSON.parse(file1Raw);

      let renamed = false;

      while(!renamed) {
        let num = randomNum(1,999)
        if (!numberTaken.includes(num)) {
        numberTaken.push(num)
        // fs.rename(`./new/${i}.json`, `./new/${num}.json`, function(err) {
        // if ( err ) console.log('ERROR: ' + err);
        // })
        file1.name = "#" + num.toString().padStart(3, '0')
        // file1.image = `/${num}.png`;
        file1.edition = num;
        let writeData = JSON.stringify(file1, null, 2);

        fs.writeFile(`./json/${num}.json`, writeData, (err) => {
          if (err) throw err;
          console.log(`File was written...`);
        });

        // rename png image files on their folder
        fs.rename(`./OP 999/PSYCHADELIC/${file}`, `./images/${num}.jpeg`, function(err) {
        if ( err ) console.log('ERROR: ' + err);
        })
        renamed = true;
      } else {
        console.log(`Number already taken at ${num} please check at file ${file} again`)
      }
      }

})})

// SHADY
fs.readdir('./OP 999/SHADY', (err, files) => {
    files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    files.forEach(file => {
      // console.log(file.slice(0, -4));
      let jsonName = file.slice(0, -4) + "json"
      console.log(jsonName)
      let file1Raw = fs.readFileSync(`./OP 999 JSON/SHADY JSON/${jsonName}`);
      let file1 = JSON.parse(file1Raw);

      let renamed = false;

      while(!renamed) {
        let num = randomNum(1,999)
        if (!numberTaken.includes(num)) {
        numberTaken.push(num)
        // fs.rename(`./new/${i}.json`, `./new/${num}.json`, function(err) {
        // if ( err ) console.log('ERROR: ' + err);
        // })
        file1.name = "#" + num.toString().padStart(3, '0')
        // file1.image = `/${num}.png`;
        file1.edition = num;
        let writeData = JSON.stringify(file1, null, 2);

        fs.writeFile(`./json/${num}.json`, writeData, (err) => {
          if (err) throw err;
          console.log(`File was written...`);
        });

        // rename png image files on their folder
        fs.rename(`./OP 999/SHADY/${file}`, `./images/${num}.jpeg`, function(err) {
        if ( err ) console.log('ERROR: ' + err);
        })
        renamed = true;
      } else {
        console.log(`Number already taken at ${num} please check at file ${file} again`)
      }
      }

})})

// TRIBAL
fs.readdir('./OP 999/TRIBAL', (err, files) => {
    files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    files.forEach(file => {
      // console.log(file.slice(0, -4));
      let jsonName = file.slice(0, -4) + "json"
      console.log(jsonName)
      let file1Raw = fs.readFileSync(`./OP 999 JSON/TRIBAL JSON/${jsonName}`);
      let file1 = JSON.parse(file1Raw);

      let renamed = false;

      while(!renamed) {
        let num = randomNum(1,999)
        if (!numberTaken.includes(num)) {
        numberTaken.push(num)
        // fs.rename(`./new/${i}.json`, `./new/${num}.json`, function(err) {
        // if ( err ) console.log('ERROR: ' + err);
        // })
        file1.name = "#" + num.toString().padStart(3, '0')
        // file1.image = `/${num}.png`;
        file1.edition = num;
        let writeData = JSON.stringify(file1, null, 2);

        fs.writeFile(`./json/${num}.json`, writeData, (err) => {
          if (err) throw err;
          console.log(`File was written...`);
        });

        // rename png image files on their folder
        fs.rename(`./OP 999/TRIBAL/${file}`, `./images/${num}.jpeg`, function(err) {
        if ( err ) console.log('ERROR: ' + err);
        })
        renamed = true;
      } else {
        console.log(`Number already taken at ${num} please check at file ${file} again`)
      }
      }

})})

// WAVY
fs.readdir('./OP 999/WAVY', (err, files) => {
    files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    files.forEach(file => {
      // console.log(file.slice(0, -4));
      let jsonName = file.slice(0, -4) + "json"
      console.log(jsonName)
      let file1Raw = fs.readFileSync(`./OP 999 JSON/WAVY JSON/${jsonName}`);
      let file1 = JSON.parse(file1Raw);

      let renamed = false;

      while(!renamed) {
        let num = randomNum(1,999)
        if (!numberTaken.includes(num)) {
        numberTaken.push(num)
        // fs.rename(`./new/${i}.json`, `./new/${num}.json`, function(err) {
        // if ( err ) console.log('ERROR: ' + err);
        // })
        file1.name = "#" + num.toString().padStart(3, '0')
        // file1.image = `/${num}.png`;
        file1.edition = num;
        let writeData = JSON.stringify(file1, null, 2);

        fs.writeFile(`./json/${num}.json`, writeData, (err) => {
          if (err) throw err;
          console.log(`File was written...`);
        });

        // rename png image files on their folder
        fs.rename(`./OP 999/WAVY/${file}`, `./images/${num}.jpeg`, function(err) {
        if ( err ) console.log('ERROR: ' + err);
        })
        renamed = true;
      } else {
        console.log(`Number already taken at ${num} please check at file ${file} again`)
      }
      }

})})

// WEIRD
fs.readdir('./OP 999/WEIRD', (err, files) => {
    files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    files.forEach(file => {
      // console.log(file.slice(0, -4));
      let jsonName = file.slice(0, -4) + "json"
      console.log(jsonName)
      let file1Raw = fs.readFileSync(`./OP 999 JSON/WEIRD JSON/${jsonName}`);
      let file1 = JSON.parse(file1Raw);

      let renamed = false;

      while(!renamed) {
        let num = randomNum(1,999)
        if (!numberTaken.includes(num)) {
        numberTaken.push(num)
        // fs.rename(`./new/${i}.json`, `./new/${num}.json`, function(err) {
        // if ( err ) console.log('ERROR: ' + err);
        // })
        file1.name = "#" + num.toString().padStart(3, '0')
        // file1.image = `/${num}.png`;
        file1.edition = num;
        let writeData = JSON.stringify(file1, null, 2);

        fs.writeFile(`./json/${num}.json`, writeData, (err) => {
          if (err) throw err;
          console.log(`File was written...`);
        });

        // rename png image files on their folder
        fs.rename(`./OP 999/WEIRD/${file}`, `./images/${num}.jpeg`, function(err) {
        if ( err ) console.log('ERROR: ' + err);
        })
        renamed = true;
      } else {
        console.log(`Number already taken at ${num} please check at file ${file} again`)
      }
      }

})})
