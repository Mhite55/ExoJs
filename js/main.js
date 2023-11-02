const replique = document.getElementById("p")
const replique1 = document.getElementById("p-1")
const replique2 = document.getElementById("p-2")
const replique3 = document.getElementById("p-3")
const btnHaut = document.getElementById("btn-haut")
const btnBas = document.getElementById("btn-bas")
const afficheNumRep = document.getElementById("affiche-num")
const afficheRep = document.getElementById("rep")

let repliqueArray = ["Réplique 1 :<span>« Pourquoi voulez-vous boxer ?\" - Parce que je ne peux pas chanter ou danser »</span> (Rocky)" , "Réplique 2 :<span>« Il y a un dicton en Italie : on peut se brûler la langue avec un bol de soupe. - Il y a un dicton en Irlande : rien à foutre des dictons italiens ».</span> (Piège en eaux troubles) " , "Réplique 3 :<span>« Alex, ne fait pas ça, c'est ton frère! - Pourquoi, parce qu'il me ressemble? Je vais changer ça tout de suite »</span> (Double Impact)" , "Réplique 4 :<span>« T'aimes bien les omelettes ? ... Tiens, je te casse les œufs ! »</span>  (Last Action Hero)"]
let repliqueArrayCopies = [...repliqueArray] 

let value = 0

replique.innerHTML = repliqueArray[0]
replique1.innerHTML = repliqueArray[1]
replique2.innerHTML = repliqueArray[2]
replique3.innerHTML = repliqueArray[3]

replique.addEventListener("click", function(){
    value = + 1
    this.className = "yellow"
    replique1.className = ""
    replique2.className = ""
    replique3.className = ""
    afficheNumRep.innerHTML ="1"
    console.log(value)
})
replique1.addEventListener("click", function(){
    value = +2
    this.className = "yellow"
    replique.className = ""
    replique2.className = ""
    replique3.className = ""
    afficheNumRep.innerHTML ="2"
    console.log(value)
})
replique2.addEventListener("click", function(){
    this.className += "yellow"
    value = +3
    replique.className = ""
    replique1.className = ""
    replique3.className = ""
    afficheNumRep.innerHTML ="3"
    console.log(value)
})
replique3.addEventListener("click", function(){
    this.className += "yellow"
    value = +4
    replique.className = ""
    replique1.className = ""
    replique2.className = ""
    afficheNumRep.innerHTML ="4"
    console.log(value)
})
btnHaut.addEventListener("click", function(){
    if (value >= 1) {
        const pr =  repliqueArray.shift()
        repliqueArray.push(pr)
    }else{
        afficheRep.innerHTML = "Aucune Réplique Séléctionée Idiot"
    }
    replique.innerHTML = repliqueArray[0]
    replique1.innerHTML = repliqueArray[1]
    replique2.innerHTML = repliqueArray[2]
    replique3.innerHTML = repliqueArray[3]
})
btnBas.addEventListener("click", function(){
    if (value >= 1) {
        const dr =  repliqueArrayCopies.pop()
        repliqueArray.push(dr)
    }else{
        afficheRep.innerHTML = "Aucune Réplique Séléctionée Idiot"
    }
    replique.innerHTML = repliqueArrayCopies[0]
    replique1.innerHTML = repliqueArrayCopies[1]
    replique2.innerHTML = repliqueArrayCopies[2]
    replique3.innerHTML = repliqueArrayCopies[3]
})
console.log(btnBas)
