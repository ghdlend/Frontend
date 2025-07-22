const addBtn = document.getElementById('AddBtn');
const delBtn = document.getElementById('DelBtn');
let addValue = document.getElementById('TodoInput');
let result = document.getElementById('TodoList');

// 할 일 추가 이벤트 리스너
addBtn.addEventListener('click', addTodo);

// 전체 삭제 이벤트 리스너
delBtn.addEventListener('click', allClearList);

// 할 일 추가 함수
function addTodo() {
    if (addValue.value.trim() === '') {
        alert('내용을 입력하세요!');
    } else {
        const list = document.createElement("li");
        const del = document.createElement('button');
        
        list.textContent = addValue.value;
        del.innerText = "x";
        del.classList.add('delete-btn');

        del.addEventListener("click", deleteList);

        result.appendChild(list);
        list.appendChild(del);

        list.addEventListener("click", function() {
            list.style.textDecoration = "line-through";
            list.style.color = "gray";
        });

        addValue.value = "";
        addValue.focus();
    }
}

// 할 일 삭제 함수
function deleteList(e) {
    const removeOne = e.target.parentElement;
    removeOne.remove();
}

// 전체 삭제 함수
function allClearList() {
    if (confirm("정말 삭제하시겠습니까?")) {
        if (result.innerText === '') {
            alert("삭제할 목록이 없습니다");
        } else {
            result.innerText = '';
        }
    }
}