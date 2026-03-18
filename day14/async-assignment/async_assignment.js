const timerInput = document.querySelector("#timerInput");
const startTimer = document.querySelector("#startTimer");
const timerDisplay = document.querySelector("#timerDisplay");

var timerInterval = null;

const resetTimerInput = () => {
  // timerInput 초기화
  timerInput.value = "";
};

const resetTimerDisp = () => {
  // timerDisplay 초기화
  timerDisplay.textContent = "";
};

const showTimerSec = (sec) => {
  resetTimerDisp();
  // timerDisplay에 sec 표시
  timerDisplay.textContent = `타이머: ${sec}초`;
};

const showTimerComplete = () => {
  resetTimerDisp();
  // timerDisplay에 타이머 종료 메세지 표시
  timerDisplay.textContent = `타이머 종료!`;
  startTimer.disabled = false;
};

const showTimerError = (message) => {
  // timerDisplay에 오류 메세지 표시
  timerDisplay.textContent = message;
  timerDisplay.classList.add("error");
  startTimer.disabled = false;
};

const processTimer = (sec) => {
  showTimerSec(sec);
  startTimer.disabled = true;
  // 1초마다 반복되는 함수
  const timer = setInterval(() => {
    // 1초마다 sec 감소,
    sec -= 1;
    // sec이 0보다 크면 sec 표시
    if (sec > 0) {
      showTimerSec(sec);
    } else {
      clearInterval(timer);
      // 타이머 종료 메세지 표시
      showTimerComplete();
      }
  }, 1000);
};

// 이벤트리스너
startTimer.addEventListener("click", handleClickTimer);

// 타이머 시작
function handleClickTimer() {
  try {
    // timer input에서 sec 가져오기
    const inputValue = timerInput.value.trim();
    const time =parseFloat(inputValue);
    if (!inputValue || isNaN(time) || time < 1 || time > 10) {
      throw new Error("유효한 숫자(1-10)를 입력하세요!");
    }
    processTimer(time);
    resetTimerInput();
  } catch (error) {
    // 오류 메세지 출력
    showTimerError(error.message);
    resetTimerInput();
  }
}
