function alteraCor(elemento, cor) {
  for (i = 0; i < document.querySelectorAll(elemento).length; i++) {
    document.querySelectorAll(elemento)[i].style.backgroundColor = cor;
  }
}
alteraCor('#header-container', '#00B069');
alteraCor('.emergency-tasks', '#FF9F84');
alteraCor('.emergency-tasks div h3', '#A500F3');
alteraCor('.no-emergency-tasks', '#F9DB5E');
alteraCor('.no-emergency-tasks div h3', '#232525');
alteraCor('#footer-container', '#003533');