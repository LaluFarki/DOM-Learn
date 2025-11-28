// events pada javascript itu merepresentasikan interaksi user dengan halaman web di dalam DOM
// event bisa berupa klik, hover, scroll, dll

// caara menambahkan event pada javascript

// 1).
// cara ini adalah cara paling sederhana untuk menambahkan event pada javascript
// namun cara ini memiliki keterbatasan yaitu hanya bisa menambahkan 1 event handler pada 1 elemen

// 1.1) event handler menggunakan atribut HTML
// contoh disini saya  mau membuat event di paragraf 3
const p3 = document.querySelector('.p3');

function ubahWarnaP3() {
    p3.style.backgroundColor = 'lightblue';
}
// ini kita taruh di halama html nya tapi cara ini tidak di rekomendasikan  p3.onclick = ubahWarnaP3;
// cara ini hanya bisa menambahkan 1 event handler pada 1 elemen

// 1.2) event handler menggunakan properti elemen
const p2 = document.querySelector('.p2');
p2.onclick = function() {
    p2.style.backgroundColor = 'lightblue';
};

// 1.3) event handler menggunakan metode addEventListener()
//  cara bacanya javascript ketika ada sebuah evenet yaitu klik di document element p4 maka jalankan function ini
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
   const ul = document.querySelector('section#b ul');
   const liBaru = document.createElement('li');
   const teksLiBaru = document.createTextNode('item baru');
   liBaru.appendChild(teksLiBaru);
   ul.appendChild(liBaru);
});
// event di atas akan menambahkan list item baru setiap kali paragraf 4 di klik
//  event di atas akan menambahkan event handler baru tanpa menghapus event handler yang lama

// perbedaan evenet handler menggunakan properti elemen dan metode addEventListener()
// 1). jika menggunakan properti elemen maka event handler yang lama akan di timpa dengan event handler yang baru
// 2). jika menggunakan metode addEventListener() maka event handler yang lama tidak akan di timpa dengan event handler yang baru
// 3). metode addEventListener() bisa menambahkan lebih dari 1 event handler pada 1 elemen

// contoh perbedaan nya untuk event handler menggunakan properti elemen
const p1 = document.querySelector('.p1');
p1.onclick = function() {
    p1.style.backgroundColor = 'lightblue';
}
// jika saya tambahkanevent lagi dan sama sama onlick maka defaultnya event handler yang lama akan di timpa
p1.onclick = function() {
    p1.style.color = 'red';
}

// contoh perbedaan nya untuk event  menggunakan metode addEventListener()
const p2b = document.querySelector('.p2');
p2b.addEventListener('click', function() {
    p2b.style.fontSize = '30px';
});
// jika saya tambahkan event lagi dan sama sama click maka event handler yang lama tidak akan di timpa
p2b.addEventListener('mouseenter', function() {
    p2b.style.fontWeight = 'bold';
});
p2b.addEventListener('mouseenter', function() {
    p2b.style.backgroundColor = 'yellow';
});
p2b.addEventListener('mouseleave', function() {
    p2b.style.backgroundColor = 'white';
});
// semua event handler di atas akan dijalankan ketika paragraf 2 di klik tanpa menghapus event handler yang lama

// di css ada pseudo class namanya hover tapi di javascript ada namanya mouseenter dan mouseleave

// event list yang sering digunakan
//  1). mouse events
//      - click : ketika elemen di klik
//      - dbclick : ketika elemen di klik 2x
//      - mouseenter : ketika mouse masuk ke area elemen
//      - mouseleave : ketika mouse keluar dari area elemen
//      - mouseover : ketika mouse berada di atas elemen atau anak elemen   
//      - mouseout : ketika mouse meninggalkan elemen atau anak elemen
//  2). keyboard events
//      - keydown : ketika tombol keyboard di tekan 
//      - keyup : ketika tombol keyboard di lepas
//      - keypress : ketika tombol keyboard di tekan dan di lepas
//  3). form events
//      - submit : ketika form di submit
//      - change : ketika nilai elemen form berubah
//      - focus : ketika elemen form mendapatkan fokus
//      - blur : ketika elemen form kehilangan fokus
//  4). window events
//      - load : ketika halaman web selesai di load
//      - resize : ketika ukuran jendela browser di ubah
//      - scroll : ketika halaman web di scroll
//      - unload : ketika halaman web di tinggalkan
// 5) resource events
//      - error : ketika terjadi kesalahan pada elemen sumber daya seperti gambar atau skrip
//      - abort : ketika pemuatan sumber daya dibatalkan
//      - load : ketika sumber daya selesai dimuat
//      - progress : ketika sumber daya sedang dimuat
//      - timeout : ketika pemuatan sumber daya melebihi batas waktu yang ditentukan
// 6) clipboard events
//      - copy : ketika konten disalin ke clipboard
//      - cut : ketika konten dipotong ke clipboard
//      - paste : ketika konten ditempel dari clipboard
// 7) drag and drop events
//      - dragstart : ketika elemen mulai di seret
//      - drag : ketika elemen sedang di seret
//      - dragend : ketika elemen selesai di seret
//      - dragenter : ketika elemen yang di seret memasuki area drop target
//      - dragover : ketika elemen yang di seret berada di atas drop target
//      - dragleave : ketika elemen yang di seret meninggalkan area drop target
//      - drop : ketika elemen yang di seret dijatuhkan di drop target
// focus events
//      - focus : ketika elemen mendapatkan fokus
//      - blur : ketika elemen kehilangan fokus
//      - focusin : ketika elemen atau salah satu anaknya mendapatkan fokus
//      - focusout : ketika elemen atau salah satu anaknya kehilangan fokus
// touch events (untuk perangkat layar sentuh)
//      - touchstart : ketika jari menyentuh layar
//      - touchmove : ketika jari bergerak di layar
//      - touchend : ketika jari diangkat dari layar
//      - touchcancel : ketika sentuhan dibatalkan oleh sistem
// pointer events (untuk perangkat penunjuk seperti mouse, stylus, atau sentuhan)
//      - pointerdown : ketika penunjuk menyentuh elemen
//      - pointermove : ketika penunjuk bergerak di atas elemen
//      - pointerup : ketika penunjuk diangkat dari elemen
//      - pointercancel : ketika penunjuk dibatalkan oleh sistem
//      - pointerenter : ketika penunjuk memasuki area elemen