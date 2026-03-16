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
            currentNumber += event.target.id;
            updateScreen(firstNumber, operator, currentNumber);
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
            if (firstNumber === null) {
                firstNumber = Number(currentNumber);
            }
            if (index === '+'){
                firstNumber = currentNumber;
                currentNumber = '';
                console.log(firstNumber);
                operator = index;
                currentNumber(firstNumber, operator, currentNumber);
            }
           }
        )
    });
}
screen.append(showTxt)

let updateScreen = (firstNumber, operator, currentNumber) =>{
    if (operator == null){
        screen.textContent = firstNumber;
    } else if ( currentNumber == null){
        screen.textContent = firstNumber + ' ' + operator.target.id;
    } else {
        screen.textContent = firstNumber + ' ' + operator.target.id + ' ' + currentNumber;
    }
}

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
