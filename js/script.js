// ini script
// cara mendapatkan nilai BMI
// 1. Masukkan data Berat Badan dalam satuan Kg (kilogram)
// 2. Masukkan data Tinggi Badan dalam satuan M (meter)
// 3. Setelah data terkumpul, selanjutnya data akan di olah melalui sebuah rumus untuk mendapatkan hasilnya
//    rumus nya adalah (BMI = Berat Badan/(tinggi badan)^2)
// 4. Setelah data di olah, kita akan mendapatkan sebuah hasil
// 5. Akan ada 4 indeks yang berbeda sesuai dengan hasil yang kita dapatkan
//    jika hasil kurang dari 18,5 maka kekurangan berat badan
//    jika hasil antara 18,5 - 24,9 maka normal(ideal)
//    jika hasil antara 25,0 - 29,9 maka kelebihan berat badan
//    jika hasil sama dengan 30,0 atau lebih maka kegemukan(obesitas)


// mengambil elemen button dari html
let button = document.getElementById('submit');

button.addEventListener("click", function(Event){
        // preventDefault untuk mencegah perilaku default button agar tidak merefresh halaman saat ditekan
        Event.preventDefault();

        // mengumpulkan data berat badan dan tinggi badan

        const tinggi = parseInt(document.getElementById('tinggi').value)
        const berat = parseInt(document.getElementById('berat').value)
        const umur = document.getElementById('umur');
        const pria = document.getElementById('pria');
        const wanita = document.getElementById('wanita');
        const validasi = document.getElementById('validasi');
        
        // memastikan user sudah memasukkan semua data
        if(tinggi =='' || berat =='' || umur=='' || (pria.checked==false && wanita.checked==false)){
                validasi.innerHTML = `All fields are required!`;
                console.log(validasi)
                return
              }else{

                validasi.innerHTML = ''
              
        // mengubah satuan tinggi badan dari cm menjadi m
        const tinggiM = tinggi/100;

        // mengambil elemen dari html untuk dimanipulasi isinya
        const hasil = document.getElementById('hasil-bmi')
        const indeksHasil = document.getElementById("indeks-hasil");
        const penjelasanHasil = document.getElementById('penjelasan-hasil')

        // pengolahan data agar mendapatkan hasil menggunakan rumus bmi
        const bmi = (berat/(tinggiM * tinggiM)).toFixed(1)

        // memunculkan hasil nilai BMI 
        hasil.innerHTML = bmi;

        // setelah data di olah, sekarang waktunya menentukan indeks apa yang di dapat oleh pengguna sesuai dengan hasilnya

        var status;
        var explanation;
        if (bmi < 18.5) {
                status = "Kekurangan Berat Badan";
                explanation = "Anda berada dalam kategori kekurangan berat badan. Ini bisa berisiko bagi kesehatan Anda. Sebaiknya konsultasikan dengan dokter atau ahli gizi untuk mendapatkan saran.";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                status = "Normal (Ideal)";
                explanation = "Anda memiliki berat badan yang ideal. Pertahankan pola hidup sehat dan aktif untuk menjaga kesehatan tubuh Anda.";
            } else if (bmi >= 25.0 && bmi <= 29.9) {
                status = "Kelebihan Berat Badan";
                explanation = "Anda berada dalam kategori kelebihan berat badan. Ini bisa meningkatkan risiko masalah kesehatan. Pertimbangkan untuk mulai pola hidup lebih sehat.";
            } else if (bmi >= 30.0) {
                status = "Kegemukan (Obesitas)";
                explanation = "Anda berada dalam kategori obesitas. Ini bisa berdampak buruk bagi kesehatan Anda. Disarankan untuk segera berkonsultasi dengan dokter atau ahli gizi.";
            }

        // indeks yang akan ditampilkan ke user
            
        indeksHasil.innerHTML = "Kamu " + status; 
        penjelasanHasil.innerHTML = explanation;
        

              }



  
})
