let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue='';
for(const item of buttons){
    item.addEventListener('click',(e)=>{
        butttonText = e.target.innerText;
        // console.log(butttonText)
        // console.log(item)
        if(butttonText == 'x'){
            butttonText = '*';
            screenValue += butttonText;
            screen.value = screenValue;
        }
        else if(butttonText=='C'){
            screenValue='';
            screen.value = screenValue;
 
        }
        else if(butttonText=='='){
            screen.value=eval(screenValue);
        }
        else{
            screenValue += butttonText;
            screen.value =screenValue
        }
    })
}



