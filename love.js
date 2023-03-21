function success(id,text){
    const msg=document.getElementById(id);
    msg.innerText=`I Love You 💘 ${text}`;
}

document.getElementById('yes').addEventListener('click',function(){
    success('msg','');
})

function loveLetter(){
    success('msg','too');
}