document.getElementById('btnMasuk').addEventListener('click', function() {
    const namaInput = document.getElementById('inputNama').value.trim();
    
    if (namaInput === "") {
        alert("Silakan masukkan nama kamu terlebih dahulu ya!");
    } else {
        // Menyimpan nama ke memori browser
        localStorage.setItem('namaPengguna', namaInput);
        
        // Pindah ke halaman utama surat dan musik
        window.location.href = "utama.html";
    }
});