var main = document.getElementById("main");
var inp = document.getElementById("inp");
function add(){
    console.log(inp.value);
    if(inp.value == ""){
        alert("Please Enter Todo");
    }
    else{
    var li = document.createElement('li');
    var liText = document.createTextNode(inp.value);
    li.appendChild(liText);
    var editBtn = document.createElement("BUTTON");
    var editBtnText = document.createTextNode("EDIT TODO");
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute("onclick","editTodo(this)");
    li.appendChild(editBtn);


    // creating delete button
    var delBtn = document.createElement('BUTTON');
    var delBtnText = document.createTextNode('Delete');
    delBtn.appendChild(delBtnText);
    delBtn.setAttribute("onclick","delTodo(this)")
    li.appendChild(delBtn);
    main.appendChild(li);
    inp.value = "";
    }
    

}
function editTodo(element){
    var newValue = prompt("Enter Updated Value:",element.parentNode.firstChild.nodeValue);
    console.log(element.parentNode.firstChild.nodeValue);
    element.parentNode.firstChild.nodeValue = newValue;
}
function delTodo(element){
    element.parentNode.remove();
    console.log()
}
function delAll(){
    main.innerHTML = "";
}