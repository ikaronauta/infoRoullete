let ceroMin, ceroSeg, arrDatos;

function tiempoDeJuego() {
  let min = 0;
  let seg = 0;

  temporizadorJuego = setInterval(() => {
    seg++;

    if (seg == 60) {
      min++;
      seg = 0;

      let dataStorage = JSON.parse(
        localStorage.getItem(nameRoullete)
      );

      dataStorage.tiempo++;

      localStorage.setItem(
        nameRoullete,
        JSON.stringify(dataStorage)
      );
    }
  }, 1000);
}

function cargarTodosLosNumeros() {
    try {
        totalNumeros = [];
        
        arrDatos = [...document.getElementsByClassName('common-scroll__scroll-view-child')[1].firstChild.children];

        arrDatos.reverse().forEach(dato => {
            totalNumeros.push(parseInt(dato.textContent));
        });
    } catch (error) {
        console.log(error);
    }
}
