function BTN() {

    var nome = document.getElementById("validationDefault01").value;
    console.log(nome)
    var SN = document.getElementById("validationDefault02").value;
    console.log(SN)
    var email = document.getElementById("validationDefaultUsername").value;
    console.log(email)
    var estado = document.getElementById("validationDefault03").value;
    console.log(estado)
    var cidade = document.getElementById("validationDefault04").value;
    console.log(cidade)
    var numero = document.getElementById("validationDefault05").value;
    console.log(numero)
    var texto = document.getElementById("validationTextarea").value;
    console.log(texto)

    x = email.indexOf('@');
    if (x <= -1) {
        alert("email inválido")
    }
    else {
        if (nome == '') {
            alert("Nome incompleto")
        }
        else {
            if (SN == "") {
                alert("Revise o Sobrenome")
            }
            else {
                if (email == "") {
                    alert("Revise o Email")
                }
                else {
                    if (estado == "") {
                        alert("Revise o Estado")
                    }
                    else {
                        if (cidade == "") {
                            alert("Revise a Cidade")
                        }
                        else {
                            if (isNaN(numero)) {
                                alert("Digite um numero valido")
                            }
                            else {
                                if (texto == "") {
                                    alert("Digite uma mensagem")
                                }
                                else {
                                    alert("Mensagem enviada")
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}