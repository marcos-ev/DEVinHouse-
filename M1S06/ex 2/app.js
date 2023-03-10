function mostrarHorario() {
  setInterval(() => {
    const data = new Date();
    const horario = data.toLocaleTimeString();
    console.log(`Horário atual: ${horario}`);
  }, 1000);
}

mostrarHorario();
