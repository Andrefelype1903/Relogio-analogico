
const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.minute-hand')
const secondHand = document.querySelector('.second-hand');

const diaAtualizado = document.querySelector('.dia');

const mesAtlualizado = document.querySelector('.mes');

const anoAtualizado = document.querySelector('.ano')




const getTime = () => {
    const date = new Date();

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
       
    }
    
}

const getDay = () => {
    const dateToday = new Date();
    console.log(dateToday.getUTCDay())

    return {
        day: dateToday.getDate(),
        month: dateToday.getMonth() + 1,
        year: dateToday.getFullYear(),
    }

}

const dataAtualizada = () => {

    const{day, month, year} = getDay()

    diaAtualizado.textContent = day;
    mesAtlualizado.textContent = month;
    anoAtualizado.textContent = year


}

setInterval( () => {

    const {seconds, minutes, hours,} = getTime()

    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`

    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`

    hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`

} , 1000)


dataAtualizada()