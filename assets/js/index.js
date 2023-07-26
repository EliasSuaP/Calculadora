function calcularEdad(fecha){
    difMs = Date.now() - fecha;
    console.log("diferencia dias: ");
    console.log("Fecha: " + fecha);
    console.log("Fecha actual - Fecha ingresada: " + (Date.now() - fecha))

    todayDate = new Date()
    ageYear = new Date(difMs);
    ageYear.setHours(ageYear.getHours() + 10);
    console.log("ageYear: " + ageYear)
    ageYear = Math.abs(ageYear.getUTCFullYear() - 1970);

    function ageMonth() {
        if (todayDate.getMonth() >= fecha.getMonth()) {
            if (todayDate.getDate() >= fecha.getDate()) {
                console.log("return 1")
                return todayDate.getMonth() - fecha.getMonth();
            } else {
                if ((todayDate.getMonth() - 1) >= fecha.getMonth()) {
                    console.log("return 2")
                    return (todayDate.getMonth() - 1) - fecha.getMonth();
                } else {
                    console.log("return 3")
                    return ((todayDate.getMonth() - 1) + 12) - fecha.getMonth();
                }
            }
        }
        console.log("todayDate: " + todayDate);
        console.log("mes ingresado es mayor: " + todayDate.getMonth() + " vs " + fecha.getMonth());

        result = 12 - (fecha.getMonth() - todayDate.getMonth());
        console.log("result: " + result);
        if (result >= 12) {
            ageYear += 1;
            return 0;
        }
        return result;
    };

    let ageMonthv = ageMonth();

    function ageDay() {
        if (todayDate.getDate() > fecha.getDate()) {
            return todayDate.getDate() - fecha.getDate();
        } else if (todayDate.getDate() == fecha.getDate()) {
            return todayDate.getDate() - fecha.getDate();
        } else {
            let calDate = new Date(fecha.getFullYear(), fecha.getMonth(), 0);
            return (todayDate.getDate() + calDate.getDate()) - fecha.getDate();
        }
    };

    //alert("años: " + ageYear + " meses: " + ageMonthv + " dias: " + ageDay());

    document.getElementById('resultAño').innerHTML = ageYear
    document.getElementById('resultMes').innerHTML = ageMonthv
    document.getElementById('resultDia').innerHTML = ageDay()
}

function validateForm(form) {
    //alert("validateform");
    let error = false;
    let dia = form["dia"].value;
    let mes = form["mes"].value;
    let año = form["año"].value;
    console.log("dia: " + document.getElementById('dia').validity.valid);
    if(!form["dia"].validity.valid){
        document.getElementById('error-dia').classList.remove('d-none');
        console.log("error en dia");
        error = error || true;
    }else{
        document.getElementById('error-dia').classList.add('d-none');
        error = error || false;
    }
    if(!form["mes"].validity.valid){
        document.getElementById('error-mes').classList.remove('d-none');
        console.log("error en mes");
        error = error || true;
    }else {
        document.getElementById('error-mes').classList.add('d-none');
        error = error || false;
    }
    if(!form["año"].validity.valid){
        document.getElementById('error-año').classList.remove('d-none');
        console.log("error en año");
        error = error || true;  
    }else {
        document.getElementById('error-año').classList.add('d-none');
        error = error || false;
    }
    console.log("error: " + error)
    if(error) {
        return false;
    }
    let fecha = new Date(año, mes - 1, dia);
    if(fecha.getTime() > Date()) {
        return false;
    }
    /* Llama a la función para calcular la edad y regresa falso para que no refresque la pagina */
    calcularEdad(fecha);
    //alert("devuelve true");
    return false;
}
