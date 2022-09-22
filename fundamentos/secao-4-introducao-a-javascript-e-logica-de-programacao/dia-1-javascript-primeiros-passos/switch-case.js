let peca = 'REI';

switch (peca.toLowerCase()) {
  case 'rei':
    console.log('O rei pode mover-se em qualquer direção, porém apenas uma casa por vez.');
    break;
  case 'rainha':
    console.log('A rainha pode mover-se em qualquer direção (vertical, horizontal e diagonal), quantas casas quiser, desde que estejam livres.');
    break;
  case 'torre':
    console.log('A torre move-se em linha reta, tanto na vertical quanto na horizontal.');
    break;
  case 'bispo':
    console.log('O bispo move-se na diagonal, quantas casas quiser.');
    break;
  case 'cavalo':
    console.log('O cavalo é a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”.');
    break;
  case 'peao':
    console.log('O peao move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.');
    break;
  default:
    console.log('Essa peça não existe!');
}