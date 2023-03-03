let mainDiv = document.getElementById("main-div");
    let listArr ;
    let savedTodo=JSON.parse(localStorage.getItem("restore"))
    if(Array.isArray(savedTodo)){
        listArr=savedTodo;
    }else{
        listArr = [];
    };
    render()

    //on click insert the todo to div
        
    

//Function to add the todos to an ARRAY object:
    function addToListArr(txtBoxVal,assignedDate) {
        let id=""+new Date().getTime();
            listArr.push({
                text: txtBoxVal,
                date: assignedDate,
                id:id
            });
            saveTodoList()
        };
        //  
function saveTodoList(){
    localStorage.setItem('restore',JSON.stringify(listArr));
};



function insert(){
    let txtBox=document.getElementById("txt-box");
    let txtBoxVal = txtBox.value;
    let dateBox = document.getElementById("date-box");
    let assignedDate = dateBox.value;
    addToListArr(txtBoxVal, assignedDate);
    render();
};



function removeTodo(deleteId){
    listArr=listArr.filter((eachId)=>{
        if(eachId.id===deleteId){
            return false;
        }else{
            return true;
        };
    })
    saveTodoList()
}

    function deleteTodo(event){
        let deleteBtn=event.target;
        const deleteId=deleteBtn.id
        removeTodo(deleteId)
        render()
    };


function render() {
    mainDiv.innerHTML = "";
    listArr.forEach((addToList) => {
        let newTodo = document.createElement("li");
        newTodo.innerText = addToList.text;
        let deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Remove"
        deleteBtn.setAttribute('class', 'btn1')
        deleteBtn.id = addToList.id
        deleteBtn.onclick = deleteTodo;
        mainDiv.appendChild(newTodo);
        newTodo.append(`  - ( ${addToList.date} )`);
        newTodo.append(deleteBtn);
    });
}