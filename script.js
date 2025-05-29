const botoes = document.querySelectorAll(".botao");
const contadores = document.querySelectorAll(".contador");

const objetivos = [
    new Date("2025-07-01T00:00:00")
];
function calculaTempo(tempoObjetivo) {
    const tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    if (tempoFinal < 0) tempoFinal = 0;
    const segundos = Math.floor(tempoFinal / 1000) % 60;
    const minutos = Math.floor(tempoFinal / 1000 / 60) % 60;
    const horas = Math.floor(tempoFinal / 1000 / 60 / 60) % 24;
    const dias = Math.floor(tempoFinal / 1000 / 60 / 60 / 24);
    return [dias, horas, minutos, segundos];
}
function atualizaCronometro() {
    contadores.forEach((contador, i) => {
        const [dias, horas, minutos, segundos] = calculaTempo(objetivos[i]);
        document.getElementById(`dias${i}`).textContent = dias;
        document.getElementById(`horas${i}`).textContent = horas;
        document.getElementById(`min${i}`).textContent = minutos;
        document.getElementById(`seg${i}`).textContent = segundos;
    });
}
function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}
comecaCronometro();