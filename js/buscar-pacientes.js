const botaoBuscar = document.querySelector('#buscar-pacientes');

botaoBuscar.addEventListener('click', () => {
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
    
    xhr.addEventListener("load", () => {
        if (xhr.status == 200){
            const erroAjax = document.querySelector('#erro-ajax');
            erroAjax.classList.add('invisivel');
            const resposta = xhr.responseText;
            const pacientes = JSON.parse(resposta);
            console.log(pacientes);
    
            pacientes.forEach((paciente) =>{
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            const erroAjax = document.querySelector('#erro-ajax');
            erroAjax.classList.remove('invisivel');
        }
    });

    xhr.send();
});