function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortearAluno() {
  const numeroSorteado = getRndInteger(1, 9); // Números de 1 a 9
  let aluno;

  // Usando if-else para associar números a alunos
  if (numeroSorteado === 1) {
      aluno = "Lucas";
  } else if (numeroSorteado === 2) {
      aluno = "Guilherme";
  } else if (numeroSorteado === 3) {
      aluno = "Isa";
  } else if (numeroSorteado === 4) {
      aluno = "Felipe";
  } else if (numeroSorteado === 5) {
      aluno = "Andrey";
  } else if (numeroSorteado === 6) {
      aluno = "Nicolas";
  } else if (numeroSorteado === 7) {
      aluno = "Tais";
  } else if (numeroSorteado === 8) {
      aluno = "Paulino";
  } else if (numeroSorteado === 9) {
      aluno = "Lyan";
  }

  document.getElementById('resultado').innerHTML = aluno;
}







function handleClick() {
    document.getElementById('resultado').innerText = 'Botão clicado!';
}

function handleChange() {
    document.getElementById('resultado').innerText = 'Valor alterado!';
}

function handleMouseOver() {
    document.getElementById('resultado').innerText = 'Mouse está sobre o botão!';
}

function handleMouseOut() {
    document.getElementById('resultado').innerText = 'Mouse saiu do botão!';
}

function handleKeyDown(event) {
    document.getElementById('resultado').innerText = 'Tecla pressionada: ' + event.key;
}

window.onload = function() {
    document.getElementById('resultado').innerText = 'Página carregada!';
};


