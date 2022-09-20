
const body = document.querySelector('body');

// Cria a div main-container
const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
body.appendChild(mainContainer);

const header = document.createElement('header');
header.appendChild(titulo);
mainContainer.appendChild(header);

// Cria a div input-container
const inputContainer = document.createElement('div');
inputContainer.classList.add('input-container');
mainContainer.appendChild(inputContainer);

const inputForm = document.createElement('form');
inputForm.setAttribute('id', 'input-form');
inputContainer.appendChild(inputForm);

const inputText = document.createElement('input');
inputText.setAttribute('type', 'text');
inputText.setAttribute('id', 'input-text');
inputText.setAttribute('placeholder', 'Nova tarefa');
inputForm.appendChild(inputText);

const newTaskBtn = document.createElement('button');
newTaskBtn.setAttribute('type', 'submit');
newTaskBtn.innerText = 'Criar nova tarefa';
inputForm.appendChild(newTaskBtn);

// Cria a div list-container
const listContainer = document.createElement('div');
listContainer.setAttribute('id', 'list-container');
mainContainer.appendChild(listContainer);

function saveTodo(text) {
    const tarefa = document.createElement('div');
    tarefa.classList.add('tarefa');

    const tituloTarefa = document.createElement('h3');
    tituloTarefa.innerText = text;
    tarefa.appendChild(tituloTarefa);

    const finalizarTarefaBtn = document.createElement('button');
    finalizarTarefaBtn.classList.add('tarefa-btn');
    finalizarTarefaBtn.classList.add('finalizar-tarefa');
    finalizarTarefaBtn.innerHTML = 'Finalizar';
    tarefa.appendChild(finalizarTarefaBtn);

    const removerTarefaBtn = document.createElement('button');
    removerTarefaBtn.classList.add('tarefa-btn');
    removerTarefaBtn.classList.add('remover-tarefa');
    removerTarefaBtn.innerHTML = 'Remover';
    tarefa.appendChild(removerTarefaBtn);

    listContainer.appendChild(tarefa);
}

inputForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const inputValue = inputText.value;
    if (inputValue) {
        saveTodo(inputValue);
    }
});

document.addEventListener('click', (ev) => {
    const el = ev.target;
    const parentEl = el.closest('div');
    if (el.classList.contains('finalizar-tarefa')) {
        parentEl.classList.toggle('tarefa-finalizada');
    }
    else if (el.classList.contains('remover-tarefa')) {
        parentEl.remove();
    }
});