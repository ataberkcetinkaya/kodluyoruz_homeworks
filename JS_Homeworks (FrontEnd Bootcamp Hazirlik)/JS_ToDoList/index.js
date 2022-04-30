let taskInput = document.querySelector('#task') //input part
let confirmButton = document.querySelector('#liveToastBtn') //span w class button
let theList = document.querySelector('#list') //ul > li


window.onload = () => {
    strg = localStorage.getItem("todos")
    if(strg) {
        let liDOM = document.createElement('li')
        liDOM.innerHTML = (`${strg} <button onclick='clearItem()' type="button" class="float-end btn btn-danger">Sil</button>`)
        theList.append(liDOM)
    } else {
        console.log("")
    }
};


//TASK EKLEME
confirmButton.addEventListener('click', taskHandler)

function taskHandler(e) {
    e.preventDefault()
    
    const ERROR = document.querySelector('.error1')

    if(taskInput.value) {
        addItem(`${taskInput.value} <button onclick='clearItem()' type="button" class="float-end btn btn-danger">Sil</button>`)
        taskInput.value = ""
    } else if(taskInput.value.length === 0) {
        ERROR.innerHTML = "Boş Bırakılamaz"
    }
}


const addItem = (input) => {
    let liDOM = document.createElement('li')
   
    liDOM.innerHTML = input

    theList.append(liDOM)
   
    localStorage.setItem("todos", liDOM.innerText)
}
//TASK EKLEME


//TASK TAMAMLANDI
let checkList = document.querySelector('ul')
checkList.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'LI') {
        ev.target.style.backgroundColor = 'green';
        ev.target.style.color = 'white';
    }
});
//TASK TAMAMLANDI

//TASK SILME
function clearItem() {
    event.currentTarget.parentElement.remove();
    localStorage.getItem("todos")
    localStorage.removeItem("todos")
    checkList--;
}
//TASK SILME