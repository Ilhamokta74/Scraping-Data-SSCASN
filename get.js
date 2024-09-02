const axios = require('axios');
const { Console } = require('console');
const fs = require('fs');
const dotenv = require('dotenv');

// UNTUK AKSES FILE .ENV
dotenv.config();

const ambilDanSimpanData = async (apiUrl, namaFile, jumlahDataPerPermintaan, jumlahDataTotal) => {

  let semuaData = [];

  try {
    // Mengambil data dari API dengan parameter ID
    for (let id = 0; id <= jumlahDataTotal; id += jumlahDataPerPermintaan) {
      try {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `${apiUrl}&offset=${id}`,
          headers: {
            'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
            'Accept': 'application/json, text/plain, */*',
            'sec-ch-ua-mobile': '?0',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"Windows"',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'host': 'api-sscasn.bkn.go.id',
            'Origin': 'https://sscasn.bkn.go.id',
            'Cookie': '8031e2dda37b1552a45b6fe38d7ed11d=a9484cf80a590a043cd81241f66ddc98; BIGipServerpool_prod_sscasn2024_kube=3423101962.47873.0000'
          }
        };

        const response = await axios.request(config);
        const responseData = response.data.data.data;

        semuaData = semuaData.concat(responseData);
        console.log(semuaData.length);

        // JANGAN DI HAPUS, INI FUNGSINYA UNTUK MATIIN BOT JIKA SUDAH SELESAI MENDAPATKAN SEMUA DATA
        const mati = response.data.data.data[0].formasi_id;

      } catch (error) {
        semuaData.sort((a, b) => new Date(b.jumlah_formasi) - new Date(a.jumlah_formasi));

        // Menyimpan semua data ke dalam file JSON
        fs.writeFileSync(namaFile, JSON.stringify(semuaData, null, 2));

        // console.log(`${semuaData.length} Data Dari ${semuaData[0].author.username} berhasil disimpan ke ${namaFile}`);
        console.log(`${semuaData.length} Data berhasil disimpan ke ${namaFile}`);
        console.log(`======================================================================`);
        break;
      }
    }
  } catch (error) {
    console.log(`Error`);
  }
}

const jsonData = require("./Environment/list.json")

const jumlahDataPerHalaman = 10;
const jumlahDataTotal = 1000000;

let i = 0; // Make sure to initialize i before using it

async function repeat() {
  if (i < jsonData.length) {
    const urlApi = `https://api-sscasn.bkn.go.id/2024/portal/spf?kode_ref_pend=${jsonData[i].kode_ref}`;
    const namaFileJson = `./Data/${jsonData[i].nama_jurusan}.json`;

    console.log(`\n======================================================================`);
    console.log(jsonData[i].nama_jurusan);
    await ambilDanSimpanData(urlApi, namaFileJson, jumlahDataPerHalaman, jumlahDataTotal);

    i++;

    // Menunda eksekusi selama 3 detik sebelum melanjutkan ke iterasi berikutnya
    setTimeout(repeat, 1000);
  } else {
    console.log("Semua iterasi selesai.");
    // Kode selanjutnya setelah iterasi selesai dapat ditambahkan di sini
  }
}

// Memulai iterasi pertama
repeat();
