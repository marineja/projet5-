

var allarticles = recherchedinfocamera();
console.log(allarticles);
var allarticleJSON = JSON.parse(allarticles);
console.log(allarticleJSON);

allarticleJSON.forEach(element => {
    console.log(element.name);
    let block = document.createElement("div")
    block.setAttribute("class","nomarticle")
    block.innerHTML = element.name;
    let balisehtmlarticles = document.getElementById("articles");
    balisehtmlarticles.appendChild(block);

});




function recherchedinfocamera() {
    var articles;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      articles = this.responseText;
      }
    };
    xhttp.open("GET", "http://localhost:3000/api/cameras", false);
    xhttp.send();
    return articles;
  }