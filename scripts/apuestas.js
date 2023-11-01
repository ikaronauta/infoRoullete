function apuestaRojos() {
  try {
    let count = 0;

    for (let i = 1; i < cantidad; i++) {
      if (
        rojosNum.indexOf(dataNumbers[i]) != -1 &&
        rojosNum.indexOf(dataNumbers[i - 1]) != -1
      ) {
        count++;
        cargarLocalStorage(count, (bet = "rojo"));
      } else {
        if (count >= cantNotif) {
          sendNotification((bet = "rojo"), count);
        }
        return;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function apuestaNegros() {
  try {
    let count = 0;

    for (let i = 1; i < cantidad; i++) {
      if (
        negrosNum.indexOf(dataNumbers[i]) != -1 &&
        negrosNum.indexOf(dataNumbers[i - 1]) != -1
      ) {
        count++;
        cargarLocalStorage(count, (bet = "negro"));
      } else {
        if (count >= cantNotif) {
          sendNotification((bet = "negro"), count);
        }
        return;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function apuestaImpares() {
  try {
    let count = 0;

    for (let i = 1; i < cantidad; i++) {
      if (
        (dataNumbers[i] % 2 == 1 || dataNumbers[i] == 0) &&
        (dataNumbers[i - 1] % 2 == 1 || dataNumbers[i - 1] == 0)
      ) {
        count++;
        cargarLocalStorage(count, (bet = "impares"));
      } else {
        if (count >= cantNotif) {
          sendNotification((bet = "impares"), count);
        }
        return;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function apuestaPares() {
  try {
    let count = 0;

    for (let i = 1; i < cantidad; i++) {
      if (
        (dataNumbers[i] % 2 == 0 || dataNumbers[i] == 0) &&
        (dataNumbers[i - 1] % 2 == 0 || dataNumbers[i - 1] == 0)
      ) {
        count++;
        cargarLocalStorage(count, (bet = "pares"));
      } else {
        if (count >= cantNotif) {
          sendNotification((bet = "pares"), count);
        }
        return;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function apuestaPrimerMitad() {
  try {
    let count = 0;

    for (let i = 1; i < cantidad; i++) {
      if (dataNumbers[i] <= 18 && dataNumbers[i - 1] <= 18) {
        count++;
        cargarLocalStorage(count, (bet = "primeraMitad"));
      } else {
        if (count >= cantNotif) {
          sendNotification((bet = "primeraMitad"), count);
        }
        return;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function apuestaSegundaMitad() {
  try {
    let count = 0;

    for (let i = 1; i < cantidad; i++) {
      if (
        (dataNumbers[i] > 18 || dataNumbers[i] == 0) &&
        (dataNumbers[i - 1] > 18 || dataNumbers[i - 1] == 0)
      ) {
        count++;
        cargarLocalStorage(count, (bet = "segundaMitad"));
      } else {
        if (count >= cantNotif) {
          sendNotification((bet = "segundaMitad"), count);
        }
        return;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function apuestaPrimeraFila() {
  try {
    let count = 0;

    for (let i = 0; i < cantidad; i++) {
      if (fila1.indexOf(dataNumbers[i]) == -1) {
        count++;
        cargarLocalStorage(count, (bet = "_primeraFila"));
      } else {
        if (count >= cantNotifFilasColumnas) {
          sendNotification((bet = "_primeraFila"), count);
        }
        return;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function apuestaSegundaFila() {
  try {
    let count = 0;

    for (let i = 0; i < cantidad; i++) {
      if (fila2.indexOf(dataNumbers[i]) == -1) {
        count++;
        cargarLocalStorage(count, (bet = "_segundaFila"));
      } else {
        if (count >= cantNotifFilasColumnas) {
          sendNotification((bet = "_segundaFila"), count);
        }
        return;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function apuestaTerceraFila() {
  try {
    let count = 0;

    for (let i = 0; i < cantidad; i++) {
      if (fila3.indexOf(dataNumbers[i]) == -1) {
        count++;
        cargarLocalStorage(count, (bet = "_terceraFila"));
      } else {
        if (count >= cantNotifFilasColumnas) {
          sendNotification((bet = "_terceraFila"), count);
        }
        return;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function apuestaPrimeraColumna() {
  try {
    let count = 0;

    for (let i = 0; i < cantidad; i++) {
      if (dataNumbers[i] >= 13 && dataNumbers[i] <= 36) {
        count++;
        cargarLocalStorage(count, (bet = "__primerasColumnas"));
      } else {
        if (count >= cantNotifFilasColumnas) {
          sendNotification((bet = "__primerasColumnas"), count);
        }
        return;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function apuestaSegundaColumna() {
  try {
    let count = 0;

    for (let i = 0; i < cantidad; i++) {
      if (
        (totalNumeros[i] >= 1 && totalNumeros[i] <= 12) ||
        (totalNumeros[i] >= 25 && totalNumeros[i] <= 36)
        ) {
        count++;
        cargarLocalStorage(count, (bet = "__segundasColumnas"));
      } else {
        if (count >= cantNotifFilasColumnas) {
          sendNotification((bet = "__segundasColumnas"), count);
        }
        return;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function apuestaTerceraColumna() {
  try {
    let count = 0;

    for (let i = 0; i < cantidad; i++) {
      if (totalNumeros[i] >= 1 && totalNumeros[i] <= 24) {
        count++;
        cargarLocalStorage(count, (bet = "__tercerasColumnas"));
      } else {
        if (count >= cantNotifFilasColumnas) {
          sendNotification((bet = "__tercerasColumnas"), count);
        }
        return;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

//**
///***

function getRojos() {
  try {
    let repeticiones = 0;
    let datos = JSON.parse(localStorage.getItem(nameRoullete));

    for (let i = 1; i < totalNumeros.length; i++) {
      if (
        rojosNum.indexOf(totalNumeros[i]) != -1 &&
        rojosNum.indexOf(totalNumeros[i - 1]) != -1
      ) {
        repeticiones++;

        if (repeticiones > datos._total.rojosTotal) {
          datos._total.rojosTotal++;
          localStorage.setItem(nameRoullete, JSON.stringify(datos));
        }
      } else {
        repeticiones = 0;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function getNegros() {
  try {
    let repeticiones = 0;
    let datos = JSON.parse(localStorage.getItem(nameRoullete));

    for (let i = 1; i < totalNumeros.length; i++) {
      if (
        negrosNum.indexOf(totalNumeros[i]) != -1 &&
        negrosNum.indexOf(totalNumeros[i - 1]) != -1
      ) {
        repeticiones++;

        if (repeticiones > datos._total.negrosTotal) {
          datos._total.negrosTotal++;
          localStorage.setItem(nameRoullete, JSON.stringify(datos));
        }
      } else {
        repeticiones = 0;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function getImpares() {
  try {
    let repeticiones = 0;
    let datos = JSON.parse(localStorage.getItem(nameRoullete));

    for (let i = 1; i < totalNumeros.length; i++) {
      if (
        (totalNumeros[i] % 2 == 1 || totalNumeros[i] == 0) &&
        (totalNumeros[i - 1] % 2 == 1 || totalNumeros[i - 1] == 0)
      ) {
        repeticiones++;

        if (repeticiones > datos._total.imparesTotal) {
          datos._total.imparesTotal++;
          localStorage.setItem(nameRoullete, JSON.stringify(datos));
        }
      } else {
        repeticiones = 0;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function getPares() {
  try {
    let repeticiones = 0;
    let datos = JSON.parse(localStorage.getItem(nameRoullete));

    for (let i = 1; i < totalNumeros.length; i++) {
      if (
        (totalNumeros[i] % 2 != 1 || totalNumeros[i] == 0) &&
        (totalNumeros[i - 1] % 2 != 1 || totalNumeros[i - 1] == 0)
      ) {
        repeticiones++;

        if (repeticiones > datos._total.paresTotal) {
          datos._total.paresTotal++;
          localStorage.setItem(nameRoullete, JSON.stringify(datos));
        }
      } else {
        repeticiones = 0;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function getPrimerasMitades() {
  try {
    let repeticiones = 0;
    let datos = JSON.parse(localStorage.getItem(nameRoullete));

    for (let i = 1; i < totalNumeros.length; i++) {
      if (totalNumeros[i] <= 18 && totalNumeros[i - 1] <= 18) {
        repeticiones++;

        if (repeticiones > datos._total.primerasMitadesTotal) {
          datos._total.primerasMitadesTotal++;
          localStorage.setItem(nameRoullete, JSON.stringify(datos));
        }
      } else {
        repeticiones = 0;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function getSegundasMitades() {
  try {
    let repeticiones = 0;
    let datos = JSON.parse(localStorage.getItem(nameRoullete));

    for (let i = 1; i < totalNumeros.length; i++) {
      if (
        (totalNumeros[i] > 18 || totalNumeros[i] == 0) &&
        (totalNumeros[i - 1] > 18 || totalNumeros[i - 1] == 0)
      ) {
        repeticiones++;

        if (repeticiones > datos._total.segundasMitadesTotal) {
          datos._total.segundasMitadesTotal++;
          localStorage.setItem(nameRoullete, JSON.stringify(datos));
        }
      } else {
        repeticiones = 0;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function getFila1() {
  try {
    let repeticiones = 0;
    let datos = JSON.parse(localStorage.getItem(nameRoullete));

    for (let i = 0; i < totalNumeros.length; i++) {
      if (fila1.indexOf(totalNumeros[i]) == -1) {
        repeticiones++;

        if (repeticiones > datos._total._primerasFilasTotal) {
          datos._total._primerasFilasTotal++;
          localStorage.setItem(nameRoullete, JSON.stringify(datos));
        }
      } else {
        repeticiones = 0;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function getFila2() {
  try {
    let repeticiones = 0;
    let datos = JSON.parse(localStorage.getItem(nameRoullete));

    for (let i = 0; i < totalNumeros.length; i++) {
      if (fila2.indexOf(totalNumeros[i]) == -1) {
        repeticiones++;

        if (repeticiones > datos._total._segundasFilasTotales) {
          datos._total._segundasFilasTotales++;
          localStorage.setItem(nameRoullete, JSON.stringify(datos));
        }
      } else {
        repeticiones = 0;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function getFila3() {
  try {
    let repeticiones = 0;
    let datos = JSON.parse(localStorage.getItem(nameRoullete));

    for (let i = 0; i < totalNumeros.length; i++) {
      if (fila3.indexOf(totalNumeros[i]) == -1) {
        repeticiones++;

        if (repeticiones > datos._total._tercerasFilasTotal) {
          datos._total._tercerasFilasTotal++;
          localStorage.setItem(nameRoullete, JSON.stringify(datos));
        }
      } else {
        repeticiones = 0;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function getColumna1() {
  try {
    let repeticiones = 0;
    let datos = JSON.parse(localStorage.getItem(nameRoullete));

    for (let i = 0; i < totalNumeros.length; i++) {
      if (totalNumeros[i] >= 13 && totalNumeros[i] <= 36) {
        repeticiones++;

        if (repeticiones > datos._total.__primerasColumnasTotal) {
          datos._total.__primerasColumnasTotal++;
          localStorage.setItem(nameRoullete, JSON.stringify(datos));
        }
      } else {
        repeticiones = 0;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function getColumna2() {
  try {
    let repeticiones = 0;
    let datos = JSON.parse(localStorage.getItem(nameRoullete));

    for (let i = 0; i < totalNumeros.length; i++) {
      if (
        (totalNumeros[i] >= 1 && totalNumeros[i] <= 12) ||
        (totalNumeros[i] >= 25 && totalNumeros[i] <= 36)
      ) {
        repeticiones++;

        if (repeticiones > datos._total.__segundasColumnasTotal) {
          datos._total.__segundasColumnasTotal++;
          localStorage.setItem(nameRoullete, JSON.stringify(datos));
        }
      } else {
        repeticiones = 0;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}

function getColumna3() {
  try {
    let repeticiones = 0;
    let datos = JSON.parse(localStorage.getItem(nameRoullete));

    for (let i = 0; i < totalNumeros.length; i++) {
      if (totalNumeros[i] >= 1 && totalNumeros[i] <= 24) {
        repeticiones++;

        if (repeticiones > datos._total.__tercerasColumnasTotal) {
          datos._total.__tercerasColumnasTotal++;
          localStorage.setItem(nameRoullete, JSON.stringify(datos));
        }
      } else {
        repeticiones = 0;
      }
    }
  } catch (error) {
    new Notification(`${fecha.toLocaleTimeString} - ${nameRoullete}`, {
      body: error,
    });
  }
}
