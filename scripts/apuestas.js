function apuestaRojos() {
  try {
    let count = 0;

    for (let i = 1; i < cantidad; i++) {
      if (
        rojosNum.indexOf(dataNumbers[i]) != -1 &&
        rojosNum.indexOf(dataNumbers[i - 1]) != -1
      ) {
        count++;
        cargarLocalStorage(count, (bet = "color_Rojo"));
      } else {
        if (count >= cantNotif) {
          sendNotification((bet = "color_Rojo"), count);
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
        cargarLocalStorage(count, (bet = "color_Negro"));
      } else {
        if (count >= cantNotif) {
          sendNotification((bet = "color_Negro"), count);
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
        cargarLocalStorage(count, (bet = "par_No"));
      } else {
        if (count >= cantNotif) {
          sendNotification((bet = "par_No"), count);
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
        cargarLocalStorage(count, (bet = "par_Si"));
      } else {
        if (count >= cantNotif) {
          sendNotification((bet = "par_Si"), count);
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
        cargarLocalStorage(count, (bet = "mitad_1"));
      } else {
        if (count >= cantNotif) {
          sendNotification((bet = "mitad_1"), count);
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
        cargarLocalStorage(count, (bet = "mitad_2"));
      } else {
        if (count >= cantNotif) {
          sendNotification((bet = "mitad_2"), count);
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
        cargarLocalStorage(count, (bet = "_fila_1"));
      } else {
        if (count >= cantNotifFilasColumnas) {
          sendNotification((bet = "_fila_1"), count);
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
        cargarLocalStorage(count, (bet = "_fila_2"));
      } else {
        if (count >= cantNotifFilasColumnas) {
          sendNotification((bet = "_fila_2"), count);
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
        cargarLocalStorage(count, (bet = "_fila_3"));
      } else {
        if (count >= cantNotifFilasColumnas) {
          sendNotification((bet = "_fila_3"), count);
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
        cargarLocalStorage(count, (bet = "_columna_1"));
      } else {
        if (count >= cantNotifFilasColumnas) {
          sendNotification((bet = "_columna_1"), count);
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
        cargarLocalStorage(count, (bet = "_columna_2"));
      } else {
        if (count >= cantNotifFilasColumnas) {
          sendNotification((bet = "_columna_2"), count);
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
        cargarLocalStorage(count, (bet = "_columna_3"));
      } else {
        if (count >= cantNotifFilasColumnas) {
          sendNotification((bet = "_columna_3"), count);
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

        if (repeticiones > datos._totales.color_Rojo) {
          datos._totales.color_Rojo++;
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

        if (repeticiones > datos._totales.color_Negro) {
          datos._totales.color_Negro++;
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

        if (repeticiones > datos._totales.par_No) {
          datos._totales.par_No++;
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

        if (repeticiones > datos._totales.par_Si) {
          datos._totales.par_Si++;
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

        if (repeticiones > datos._totales.mitad_1) {
          datos._totales.mitad_1++;
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

        if (repeticiones > datos._totales.mitad_2) {
          datos._totales.mitad_2++;
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

        if (repeticiones > datos._totales._fila_1) {
          datos._totales._fila_1++;
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

        if (repeticiones > datos._totales._fila_2) {
          datos._totales._fila_2++;
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

        if (repeticiones > datos._totales._fila_3) {
          datos._totales._fila_3++;
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

        if (repeticiones > datos._totales._columna_1) {
          datos._totales._columna_1++;
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

        if (repeticiones > datos._totales._columna_2) {
          datos._totales._columna_2++;
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

        if (repeticiones > datos._totales._columna_3) {
          datos._totales._columna_3++;
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
