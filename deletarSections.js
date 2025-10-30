//Função para deletar uma section específica//

function deletarSecao(num){
    document.getElementById('section-' + num).remove();
}

deletarSecao(1);

//Funcáo para deletar várias sections de uma vez//

function deletarSecoes(numbers){
    numbers.forEach(num => {
        const el = document.getElementById('section-' + num);
        if (el) el.remove();
    });
}

deletarSecoes([2, 4, 5]);