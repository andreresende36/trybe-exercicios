import fetch from 'node-fetch';
fetch("https://apiasdasd.goprogram.ai/inspiration")
  .then(response => response.json())
  .then(data => console.log(`${data.quote}
Autor: ${data.author}`))
  .catch(error => console.log(error))