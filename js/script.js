
const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.minute-hand')
const secondHand = document.querySelector('.second-hand');

const day = document.querySelector('.dia')




const getTime = () => {
    const date = new Date();

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        day: date.getDay(),
        month: date.getMonth(),
        year: date.getFullYear(),
    };
}

setInterval( () => {

    const {seconds, minutes, hours,} = getTime()

    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`

    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`

    hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`

} , 1000)

const dataAtualizada = () => {

    const{day, month, year} = getTime()

}

dataAtualizada()