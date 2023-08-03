const requestBTC = 'https://whattomine.com/coins/1.json?';
const requestDGB = 'https://whattomine.com/coins/113.json?';
const requestDASH = 'https://whattomine.com/coins/34.json?';

// https: //whattomine.com/coins/34.json?hr=1290.0&p=3148.0&fee=0.0&cost=0.063&cost_currency=USD&hcost=0.0&span_br=&span_d=24

const cost = 0.067;
const miners = [
  'MicroBT Whatsminer M20S 68T',
  'Canaan Avalon 1166 PRO 78Th',
  'MicroBT WhatsMiner M30S 95Th',
  'Bitmain Antminer S19J Pro 96Th',
  'Bitmain Antminer S19 Pro 110Th',
  'Bitmain Antminer S19 Pro 121Th',
  'Bitmain Antminer S19 Pro 132Th',
  'Bitmain Antminer S19 Pro 141Th',
  'Bitmain Antminer S19 Pro 145Th',
  'Bitmain Antminer S19 Pro 153Th',
  'Bitmain Antminer S19 Pro 161Th'
];
const hashRate = [68.0, 78.0, 95.0, 96.0, 110.0, 121.0, 132.0, 141.0, 145.0, 153.0, 161.0];
const power = [3360.0, 3276.0, 3344.0, 2832.0, 3250.0, 3600.0, 4000.0, 4400.0, 4900.0, 5400.0, 5800.0];
const coins = [{
    name: 'BTC',
    url: requestBTC
  },
  {
    name: 'DGB',
    url: requestDGB
  }
];
const dashMiner = {
  name: 'Bitmain Antminer D7 1.29 Th',
  hashRate: '1290',
  power: '3148',
  coin: 'DASH'
}

function sendRequest(method, url, body = null) {
  const param = {
    method: method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    // mode: 'no-cors'
  }

  if (method !== 'POST') {
    param.body = null;
  }
  // console.log(param);

  return fetch(url, param)
    .then(responce => {
      if (responce.ok) {
        return responce.json()
      } else
        return responce.json().then(error => {
          const er = new Error(`Ошибка ${error}`);
          er.data = error;
          throw er;
        })
    })
};

function clearClick() {
  table.innerHTML = null;
  containerMessage.innerHTML = null;
  containerMessage.style.display = 'none';
};


let containerTable = document.querySelector('.container-table');
let header = document.querySelector('h1');
let subHeader = document.createElement('h2');
let table = document.createElement('table');
let dateBlock = document.createElement('div');
let containerMessage = document.querySelector('.message');
containerTable.style.width = '60%';
containerTable.style.margin = '0 auto';

containerMessage.style.width = '60%';
containerMessage.style.margin = '0 auto';

async function start() {

  let now = new Date();
  let time = `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}, ${now.getHours()}:${now.getMinutes()}`;
  header.after(subHeader);
  subHeader.innerHTML = `на дату и время ${time}`;

  containerMessage.style.display = "flex";
  // containerMessage.style.justifyContent = "center";
  containerTable.style.display = "block";
  // containerTable.style.justifyContent = "center";
  containerMessage.append(dateBlock);
  dateBlock.innerHTML = `Расчет рентабельности майнинга сделан на ${time}`;

  containerTable.append(table);
  let thead = table.createTHead();
  let colum1 = document.createElement('th');
  thead.append(colum1);
  let colum2 = document.createElement('th');
  thead.append(colum2);
  let colum3 = document.createElement('th');
  thead.append(colum3);
  let colum4 = document.createElement('th');
  thead.append(colum4);
  colum1.innerHTML = 'Miner';
  colum2.innerHTML = 'HashRate';
  colum3.innerHTML = 'Currency';
  colum4.innerHTML = 'Profit per day';

  let tBody = table.createTBody();
  let coin = {};

  // cycle for BTC and DGB for all SHA-256 miner 
  hashRate.forEach((hash, indexHash) => {
    Promise.all(coins.map(async (el, indexCoin) => {
      // coins.forEach((el, indexCoin) => {
      // await sleep(1000);
      let row = tBody.insertRow();
      if (indexCoin == 0) {
        let cellMiner = row.insertCell();
        cellMiner.setAttribute('rowspan', coins.length);
        cellMiner.innerHTML = miners[indexHash];
        let cellHashRate = row.insertCell();
        cellHashRate.setAttribute('rowspan', coins.length);
        cellHashRate.innerHTML = hashRate[indexHash];
        // cellHashRate.classList.add('hashrate');
      };
      let cellCoin = row.insertCell();
      // cellCoin.classList.add('currency');
      cellCoin.innerHTML = el.name;
      let cellProfit = row.insertCell();
      // cellProfit.classList.add('profit');

      let parameters = `hr=${hashRate[indexHash]}&p=${power[indexHash]}&fee=0.0&cost=${cost}&cost_currency=USD&hcost=0.0&span_br=&span_d=24`;

      await sendRequest('GET', el.url + parameters)
        .then(data => {
          Object.assign(coin, data);
          // console.log(el.name, coin);
          // console.log(el.name, coin.profit);
          cellProfit.innerHTML = coin.profit;
        })
        .catch(err => {
          console.log(err);
        });

      await timerPromise(1500);


    }));
  });
  // block for DASH miner
  let row = tBody.insertRow();
  let cellMiner = row.insertCell();
  cellMiner.innerHTML = dashMiner.name;
  let cellHashRate = row.insertCell();
  cellHashRate.innerHTML = dashMiner.hashRate;
  let cellCoin = row.insertCell();
  cellCoin.innerHTML = dashMiner.coin;
  let cellProfit = row.insertCell();
  let parameters = `hr=${dashMiner.hashRate}&p=${dashMiner.power}&fee=0.0&cost=${cost}&cost_currency=USD&hcost=0.0&span_br=&span_d=24`;
  // console.log(parameters);
  await sendRequest('GET', requestDASH + parameters)
    .then(data => {
      Object.assign(coin, data);
      cellProfit.innerHTML = coin.profit;
    })
    .then(() => timerPromise(5000))
    // .then(() => console.log('DASH done!'))
    .catch(err => {
      console.log(err);
    });

};

const timerPromise = (timeOut) =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve(), timeOut))


// async function getProfitData() {

// }

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// };