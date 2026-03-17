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


let secondNumber = '';
let operator = null;
let firstNumber = '';

let showTxt = '';   

let generateNumbers = () =>{
    for (let i = 0; i <= 9; i++){
        let button = document.createElement('button')
        button.id = i;
        button.textContent = i;
        btnSection.append(button);
        
        button.addEventListener('click', (event) =>{
            if (operator === null){
                firstNumber += event.target.id;
            } else {
                secondNumber += event.target.id;
            }
            updateScreen(firstNumber, operator, secondNumber);
            
            console.log(firstNumber)
            console.log(secondNumber)
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
        let opButton  = document.createElement('button')
        opButton.className = 'operator'
        opButton.id = index;
        opButton.textContent = index;
        operations.append(opButton);
        
        opButton.addEventListener('click', () => {
            if(index === '='){
                firstNumber = operation(firstNumber, operator, secondNumber);
                operator = '';
                secondNumber = '';
            }else {
            operator = index;
            }

            
            console.log('operador global:', operator);
            updateScreen(firstNumber, operator, secondNumber);
           } 
        ) 
    });
}
screen.append(showTxt)

let updateScreen = (firstNumber, operator, secondNumber) =>{
    if (operator == null){
        screen.textContent = firstNumber;
    } else if ( secondNumber == ''){
        screen.textContent = firstNumber + ' ' + operator;
    } else {
        screen.textContent = firstNumber + ' ' + operator + ' ' + secondNumber;
    }
}

let generateButtons = () => {
    
    generateNumbers();
    generateOperators();
    
}

generateButtons();

let operation = (firstNumber, operator, secondNumber) => {
    switch (operator){
        case '-':
            return firstNumber - secondNumber;
        case '+':
            return firstNumber + secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
        default:
            return firstNumber;
    }
}



// LOGICA:

// --GERAR BOTOES

// --ESCOLHER QUANTOS NUMEROS QUISER
// --SE APERTAR EM OPERADOR, SALVAR OPERADOR APERTADO E ENTAO DEIXAR SELECIONAR MAIS BOTOES
// --CASO OPERADOR = SEJA SELECIONADO, ACABAR A OPERAÇÂO 
