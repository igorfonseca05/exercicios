"use strict"

// 1 Sample Output : Today is : Tuesday. Current time is : 10 PM : 30 : 38

function getTime() {
    const date = new Date()

    const day = date.getDay()
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    let hour24 = date.getHours()
    let hour = hour24
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    let prepand

    if (hour24 === 12 && minutes === 0 && seconds === 0) {
        hour = 12
        prepand = 'Meio dia'
    } else if (hour24 >= 12) {
        prepand = 'PM'
        hour = hour24 - 12
    } else {
        prepand = 'AM'
        hour = hour24 === 0 ? hour24 - 12 : hour24
    }

    hour = hour.toString().padStart(2, '0')
    minutes = minutes.toString().padStart(2, '0')
    seconds = seconds.toString().padStart(2, '0')

    console.log(`Today is : ${diasDaSemana[day]}`)
    console.log(`Current time is :  ${hour} ${prepand} : ${minutes} : ${seconds}`)
}


getTime()