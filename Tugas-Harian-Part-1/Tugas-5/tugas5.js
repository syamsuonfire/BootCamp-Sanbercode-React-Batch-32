/**
 * soal 1 ( Latihan Penggabungan Kalimat )
 */
let word = "JavaScript";
let second = "is";
let third = "awesome";
let fourth = "and";
let fifth = "I";
let sixth = "love";
let seventh = "it!";

/**
 * jawaban soal 1
 */
console.log(
  `${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`
);

/**
 * soal 2 ( Latihan Pengolahan dan Penggabungan Kalimat )
 */
let kataPertama = "saya";
let kataKedua = "senang";
let kataKetiga = "belajar";
let kataKeempat = "javascript";

/**
 * jawaban soal 2
 */
console.log(
  `${kataPertama} ${kataKedua.slice(0, 1).toUpperCase()}enang belaja${kataKetiga
    .slice(6)
    .toUpperCase()} ${kataKeempat.toUpperCase()}`
);

/**
 * soal 3 ( Latihan Mengubah tipe data )
 */
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";

let alasSegitiga = "6";
let tinggiSegitiga = "7";
/**
 * jawaban soal 3
 */
let kelilingPersegiPanjang =
  2 * (Number(panjangPersegiPanjang) + Number(lebarPersegiPanjang));
let luasSegitiga = (Number(alasSegitiga) * Number(tinggiSegitiga)) / 2;

console.log(kelilingPersegiPanjang);
console.log(luasSegitiga);

/**
 * soal 4 ( Latihan Mengurai Kalimat )
 */
let sentences = "wah javascript itu keren sekali";

/**
 * jawaban soal 4
 *
 */
let firstWord = sentences.substring(0, 3);
let secondWord = sentences.substring(4, 14);
let thirdWord = sentences.substring(15, 18);
let fourthWord = sentences.substring(19, 24);
let fifthWord = sentences.substring(25, 31);
console.log("Kata Pertama: " + firstWord);
console.log("Kata Kedua: " + secondWord);
console.log("Kata Ketiga: " + thirdWord);
console.log("Kata Keempat: " + fourthWord);
console.log("Kata Kelima: " + fifthWord);

/**
 * soal 5 (Akses karakter dalam string)
 */
var sentence = "I am going to be React JS Developer";

/**
 * jawaban soal 5
 */
{
  let exampleFirstWord = sentence[0];
  let secondWord = sentence[2] + sentence[3];
  let thirdWord =
    sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9]; // lakukan sendiri, wajib mengikuti seperti contoh diatas
  let fourthWord = sentence[11] + sentence[12]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
  let fifthWord = sentence[14] + sentence[15]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
  let sixthWord =
    sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
  let seventhWord = sentence[23] + sentence[24]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
  let eighthWord =
    sentence[26] +
    sentence[27] +
    sentence[28] +
    sentence[29] +
    sentence[30] +
    sentence[31] +
    sentence[32] +
    sentence[33] +
    sentence[34]; // lakukan sendiri , wajib mengikuti seperti contoh diatas

  console.log("First Word: " + exampleFirstWord);
  console.log("Second Word: " + secondWord);
  console.log("Third Word: " + thirdWord);
  console.log("Fourth Word: " + fourthWord);
  console.log("Fifth Word: " + fifthWord);
  console.log("Sixth Word: " + sixthWord);
  console.log("Seventh Word: " + seventhWord);
  console.log("Eighth Word: " + eighthWord);
}
/**
 * soal 6 ( Latihan Mengambil sebuah Kalimat )
 */
let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 17); //lakukan pengambilan kalimat di variable ini

/**
 * jawaban soal 6
 */
console.log(hasil);
