window.onload = function () {
  clearButton();
  const submitBtn = document.getElementById('button');
  submitBtn.addEventListener('click', turnOffButton);
  submitBtn.addEventListener('click', function () {
    if (textInputValidation()) {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
    else {
      alert('Dados inválidos!')
     }
  })
  const agreement = document.getElementById('agreement');
  agreement.addEventListener('change', enableSubmit);
}

function clearButton() {
  const secaoBotoes = document.getElementById('botoes');
  const reset = document.createElement('input');
  reset.type = 'reset';
  reset.name = 'reset';
  reset.id = 'resetButton';
  reset.value = 'Limpar';
  secaoBotoes.appendChild(reset);
}

function enableSubmit() {
  const submitBtn = document.getElementById('button');
  const agreement = document.getElementById('agreement');
  submitBtn.disabled = !agreement.checked;
}

function turnOffButton() {
  const submitBtn = document.getElementById('button');
  submitBtn.addEventListener('click', function () {
    event.preventDefault();
  })
}

function textInputValidation() {
  const fullName = document.getElementById('fullName').value.length;
  const invalidName = fullName < 10 || fullName > 40;
  // console.log(fullName);

  const inputEmail = document.getElementById('input-email').value.length;
  const invalidEmail = inputEmail < 10 || inputEmail > 50;
  // console.log(inputEmail);

  const inputDiscurso = document.getElementById('input-discurso').value.length;
  const invalidDiscurso = inputDiscurso > 500;
  // console.log(inputDiscurso);

  if (invalidName || invalidEmail || invalidDiscurso) {
    return false
  }
  else {
    return true;
  }
}

console.log(fullName);