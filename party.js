let shoppingList = [];
let todoList =[];
let addShoppingItemBtn = document.getElementById("add-shopping-item");
let addTodoItemBtn = document.getElementById("add-todo-item");
let addTodoInput = document.getElementById("to-do");
let addShoplistInput = document.getElementById("shop-list");
let shoppingListElement = document.getElementById("shopping-list-ul");
let todoListElement = document.getElementById("todo");




function addToShoppingList (shoppingItem){
    shoppingList.unshift(shoppingItem);
}

function addToTodoList (todoItem){
    todoList.unshift(todoItem);
    
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