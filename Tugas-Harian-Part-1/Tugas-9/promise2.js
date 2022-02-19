function filterBooksPromise(colorful, amountOfPage) {
  return new Promise(function (resolve, reject) {
    var books = [
      { name: "shinchan", totalPage: 50, isColorful: true },
      { name: "Kalkulus", totalPage: 250, isColorful: false },
      { name: "doraemon", totalPage: 40, isColorful: true },
      { name: "algoritma", totalPage: 250, isColorful: false },
    ];
    if (amountOfPage >= 40) {
      resolve(
        books.filter(
          (x) => x.totalPage >= amountOfPage && x.isColorful == colorful
        )
      );
    } else {
      var reason = new Error("Maaf buku di bawah 40 halaman tidak tersedia");
      reject(reason);
    }
  });
}

// Lanjutkan code untuk menjalankan function filterBookPromise ( menggunakan async/await )
async function pesanBuku(colorful, amountOfPage) {
  try {
    var result = await filterBooksPromise(colorful, amountOfPage);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}
pesanBuku(true, 40);
pesanBuku(false, 250);
pesanBuku(true, 30);
