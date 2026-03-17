//RA3Ex7 - Activitats ràpides DOM JS

//1 - Selecció: Usa querySelector per canviar el color d'un <h1> quan la pàgina carregui.
let h = document.querySelector("#titol-principal")
h.style.color="green"

//2 - Contingut: Fes que un paràgraf <p> mostri "Hola Món" usant textContent.
let p = document.getElementById("paragraf-hola")
p.textContent="Hola Món"

//3 - Atributs: Canvia la 'src' d'una imatge <img> usant setAttribute.
let img = document.getElementById("imatge-canviant")
img.setAttribute("src", "https://albertonate.com/wp-content/uploads/2022/10/Logo-ILBclaim.png")

//4 - Estils: Canvia el color de fons (backgroundColor) d'un element en fer-li clic.
let caixa = document.getElementById("caixa-estil")
caixa.addEventListener("click", function(){
    caixa.style.backgroundColor = "#56d661"
})

//5 - Classes: Crea un botó que afegeixi/tregui la classe 'actiu' amb classList.toggle.
let botoToggle = document.getElementById("boto-toggle")
let textClasse = document.getElementById("text-classe")
botoToggle.addEventListener("click", function(){
    textClasse.classList.toggle("actiu")
})

