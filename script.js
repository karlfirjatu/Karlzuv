let buttonClicked = false;

function checkKodam() {
    const name = document.getElementById('name').value;
    const button = document.querySelector('button');

    if (name.trim() === "") {
        showModal();
        return;
    }

    if (buttonClicked) {
        return; // Tidak melakukan apa-apa jika tombol sudah diklik
    }

    buttonClicked = true;
    button.disabled = true; // Menonaktifkan tombol

    let kodam = determineKodam();
    document.getElementById('result').innerHTML = `Nama: ${name}<br>Kodam: ${kodam}`;

    // Mengaktifkan tombol kembali setelah beberapa detik
    setTimeout(() => {
        buttonClicked = false;
        button.disabled = false;
    }, 3000); // Ganti 3000 dengan jumlah milidetik sesuai kebutuhan
}

function determineKodam() {
    const kodamList = [
        "tiang listrik",
        "artis bokep",
        "kipas cosmos",
        "Raja kikir",
        "Raja SUKI",
        "Raja Sigma",
        "sigit rendang",
        "sempak mas Amba",
        "genteng pecah",
        "pos ronda",
        "el gangsing",
        "Pace kobo",
        "Raja Typo",
        "Herman Bengkulu",
        "Raja Skibidi",
        "Ngap owi",
        "Raja OPM",
        "pendukung PSHT",
        "penghina PSHT",
        "Tidak ada"
    ];

    // Memilih kodam secara acak
    const randomIndex = Math.floor(Math.random() * kodamList.length);
    return kodamList[randomIndex];
}

function showModal() {
    document.getElementById('errorModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('errorModal').style.display = 'none';
}

function showProfileModal() {
    document.getElementById('profileModal').style.display = 'block';
}

function closeProfileModal() {
    document.getElementById('profileModal').style.display = 'none';
}