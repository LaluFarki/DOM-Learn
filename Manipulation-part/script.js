// const judul = document.getElementById('judul');
// judul.innerHTML = "<em>lalu FARKI</em>";

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = "hello world"

// // mencoba ganti style denngan element.style
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'lightblue';


// manipulasi atribut element.setAttribute()
// atau element.getAttribute()
// atau element.removeAttribute()
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute("name", "farki");
// ini akan menambahkan atribut (name) pada element h1 dengan id judul dengan value farki

const a = document.querySelector('section#a a');
a.setAttribute('id', 'link');
// ini akan menambahkan atribut (id) pada element a di dalam section a dengan value link

// const p2 = document.querrySelector('.p2');
// p2.setAttribute('class','label');
// // ini akan mengganti class p2 menjadi class label
// // ini akan menimpa class sebelumnya jadi class sebelum nya akan jadi hilang 

// maka untuk mencegah hal di atas kita bisa lakukan berbagai hal untuk kelas 

// 1). element.classList.add() ini untuk menambah kelas tanpa menghapus kelas sebelumnya
const p2 = document.querySelector('.p2');
p2.classList.add('label');
p2.classList.add('tag');

// ini akan menambahkan kelas label pada element p2 tanpa menghapus kelas sebelumnya

// 2). element.classList.remove() ini untuk menghapus kelas tertentu dari element
p2.classList.remove('tag');

// 3). element.classList.toggle() ini untuk menambah kelas jika belum ada dan menghapus kelas jika sudah ada
p2.classList.toggle('tag'); 

// ini nanti dia akan ngecek dulu apakah kelas tag ada di p2 atau tidak
// jika ada maka kelas tag akan dihapus
// jika tidak ada maka kelas tag akan ditambahkan
// pemakaian class togle biasanya untuk membuat fitur show/hide
//contoh 
document.body.classList.toggle('biru-muda');

// 4). element.classList.item() ini untuk mengambil kelas pada index tertentu dari element
p2.classList.item(0); // ini akan mengambil kelas pertama dari element p2

// 5). element.classList.contains() ini untuk mengecek apakah suatu kelas ada di dalam element atau tidak
p2.classList.contains('label'); // ini akan mengembalikan nilai true jika kelas label ada di dalam element p2

// 6). element.classList.replace() ini untuk mengganti kelas tertentu dengan kelas baru
p2.classList.replace('label', 'Luabell'); // ini akan mengganti kelas label menjadi kelas Luabell pada element p2