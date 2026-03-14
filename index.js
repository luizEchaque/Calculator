let container = document.getElementById('Container');
let display = document.createElement('div');
let screen = document.createElement('div');
screen.id = 'screen';
display.id = 'display';
display.append(screen);
let btnSubSection = document.createElement('div');
btnSubSection.id = 'btnSubSection';

let btnSection = document.createElement('div');
let operations = document.createElement('div');
operations.id = 'operations';

btnSection.id = 'btnSection';
container.append(display);
container.append(btnSubSection);
btnSubSection.append(btnSection);
btnSubSection.append(operations);


let currentNumber = '';
let operator = null;
let firstNumber = null;

let showTxt = '';   

let generateNumbers = () =>{
    for (let i = 0; i <= 9; i++){
        let button = document.createElement('button')
        button.id = i;
        button.textContent = i;
        btnSection.append(button);
        
        button.addEventListener('click', (event) =>{
                
            showTxt.push(event.target.id)
            screen.textContent = showTxt.join('');
            let currentNumber = showTxt.join('');
            console.log(currentNumber);
        })
    }
}

let generateOperators = () => {
    let possibleOperations = [
        '-',
        '+',
        '*',
        '/',
        '='
    ];

    possibleOperations.forEach((index) => {
        let operator = document.createElement('button')
        operator.className = 'operator'
        operator.id = index;
        operator.textContent = index;
        operations.append(operator);
        
        operator.addEventListener('click', (operator) => {
           if (index === '='){
                currentNumber = 0;
                console.log(showTxt)
           }
           }
        )
    });
}
screen.append(showTxt)



let generateButtons = () => {
    
    generateNumbers();
    generateOperators();
    
}

generateButtons();

let operation = (a, op, b) => {
    switch (op){
        case '-':
            break;
        case '+':
            break;
        case '*':
            break;
        case '/':
            break;
        case '=':
            break;
        default:

    }
}



// LOGICA:

// --GERAR BOTOES

// --ESCOLHER QUANTOS NUMEROS QUISER
// --SE APERTAR EM OPERADOR, SALVAR OPERADOR APERTADO E ENTAO DEIXAR SELECIONAR MAIS BOTOES
// --CASO OPERADOR = SEJA SELECIONADO, ACABAR A OPERAÇÂO 
