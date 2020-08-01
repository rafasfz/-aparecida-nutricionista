const botaosRemover = document.querySelectorAll(".btn-remover");
const pacientesTr = document.querySelectorAll('.paciente');

botaosRemover.forEach((botao, i) => {
    botao.addEventListener('click', () => {
        let confirma = confirm('Tem certeza que deseja remover o paciente ?');
        if (confirma) {
            pacientesTr[i].classList.add("fadeOut");
            setTimeout(() => {
                pacientesTr[i].remove();
            }, 250);

            
        } else {
            return;
        }
                
    });
});
