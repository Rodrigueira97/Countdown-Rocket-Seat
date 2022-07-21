const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
// colocar as divs dentro de uma variavel

const newYears = "21 Nov 2022 07:00:00 GMT-0300";
// colocar a data futura qua vc quer dentro de uma variavel



// Criar uma função para calcular os dias que faltam
function countdown() {
    const newYearsDate = new Date(newYears);//colocar a data futura dentro da função
    const currentDate = new Date();//colocar a data atual dentrod e uma variavel

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    //calcular o valor do futuro menos o dia de hoje e dividir pra mil pra pegar o segundos

    //calcular os dias , horas, minutos, segundos e colocar dentro de outra variavel
    const day = Math.floor(totalSeconds / 3600 / 24);
    const hour = Math.floor(totalSeconds / 3600) % 24; 
    const minute = Math.floor(totalSeconds / 60) % 60;
    const second = Math.floor(totalSeconds) % 60;


    //usar a variavel para jogar os daddos da variavel dentro do html
    //usando o innerHTML
    days.innerHTML = day +" :";
    hours.innerHTML = formatTime(hour) +' :';
    minutes.innerHTML = formatTime(minute) + ' :';
    seconds.innerHTML = formatTime(second)

}


//criar uma função e jogar os dados dentro dessa função 
function formatTime(time) {
    return time < 10 ? `0${time}` : time ;
}


countdown();

//Comando para fazer a contagem regressiva
setInterval(countdown, 1000);