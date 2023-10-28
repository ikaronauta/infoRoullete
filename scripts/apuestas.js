function apuestaRojos() {
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
}

function apuestaNegros() {
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
}

function apuestaImpares() {
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
}

function apuestaPares() {
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
}

function apuestaPrimerMitad() {
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
}

function apuestaSegundaMitad() {
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
}

function apuestaPrimeraFila() {
  let count = 0;
  console.log(dataNumbers);
  for (let i = 1; i < cantidad; i++) {
    if (
      (fila1.indexOf(dataNumbers[i]) == -1) 
      && (fila1.indexOf(dataNumbers[i - 1]) == -1)
    ) {
      count++;
      console.log(`R- ${dataNumbers[i]}`);
      cargarLocalStorage(count, (bet = "_primeraFila"));
    } else {
      if (count >= cantNotifFilas) {
        sendNotification((bet = "_primeraFila"), count);
      }
      return;
    }
  }
}

function apuestaSegundaFila() {
  let count = 0;

  for (let i = 1; i < cantidad; i++) {
    if (
      (fila2.indexOf(dataNumbers[i]) == -1) 
      && (fila2.indexOf(dataNumbers[i - 1]) == -1)
    ) {
      count++;
      cargarLocalStorage(count, (bet = "_segundaFila"));
    } else {
      if (count >= cantNotifFilas) {
        sendNotification((bet = "_segundaFila"), count);
      }
      return;
    }
  }
}

function apuestaTerceraFila() {
  let count = 0;

  for (let i = 1; i < cantidad; i++) {
    if (
      (fila3.indexOf(dataNumbers[i]) == -1) 
      && (fila3.indexOf(dataNumbers[i - 1]) == -1)
    ) {
      count++;
      cargarLocalStorage(count, (bet = "_terceraFila"));
    } else {
      if (count >= cantNotifFilas) {
        sendNotification((bet = "_terceraFila"), count);
      }
      return;
    }
  }
}


//**
///***

function getRojos() {
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
}

function getNegros() {
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
}

function getImpares() {
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
}

function getPares() {
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
}

function getPrimerasMitades() {
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
}

function getSegundasMitades() {
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
}

function getFila1() {
  let repeticiones = 0;
  let datos = JSON.parse(localStorage.getItem(nameRoullete));

  for (let i = 1; i < totalNumeros.length; i++) {
    if((fila1.indexOf(totalNumeros[i]) == -1) && 
      (fila1.indexOf(totalNumeros[i - 1]) == -1)){
      repeticiones++;
      
      if(repeticiones > datos._total._primerasFilasTotal){
        datos._total._primerasFilasTotal++;
        localStorage.setItem(nameRoullete, JSON.stringify(datos));
      }
    } else {
      repeticiones = 0;
    }
  }
}

function getFila2() {
  let repeticiones = 0;
  let datos = JSON.parse(localStorage.getItem(nameRoullete));

  for (let i = 1; i < totalNumeros.length; i++) {
    if((fila2.indexOf(totalNumeros[i]) == -1) && (fila2.indexOf(totalNumeros[i - 1]) == -1)){
      repeticiones++;
      
      if(repeticiones > datos._total._segundasFilasTotales){
        datos._total._segundasFilasTotales++;
        localStorage.setItem(nameRoullete, JSON.stringify(datos));
      }
    } else {
      repeticiones = 0;
    }
  }
}

function getFila3() {
  let repeticiones = 0;
  let datos = JSON.parse(localStorage.getItem(nameRoullete));

  for (let i = 1; i < totalNumeros.length; i++) {
    if((fila3.indexOf(totalNumeros[i]) == -1) 
      && (fila3.indexOf(totalNumeros[i - 1]) == -1)){
      repeticiones++;
      
      if(repeticiones > datos._total._terceraFilasTotal){
        datos._total._terceraFilasTotal++;
        localStorage.setItem(nameRoullete, JSON.stringify(datos));
      }
    } else {
      repeticiones = 0;
    }
  }
}