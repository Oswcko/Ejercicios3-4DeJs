const lista = document.getElementById('lista');
const element0 = document.getElementById('element0');
const elemnt1 = document.getElementById('element1');
const element2 = document.getElementById('element2');

const btn0 = document.getElementById('btn-element0');
const btn1 = document.getElementById('btn-element1');
const btn2 = document.getElementById('btn-element2');
const btnAgregar = document.getElementById('btnAgregar');

btn0.addEventListener('click', ()=>{
    element0.remove()
})

btn1.addEventListener('click', () =>{
    element1.remove()
})

btn2.addEventListener('click', () =>{
    element2.remove()
})

btnAgregar.addEventListener('click', ()=>{
    
})

function eliminar(){
    if(btn0 = btn0.addEventListener('click')){
        element0.remove();
    }
    else if(btn1 = btn1.addEventListener('click')){
        console.log('click')
    }
    else if(btn2 = btn2.addEventListener('click')){
        element2.remove();
    }
}