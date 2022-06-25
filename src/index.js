
const init = () => {

const inputForm = document.querySelector('form');
inputForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const input = document.querySelector('textarea#comment')
    console.log(input.value)
})


}
document.addEventListener('DOMContentLoaded', init)


