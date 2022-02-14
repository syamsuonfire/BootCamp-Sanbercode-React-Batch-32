/*
 * soal 1 ( Membuat 2 Conditional )
 */
var nilaiJohn = 80;
var nilaiDoe = 50;
/*
 * jawaban soal 1
 */
console.log("\nJawaban Soal 1\n");
if (nilaiJohn >= 80) {
  console.log("Indeks nilaiJohn A");
} else if (nilaiJohn >= 70 && nilaiJohn < 80) {
  console.log("Indeks nilaiJohn B");
} else if (nilaiJohn >= 60 && nilaiJohn < 70) {
  console.log("Indeks nilaiJohn C");
} else if (nilaiJohn >= 50 && nilaiJohn < 60) {
  console.log("Indeks nilaiJohn D");
} else if (nilaiJohn < 50) {
  console("Indeks nilaiJohn E");
}

if (nilaiDoe >= 80) {
  console.log("Indeks nilaiDoe A");
} else if (nilaiDoe >= 70 && nilaiDoe < 80) {
  console.log("Indeks nilaiDoe B");
} else if (nilaiDoe >= 60 && nilaiDoe < 70) {
  console.log("Indeks nilaiDoe C");
} else if (nilaiDoe >= 50 && nilaiDoe < 60) {
  console.log("Indeks nilaiDoe D");
} else if (nilaiDoe < 50) {
  console("Indeks nilaiDoe E");
}

console.log("\n---------------------------------------------------\n");
/*
 * soal 2 ( membuat conditional menggunakan switch case )
 */
var tanggal = 15;
var bulan = 2;
var tahun = 1997;
var output = "";
/*
 * jawaban soal 2
 */
console.log("\nJawaban Soal 2\n");
switch (tanggal) {
  case 15: {
    output += 15;
    break;
  }
  case 16: {
    output += 16;
    break;
  }
  case 17: {
    output += 17;
    break;
  }
  case 18: {
    output += 18;
    break;
  }
  default: {
    break;
  }
}

switch (bulan) {
  case 1: {
    output += " Januari";
    break;
  }
  case 2: {
    output += " Februari";
    break;
  }
  case 3: {
    output += " Maret";
    break;
  }
  case 4: {
    output += " April";
    break;
  }
  default: {
    break;
  }
}

switch (tahun) {
  case 1996: {
    output += " 1996";
    break;
  }
  case 1997: {
    output += " 1997";
    break;
  }
  case 1998: {
    output += " 1998";
    break;
  }
  case 1999: {
    output += " 1999";
    break;
  }
  default: {
    break;
  }
}

console.log(output);

console.log("\n---------------------------------------------------\n");

/*
 * soal 3 ( 2 Looping  Sederhana )
 */
/*
 * jawaban soal 3
 */
console.log("\nJawaban Soal 3\n");
console.log("LOOPING PERTAMA\n");
var i = 2;
while (i !== 21) {
  if (i % 2 == 0) console.log(i + " - I love coding");
  i++;
}

console.log("\nLOOPING KEDUA\n");
var i = 20;
while (i !== 0) {
  if (i % 2 == 0) console.log(i + " - I will become a frontend developer");
  i--;
}
console.log("\n---------------------------------------------------\n");

/*
 * soal 4 ( Looping dengan conditional )
 */
/*
 * jawaban soal 4
 */
console.log("\nJawaban Soal 4\n");
for (var i = 1; i <= 20; i++) {
  if (i % 2 != 0 && i % 3 === 0) {
    console.log(i + " - I Love Coding");
  } else if (i % 2 == 0) {
    console.log(i + " - Berkualitas");
  } else if (i % 2 != 0) {
    console.log(i + " - Santai");
  }
}
console.log("\n---------------------------------------------------\n");

/*
 * soal 5 ( Segitita Looping )
 */
/*
 * jawaban soal 5
 */
console.log("\nJawaban Soal 5\n");
var s = "";
for (var i = 0; i < 7; i++) {
  for (var j = 0; j <= i; j++) {
    s += "#";
  }
  s += "\n";
}
console.log(s);

console.log("\n---------------------------------------------------\n");
