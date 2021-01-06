const fs = require('fs');
 let arr1 = fs.readFileSync(process.argv[3], "utf8").split("\r\n");

let mot = process.argv[2];
// let arr1 = ["amour", "arbre", "balade", "barre", "beau"];
// 
console.log(arr1)
ordre = anagr => anagr.split("").sort().join("");

let ana = [];
for (let i = 0; i < arr1.length; i++) {

   if (ordre(mot) == ordre(arr1[i])) {
      ana.push(arr1[i]);

   }
}
console.log(ana);