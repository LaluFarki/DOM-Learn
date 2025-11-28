const ubahBg = document.getElementById('tombolUbahWarna');

const body = document.getElementsByTagName('body')[0];
// atau bisa juga document.body (khusu untuk elemen body)

// disini saya akan mencoba ketikka tomnol di klik dia akan menambahkan klass baru tapi jika sudah ada dia akan di hilangkan 
ubahBg.addEventListener ('click', function() {
    //  body.style.backgroundColor = 'lightblue';  
    body.classList.toggle('biru-muda');
});

// membuat tombol baru dengan javascirpt
const tombolBaru = document.createElement('button'); 
const teksTombolBaru = document.createTextNode('Tombol Baru');
tombolBaru.appendChild(teksTombolBaru);
// menambahkan tombol baru di akhir body
tombolBaru.setAttribute('type', 'button');

// pilih mau simpan dimana untuk tombol barunya
// saya disini mau simpen nya setelah buttonm 1 saya nah kita bisa pakai metode after() dan before()
ubahBg.after(tombolBaru);

// tambahkan event click untuk tombol baru ini akan merandom warna background body
tombolBaru.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});
    // membuat slider untuk merubah warna background
    const sMerah = document.querySelector('input[name=sMerah]');
    const sHijau = document.querySelector('input[name=sHijau]');
    const sBiru = document.querySelector('input[name=sBiru]');

    sMerah.addEventListener('input', function() {
        const r = sMerah.value;
        const g = sHijau.value;
        const b = sBiru.value;
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    });

    sHijau.addEventListener('input', function() {
        const r = sMerah.value;
        const g = sHijau.value;
        const b = sBiru.value;
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    });
    sBiru.addEventListener('input', function() {
        const r = sMerah.value;
        const g = sHijau.value;
        const b = sBiru.value;
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    });

// menguvah warna background dengan menggerakan mouse
// cara kerjanya kita harus tahu koordinta posisi dari mouse kita
document.body.addEventListener('mousemove', function(event) {
    // posisi x dan y di bagi lebar dan tinggi browser lalu di kali 255 agar nilainya sesuai dengan rgb
    // evnet disini adalah parameter bawaan dari event listener yang berisi informasi tentang event yang terjadi
    // window adalah objek global yang merepresentasikan jendela browser
    // kotak putih nya / lebar documnet istilah nya karna document itu yg kotak putih kita liat atau kotak website
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
});