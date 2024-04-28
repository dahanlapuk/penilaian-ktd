document.addEventListener('DOMContentLoaded', function() {
    const gradeForm = document.getElementById('gradeForm');
    const resultDiv = document.getElementById('result');

    gradeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Ambil nilai dari input
        const kehadiran = parseFloat(document.getElementById('kehadiran').value);
        const keaktifan = parseFloat(document.getElementById('keaktifan').value);
        const attitude = parseFloat(document.getElementById('attitude').value);
        const nilaiLainnya = parseFloat(document.getElementById('nilaiLainnya').value);

        // Perhitungan total nilai
        const totalKehadiran = (kehadiran / 7) * 50; // Bobot kehadiran 50% dari total nilai
        const totalKeaktifan = (keaktifan / 100) * 20; // Bobot keaktifan 20%
        const totalAttitude = (attitude / 100) * 20; // Bobot attitude 20%
        const totalLainnya = (nilaiLainnya / 100) * 10; // Bobot nilai lainnya 10%
        const totalNilai = (totalKehadiran + totalKeaktifan + totalAttitude + totalLainnya) / 100;

        // Tampilkan hasil
        resultDiv.innerHTML = `
            <h2>Hasil Perhitungan:</h2>
            <p>Total Nilai: ${(totalNilai * 100).toFixed(2)}%</p>
            <p>Status: ${totalNilai >= 0.75 ? 'Lulus' : 'Tidak Lulus'}</p>
        `;
        if (totalNilai >= 0.75) {
            resultDiv.style.color = "green"; // Jika nilai >= 0.75, warna teks hijau
        } else {
            resultDiv.style.color = "red"; // Jika nilai < 0.75, warna teks merah
        }
    });
});
