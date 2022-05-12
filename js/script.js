
//проверяем условия
function gener(el) {
    let generatedValue;
    if (el >= 2)
        generatedValue = 3;
    if (el > 0 && el < 2)
        generatedValue = 2;
    if (el == 0)
        generatedValue = 1;
    return generatedValue;
};
//создаем объект где ключ-результат условия, а свойства - соответсующее условию значение
const objColor = {
    1: '#e03636',
    2: '#9ba805',
    3: '#3eb051'
}
//забираем коллекции
const time = document.querySelectorAll('.time');
const stat = document.querySelectorAll('.bg_stat');

//запускаем рандом
function math() {
    return Math.floor(Math.random() * 10);
}
function runTires() {
    return Math.floor(Math.random() * 10000);
}
const funcRandom = () => {
    arrD = Array(10).fill(0).map(math);
    arrT = Array(10).fill(0).map(math);
    arr733D = arrD;
    arr733T = arrT;


    //Объект 5
    const Obj733 = () => {
        const alls = document.querySelectorAll('.tiresD733');
        const allsT = document.querySelectorAll('.tiresT733');
        time[0].textContent = getNowtime();
        const logic733 = () => {
            alls.forEach(function (elem, index) {
                elem.textContent = arr733D[index] + '\nатм';
            })
            allsT.forEach(function (elem, index) {
                elem.textContent = arr733T[index] + '°C';
            })
            alls.forEach(function (elem, index) {
                elem.style.background = objColor[gener(arr733D[index])];
            })
            allsT.forEach(function (elem, index) {
                elem.style.background = objColor[gener(arr733T[index])];
            })
        }
        logic733();
        const statGal = () => {
            stat[0].style.backgroundImage = "url(image/gal.png)";
        }
        const statEr = () => {
            stat[0].style.backgroundImage = "url(image/er.png)";
        }
        if (arr733D[0] >= 2 && arr733D[1] >= 2 && arr733D[2] >= 2 && arr733D[3] >= 2 && arr733D[4] >= 2
            && arr733D[5] >= 2 && arr733D[6] >= 2 && arr733D[7] >= 2 && arr733D[8] >= 2 && arr733D[9] >= 2 &&
            arr733T[0] >= 2 && arr733T[1] >= 2 && arr733T[2] >= 2 && arr733T[3] >= 2 && arr733T[4] >= 2
            && arr733T[5] >= 2 && arr733T[6] >= 2 && arr733T[7] >= 2 && arr733T[8] >= 2 && arr733T[9] >= 2) {
            statGal();
        } else {
            statEr();
        }
    }
    Obj733();
}
funcRandom();
setInterval(funcRandom, 5000)

//текущее время
function getNowtime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    if (now.getMonth() < 10) {
        month = "0" + month;
    }
    let date = now.getDate();
    if (now.getDate() < 10) {
        date = "0" + date;
    }
    let hours = now.getHours();
    if (now.getHours() < 10) {
        hours = "0" + hours;
    }
    let minutes = now.getMinutes();
    if (now.getMinutes() < 10) {
        minutes = "0" + minutes;
    }
    let seconds = now.getSeconds();
    if (now.getSeconds() < 10) {
        seconds = "0" + seconds;
    }
    let nowTime = (`${date}-${month}-${year}   ${hours}:${minutes}:${seconds}`);
    return nowTime;
}
function getNowtime1() {
    let now = new Date();
    let hours = now.getHours();
    if (now.getHours() < 10) {
        hours = "0" + hours;
    }
    let minutes = now.getMinutes();
    if (now.getMinutes() < 10) {
        minutes = "0" + minutes;
    }
    let seconds = now.getSeconds();
    if (now.getSeconds() < 10) {
        seconds = "0" + seconds;
    }
    let nowTime = (`${hours}:${minutes}:${seconds}`);
    return nowTime;
}

//проваливаемся в колесо
const tires_link = document.querySelectorAll('.tires_link');
const arrTireslink = Array.from(tires_link);
arrTireslink.forEach(function (elem, index) {
    elem.addEventListener('click', tiresActive);
    function tiresActive() {
        arrTireslink.forEach(function (elem, index) {
            tD = document.querySelectorAll('.tiresD');
            tT = document.querySelectorAll('.tiresT');
            elem = tD[index].classList.remove('tiresActiveD');
            elem = tT[index].classList.remove('tiresActiveT');
        })
        tD = document.querySelectorAll('.tiresD');
        tT = document.querySelectorAll('.tiresT');
        elem = tD[index].classList.toggle('tiresActiveD');
        elem = tT[index].classList.toggle('tiresActiveT');
        check = document.querySelector('.check')
        //check.style.display = 'none';
        dataActive = document.querySelector('.dataActive')
        dataActive.style.display = 'block';
        wCA = document.querySelector('.wrapper_containt')
        wCA.classList.add('wrapper_containt_active')
        grafik = document.querySelector('.grafik');
        grafik.style.display = 'block';
    }

});

//рандомная дата
function randomDate(start, end) {
    return new Date(start.getTime()
        + Math.random() * (end.getTime() - start.getTime()));
}
const date01 = randomDate(new Date(2010, 0, 1), new Date()); const date02 = randomDate(new Date(2010, 0, 1), new Date());
const date03 = randomDate(new Date(2010, 0, 1), new Date()); const date04 = randomDate(new Date(2010, 0, 1), new Date());
const date05 = randomDate(new Date(2010, 0, 1), new Date()); const date06 = randomDate(new Date(2010, 0, 1), new Date());
const date07 = randomDate(new Date(2010, 0, 1), new Date()); const date08 = randomDate(new Date(2010, 0, 1), new Date());
const date09 = randomDate(new Date(2010, 0, 1), new Date()); const date10 = randomDate(new Date(2010, 0, 1), new Date());

const arrDates = [date01, date02, date03, date04, date05, date06, date07, date08, date09, date10];
function dataVunc() {
    arData = [];
    arrDates.forEach((elem) => {
        ar = (`${elem.getFullYear()}-${('0' + (elem.getMonth() + 1)).slice(-2)}-${('0' + elem.getDate()).slice(-2)}`);
        arData.push(ar);
        return arData;
    })
}
dataVunc()
const arrAll1 = [[], [], [], [], [], [], [], [], [], []];
const arrAll2 = [[], [], [], [], [], [], [], [], [], []];

arrTireslink.forEach((elem, index) => {
    elem.addEventListener('click', tiresLinkfunc);
    function tiresLinkfunc() {
        const dataMade = document.querySelector('.data_made');
        const probeg = document.querySelector('.probeg');
        const runShine = Array(10).fill(0).map(runTires);
        function tiresActivedatchik() {
            elem = runShine[index];
            probeg.textContent = elem + ' ' + 'км';
        }
        tiresActivedatchik();
        function dataMadefunc() {
            elem = arData[index];
            dataMade.textContent = elem;
        }
        dataMadefunc();
        function tiresGrafik() {
            elem = arrAll1[index];
            davl = elem;
            elem = arrAll2[index];
            davl2 = elem;
        }
        tiresGrafik(arrAll1)
        tiresGrafik(arrAll2)
    }
    tiresLinkfunc();
});
//кладем значения в каждое колесо
arrTime = [];
function go() {
    arrTime.push(getNowtime1());
    arr733D.forEach((el, index) => {
        arrAll1[index].push(el);
    })
    arr733T.forEach((el, index) => {
        arrAll2[index].push(el);
    })
    return arrAll1, arrAll2;
}
go();
setInterval(go, 5000);

//графики
Chart.register(ChartDataLabels);
myChartg = new Chart(myChartg, {
    type: 'line',
    data: {
        datasets: [{
            data: davl,
            label: 'Давление',
            fill: false,
            borderColor: 'lightgreen',
            yAxisID: 'left-y-axis'
        }, {
            data: davl2,
            label: 'Температура',
            fill: false,
            borderColor: 'lightblue',
            yAxisID: 'right-y-axis'
        }],
        labels: arrTime
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20,
                    },
                    color: 'gray'
                }
            }
        },
        scales: {
            'left-y-axis': {
                type: 'linear',
                position: 'left',
                min: 0,
                max: 12,
                ticks: {
                    font: {
                        size: 18,
                    }
                }
            },
            'right-y-axis': {
                type: 'linear',
                position: 'right',
                min: 0,
                max: 10,
                ticks: {
                    font: {
                        size: 18,
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 10
                    }
                }
            }
        },
    }
});
const upDia = () => {
    myChartg.data.datasets[0].data = davl;
    myChartg.data.datasets[1].data = davl2;
    myChartg.update();
}
setInterval(upDia, 100);


