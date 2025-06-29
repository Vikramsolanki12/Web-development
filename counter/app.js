let increase = document.querySelector('.increase-button');
let decrease = document.querySelector('.decrease-button');
let counter = document.querySelector('.display');
let reset = document.getElementById('reset');
let summation = document.querySelector('.sum');
let save_btn = document.querySelector('#save');
let saved_data = document.querySelector('.data');
let sum=0;
let count = 0;
let savedList=[];

increase.addEventListener('click',()=>{
    count++;
    counter.textContent=count;
})
decrease.addEventListener('click',()=>{
    if(count>0){
      count--;
      counter.textContent=count;
    }
})

reset.addEventListener('click', () =>{
    count=0;
    counter.textContent='0';
    sum=0;
    summation.textContent='sum:0';
    saved_data.textContent='People:0';
    savedList=null;
})

save_btn.addEventListener('click',()=>{
    sum=sum+count;
    summation.textContent=`sum:${sum}`;
    savedList.push(count);
    saved_data.textContent=`People:${savedList.join('-')}`;
    
})

