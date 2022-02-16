/*
 * Soal 1 ( Destructuring Array )
 */
let dataPeserta = ["john", "laki-laki", "programmer", "30"];
let [firstWord, secondWord, thirdWord, fourthWord] = dataPeserta;
/*
 * Jawaban Soal 1
 */

console.log("\nJawaban Soal 1\n");
let output;
output = `Halo, nama saya ${firstWord}. saya ${secondWord} berumur ${fourthWord} bekerja sebagai seorang ${thirdWord}`;
console.log(output);
console.log("\n---------------------------------------------------\n");

/*
 * Soal 2 ( Mengeluarkan element array )
 */
let array1 = [
  "selamat",
  "anda",
  "melakukan",
  "perulangan",
  "array",
  "dengan",
  "for",
];

/*
 * Jawaban Soal 2
 */
console.log("\nJawaban Soal 2\n");
for (var i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

console.log("\n---------------------------------------------------\n");

/*
 * Soal 3 ( Mengeluarkan element array dan dengan kondisi )
 */
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
 * Jawaban Soal 3
 */
console.log("\nJawaban Soal 3\n");
for (var i = 0; i < array2.length; i++) {
  if (array2[i] % 2 == 0) {
    console.log(array2[i]);
  }
}

console.log("\n---------------------------------------------------\n");

/*
 * Soal 4 ( Menghilangkan element dan menggabungkan element menjadi string )
 */
let kalimat = [
  "aku",
  "saya",
  "sangat",
  "sangat",
  "senang",
  "belajar",
  "javascript",
];

/*
 * Jawaban Soal 4
 */
console.log("\nJawaban Soal 4\n");
kalimat.splice(0, 1);
kalimat.splice(1, 1);
console.log(
  `${kalimat[0]} ${kalimat[1]} ${kalimat[2]} ${kalimat[3]} ${kalimat[4]}`
);
console.log("\n---------------------------------------------------\n");

/*
 * Soal 5 ( Menambahkan, Mengurutkan dan mengeluarkan element array )
 */
var sayuran = [];

/*
 * Jawaban Soal 5
 */
console.log("\nJawaban Soal 5\n");
sayuran.push(
  "Kangkung",
  "Bayam",
  "Buncis",
  "Kubis",
  "Timun",
  "Seledri",
  "Tauge"
);
sayuran.sort();
for (var i = 0; i < sayuran.length; i++) {
  console.log(`${i + 1}. ${sayuran[i]}`);
}

console.log("\n---------------------------------------------------\n");
