const validaPaciente = (paciente) => {
    
    let erros = [];

    const nomeValido = validaNome(paciente.nome);
    const pesoValido = validaPeso(paciente.peso);
    const alturaValida = validaAltura(paciente.altura);
    const gorduraValida = validaGordura(paciente.gordura);

    if(!nomeValido) {
        erros.push('Nome inválido');
    }
    if(!pesoValido) {
        erros.push('Peso inválido');
    }
    if(!alturaValida) {
        erros.push("Altura inválido");
    }
    if(!gorduraValida) {
        erros.push('Porcentagem de gordura inválida.')
    }

    return erros;
}

const obtemPacienteDoFormulario = (form) => {
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };

    return paciente;
}

const montaTd = (dado, classe) => {
    const td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

const montaTdBt = (classe, paciente) => {
    const bt = document.createElement("button");
    bt.textContent = 'X';
    bt.classList.add(classe);

    bt.addEventListener('click', () => {
        let confirma = confirm('Tem certeza que deseja remover o paciente ?');
        if (confirma) {
            paciente.classList.add("fadeOut");
            setTimeout(() => {
                paciente.remove();
            }, 250);
        } else {
            return;
        }
                
    });

    const td = document.createElement("td");
    td.appendChild(bt);

    return td;
    
}

const montaTr = (paciente) => {
    const pacienteTr = document.createElement('tr');
    
    const nomeTd = montaTd(paciente.nome, 'info-nome');
    const pesoTd = montaTd(paciente.peso, 'info-peso');
    const alturaTd = montaTd(paciente.altura, 'info-altura');
    const gorduraTd = montaTd(paciente.gordura, 'info-gordura');
    const imcTd = montaTd(paciente.imc, 'info-imc');
    const removerTd = montaTdBt('btn-remover', pacienteTr);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    pacienteTr.appendChild(removerTd);

    pacienteTr.classList.add('paciente');

    return pacienteTr;
}

const exibeMensagensDeErro = erros => {
    const ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    const adicionado = document.querySelector("#adicionado");
    adicionado.innerHTML = ""
    erros.forEach((erro) => {
        const li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

const botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', () => {
    event.preventDefault();

    const form = document.querySelector('#form-adiciona');

    // Extrai informação do formulario
    const paciente = obtemPacienteDoFormulario(form);
    
    // Cria Tr e Td
    // const pacienteTr = montaTr(paciente);

    const erros = validaPaciente(paciente);
    console.log(erros);
    const mensagemErro = document.querySelector("#mensagem-erro");

    if(erros.length > 0){
        exibeMensagensDeErro(erros);

        return;
    }


    // const tabelaPacientes = document.querySelector('#tabela-pacientes');
    // tabelaPacientes.appendChild(pacienteTr);
    adicionaPacienteNaTabela(paciente);
    const ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    const adicionado = document.querySelector("#adicionado");
    adicionado.innerHTML = "Paciente " + paciente.nome + " adicionado com sucesso.";

    form.reset();
    
})

const adicionaPacienteNaTabela = (paciente) => {
    const pacienteTr = montaTr(paciente);
    const tabelaPacientes = document.querySelector('#tabela-pacientes');
    tabelaPacientes.appendChild(pacienteTr);
};
