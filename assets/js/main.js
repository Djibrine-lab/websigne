// Objet Number
var date = new Date()
var MONTHS = ['Janvier',
    'Fevrier',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Aout',
    'Septembre',
    'Octobre',
    'Novembre',
    'Decembre',
]
var iniDate = () => {
    var date = new Date()
    var currentDate = {
        day: date.getDate(),
        month: MONTHS[date.getMonth()],
        year: date.getFullYear(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        secondes: date.getSeconds(),
    }
    return currentDate
}
var setData = (data) => {
    if (data < 10) {
        return '0' + data
    }
    return data
}


var displayDate = () => {
    var currentDate = iniDate()
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    div.className = 'currentDate'
    div2.className = 'currentTime'
    var date = `Date : ${setData(currentDate.day)}  ${setData(currentDate.month)} ${setData(currentDate.year)}`
    var time = `Heure : ${setData(currentDate.hours)} : 
                        ${setData(currentDate.minutes)} : 
                        ${setData(currentDate.secondes)}`
    var text = document.createTextNode(date)
    var text_time = document.createTextNode(time)
    div.appendChild(text);
    div2.appendChild(text_time);
    document.getElementById('app').innerHTML = ''
    document.getElementById('app').appendChild(div);
    document.getElementById('app').appendChild(div2);
}
setInterval(displayDate, 1000)

console.log('currentDate');