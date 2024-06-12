function kirimData() {
    const nama = document.getElementById('nama').value;
    const jenisKelamin = document.querySelector('input[name="JK"]:checked').value;
    const alamat = document.getElementById('alamat').value;
    const paket = document.getElementById('paket').value;

    const message = `
    Nama: ${nama}
    Jenis Kelamin: ${jenisKelamin}
    Alamat: ${alamat}
    Paket Member: ${paket}
    `;

    alert(message);
}
