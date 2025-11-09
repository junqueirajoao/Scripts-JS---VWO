//Funçao que seleciona uma elemnto e adiciona um novo abaixo dele
function adicionarSection(targetSelector, content = ''){
        const target = document.querySelector(targetSelector)

        if (!target) {
            console.error('Elemento não encontrado', targetSelector)
            return null;
        }

        const novaSection = document.createElement('div');
        novaSection.innerHTML = content;
        target.parentNode.insertBefore(novaSection, target.nextSibling)

        return novaSection;
    }