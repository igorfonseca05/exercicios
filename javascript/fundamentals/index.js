"use strict"

/**1. Display Current Day and Time

Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */


// const clock = document.querySelector('.Clock')

// function getDate() {

//     const date = new Date()

//     const day = date.getDay()
//     const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

//     let hour = date.getHours()
//     let minute = date.getMinutes()
//     let second = date.getSeconds()

//     hour = hour < 10 ? `0${hour}` : hour
//     minute = minute < 10 ? `0${minute}` : minute
//     second = second < 10 ? `0${second}` : second

//     const prepand = hour >= 12 ? 'PM' : 'AM'

//     hour = hour >= 12 ? hour - 12 : hour

//     if (hour === 0 && prepand === 'PM') {
//         if (minute === 0 && second === 0) {
//             hour = 12,
//                 prepand = 'Meio dia'
//         } else {
//             hour = 12,
//                 prepand = 'PM'
//         }
//     }

//     if (hour === 0 && prepand === ' AM ') {
//         if (minute === 0 && second === 0) {
//             hour = 12;
//             prepand = ' Midnight';
//         } else {
//             hour = 12;
//             prepand = ' AM';
//         }
//     }

//     console.log(`Hoje é ${diasDaSemana[day]}`)
//     console.log("Hora atual: " + `${hour}:${minute}:${second}`)
// }

// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

function getData() {
    const date = new Date()

    const day = date.getDay()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()

    hour = hour < 10 ? `0${hour}` : hour
    minutes = minutes < 10 ? `0${minutes}` : minutes
    second = second < 10 ? `0${second}` : second

    console.log(hour, minutes, second)

    const diasDaSemana = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    const weekDay = diasDaSemana[day]
    let prepand = hour >= 12 ? 'PM' : "AM"
    hour = hour > 12 ? hour - 12 : hour


    if (hour === 0 && prepand === 'PM') {
        if (minutes === 0 && second === 0) {
            hour = 12
            prepand = 'noon'
        } else {
            hour = 12
            prepand = 'PM'
        }
    }

    if (hour === 0 && prepand === 'AM') {
        if (minutes === 0 && second === 0) {
            hour = 12
            prepand = 'Midnight'
        } else {
            hour = 12
            prepand = 'AM'
        }
    }

    console.log(`Hoje é: ${weekDay}`)
    console.log(`Horário atual: ${hour} ${prepand} : ${minutes} : ${second} `)
}

// getData()


/**
 * 2. Print Current Window Contents
    Write a JavaScript program to print the current window contents. 
 */

const button = document.querySelector('#printButton')

function printPage() {
    window.print()
}

// button.addEventListener('click', printPage)

// printPage()

/**
 * 3. Get Current Date in Various Formats

Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */

function getFormatData() {
    const date = new Date()

    // let month = date.getMonth()
    // let day = date.getDate()
    // const year = date.getFullYear()

    // month = month < 10 ? `0${month}` : month
    // day = day < 10 ? `0${day}` : day


    // console.log(`${month}-${day}-${year}`)
    // console.log(`${month}/${day}/${year}`)
    // console.log(`${day}-${month}-${year}`)
    // console.log(`${day}/${month}/${year}`)

    const formattedDate = date.toLocaleDateString('pt-BR').replaceAll('/', '-')
    // const formattedDate = date.toLocaleDateString()

    console.log(formattedDate)
}

// getFormatData()


/**
 * 4. Calculate Area of Triangle (Sides: 5, 6, 7)
Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
 */

function triangle(a = 0, b = 0, c = 0) {
    // Para calcular essa area precisamos cacular primeiro o perimetro

    if (a === 0 && b === 0 && c === 0) return console.log('Informe valores')

    const p = (a + b + c) / 2

    console.log(p)

    const area = Math.floor(Math.sqrt(p * (p - a) * (p - b) * (p - c)))

    console.log(area)
}

// triangle(5, 6, 7)


// 6. Check Leap Year (Gregorian Calendar)
// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

/** um ano é bissexto se for divisivel por 4 e por 100, mas se por divisivel por 100 tem de ser
 * divisivel tbm por 400
 */

// function checkIfLeapYear(year) {
//     const disivisibleBy4 = year % 4 === 0
//     const notDisivisibleBy100 = year % 100 !== 0
//     const disivisibleBy400 = year % 4 === 0

//     const isLeapYear = (disivisibleBy4 && notDisivisibleBy100) || (disivisibleBy400)

//     if (isLeapYear) {
//         console.log(year + " " + "é um ano bissexto")
//     } else {
//         console.log(year + " " + "não é um ano bissexto")
//     }
// }


function checkIfLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 4 === 0) {
        console.log(`${year} é um ano bissexto`)
    } else {
        console.log(`${year} não é um ano bissexto`)
    }
}


// checkIfLeapYear(1900)
// checkIfLeapYear(2000)
// checkIfLeapYear(2024)
// checkIfLeapYear(2022)

/**7. Find Years When Jan 1 is Sunday (2014?2050)
Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.   */

function findYear() {

    let years = []

    for (let year = 2014; year <= 2050; year++) {
        const date = new Date(`01/01/${year}`)
        const day = date.getDay()

        if (day === 0) {
            years.push(year)
        }
    }

    console.log(years)
}

// findYear()

/**8. Random Integer Guess Game

Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  */

let chances = 5
function guessingRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)

    let num = prompt(`Digite um número entre ${min} e ${max}, você tem ${chances} chances`)

    if (chances === 1) {
        return alert('Você perdeu o jogo')
    }

    if (randomNumber !== Number(num)) {
        chances -= 1
        guessingRandomNumber(1, 10)
    } else {
        alert('Parabéns voce acertou! O número era o ' + ' ' + randomNumber)
    }
}

// guessingRandomNumber(1, 10)


// 9. Days Left Before Christmas
// Write a JavaScript program to calculate the days left before Christmas.  

const calculateDateBeforeChristimas = () => {

    const today = new Date()
    const month = today.getMonth()
    const year = today.getFullYear()
    const currentDay = today.getDate()

    const christimas = new Date(year, 11, 25)

    if (month === 11 && currentDay > 25) {
        christimas.setFullYear(year + 1)
    }

    const time = Math.ceil((christimas.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

    // console.log(time)
}


function getDifference(value) {


    let [day, month, year] = value.split('/')

    if (!value) return console.log('Nenhuma data inserida')
    if (!value.includes('/')) return console.log('Use / para separar a data')
    if (day.toString().length !== 2 || month.toString().length !== 2 || year.toString().length !== 4) {
        return console.log('Data inválida, use o formato: dd/mm/aaaa')
    }

    const date = new Date();
    const time = new Date(year, month - 1, day);

    const resul = Math.ceil((time.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

    if (resul < 0) return console.log('Esse dia já passou, use datas futuras!')

    console.log(resul)
}


// getDifference('19/06/2025');

// calculateDateBeforeChristimas()


// 10. Multiplication and Division (User Input) -  Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  

function activeForm() {
    const form = document.querySelector('.form')
    const fistInput = document.querySelector('#inputOne')
    const secondInput = document.querySelector('#inputTwo')
    const resultContainer = document.querySelector('.result')


    form.addEventListener('submit', (e) => {
        e.preventDefault()

        let resultado = {
            Multiplicar: fistInput.value * secondInput.value,
            Dividir: fistInput.value / secondInput.value
        }[`${e.submitter.innerText}`]

        if (Number.isNaN(String(resultado))) {
            resultado = 'Impossivel calcular'
        }

        resultContainer.innerText = resultado
    })
}

// activeForm()


// 12. Get Current Website URL - Write a JavaScript program to get the website URL (loading page).  

// console.log(document.URL)
// console.log(document.baseURI)

// 13. Create Variable with User-Defined Name - Write a JavaScript exercise to create a variable using a user-defined name. 

// const name = 'myVariable'

// this[name] = 12

// console.log(this)

// 14. Get File Extension of Filename - Write a JavaScript exercise to get the filename extension.  

const file = 'index.pdf'

// console.log(file.split('.').pop())
// console.log(file.slice(file.indexOf('.') + 1,))

// 15. Difference Between Number and 13 - Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference. 

function getDiference(num) {
    if (num > 13) {
        console.log(2 * Math.abs(num - 13))
    } else {
        console.log(13 - num)
    }
}

// getDiference(14)


// 16. Sum Two Integers (Triple if Equal) - Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  

const sum = (num, num1) => num === num1 ? 3 * (num + num1) : (num + num1)

// console.log(sum(2, 2))


// 17. Difference Between Number and 19 (Triple if >19) - Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.


// 18. Check if Number or Sum is 50 - Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.


// 19. Check if Integer is Within 20 of 100 or 400 - Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.


// 20. Check if One Integer is Positive and One is Negative - Write a JavaScript program to check two given integers whether one is positive and another one is negative.


// 21. Add 'Py' to Start of String if Not Present - Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

function modifyString(text) {
    return text === null || text === undefined || text.includes('Py') ? text : `Py${text}`
}

// console.log(modifyString('thon'))


// 22. Remove Character at Specified Position in String - Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

// function removeCharacter(string, position) {

//     'igor'.s

//     return 
// }


// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(parseFloat('12po'))
// console.log(Number.isInteger('12.2'))
// console.log(Number.isInteger(parseFloat('12')))

/**  */
// console.log(typeof parseFloat('12.3sjçalsjç'), parseFloat('12.3çalsjç'))


const num = 23
// 
const nums = [1, 5, 4, 56, 89, 45, 12, 17, 10, 3, 4, 0, 26, 98, 45, 896, 12500, 369872, 4523, 6, 11524893]

// console.log(Math.max(...nums))
// console.log(Math.pow(num, 1))
// console.log(Math.sign(0.3))

// console.log(num.toExponential(2))



// console.log(Number.isNaN(NaN))

// 23. Swap First and Last Characters in String 
// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

// function changeString(text) {

//     if (text.length < 1 || text.length === 1) return text
//     const first = text.slice(0, 1)
//     const last = text.slice(-1)

//     const arrayText = text.split('')

//     arrayText[0] = last
//     arrayText[text.length - 1] = first

//     const changedText = arrayText.join('')

//     console.log(changedText)
// }

function changeString(text) {

    if (text.length < 1 || text.length === 1) return text


    const first = text.slice(0, 1)
    const last = text.slice(-1)
    const middle = text.slice(1, -1)

    console.log(last + middle + first)
}

// changeString('ab')


// 24. Add First Character to Front and Back of String 
// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

function replaceCharacter(text) {

    if (text.length) return text

    const first = text.slice(0, 1)
    const middle = text.slice(1,)

    console.log(first + middle + first)
}

// replaceCharacter('igor')



// 25. Check if Number is Multiple of 3 or 7 
// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

function getMultiple(num1) {

    if (num1 < 0) return console.log('Use um número positivo')

    if (num1 % 3 === 0 || num1 % 7 === 0) {
        console.log(`${num1} é multiplo de 3 ou 7`)
    } else {
        console.log(`${num1} não é multiplo de 3 nem de 7`)
    }
}

// getMultiple(14)


// 26. Add Last 3 Characters to Front and Back of String 
// Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

function addLetter(text) {

    if (text.length < 3) return console.log('A string deve conter pelo menos 3 caracteres')

    const lastThreeLetter = text.slice(-3)

    console.log(lastThreeLetter + text + lastThreeLetter)
}

// addLetter('Igor')



// 27. Check if String Starts with 'Java'
// Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

function verifyString(text) {
    if (text.length < 4) return console.log('A string deve conter pelo menos 4 caracteres')

    if (text.startsWith('Java')) {
        console.log('String começa com Java')
    } else {
        console.log('String não começa com Java')
    }

}


// verifyString('Javascript')


// 28. Check if Two Integers are in Range 50?99
// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.


function inRange(num, num1) {

    if (typeof num != 'number' || typeof num1 != 'number') return console.log('Insira valores válidos')
    if (isNaN(num) || Number.isNaN(num)) return console.log('Insira valores válidos')
    if (num < 0 || num1 < 0) return console.log('Insira valores postivos')

    if (num >= 50 && num <= 99 || num1 >= 50 && num1 <= 99) {
        return true
    } else {
        return false
    }
}

// fconsole.log(inRange(0, 56))


// 29. Check if Three Integers are in Range 50?99 - 
// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.

function inRangeOf(num, num1, num3) {

    const isNotTypeNumber = typeof num != 'number' || typeof num1 != 'number' || typeof num3 != 'number'
    const isNaN = Number.isNaN(num) || Number.isNaN(num1) || Number.isNaN(num3)
    const isNegative = num < 0 || num1 < 0 || num3 < 0
    const isBetween50and99 = num >= 50 && num <= 99 || num1 >= 50 && num1 <= 99 || num3 >= 50 && num3 <= 99

    if (isNotTypeNumber) return console.log('Insira valores válidos')
    if (isNaN) return console.log('Insira valores válidos')
    if (isNegative) return console.log('Insira valores postivos')

    return isBetween50and99 ? true : false
}

// console.log(inRange(0, 6, 9))

// 30. Remove 'Script' from String at 5th Position 
// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.

function verify(string) {

    if (string.slice(4, 10) === 'Script') {
        return string.slice(0, 4) + string.slice(10)
    } else {
        return string
    }

}

// console.log(verify('Meu Script é Script'))


// 31. Find Largest of Three Integers - Write a JavaScript program to find the largest of three given integers.

function getlargest(num1, num2, num3) {

    if (typeof num1 !== 'number' && typeof num2 !== 'number' && typeof num3 !== 0) throw new Error('Insira valores validos')
    console.log(Math.max(num1, num2, num3))


}

// getlargest(-1, 0, 9)



// 32. Find Closest Value to 100 from Two Numbers - Write a JavaScript program to find the closest value to 100 from two numerical values.


function closesNumber(num, num1) {

    if (num1 === num) return console.log('Não há valor mais próximo de 100')

    const value1 = 100 - num
    const value2 = 100 - num1

    if (value1 < value2) {
        console.log(`${num} é mais próximo de 100 do que ${num1}`)
    } else {
        console.log(`${num1} é mais próximo de 100 do que ${num}`)
    }

}

// closesNumber(91.5, 90)

// 33. Check if Two Numbers are in Specific Ranges - Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.


function isInTheRange(num1, num2) {

    const isIn40_60range = num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60
    const isIn70_100range = num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100

    if (isIn40_60range || isIn70_100range) {
        console.log('Estão no intervalo')
    } else {
        console.log('Não estão no intervalo')

    }

}

// isInTheRange(10, 12)


// 34. Find Larger Number in Range 40?60 - Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.



// 35. Check Character Between 2nd and 4th Positions in String - Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.

function characters(caracter, string) {
    console.log(string.slice(1, 4).includes(caracter))
}

// characters('o', 'igor')

// 36. Check if Last Digit of Three Integers is Same - Write a JavaScript program that checks whether the last digit of three positive integers is the same.

function isPositiveNumber(num1, num2, num3) {
    const n1 = num1.toString()[num1.toString().length - 1]
    const n2 = num2.toString()[num2.toString().length - 1]
    const n3 = num3.toString()[num3.toString().length - 1]

    if (n1 === n2 && n2 === n3) {
        console.log('São os mesmos')
    } else {
        console.log('Não são os mesmos')
    }
}

// isPositiveNumber(206, 56, 456)


// 37. Modify String Based on Length (First 3 Lowercase/Uppercase) 
//  Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.


function convertFirst3ToLower(input) {
    if (input.length < 3) return input.toUpperCase()

    const lowerCase = input.slice(0, 3).toLowerCase()
    const rest = input.slice(3)

    return lowerCase + rest
}

// console.log(convertFirst3ToLower('Igor'))


// 38. Evaluate Grades Based on Total Marks and Final Exam - Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows:

// If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
// If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.
// If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.


// 39. Sum Two Integers and Return Based on Range - Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.


// 40. Check if Integer is 8 or Difference/Sum Equals 8 - Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.


// 41. Return 30, 40, or 20 Based on Same Numbers - Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.


// 42. Check Numbers in Strict or Soft Increasing Mode - Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31


// 43. Check Rightmost Digits of Three Numbers - Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.


// 44. Evaluate if Integer is =20 and Less Than Another - Write a JavaScript program that evaluates three given integers to determine if any one of them is greater than or equal to 20 and less than at least one of the other two.


// 45. Check if Integer is 15, or Sum/Difference is 15 - Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.


// 46. Check if Only One Integer is Multiple of 7 or 11 - Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.


// 47. Check if Integer is in Range 40?10,000 - Write a JavaScript program to check whether a given number exists in the range 40..10000.
// For example 40 presents in 40 and 4000


// 48. Reverse a Given String - Write a JavaScript program to reverse a given string.


// 49. Replace Each Character with Next Alphabet Letter - Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.


// 50. Capitalize First Letter of Each Word in String - Write a JavaScript program to capitalize the first letter of each word in a given string.


// 51. Transform Number to Hours and Minutes - Write a JavaScript application that transforms a provided numerical value into hours and minutes.


// 52. Sort Letters Alphabetically in String - Write a JavaScript program to convert letters of a given string alphabetically.


// 53. Check 'a' and 'b' Separated by Exactly 3 Places - Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.


// 54. Count Vowels in String - Write a JavaScript program to count the number of vowels in a given string.


// 55. Check Equal Number of 'p's and 't's - Write a JavaScript program to check whether a given string contains an equal number of p's and t's.


// 56. Divide Numbers and Format with Commas - Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.


// 57. Create String of Specified Copies - Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.


// 58. Four Copies of Last 3 Characters - Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.


// 59. Extract First Half of Even-Length String - Write a JavaScript program to extract the first half of a even string.


// 60. Remove First and Last Characters in String - Write a JavaScript program to create a new string without the first and last characters of a given string.


// 61. Concatenate Two Strings Without First Character - Write a JavaScript program to concatenate two strings except for their first character.


// 62. Move Last 3 Characters to Start of String - Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.


// 63. Extract Middle 3 Characters from Odd-Length String - Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.


// 64. Concatenate Strings with Matching Length - Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.


// 65. Check if String Ends with 'Script' - Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.


// 66. Return City Name if Starts with 'Los' or 'New' - Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.


// 67. Remove First/Last 'P' Characters in String - Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.


// 68. Use First and Last 'n' Characters from String - Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.


// 69. Sum of 3 Elements in Array (Length 3) - Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.  
