let listaUsuarios = [
    { nome: "Jennifer Daleffi", emailUsuario: "jeje@email.com", senhaUsuario: "senha123" },
    { nome: "Fernando", emailUsuario: "fernando@email.com", senhaUsuario: "senha321" },
    { nome: "Alexandre", emailUsuario: "alexandre@email.com", senhaUsuario: "123456" },
    { nome: "Ronqui", emailUsuario: "ronqui@email.com", senhaUsuario: "123321" },
];
 
const validarLogin = (email, senha) => {
    let mensagem = document.querySelector("#erro");
 
    for (let i = 0; i < listaUsuarios.length; i++) {
        if (email === listaUsuarios[i].emailUsuario && senha === listaUsuarios[i].senhaUsuario) {
            localStorage.setItem("objeto-dados", JSON.stringify(listaUsuarios[i]));
 
            mensagem.innerText = "Seu login foi realizado. Direcionando para a Página principal...";
            mensagem.setAttribute("class", "sucesso");
 
            setTimeout(() => {
                mensagem.innerText = "";
                mensagem.setAttribute("class", "");
                window.location.href = "./pages/pagina.html";
            }, 5000);
 
            return false;
        }
    }
 
    mensagem.innerText = "O email ou a senha colocados estão incorretos.";
    mensagem.setAttribute("class", "erro");
 
    setTimeout(() => {
        mensagem.innerText = "";
        mensagem.setAttribute("class", "");
    }, 5000);
 
    return false;
};
 
const botaoLogout = document.querySelector(".botao-logout");
if (botaoLogout) {
    botaoLogout.addEventListener("click", () => {
        localStorage.removeItem("objeto-dados");
        window.location.href = "../index.html";
    });
}
 
const formulario = document.querySelector(".formulario");
if (formulario) {
    formulario.onsubmit = function() {
        const emailInput = document.getElementById("email").value;
        const senhaInput = document.getElementById("senha").value;
        validarLogin(emailInput, senhaInput);
        return false;
    };
}