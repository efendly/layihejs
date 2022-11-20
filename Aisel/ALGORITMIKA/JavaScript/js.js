const button=document.querySelector('button');
const input=document.querySelector('.input');
const div=document.querySelector('.text');
button.addEventListener('click',()=>{
    const text=input.value;
    div.innerHTML+=text; 
    input.value='';
})

    




