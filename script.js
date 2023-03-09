//Outra versão do código que eu testei
let opcao = document.querySelector("select#tema")
let html = document.querySelector("html")

opcao.addEventListener("change", atualizarTema)

function atualizarTema() {
    if (opcao.value === "claro") {
        html.style.backgroundColor = "white"
        html.style.color = "black"
    }
    else if (opcao.value === "escuro") {
        html.style.backgroundColor = "#1b1b1b"
        html.style.color = "white"
    }
}
