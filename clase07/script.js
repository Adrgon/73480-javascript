//const container = document.querySelector('.container');

/* container.addEventListener('click', (evt)=>{
    console.log("Click detectado en el container (bubbling phase): ", evt.target, '->', evt.currentTarget.tagName);
    if (evt.target.tagName === 'BUTTON') {
        console.log("Click detectado en un botón: ", evt.target);
        const buttonValue = document.getElementById('button-value');
        buttonValue.textContent = evt.target.textContent;
    }
}) */


    const addItemButton = document.querySelector("#addItemButton");
    const myList = document.querySelector("#myList");
    const myInput = document.querySelector("#myInput");

    addItemButton.addEventListener('click', ()=>{
        //const newItemText = prompt("Ingrese un nuevo item para la lista")
        if(myInput.value){
            const newListItem = document.createElement("li")
            newListItem.textContent = myInput.value;
            myList.appendChild(newListItem);
            myInput.value = "";
            myInput.focus();
        }
    })
