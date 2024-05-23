const usuario = JSON.parse(localStorage.getItem("objeto-dados"));
const tituloUsuario = document.querySelector(".titulo-cabecalho");
tituloUsuario.innerText = `Bem-vindo, ${usuario.nome}!`;