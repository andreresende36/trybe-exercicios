const verifyNumbers = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    throw new Error(`Você digitou um valor inválido. Utilize apenas números.`)
  }
  if (!a || !b) {
    throw new Error(`Você deixou de digitar um dos campos.`)
  }
}

function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verifyNumbers(value1, value2);
    const result = Number(value1) + Number(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    document.getElementById('result').innerHTML = `Erro: ${error.message}`;
  }
  finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
  console.log();
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
