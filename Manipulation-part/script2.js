// manipulasi node 

//1). document.createElement()
//2). document.createTextNode()





//3). node.appendChild() = ini akan menyimpan sebuah node di akhir node parentnya
// buat element  baru yaitu paragra
const pBaru = document.createElement('p');
// buat text untuk paragraf baru
const teksPBaru = document.createTextNode('paragraf baru');

// simpan tulisan atau TextNode ke dalam paragarf yg kita buat lewat CreateElement tadi
pBaru.appendChild(teksPBaru);

// simpan pBAru di akhir sectionA
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);



//4). node.insertBefore() ini akan menyisipkan node sebelum node tertentu didalam parentnya
// buat element baru yaitu heading h2
const liBaru = document.createElement('li');
// buat text untuk heading h2 baru
const teksLiBaru = document.createTextNode('item baru');
// buat text untuk heading baru

// simpan tulisan atau TextNode ke dalam heading yg kita buat lewat CreateElement tadi
liBaru.appendChild(teksLiBaru);
// simpan liBaru di sebelum li kedua
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector ('li:nth-child(2)');
// menyisipkan liBaru sebelum li2
ul.insertBefore(liBaru,li2);


//5). node.removeChild() = ini akan menghapus node child dari parentnya

//kita akan menghapus link pada section A
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


//6). node.replaceChild() = ini akan mengganti node child dengan node baru pada parentnya

// kita akan mengganti tulisan paragraf 4 pada section B dengan h2Baru
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('judul baru');
h2Baru.appendChild(teksH2Baru);
// mengganti tulisan paragraf 4 dengan h2Baru
sectionB.replaceChild(h2Baru,p4);


// list semua node yg sudah kita manipulasi
pBaru.style.backgroundColor = "lightblue";
h2Baru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightyellow";