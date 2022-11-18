// cria referência ao form e elemento onde será exibido a resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();  // evita o envio do form
    const nome = frm.inNome.value;  // obtém os valores de form
    const masculino = frm.inMasculino.checked;  
    const altura = Number(frm.inAltura.value);

    let peso;   // criar uma variável peso

    if(masculino == true) {
        peso = 22 * Math.pow(altura, 2);  // Math pow eleva ao quadrado
        resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)}Kg`; 
    } else {
        peso = 21 * Math.pow(altura, 2);
        resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)}Kg`;
    }
})