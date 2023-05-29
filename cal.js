let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'RESET') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            let result = eval(screen.value);
            screen.value = screenValue = result;
        }
        else if( buttonText == 'DEL'){
            if(screen.value == 'undefined'){
                screen.value = '';
            }
            screenValue = screenValue.slice(0,-1);
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
        if(buttonText == 'Shapes'){
            screen.value = '';
            
        }

    })
}

var input = document.getElementById("screen");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("equals").click();
  }
});
