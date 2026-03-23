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
    let possibleNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let miscs = [ 'C', '.'];
    
    possibleNumbers.forEach((number) => {
        let button = document.createElement('button')
        button.id = number;
        button.textContent = number;
        btnSection.append(button);
        
        button.addEventListener('click', (event) =>{
            if (operator === null){
               firstNumber += event.target.id;
            } else {
                secondNumber += event.target.id;
            }
            updateScreen(firstNumber, operator, secondNumber);
            
            typeof(firstNumber)
            typeof(secondNumber)
        })
    })

    miscs.forEach((misc)=>{
        let button = document.createElement('button')
        button.id = misc;
         button.classList.add('btn-clear');
        button.textContent = misc;
        btnSection.append(button);
        button.addEventListener('click', () =>{
            if (misc === 'C'){
                operator = null;
                secondNumber = '';
                firstNumber = '0';
                updateScreen(firstNumber, operator, secondNumber);  
            }if (misc === '.') {
                if (operator != null) {
                    if (!secondNumber.includes('.')) {
                        secondNumber += '.';
                    }
                } else {
                    if (!firstNumber.includes('.')) {
                        firstNumber += '.';
                        }
                    }
                updateScreen(firstNumber, operator, secondNumber);
            }
        })
    })
};

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
            if (index !== null && firstNumber === ''){
                operator = null;
                secondNumber = '';
                alert('RESULTADO INDEFINIDO')
            }
            if(index === '='){
                firstNumber = operation(firstNumber, operator, secondNumber);
                operator = null;
                secondNumber = '';
                if (firstNumber !== '' && operator !== null && secondNumber !== '') {
                    firstNumber = operation(firstNumber, operator, secondNumber);
                    operator = null;
                    secondNumber = '';
                }
            updateScreen(firstNumber, operator, secondNumber);
                return;
                
            }
             if (firstNumber !== '' && operator !== null && secondNumber !== '') {
                firstNumber = operation(firstNumber, operator, secondNumber);
                secondNumber = '';
            }
            operator = index;

            updateScreen(firstNumber, operator, secondNumber);  
        }) 
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
     firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

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
