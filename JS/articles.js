/* recuperer l'id de l'url de la page du produit */
const params = new URLSearchParams(document.location.search);
const id = params.get("id");
console.log(id);



fetch("http://localhost:3000/api/cameras/"+id) //appel de l'API 
.then(res => res.json())
.then(res => {
  console.log(res);
  var allarticleJSON = res;
  console.log(allarticleJSON);

  let blockarticle = document.createElement('div');

    console.log(allarticleJSON.name);
    let block = document.createElement("h4");
    block.setAttribute("class","card-header py-3");
    block.innerHTML = allarticleJSON.name;

    console.log(allarticleJSON.description);
    let blockdescription = document.createElement("div");
    blockdescription.setAttribute("class","descriptionarticles");
    blockdescription.innerHTML = allarticleJSON.description;

    console.log(allarticleJSON.price);
    let blockprix = document.createElement("div");
    blockprix.setAttribute("class","prix");
    blockprix.innerHTML = allarticleJSON.price;

    console.log(allarticleJSON.imageUrl);
    let blockimages = document.createElement("img");
    blockimages.setAttribute("class","imagecamera");
    blockimages.setAttribute("src",allarticleJSON.imageUrl);
  

    var blockselect = document.createElement('select');
    blockselect.setAttribute("name","option_produit");
    blockselect.setAttribute("id","option_produit");
    
    let optionduselect = document.createElement('option');
    optionduselect.innerHTML = "Choisissez votre lentille";

    optionduselect.setAttribute("value","");
    blockselect.appendChild(optionduselect);


    allarticleJSON.lenses.forEach(element => {
      console.log(element);
      let optionduselect = document.createElement('option');
      optionduselect.innerHTML = element;
      optionduselect.setAttribute("value",element);
      blockselect.appendChild(optionduselect);

      
    });

    let boutonacheter = document.createElement('button');
    boutonacheter.setAttribute("id", "boutonacheter");
    boutonacheter.innerHTML = "acheter l'article";

    /*ajouter evenement click*/
    boutonacheter.addEventListener("click",function(){


    });
    

    let balisehtmlarticle = document.getElementById("descriptionarticle");
    balisehtmlarticle.appendChild(blockarticle);  
    blockarticle.appendChild(block);
    blockarticle.appendChild(blockdescription);
    blockarticle.appendChild(blockprix);
    blockarticle.appendChild(blockimages);  
    blockarticle.appendChild(blockselect);
    blockarticle.appendChild(boutonacheter);

    var btn_envoyerPanier = document.getElementById("boutonacheter");


    //ecouter le bouton et envoyer le panier
    
    btn_envoyerPanier.addEventListener("click",(event)=>{
      
      event.preventDefault();
    
    
    
      //mettre le choix de l'utilisateur dans une variable
    
    var choixForm = document.getElementById("option_produit").value;
    console.log(choixForm);
    
    
    
    
    
    //--------------------------------local storage---------------------------------------------
    
    //stoker les valeur du formulaire dans le local storage
    //declaration de variable pour les clefs du localstorage
    let produitEnregistreDansLeLocalsrorage = JSON.parse(localStorage.getItem("produit"));
    //si il y a deja des produit dans le localstorage
    if(produitEnregistreDansLeLocalsrorage){
      let produitidlentille = [
        id, choixForm 
      ];
      produitEnregistreDansLeLocalsrorage.push(produitidlentille);
      console.log(produitEnregistreDansLeLocalsrorage);
      localStorage.setItem("produit", JSON.stringify(produitEnregistreDansLeLocalsrorage));// on envoie les infos au localstorage
    
    }
    //si pas de produit dans le local storage
    else{
      produitEnregistreDansLeLocalsrorage = [];
      let produitidlentille = [
        id, choixForm 
      ];
      produitEnregistreDansLeLocalsrorage.push(produitidlentille);
      console.log(produitEnregistreDansLeLocalsrorage);
      localStorage.setItem("produit", JSON.stringify(produitEnregistreDansLeLocalsrorage)); // on envoie les infos au localstorage
    }
    
    });

});





/*function recherchedinfocamera() {
    var articles;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      articles = this.responseText;
      }
    };
    xhttp.open("GET", "http://localhost:3000/api/cameras/"+id, false);
    xhttp.send();
    return articles;
  }/*


//recuperation des données selectionnées par l'utilisateur et envoie du panier

// selection id du formulaire
/*
var idForm = document.querySelector("#option_produit");

//mettre le choix de l'utilisateur dans une variable

var choixForm = idForm.value;
*/
// selection du bouton acheter l'article





