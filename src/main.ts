import "./css/index.css"
let valueSelectSons : string;
let valueSelectHobby : string;
let valueSelectTeam : string;

let iconButton = '⛔'
let colorButton = 'red'

const btnAnswer = document.querySelector('#btn-answer') as HTMLButtonElement
const aAnswer = document.querySelector('#a-answer') as HTMLLinkElement

const btnSelectSons = document.querySelector('#btn-select-sons') as HTMLButtonElement;
const selectSons = document.querySelector('#select-sons') as HTMLSelectElement;
btnSelectSons?.addEventListener('click', () => {
  valueSelectSons = selectSons.options[selectSons.selectedIndex].value;

  if (valueSelectSons === 'casal') {
    iconButton = '✅'
    colorButton = 'green'
  }

  btnSelectSons.style.backgroundColor = colorButton
  const textButton = selectSons.options[selectSons.selectedIndex].text;
  btnSelectSons.innerHTML= `${iconButton}  ${textButton}`

  selectSons.style.display = 'none';
  btnSelectSons.style.flex = '1';

})

const btnSelectHobby = document.querySelector('#btn-select-hobby') as HTMLButtonElement;
const selectHobby = document.querySelector('#select-hobby') as HTMLSelectElement;
btnSelectHobby?.addEventListener('click', () => {
  valueSelectHobby = selectHobby.options[selectHobby.selectedIndex].value;

  if (valueSelectHobby === 'violao') {
    iconButton = '✅'
    colorButton = 'green'
  }
  
  btnSelectHobby.style.backgroundColor = colorButton
  const textButton = selectHobby.options[selectHobby.selectedIndex].text;
  btnSelectHobby.innerHTML= `${iconButton}  ${textButton}`

  selectHobby.style.display = 'none';
  btnSelectHobby.style.flex = '1';

})

const btnSelectTeam = document.querySelector('#btn-select-team') as HTMLButtonElement;
const selectTeam = document.querySelector('#select-team') as HTMLSelectElement;
btnSelectTeam?.addEventListener('click', () => {
  valueSelectTeam = selectTeam.options[selectTeam.selectedIndex].value;

  if (valueSelectTeam === 'violao') {
    iconButton = '✅'
    colorButton = 'green'
  }
  
  btnSelectTeam.style.backgroundColor = colorButton
  const textButton = selectTeam.options[selectTeam.selectedIndex].text;
  btnSelectTeam.innerHTML= `${iconButton}  ${textButton}`

  selectTeam.style.display = 'none';
  btnSelectTeam.style.flex = '1';

  if  (valueSelectSons  === 'casal' && valueSelectHobby ==='violao' && valueSelectTeam === 'inter') {
    btnAnswer.disabled = false;
    btnAnswer.style.background = 'green';
    aAnswer.href='answer.html'
  } else {
    btnAnswer.disabled = false;
    btnAnswer.style.background = 'red';
    btnAnswer.innerHTML = '🎁 Tentar de novo...'
    aAnswer.href='index.html'
  }
})







