const form = document.getElementById('apply-form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  result.textContent = '申請單已送出，請列印簽核後依流程辦理。';
});
