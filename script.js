const form = document.getElementById('server-form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const cpu = data.get('cpu');
  const ram = data.get('ram');
  const gpu = data.get('gpu');
  const hdd = data.get('hdd');

  result.textContent = `申請已送出：CPU ${cpu}、RAM ${ram}、GPU ${gpu}、HDD ${hdd}。`;
  result.classList.add('show');
});
