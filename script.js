function gerar(){
    let tam = parseInt(document.getElementById("tam").value)
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = ""
    for (let i = 0; i < tam; i++){

    let letraAleatoria = caracteres.charAt(Math.floor(Math.random() * caracteres.length));    
    result += letraAleatoria
    }
    let senha = document.getElementById("senha")
    senha.innerHTML = result


}
