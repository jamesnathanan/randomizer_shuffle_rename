"use strict";

const fs = require("fs");

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numberTaken = [];


// set 1 aww  1 - 2022
fs.readdir('./images/aww', (err, files) => {
    files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item)); // regex to ignore DS_STORE or hidden files
    files.forEach(file => {
      // console.log(file.slice(0, -3));
      let jsonName = file.slice(0, -3) + "json"
      console.log(jsonName)
      let file1Raw = fs.readFileSync(`./json/aww/json/${jsonName}`);
      let file1 = JSON.parse(file1Raw);

      let renamed = false;

      while(!renamed) {
        let num = randomNum(1,2222)
        if (!numberTaken.includes(num)) {
        numberTaken.push(num)
        // fs.rename(`./new/${i}.json`, `./new/${num}.json`, function(err) {
        // if ( err ) console.log('ERROR: ' + err);
        // })
        // file1.name = "Awwtistic #" + num.toString().padStart(3, '0')
        file1.name = "Awwtistic #" + num
        file1.image = `REPLACE/${num}.png`;
        file1.edition = num;
        let writeData = JSON.stringify(file1, null, 2);

        fs.writeFile(`./finish/json/${num}.json`, writeData, (err) => {
          if (err) throw err;
          console.log(`File was written...`);
        });

        // rename png image files on their folder
        fs.copyFile(`./images/aww/${file}`, `./finish/images/${num}.png`, function(err) {
        if ( err ) console.log('ERROR: ' + err);
        })
        renamed = true;
      } else {
        console.log(`Number already taken at ${num} please check at file ${file} again`)
      }
      }

})});  

// set 2 , ghost 100
fs.readdir('./images/ghost', (err, files) => {
    files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item)); // regex to ignore DS_STORE or hidden files
    files.forEach(file => {
      // console.log(file.slice(0, -3));
      let jsonName = file.slice(0, -3) + "json"
      console.log(jsonName)
      let file1Raw = fs.readFileSync(`./json/ghost/json/${jsonName}`);
      let file1 = JSON.parse(file1Raw);

      let renamed = false;

      while(!renamed) {
        let num = randomNum(1,2222)
        if (!numberTaken.includes(num)) {
        numberTaken.push(num)
        // fs.rename(`./new/${i}.json`, `./new/${num}.json`, function(err) {
        // if ( err ) console.log('ERROR: ' + err);
        // })
        file1.name = "Awwtistic #" + num
        file1.image = `REPLACE/${num}.png`;
        file1.edition = num;
        let writeData = JSON.stringify(file1, null, 2);

        fs.writeFile(`./finish/json/${num}.json`, writeData, (err) => {
          if (err) throw err;
          console.log(`File was written...`);
        });

        // rename png image files on their folder
        fs.copyFile(`./images/ghost/${file}`, `./finish/images/${num}.png`, function(err) {
        if ( err ) console.log('ERROR: ' + err);
        })
        renamed = true;
      } else {
        console.log(`Number already taken at ${num} please check at file ${file} again`)
      }
      }

})});  

// set 3 , skelly 100
fs.readdir('./images/skelly', (err, files) => {
    files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item)); // regex to ignore DS_STORE or hidden files
    files.forEach(file => {
      // console.log(file.slice(0, -3));
      let jsonName = file.slice(0, -3) + "json"
      console.log(jsonName)
      let file1Raw = fs.readFileSync(`./json/skelly/json/${jsonName}`);
      let file1 = JSON.parse(file1Raw);

      let renamed = false;

      while(!renamed) {
        let num = randomNum(1,2222)
        if (!numberTaken.includes(num)) {
        numberTaken.push(num)
        // fs.rename(`./new/${i}.json`, `./new/${num}.json`, function(err) {
        // if ( err ) console.log('ERROR: ' + err);
        // })
        file1.name = "Awwtistic #" + num
        file1.image = `REPLACE/${num}.png`;
        file1.edition = num;
        let writeData = JSON.stringify(file1, null, 2);

        fs.writeFile(`./finish/json/${num}.json`, writeData, (err) => {
          if (err) throw err;
          console.log(`File was written...`);
        });

        // rename png image files on their folder
        fs.copyFile(`./images/skelly/${file}`, `./finish/images/${num}.png`, function(err) {
        if ( err ) console.log('ERROR: ' + err);
        })
        renamed = true;
      } else {
        console.log(`Number already taken at ${num} please check at file ${file} again`)
      }
      }

})});  















