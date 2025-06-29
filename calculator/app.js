let buttonx = document.querySelectorAll('.button');
let display = document.getElementById('screen');
let reboot = document.getElementById('button-1');
let sum = document.getElementById('plus');
let data = [];
let curr = '0'
let prev = null;

function number(num){
    if(num === '0'|| num===Infinity || num === -Infinity){
        curr = num;
    }else{
        curr= curr+num;
    }
    display.textContent = curr;

}


function sumNum(){
    if(prev ===null){
        prev = curr;
    }else{
        let result;
        const prevIn =parseInt(prev);
        const currIn = parseInt(curr);
        if(!NaN(prevIn) || !NaN(currIn)) return;
        result = prevIn+currIn;
        currIn = String(result);
        prevIn = null;
        display.textContent = prevIn
        curr='0';
    }
}


reboot.addEventListener('click',()=>{
    curr='0';
    display.textContent=curr;
});


buttonx.forEach((button)=>{
    button.addEventListener('click',()=>{
            let y = button.textContent;
            number(y);

    });
});
sum.addEventListener('click',sumNum());
