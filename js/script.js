
// seletores

const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.minute-hand')
const secondHand = document.querySelector('.second-hand');
const diaAtualizado = document.querySelector('.dia');
const mesAtlualizado = document.querySelector('.mes');
const anoAtualizado = document.querySelector('.ano');
const diaSemana = document.querySelector('.semana')

const horadigital = document.querySelector('.hora_digital')
const minutodigital = document.querySelector('.minuto_digital')
const segundodigital = document.querySelector('.segundo_digital')
const relogioDigital = document.querySelector('.digital')
const botaoDeTroca = document.querySelector('.botao_troca')




// Código da hora
const getTime = () => {
    const date = new Date();

    return {
        hours: date.getHours().toString().padStart(2, '0'),
        minutes: date.getMinutes().toString().padStart(2, '0'),
        seconds: date.getSeconds().toString().padStart(2, '0'),
    }
}

const horaInicial = () => {
    const {seconds, minutes, hours,} = getTime();

    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`

    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`

    hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`

}

horaInicial()


setInterval( () => {

  const {seconds, minutes, hours,} = getTime()

  secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`

  minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`

  hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`

} , 1000)


// Código do dia da semana

var dataAtual = new Date();

var diaDaSemana = dataAtual.getDay();

switch (diaDaSemana) {
    case 0:
      diaSemana.textContent = "Domingo";
      break;
    case 1:
        diaSemana.textContent = "Segunda-feira";
      break;
    case 2:
        diaSemana.textContent = "Terça-feira";
      break;
    case 3:
      diaSemana.textContent = "Quarta-feira";
      break;
    case 4:
        diaSemana.textContent = "Quinta-feira";
      break;
    case 5:
        diaSemana.textContent = "Sexta-feira";
      break;
    case 6:
        diaSemana.textContent = "Sábado";
      break;
  }

// Código da data

const getDay = () => {
    const dateToday = new Date();

    return {
        day: dateToday.getDate().toString().padStart(2, '0'),
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

  horadigital.textContent = hours + ':';
  minutodigital.textContent = minutes + ':';
  segundodigital.textContent = seconds;
  

} , 1000)

dataAtualizada();

let atual = true

botaoDeTroca.addEventListener('click', () => {

  if(atual) {

    relogioDigital.style.display = 'flex'
    atual = false

  } else {

    relogioDigital.style.display = 'none'
    atual = true
    
  }
})


