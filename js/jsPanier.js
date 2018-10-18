// partie de florent qui gere le panier
var tableauProduits = [];
var PrixTotalPanier = 0;
var quantiteProduitPanier
$(function(){

  var addProduitDOMPanier = function(index, idProduit, title, qt, price){
    var modalProduitElement = `<div class="row produitPanier" data-id-panier="${index}">
      <div class="col-1 idProduit">
        ${idProduit}
      </div>
      <div class="col-6">
        ${title}
      </div>
      <div class="col-2">
        <input type="number" name="quantite" value="${qt}" style="width:40px;">
      </div>
      <div class="col-3">
        <div class="">
          ${price}€
        </div>
        <div class="">
          <a href="#" class="supprimerProduit">Supprimer</a>
        </div>
      </div>
    </div>`;

    $(".modal-body .container-fluid").append(modalProduitElement);
  }
  var paintPanier = function(){
    $(".modal-body .container-fluid").html('');
    window.tableauPanier.forEach(function(element, index) {
      addProduitDOMPanier(index, element[0], element[1], element[2], element[3])
      window.PrixTotalPanier  += Number(element[3]);
    })
  }



  window.tableauPanier = [
    [1, "gtx 960  GAMER", 2, "48.45"],
    [2, "Titant X geforce 1080", 2, "299.19"],
    [3, "MSI GeForce GTX 1050 Ti Gaming X - 4 Go", 2, "299.19"],
    [4, "MSI GeForce GTX 1060 6GT OC V1 - 6 Go", 2, "299.19"],
    [5, "Titant X geforce 1080", 2, "299.19"],
  ]

  //ajouterAuPanier(5, "Titant X geforce 1080", "299.19");
  //idProduit, titreProduit, prixproduit
  var ajouterAuPanier = function(){
    window.valexist = false;
    window.tableauPanier.forEach(function(element, index) {

      var result = -1;
      if( (result = jQuery.inArray(2,element)) != -1 ){
        if( result == 0){
          window.valexist = true;
          console.log(window.valexist)
        }
      }
    })

  }
  ajouterAuPanier();


  paintPanier();
  $("#nbrTotalProduitPanier").text(window.tableauPanier.length)
  $("#priceTotalProduitPanier").text(window.PrixTotalPanier)

  $(".modal-body").on("click", ".supprimerProduit",function(){
    var idPanierDelete =  $(this).parent().parent().parent().attr('data-id-panier');
    delete window.tableauPanier[idPanierDelete];
    paintPanier();
  })
});
