const form=document.querySelector('form');

//         THIS USECASE WILL GIVE YOU EMPTY VALUE
// 

form.addEventListener("submit",(e)=>{
e.preventDefault()

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
const result=document.querySelector('#result')

if(height==='' || height<0 || isNaN(height)){
result.innerHTML="enter a valid number"
}
const total=weight*height
result.innerHTML=total
})