const btn = document.getElementById('btn');         // 버튼
let addValue = document.getElementById('addValue'); // 할 일 입력
let result = document.getElementById('result');     // 추가된 할 일 목록

// 할 일 추가 함수
function addTodo() {
    if (addValue.value.trim() === '') {  // 빈 문자열 또는 공백만 있을 경우 방지
        alert('내용을 입력하세요!');
    } else {
        const list = document.createElement("li"); // <li> 요소 생성
        const del = document.createElement('button'); // 삭제 버튼 생성
        
        list.textContent = addValue.value; // 입력한 내용 추가
        del.innerText = "x";               // 삭제 버튼 텍스트
        del.style.fontSize = "20px";
        del.style.border = "none";
        del.style.float = "right";
        del.style.marginTop = "10px";
        del.style.cursor = "pointer";
        del.style.position = 'relative';

        del.addEventListener("click", deleteList); // 삭제 버튼 클릭 시 삭제 이벤트 실행

        result.appendChild(list); // 리스트 추가
        list.appendChild(del);    // 리스트 항목에 삭제 버튼 추가

        // 할 일 클릭 시 완료 표시 (밑줄 & 색상 변경)
        list.addEventListener("click", function() {
            list.style.textDecoration = "line-through";
            list.style.color = "gray";
        });

        // 입력창 초기화 및 포커스 유지
        addValue.value = "";
        addValue.focus();
    }
}

// 할 일 삭제 함수
function deleteList(e) {
    const removeOne = e.target.parentElement;  // 삭제 버튼(x)의 부모 요소 <li> 찾기
    removeOne.remove(); // 해당 항목 삭제
}

// 전체 삭제 함수
function allClearList() {
    if (confirm("정말 삭제하시겠습니까?")) { // 확인 버튼을 눌렀을 때만 실행
        if (result.innerText === '') {
            alert("삭제할 목록이 없습니다");
        } else {
            result.innerText = ''; // 모든 할 일 목록 삭제
        }
    }
}
