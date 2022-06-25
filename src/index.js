
const init = () => {

const inputForm = document.querySelector('form');
inputForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const input = document.querySelector('textarea#comment')
    console.log(input.value);
    fetch(`http://localhost:3000/${input.value}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
})

})


}
document.addEventListener('DOMContentLoaded', init)


function tokenize(text){
    return text 
                .toLowerCase()
                .split("");

}

function deleteUselessChars(word){
    return word.replace(/[^a-zA-Z\s]+/g, '');
}