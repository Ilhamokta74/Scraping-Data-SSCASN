const axios = require('axios');
const { Console } = require('console');
const fs = require("fs");

let Authorization = '';

let member = [];

let banyakData = 0;

const getData = async () => {
  try {
    const data = {
      "AuthFlow": "REFRESH_TOKEN_AUTH",
      "ClientId": "23u1gr2hvlm82mnuvd94dghl3s",
      "AuthParameters": {
        "REFRESH_TOKEN": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.U7NzT89y0ruODx_L2mze8Yrx74pI8juojqV7JpW3TrJ1QLsrVCMwFvT1Ue3rX2gkafwfdmoNOyaKso-GzjtsZjoMYycf3kfV-eGG9ALGJ4Edavb57VsNhczMuwe7qbigrcDpfHz-fH_J6QgVLgZgPUW7cjqDd0e5wY7QXuqHrWZK5q2EbgbnBozodzT9L5gDNTom3ixYhcSVLlKts2A_K_UruCRnD7_i3mh9MIK_kPvVrmacrw5Ua6LGHa3ERILYVBzXUox5VrJ_OdMDU-Qjut2powBl8iGUdPX6PBhaSo0Q2sYg4C7-88Tvhx5aN14A5uH2gec_QrLqHlCbFhqzRg.NQRL4YcIPJAMnPnr.i4QJNi8BaRQ_As7KFxtGEXiMSGt3UuWabf7bmOP6jpZcL16WKxIFkYEzCq2qjNm3MDupWK7XGqOFfEa-wOxc3gFexD9VNr2cG4gbbc4JvZR-jWHuRVU64YyS_eAvFp0GPPKfvPjoIVvbryFcIGRYlEO3sixFz4CAnCPlzrHQgwSGvh8p37fqkn-41MPCjKOyyljP2apS1GALfr_cGMdaMeXv11AwoQ8QyEg1DPOL7JP6Pj_-9TMz-0S_IYe-TVGuY14PvA4NLIq0iHQt9CgI0S6_I2efUkHzGwFjoTZNkVMpmAgTKy_TmdXzeZU3xmKuCXsl53m5isGV6IjudGWcKisc5p_xegx2d4X18BA1K1it8En1PmqZ7tq4qqIOHJZb4Hpbik1loySRWDK8CGzP_YxSbxos79e3YMPinKGYFay5lvGgfBGneYt0VZN6pQoZZZCQwGi8Nppmca6nzSJKRDOgw6NkzNybV0yzHXqAqYDR7T9YY3YiwbMIlSseuSx-88kx4f1R9IG7lG7vPEeYSVtk9r2KnbM4AoceWizEXLdRRl9BH5Q4NrmtfFCyqyLjLGJin9fUK1sYUifELKv5vFDmmscHCPvBqxgNK27ZKXidnPlSc4jDGU5RJ03LmvoaX19Zk47ygItMe2cI4GSW1MeamLqttrbTzEhbvxaYLwobTs3_AVejTQwtF6-no_85kAFAur4IfPikOo3WuQilOkE-AUAOoFYHI_S87MLGl1R1JVpGdY8VIpx17RJ6BKOVrKM8boSkFdz8eNF_4r8_ZrQ62K9WwgMWf6rleVS-NevCC4iIDb0V3oe8SgPfUrUKwLthYUww79lLSsE86cyCTI9-Jv8TOkiTY1e6xhJEx0w_WyjuUzOm_c-eEVCfVSVU1o6HcncM2yXpnNjNKI6Kbz6CYzYBoXxhFUbDSevf9E_yN3nue7WGZEpcZT0APkbk6S6jVsh3gaPNsCO9s2oMvjuHrIJOxwc21YfkCTnbu11-8MudovBqFiRLFKd8JrhizUjUHp9dQyheoV8s3ublHB-S5rIoNJYKUl0K0yCtSJKlHuadlwsW6vuAcCHDRW-w1GLUjgJhRHn9Lb92lR22NRxNxX2dJCugfs_7farAAyWuwrI9-41SEBgDkCNWZFEj3DjYP1-TQD86b8uBYTIl1bmBi9L9BR7x6D13GaloDZQIEbsShWNzu91F6R6twlNyp26Rrysdtc2_bqChXi1WxsP6bi9a7pQBxCGehflm2GVQYAjYTxNMn99cXCO9RSjPOh2S9s97RSOJRwGbMgfKbuBeieFhY_xbaCQLU2kqopu_zzxRj6KSGGc_ndiNpn0wk1YzeTd_EmK_.bRXILQTZwDY6ZIgOgnSIdg"
      },
      "AnalyticsMetadata": {
        "AnalyticsEndpointId": "627f6456-234b-4b10-a324-2a45867c780a"
      }
    };


    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://cognito-idp.ap-southeast-1.amazonaws.com/',
      headers: {
        'User-Agent': 'amplify-flutter/1.6.1 android/3 pushnotifications PushNotifications/58 aws-sdk-dart/0.3.1',
        'Content-Type': 'application/x-amz-json-1.1',
        'Cache-Control': 'no-store',
        'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth',
        'host': 'cognito-idp.ap-southeast-1.amazonaws.com',
        'Connection': 'close',
        'Content-Length': '1996'
      },
      data: data
    };

    const response = await axios.request(config);
    const responseData = response.data;

    Authorization = responseData.AuthenticationResult.AccessToken;

    console.log(`Authorization berhasil di Dapat`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

const getMember = async () => {

  const jumlahDataPerHalaman = 1000;

  try {
    const data = {
      variables: {
        type: "channel",
        limit: jumlahDataPerHalaman,
        sortDirection: "ASC"
      },
      query: `
              query ChannelsByLabel(
              $type: String!
              $label: ModelStringKeyConditionInput
              $sortDirection: ModelSortDirection
              $filter: ModelChannelFilterInput
              $limit: Int
              $nextToken: String
              ) {
              channelsByLabel(
                  type: $type
                  label: $label
                  sortDirection: $sortDirection
                  filter: $filter
                  limit: $limit
                  nextToken: $nextToken
              ) {
                  items {
                  id
                  name
                  status
                  }
                  nextToken
              }
              }
          `
    };

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://xzqpphzvbzhzvpke6ojjzvbpjq.appsync-api.ap-southeast-1.amazonaws.com/graphql',
      headers: {
        'Authorization': Authorization,
        'User-Agent': 'amplify-flutter/1.3.0 android/86 API/28',
        'Content-Type': 'application/json; charset=UTF-8',
        'host': 'xzqpphzvbzhzvpke6ojjzvbpjq.appsync-api.ap-southeast-1.amazonaws.com',
        'Connection': 'close',
        'Transfer-Encoding': 'chunked'
      },
      data: data
    };

    const response = await axios.request(config);
    const responseData = response.data;
    let responseItems = responseData.data.channelsByLabel.items;

    let hapus = ["ashel", "chika", "jeane", "shani", "sisca", "jesslyn", "zee"];

    responseItems = responseItems.filter(person => !hapus.includes(person.name.toLowerCase()));

    member = member.concat(responseItems);

    console.log(`${member.length} Data berhasil di Dapatkan`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

const ambilDanSimpanData = async (apiUrl, namaFile) => {
  let semuaData = [];
  let nextToken = null;

  const jumlahDataPerHalaman = 3000;
  const jumlahDataTotal = 200;

  try {
    // Lakukan iterasi untuk setiap halaman data
    for (let halaman = 1; halaman <= jumlahDataTotal; halaman++) {
      console.log(halaman);
      const data = {
        variables: {
          channelId: apiUrl,
          nextToken,
          limit: jumlahDataPerHalaman,
          sortDirection: "ASC"
        },
        query: `
          query MessagesByChannelId(
            $channelId: ID!
            $updatedAt: ModelStringKeyConditionInput
            $sortDirection: ModelSortDirection
            $filter: ModelMessageFilterInput
            $limit: Int
            $nextToken: String
          ) {
            messagesByChannelId(
              channelId: $channelId
              updatedAt: $updatedAt
              sortDirection: $sortDirection
              filter: $filter
              limit: $limit
              nextToken: $nextToken
            ) {
              items {
                id
                message
                status
                format
                channelId
                publishAt
                createdAt
                updatedAt
                author {
                  email
                  nickname
                }
              }
              nextToken
            }
          }
        `
      };

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://xzqpphzvbzhzvpke6ojjzvbpjq.appsync-api.ap-southeast-1.amazonaws.com/graphql',
        headers: {
          'Authorization': Authorization,
          'User-Agent': 'amplify-flutter/1.3.0 android/86 API/28',
          'Content-Type': 'application/json; charset=UTF-8',
          'host': 'xzqpphzvbzhzvpke6ojjzvbpjq.appsync-api.ap-southeast-1.amazonaws.com',
          'Connection': 'close',
          'Transfer-Encoding': 'chunked'
        },
        data: data
      };

      const response = await axios.request(config);
      const responseData = response.data;
      const responseItems = responseData.data.messagesByChannelId.items;

      semuaData = semuaData.concat(responseItems);
      nextToken = responseData.data.messagesByChannelId.nextToken;

      // Jika tidak ada nextToken, maka semua data telah diambil
      if (!nextToken) {
        break;
      }
    }

    semuaData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

    banyakData += semuaData.length;

    // Setelah loop selesai, simpan data ke file JSON
    fs.writeFileSync(namaFile, JSON.stringify(semuaData, null, 2));
    console.log(`${semuaData.length} Data berhasil disimpan ke ${namaFile}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

let i = 0; // Make sure to initialize i before using it

async function repeat() {
  if (i < member.length) {
    const urlApi = member[i].id;
    const namaFileJson = `./Data/${member[i].name}.json`;

    console.log(`\n======================================================================`);
    console.log(member[i].name);
    await ambilDanSimpanData(urlApi, namaFileJson);

    i++;

    // Menunda eksekusi selama 3 detik sebelum melanjutkan ke iterasi berikutnya
    setTimeout(repeat, 1000);
  } else {
    console.log(`\n==================================================================`);
    console.log(`Banyak Data = ${banyakData}`);
    console.log("Semua iterasi selesai.");
    console.log(`==================================================================`);
    // Kode selanjutnya setelah iterasi selesai dapat ditambahkan di sini
  }
}

const start = async () => {
  // Memulai iterasi pertama
  await getData();
  await new Promise(resolve => setTimeout(resolve, 2000));

  await getMember();
  await new Promise(resolve => setTimeout(resolve, 3000));

  await repeat();
}

// Memulai iterasi pertama
start();
