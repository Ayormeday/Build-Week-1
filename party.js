let shoppingList = [];
let todoList =[];
let partyList = [];
let addShoppingItemBtn = document.getElementById("add-shopping-item");
let addTodoItemBtn = document.getElementById("add-todo-item");
let addTodoInput = document.getElementById("to-do");
let addShoplistInput = document.getElementById("shop-list");
let shoppingListElement = document.getElementById("shopping-list-ul");
let todoListElement = document.getElementById("todo");
let partyListElement = document.getElementById("test");
let addPartyDetails = document.getElementById("add-details");
let firstFormDetail = document.getElementById("guests");
let secondFormDetail = document.getElementById("date");
let thirdFormDetail = document.getElementById("theme");
let fourthFormDetail = document.getElementById("budget");





function addToShoppingList (shoppingItem){
    shoppingList.unshift(shoppingItem);
}

function addToTodoList (todoItem){
    todoList.unshift(todoItem);   
}

function addPartyList (partyItem){
    partyList.unshift(partyItem);
}




function generateListItem (value) {
    let listItem = document.createElement("li");
    let listItemContent = document.createElement("input");
    let listItemText = document.createTextNode(value);

    listItemContent.setAttribute("type", "checkbox");

    listItem.appendChild(listItemContent);
    listItem.appendChild(listItemText);

    return listItem;
}

addShoppingItemBtn.addEventListener("click", event => {
    let value = addShoplistInput.value;
    addToShoppingList(value);
    addShoplistInput.value = "";
    let node = generateListItem(value)
    shoppingListElement.appendChild(node);
});


addTodoItemBtn.addEventListener ("click", event => {
    let value = addTodoInput.value;
    addToTodoList(value);
    addTodoInput.value ="";
    let node = generateListItem(value);
    todoListElement.appendChild(node);

})

addPartyDetails.addEventListener("click", event =>{
    event.preventDefault();
    let value1 = firstFormDetail.value;
    let value2 = secondFormDetail.value;
    let value3 = thirdFormDetail.value;
    let value4 = fourthFormDetail.value;
    let data = JSON.stringify({name: value1, date: value2, theme: value3, budget: value4})
    
    alert(data)
    console.log(value1,value2,value3,value4);
});