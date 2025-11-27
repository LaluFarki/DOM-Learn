//DOM SELECTION 

// 1.)
//document.querySelector()
//document.querySelector()
// ini mengembalikan element pertama yang di temukan sesuai dengan selector yang kita berikan
// artinya dia hanya mengembalikkan 1 element 
// misal mau ada 100 p / paragraf, yang di ambil hanya 1 paragraf saja yaitu paragrah pertama yang dia temukan

//contoh
const p4 = document.querySelector('#b p');
p4.style.color = 'red';
p4.style.backgroundColor = 'lightblue';
p4.style.fontSize = '20px';

//contoh lain
const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';


// 2.)
//document.querySelectorAll()
// ini mengembalikan semua element yang di temukan sesuai dengan selector yang kita berikan
// artinya dia mengembalikkan semua element yang sesuai dengan selector yang kita berikan
// hasilnya berupa node list, jadi mirip array

//contoh
const p = document.querySelectorAll('p');
for (let i = 0; i < p.length - 1; i++) {
    p[i].style.backgroundColor = 'lightgreen';
}

// 3.)Mengubah node root
// sekarang kita akan mencoba dengan cara mengubah node root
// secara default satu halaman browser kita itu dinamakan document 
// makanya setiap kita declasrasi pasti kita awali dengan document. 

// disini kita akan mempersempit ruang lingkup pencarian elementnya

const sectionB = document.getElementById('b');
const pB = sectionB.querySelectorAll('ul li:nth-child(3)');
for (let i = 0; i < pB.length; i++) {
    pB[i].style.backgroundColor = 'lightblue';
}