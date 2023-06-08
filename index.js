const plus = document.querySelector(".incre");
const minus = document.querySelector(".decre");
const values = document.querySelector(".value");
const rest =document.querySelector(".reset")


let count = 0;

plus.addEventListener("click", ()=>{
    count++;
    values.textContent= count;

    if(count>0){
        values.style.color='green';
    }

})

minus.addEventListener("click", ()=>{
    count--;
    values.textContent= count;

    if(count<0){
        values.style.color='red';
    }

})

rest.addEventListener('click',()=>{
    values.textContent=0;
    values.style.color="black"
    
})
