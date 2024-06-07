// Get references to the code textarea and output div
const codeEditor = document.getElementById('code');
const outputPanel = document.getElementById('output');
const runButton = document.getElementById('run-button');
const clearButton = document.getElementById('clear-button');

codeEditor.className += 'anguage-javascript';


function runCode() {
  outputPanel.innerHTML = ''; 
  try {
    
    const inputCode = codeEditor.value;
    let result = '';
    
    
    const consoleLog = console.log; 
    console.log = (message) => { 
      result += message + '\n'; 
    };
    eval(inputCode); 
    console.log = consoleLog; 
    
    outputPanel.innerText = result || 'No output generated.';
  } catch (error) {
    outputPanel.innerText = 'Error:  ${error.message}';
  }
}

runButton.addEventListener('click', runCode);

clearButton.addEventListener('click', () => {
  codeEditor.value = '';
  outputPanel.innerText = '';
});

function adjustTextAreaHeight() {
  codeEditor.style.height = 'auto'; 
  
  const maxHeight = 300; 
  const newHeight = Math.min(codeEditor.scrollHeight, maxHeight);
  codeEditor.style.height = newHeight + 'px'; 
}
codeEditor.addEventListener('input', adjustTextAreaHeight);
runCode();