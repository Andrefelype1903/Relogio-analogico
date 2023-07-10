
// seletores

// seletore relogio analogico
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const diaAtualizado = document.querySelector('.dia');
const mesAtlualizado = document.querySelector('.mes');
const anoAtualizado = document.querySelector('.ano');
const diaSemana = document.querySelector('.semana');
const relogioAnalogico = document.querySelector('.clock');

// seletores dos numeros
const numero1 = document.querySelector('.number-1');
const numero2 = document.querySelector('.number-2');
const numero3 = document.querySelector('.number-3');
const numero4 = document.querySelector('.number-4');
const numero5 = document.querySelector('.number-5');
const numero6 = document.querySelector('.number-6');
const numero7 = document.querySelector('.number-7');
const numero8 = document.querySelector('.number-8');
const numero9 = document.querySelector('.number-9');
const numero10 = document.querySelector('.number-10');
const numero11 = document.querySelector('.number-11');
const numero12 = document.querySelector('.number-12');


// seletores relógio digital
const horadigital = document.querySelector('.hora_digital');
const minutodigital = document.querySelector('.minuto_digital');
const segundodigital = document.querySelector('.segundo_digital');

// seletores relógio digital mini
const horadigitalMini = document.querySelector('.hora_digital--mini');
const minutodigitalMini = document.querySelector('.minuto_digital--mini');
const segundodigitalMini = document.querySelector('.segundo_digital--mini');


const relogioDigital = document.querySelector('.digital');
const relogioDigitalMini = document.querySelector('.digital-mini');
const botaoDeTroca = document.querySelector('.botao_troca');




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

    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;

    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;

    hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`;

}

horaInicial()


setInterval( () => {

  const {seconds, minutes, hours,} = getTime();

  secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;

  minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;

  hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`;

} , 1000);


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
    anoAtualizado.textContent = year;


}

setInterval( () => {

  const {seconds, minutes, hours,} = getTime()

  horadigital.textContent = hours + ':';
  minutodigital.textContent = minutes + ':';
  segundodigital.textContent = seconds;

  horadigitalMini.textContent = hours + ':';
  minutodigitalMini.textContent = minutes + ':';
  segundodigitalMini.textContent = seconds;
  

} , 1000)

dataAtualizada();

const algRomanos = () => {

  numero1.textContent = 'I';
  numero2.textContent = 'II';
  numero3.textContent = 'III';
  numero4.textContent = 'IV';
  numero5.textContent = 'V';
  numero6.textContent = 'VI';
  numero7.textContent = 'VII';
  numero8.textContent = 'VIII';
  numero9.textContent = 'IX';
  numero10.textContent = 'X';
  numero11.textContent = 'XI';
  numero12.textContent = 'XII';
}

const algNormais = () => {
  numero1.textContent = '1';
  numero2.textContent = '2';
  numero3.textContent = '3';
  numero4.textContent = '4';
  numero5.textContent = '5';
  numero6.textContent = '6';
  numero7.textContent = '7';
  numero8.textContent = '8';
  numero9.textContent = '9';
  numero10.textContent = '10';
  numero11.textContent = '11';
  numero12.textContent = '12';
}

const estilo1 = () => {
  algNormais();
  relogioDigital.style.display = 'none';
  relogioDigitalMini.style.display = 'none';
  relogioAnalogico.style.background = '#f0f8ff';
}

const estilo2 = () => {
  algRomanos();
}

const estilo3 = () => {
  relogioDigital.style.display = 'flex';
}

const estilo4 = () => {
  algNormais()
  relogioDigital.style.display = 'none';
  relogioDigitalMini.style.display = 'flex';
}

const estilo5 = () => {
  algNormais();
  relogioAnalogico.style.backgroundImage = 'url(../imagem/fundo1.jpg)'
  relogioDigitalMini.style.display = 'none';
  
}

const estilo6 = () => {
  algNormais();
  relogioAnalogico.style.backgroundImage = 'url(../imagem/fundo2.jpg)'
  relogioDigitalMini.style.display = 'none';
  
}

const estilo7 = () => {
  algNormais();
  relogioAnalogico.style.backgroundImage = 'url(../imagem/fundo3.jpg)'
  relogioDigitalMini.style.display = 'none';
  
}

const estilo8 = () => {
  algNormais();
  relogioAnalogico.style.backgroundImage = 'url(../imagem/fundo4.jpg)'
  relogioDigitalMini.style.display = 'none';
  
}

const estilo9 = () => {
  algNormais();
  relogioAnalogico.style.backgroundImage = 'url(../imagem/fundo5.jpg)'
  relogioDigitalMini.style.display = 'none';
  
}

const estilo10 = () => {
  algNormais();
  relogioAnalogico.style.backgroundImage = 'url(../imagem/fundo6.png)'
  relogioAnalogico.style.backgroundPosition = '30%'
  // relogioAnalogico.style.backgroundSize = 'cover'
  relogioDigitalMini.style.display = 'none';
  
}

const estilo11 = () => {
  algNormais();
  relogioAnalogico.style.backgroundImage = 'url(../imagem/fundo7.jpg)'
  relogioDigitalMini.style.display = 'none';
  
}

const estilo12 = () => {
  algNormais();
  relogioAnalogico.style.backgroundImage = 'url(../imagem/fundo8.jpg)'
  relogioDigitalMini.style.display = 'none';
  
}





let atual = 1

botaoDeTroca.addEventListener('click', () => {

  if(atual === 1) {
    estilo2();
    atual++;

  } else if(atual === 2) {
    estilo3();
    atual++;
    
  } else if (atual === 3) {
    estilo4();
    atual++;

  } else if(atual === 4) {
    estilo5();
    atual++;

  } else if(atual === 5) {
    estilo6();
    atual++;

  } else if(atual === 6) {
    estilo7();
    atual++;

  } else if(atual === 7) {
    estilo8();
    atual++;

  } else if(atual === 8) {
    estilo9();
    atual++;

  } else if(atual === 9) {
    estilo10();
    atual++;

  } else if(atual === 10) {
    estilo11();
    atual++;

  } else if(atual === 11) {
    estilo12();
    atual++;

  } else if(atual === 12) {
    estilo1();
    atual = 1;

  } 
})


