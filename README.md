# Exercicis de DOM

### **Exercici 1 Selecció**
 
**Objectiu:** Utilitzar querySelector per canviar el color d’un `<h1>` quan la pàgina es carregui.

**Solució:**

<p> let h = document.querySelector("#titol-principal") </p>

<p> h.style.color="green" </p>

### **Exercici 2 Contingut**

**Objectiu:** Fer que un paràgraf `<p>` mostri el text "Hola Món".

**Solució:**

<p> let p = document.getElementById("paragraf-hola") </p>

<p> p.textContent="Hola Món" </p>

### **Exercici 3 Atributs**

**Objectiu:** Canviar l’atribut src d’una imatge `<img>`.

**Solució:**

<p> let img = document.getElementById("imatge-canviant") </p>

<p> img.setAttribute("src", "https://albertonate.com/wp-content/uploads/2022/10/Logo-ILBclaim.png") </p>

### **Exercici 4 Estils**

**Objectiu:** Canviar el color de fons d’un element quan es fa clic.

**Solució:**

<p> let caixa = document.getElementById("caixa-estil") </p>

<p> caixa.addEventListener("click", function(){ </p>

<p>    caixa.style.backgroundColor = "#56d661" </p>
    
<p> }) </p>

### **Exercici 5 Classes**

**Objectiu:** Afegir o treure una classe amb classList.toggle.

**Solució:**

<p> let botoToggle = document.getElementById("boto-toggle") </p>

<p> let textClasse = document.getElementById("text-classe") </p>

<p>botoToggle.addEventListener("click", function(){ </p>

<p>    textClasse.classList.toggle("actiu") </p>
    
<p> }) </p>

### **Exercici 6 Esdeveniments**

**Objectiu:** Mostrar una alerta quan es fa clic en un botó.

**Solució:**

<p> let botoAlerta = document.getElementById("boto-alerta") </p>

<p> botoAlerta.addEventListener("click", function(){ </p>

<p>    alert("Hola! Has fet clic al boto.") </p>
    
<p> }) </p>

### **Exercici 7 Estructura**

**Objectiu:** Crear un nou element `<li>` i afegir-lo a una llista `<ul>`.

**Solució:**

<p> let botoAfegir = document.getElementById("boto-afegir") </p>

<p> let llista = document.getElementById("llista-compra") </p>
 
<p> botoAfegir.addEventListener("click", function(){ </p>

<p>    let nouItem = document.createElement("li") </p>
    
<p>    nouItem.textContent = "Nou producte" </p>
    
<p>    llista.appendChild(nouItem) </p>
    
<p> }) </p>

### **Exercici 8 Eliminació**

**Objectiu:** Eliminar un element del DOM en fer clic.

**Solució:**

<p> let elementEliminar = document.getElementById("element-eliminar") </p>

<p> elementEliminar.addEventListener("click", function(){ </p>

<p>    elementEliminar.remove() </p>
    
<p> }) </p>


### **Resum**

* Aquests exercicis cobreixen conceptes fonamentals del DOM:
* Selecció d’elements
* Manipulació de contingut
* Gestió d’atributs
* Estils dinàmics
* Classes CSS
* Esdeveniments
* Creació i eliminació d’elements
