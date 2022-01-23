const fs = require("fs");
const fse = require("fs-extra")
const path = require("path");
const { isBuffer } = require("util");
const directoryPath = path.join(__dirname, "pics");

let filepic;
let birthtime;
let birthdate;

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log("Unable to scan directory:" + err);
  }
  files.forEach((element, index) => {
    filepic = element;

    const input = path.resolve(directoryPath, filepic);

    //console.log(directoryPath)
    // console.log(filepic)

    fs.stat(input, (err, stats) => {
      if (err) {
        return console.log(err);
      }
      birthtime = stats.mtime;
      
      birthdate = birthtime.toString().slice(4,15)
      year = birthdate.slice(7,11)
      month = birthdate.slice(0,3)
      
      const path = `./${year}/${month}`;

      // path.split('/').reduce(
      //   (directories, directory) => {
      //     directories += `${directory}/`;
         
      //     if (!fs.existsSync(directories)) {

      //       fs.mkdirSync(directories);
      
      //     }
   
      //    return directories;
         
      //   },
      //   '',
      // );

     let inputPath =(input.slice(0,44)).toString()+`${element}`

   //  console.log(inputPath)

     let output = (input.slice(0,39)+input.slice(year)+year+input.slice(38,39)+month+input.slice(38,39)).toString()+`${element}`

  //   console.log(output)

       fse.copy(inputPath,output,err=>{
        if(err) return console.error(err)
       })
 

    });
  });
});

      // fse.copy(input, directories , err => {
      //   if (err) return console.error(err)
      //   console.log('success!')
      // })