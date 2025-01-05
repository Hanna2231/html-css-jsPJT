const toDoList = document.querySelector('#to-do-list');

function addNewTodo(text) {
    const newLi = document.createElement('li'); // 새로운 li 요소 생성
    newLi.textContent = text; // 매개변수로 받은 텍스트 설정
    toDoList.appendChild(newLi); // toDoList에 새로운 항목 추가
}

// 테스트 코드
addNewTodo('자바스크립트 공부하기');
addNewTodo('고양이 화장실 청소하기');
addNewTodo('고양이 장난감 쇼핑하기');