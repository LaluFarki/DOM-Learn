// DOM selection

// 1.)
//document.getElementById()
//document.getElementById()
//kita buat variabel dulu disini sebagai tempat menyimpan element yang kita pilih , disini saya buat variabel dengan nama judul
const judul = document.getElementById("judul");

judul.style.color = "red";
judul.style.backgroundColor = "black";
judul.innerHTML = "Lalu Farki";

// 2.)
//document.getElementsByTagName()
//document.getElementsByTagName()
// ini dia mengembalikan HTMLCollection, HTML collection itu seperti array tapi bukan array , misal kita pilih semua element p urutan pertama maka kita panggil dengan p[0]
const p = document.getElementsByTagName("p");
p[0].style.backgroundColor = "lightblue";
p[1].style.backgroundColor = "red";
p[2].style.backgroundColor = "yellow";

//atau bisa pakai perulangan
for (let i= 0; i < p.length; i++){
    p[i].style.backgroundColor = "lightblue";
}
//jika element nya hanya 1 kita bisa langsung panggil index nya
const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// 3.)
//document.getElementsByClassName()
//document.getElementsByClassName()
// ini juga mengembalikan HTMLCollection, misal kita pilih semua element dengan class p1
// ingat nama variabel aslinya boleh beda dengan nama class nya tapi saya buat namanya sama biar gampang di ingat
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Ini diubah dari javascript";

// 4.)
//document.querySelector()
//document.querySelector()
// ini ada di file script2.js dibuka saja 