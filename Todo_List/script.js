const TodoInput = document.getElementById("TodoInput");
const AddBtn = document.getElementById("AddBtn");
const TodoList = document.getElementById("TodoList");

AddBtn.addEventListener("click", function () {
    const todoText = TodoInput.value.trim(); //값을 가져오고 공백이 없게 만듦
    const existingTodos = Array.from(TodoList.children).map(li => li.textContent.trim());
    //할 일 목록의 텍스트를 모아둔 배열
    
    if (todoText !== "" && !existingTodos.includes(`- ${todoText}`)) {
        const listItem = document.createElement("li");
        listItem.textContent = `- ${todoText}`;
        TodoList.appendChild(listItem);
        TodoInput.value = "";
        TodoInput.focus();
    } else if (existingTodos.includes(`- ${todoText}`)) {
        alert("이미 존재하는 할 일입니다!");
    } else {
        alert("할 일을 입력해주세요!");
    }
});

TodoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        AddBtn.click();
    }
});