function calculateResistances() {
    var vcc = parseFloat(document.getElementById('vcc').value);
    var beta = parseFloat(document.getElementById('beta').value);
    var icq = parseFloat(document.getElementById('icq').value);

    if (isNaN(vcc) || isNaN(beta) || isNaN(icq)) {
        alert("Veuillez saisir des valeurs valides pour Vcc, beta et Icq.");
        return;
    }

    var vem = 0.1 * vcc;
    var vcm = vcc - (4 * vem); // Calcul de Vcm
    var vbm = vem + 0.7; // Vbeq = 0.7 volts (valeur typique de la tension de seuil base-émetteur)
    var vceq = vcm - vem;

    var re = vem / icq;
    var rc = 4 * re;
    var ip = 10 * icq / beta;
    var rb2 = vbm / ip;
    var rb1 = (vcc - vbm) / (11 * icq / beta);

    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "<h3>Resultats :</h3>" +
                            "<p>Re = " + re.toFixed(2) + " ohms</p>" +
                            "<p>Rc = " + rc.toFixed(2) + " ohms</p>" +
                            "<p>Rb1 = " + rb1.toFixed(2) + " ohms</p>" +
                            "<p>Rb2 = " + rb2.toFixed(2) + " ohms</p>" +
                            "<p>Vem = " + vem.toFixed(2) + " volts</p>" +
                            "<p>Vcm = " + vcm.toFixed(2) + " volts</p>" +
                            "<p>Vbm = " + vbm.toFixed(2) + " volts</p>" +
                            "<p>Vceq = " + vceq.toFixed(2) + " volts</p>";
}
function resetFields() {
    document.getElementById('vcc').value = '';
    document.getElementById('beta').value = '';
    document.getElementById('icq').value = '';
    document.getElementById('results').innerHTML = '';
}
