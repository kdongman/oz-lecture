
// 과제: 
// HTML 파일에 연결하여 브라우저에서 실행하세요

// DOM 요소 선택
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearButton');

// 입력값 검증 및 할 일 추가 함수
function addTask() {
    const taskText = taskInput.value.trim();

    // 입력값이 비어있는지 확인
    if (!taskText) {
        alert(`할 일을 입력하세요.`)
        return;
    }
    // 새로운 리스트 아이템 생성
    const listItem = document.createElement('li');
    // 할 일 텍스트 추가
    listItem.textContent = taskText;
    // 삭제 버튼 생성
    const deleteButton = document.createElement('button')
    deleteButton.textContent = '삭제';
    deleteButton.className = 'delete-button';
    // 삭제 버튼 이벤트 리스너
    deleteButton.addEventListener('click', function(event) {
        event.stopPropagation();
        taskList.removeChild(listItem);
    });
    // 완료 상태 토글 이벤트 리스너
    listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });
    // 요소 조립
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    // 입력창 초기화
    taskInput.value = '';
}

// 모든 할 일 삭제 함수
function clearAllTasks() {
    taskList.innerHTML = '';
}

// 추가 버튼 클릭 이벤트 적용
addButton.addEventListener('click', addTask);
// 입력창에서 Enter 키 이벤트 적용 (event.key === 'Enter')
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});


// 전체 삭제 버튼 클릭 이벤트 적용
clearButton.addEventListener('click', clearAllTasks);
