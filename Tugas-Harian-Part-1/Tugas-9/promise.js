function readBooksPromise(time, book) {
  console.log("saya mulai membaca " + book.name);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let sisaWaktu = time - book.timeSpent;
      if (sisaWaktu >= 0) {
        console.log(
          "saya sudah selesai membaca " +
            book.name +
            ", sisa waktu saya " +
            sisaWaktu
        );
        resolve(sisaWaktu);
      } else {
        console.log("saya sudah tidak punya waktu untuk baca " + book.name);
        reject(sisaWaktu);
      }
    }, book.timeSpent);
  });
}

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

var booksQueue = books.length;
var time = 10000;

function execute(time, index, booksQueue) {
  readBooksPromise(time, books[index])
    .then(function (remainingTime) {
      time = remainingTime;
      console.log("Sisa waktu", time);
      booksQueue = booksQueue - 1;
      if (booksQueue > 0) {
        execute(time, index + 1, booksQueue);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

execute(time, 0, booksQueue);
