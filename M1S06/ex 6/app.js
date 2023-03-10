fetch(`https://api.agify.io/?country_id=BR&name=Marcos`)
  .then(response => response.json())
  .then(data => {
    if (data.age) {
      console.log(`A idade média de pessoas com o nome '${data.name}' no Brasil é de ${data.age} anos.`);
    } else {
      console.log(`Não foi possível encontrar a idade média de pessoas com o nome '${data.name}' no Brasil.`);
    }
  })
  .catch(error => console.error(error));
