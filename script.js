// All inputs added ------------------------
const answerKey = document.getElementById('inputsAnswerBtn');
const delKey = document.getElementById('bottonDel');
const resetBtn = document.getElementById('inputsReset');
const resultBox = document.getElementById('resultBox');
let expression = '';
let input = '';
const buttons = [  
    {id: 'input9',  value: '9'},
    {id:  'input8', value: '8'},
    {id : 'input7', value: '7'},
    {id : 'input6', value: '6'},
    {id : 'input5', value: '5'},
    {id : 'input4', value: '4'},
    {id : 'input3', value: '3'},
    {id : 'input2', value: '2'},
    {id : 'input1', value: '1'},
    {id : 'input0', value: '0'},
]
const operators = [
    {id: 'bottonPlus', value:  '+' },
    {id: 'bottonMinus', value: '-' },
    {id: 'bottonMulti', value: '*' },
    {id: 'inputDivide', value: '%' },
]

buttons.forEach(button => {
    document.getElementById(button.id).addEventListener('click', () => {
        input += button.value;
        resultBox.innerText = input;
        console.log(input);
    })
})
operators.forEach(op => {
    document.getElementById(op.id).addEventListener('click', () => {
        if (input && !'+-*/%'.includes(input.slice(-1))) {
         input += op.value;
        resultBox.innerText = input;
         console.log(input);
        }
    }
)})
resetBtn.addEventListener('click', ()=> {
    input = ''
    resultBox.innerText = '';
    console.log("cleared");
})
delKey.addEventListener('click', () => {
    input = input.slice(0, -1);
    console.log(input);
})
answerKey.addEventListener('click', () => {
    try {
        const result = Function('"use strict"; return (' + input + ')')();
        resultBox.innerText = result;
        input = '';
    } catch {
        resultBox.innerText = 'ERORR';
        input = '';
    }
});
resultBox.style.color = 'orange';
resultBox.style.justifyContent = 'center';
resultBox.style.alignItems = 'center';
resultBox.style.fontSize = '50px';
resultBox.style.whiteSpace = 'nowrap';
resultBox.style.overflow = 'hidden';
resultBox.style.display = 'flex';
resultBox.style.boxSizing = 'border-box';


