const validaGordura = (gordura) => {
    if (gordura < 0 || gordura > 100 || gordura.length == 0) {
        return false;
    }
    return true;
}

const validaNome = (nome) => {
    if (nome.length == 0){
        return false;
    }
    return true;
}

const validaPeso = (peso) => {
    if (peso < 0 || peso.length == 0) {
        return false;
        
    }
    return true;
}

const validaAltura = (altura) => {
    if (altura < 0 || altura.length == 0){
        return false;
    }
    return true;
}

const calculaImc = (peso, altura) => {
    const imc = peso / (altura * altura);
    
    return imc.toFixed(2);
};

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

for (i=0; i<pacientes.length; i++) {

    let paciente = pacientes[i];
    let tdPeso = paciente.querySelector(".info-peso")

    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector('.info-altura')
    let altura = tdAltura.textContent

    let tdImc = paciente.querySelector('.info-imc')

    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);

    if (!pesoValido) {
        tdImc.textContent = "Peso invalido";
        // tdImc.style.background = "red"
        // tdImc.style.color = "white"
        paciente.classList.add("paciente-invalido")
        pesoValido = false;
        
    }
    else if (!alturaValida){
        tdImc.textContent = "Altura invalida"
        // tdImc.style.background = "red"
        // tdImc.style.color = "white"
        paciente.classList.add("paciente-invalido")
        alturaValida = false;
    }

    if (pesoValido && alturaValida) {

        tdImc.textContent = calculaImc(peso, altura);
    } 

    
}

titulo.addEventListener('click', () => {
    alert("Olá eu fui clicado, função anonima");
});

