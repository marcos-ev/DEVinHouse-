function sleep(valor) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(valor);
    }, 3000);
  });
}
sleep(8)
  .then((valor) => {
    console.log(`Após 3 segundos, o valor passado foi: ${valor}`);
  });
