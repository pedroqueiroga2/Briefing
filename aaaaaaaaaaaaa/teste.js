function alternarSeta() {
    // Pega o elemento com o id 'seta'
    var seta = document.getElementById("seta");

    // Verifica o conteúdo da seta e alterna
    if (seta.innerHTML === "▽") {
        seta.innerHTML = "△";  // Troca para seta para cima
    } else {
        seta.innerHTML = "▽";  // Troca para seta para baixo
    }
}