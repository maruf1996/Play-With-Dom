let count=0;

const minus=document.getElementById("minusBtn");
minus.addEventListener('click',function(){
    count--;
    const counter=document.getElementById('counter');
    counter.innerText=count;
})

function plus(){
    count++;
    const counter=document.getElementById('counter');
    counter.innerText=count;
}