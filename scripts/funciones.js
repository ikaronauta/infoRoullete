let ceroMin, ceroSeg, arrDatos;

function tiempoDeJuego() {
  let min = 0;
  let seg = 0;

  try {
    temporizadorJuego = setInterval(() => {
      seg++;

      if (seg == 60) {
        min++;
        seg = 0;

        validacionLocalStorage();

        let dataStorage = JSON.parse(localStorage.getItem(nameRoullete));

        dataStorage.tiempo++;

        localStorage.setItem(nameRoullete, JSON.stringify(dataStorage));
      }
    }, 1000);
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function cargarTodosLosNumeros() {
  try {
    totalNumeros = [];

    arrDatos = [
      ...document.getElementsByClassName("common-scroll__scroll-view-child")[1]
        .firstChild.children,
    ];

    arrDatos.forEach((dato) => {
      totalNumeros.push(parseInt(dato.textContent));
    });

    if (imprimirTotalNumeros) {
      if (!localStorage.getItem("totalNumeros")) {
        localStorage.setItem("totalNumeros", JSON.stringify(totalNumeros));
      }
    }
  } catch (error) {
    console.log(error);
  }
}
