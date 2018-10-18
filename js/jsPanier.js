// partie de florent qui gere le panier
var tableauProduits = [];
var PrixTotalPanier = 0;
var quantiteProduitPanier;
window.tableauPanier = [
  [1, "gtx 960  GAMER", 1, "10.00"],
  // [2, "Titant X geforce 1080", 1, "10.00"],
  // [3, "MSI GeForce GTX 1050 Ti Gaming X - 4 Go", 1, "10.00"],
  // [4, "MSI GeForce GTX 1060 6GT OC V1 - 6 Go", 1, "10.00"],
  // [5, "Titant X geforce 1080", 1, "10.00"],
]


$(function(){



  window.addProduitDOMPanier = function(index, idProduit, title, qt, price){
    var modalProduitElement = `<div class="row produitPanier" data-id-panier="${index}">
      <div class="col-1 idProduit">
        ${idProduit}
      </div>
      <div class="col-5 col-lg-6" style="white-space: nowrap;overflow:visible;">
        ${title}
      </div>
      <div class="col-8 col-lg-2 text-right" style="white-space: nowrap;min-width:72px;padding:0;">
        <input type="button" class="buttonMoinQtPanier" value="<" style="display:inline;width:15px;padding:0;" />
        <input type="number" min="1" max="99" name="quantite" value="${qt}" style="width:40px;text-align:center;" />
        <input type="button" class="buttonPlusQtPanier" value=">" style="display:inline;width:15px;padding:0;" />
      </div>
      <div class="col-3 text-right">
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
  window.paintPanier = function(){
    $(".modal-body .container-fluid").html('');
    window.PrixTotalPanier = 0;
    var countIndex = 0;
    window.tableauPanier.forEach(function(element, index) {
      addProduitDOMPanier(index, element[0], element[1], element[2], element[3])
      window.PrixTotalPanier  += Number(element[3])*Number(element[2]);
      $("#nbrTotalProduitPanier").text(++countIndex);
    })
    if( countIndex > 0){
      $("#commanderPanier").prop('disabled', false);
      $(".panier-vide-non-vide").css("display", "block");
      $(".panier-vide").css("display", "none");
    }else{
      $("#commanderPanier").prop('disabled', true);
      $(".panier-vide-non-vide").css("display", "none");
      $(".panier-vide").css("display", "block");
    }

    $("#priceTotalProduitPanier").text(Number.parseFloat(window.PrixTotalPanier).toFixed(2));

  }

  window.referenceExist = function(idProduit){

    window.valexist = false;
    var n = window.tableauPanier.length;
    for( var i=0; i <n ; i++){
      var tabProduit = window.tableauPanier[i];
      if( (result = jQuery.inArray(idProduit,tabProduit)) != -1 ){
        if( result == 0){
          return tabProduit[2];
        }
      }
    }
    return false;

  }

  window.modifierQTProduitPanier = function(idProduit, qtProduit){
    var n = window.tableauPanier.length;
    for( var i=0; i <n ; i++){
      var tabProduit = window.tableauPanier[i];
      if( (result = jQuery.inArray(idProduit,tabProduit)) != -1 ){
        if( result == 0){
          tabProduit[2] = Number(qtProduit);
          return tabProduit[2];
        }
      }
    }
    return false;
  }

  //ajouterAuPanier(5, "Titant X geforce 1080", "299.19");
  window.ajouterAuPanier = function(idProduit, titreProduit, prixproduit){
    if(  window.referenceExist(idProduit) !== false ){
      var newQt = Number(window.referenceExist(idProduit)) + 1;
      window.modifierQTProduitPanier(idProduit, newQt);
    }else{
      window.tableauPanier.push([idProduit, titreProduit, 1, prixproduit])
    }
    paintPanier();
  }









  paintPanier();


  $(".modal-body").on("click", ".supprimerProduit",function(){
    var idPanierDelete =  $(this).parent().parent().parent().attr('data-id-panier');
    delete window.tableauPanier[idPanierDelete];
    paintPanier();
  })

  var inputQtUpdatePanier = function(){
    var tabInputQt = $("input[name=quantite]");
    var n = $("input[name=quantite]").length
    for(var i=0; i<n; i++){
      var indicePanier = $(tabInputQt[i]).parent().parent().attr("data-id-panier")
      window.tableauPanier[indicePanier][2] = tabInputQt[i].value;
    }
    paintPanier();
  }
  $(".modal-body").on("keyup", "input[name=quantite]",function(){
    inputQtUpdatePanier();
  })
  $(".modal-body").on("click", "input[name=quantite]",function(){
    inputQtUpdatePanier();
  })

  $(".modal-body").on("click", ".buttonMoinQtPanier",function(){
    var newVal = (Number($(this).next().val())-1)
    if(newVal < 1){
      newVal = 1;
    }
    if(newVal > 99){
      newVal = 99;
    }
    $(this).next().val( newVal  )
    inputQtUpdatePanier();
  })

  $(".modal-body").on("click", ".buttonPlusQtPanier",function(){
    var newVal = (Number($(this).prev().val())+1)
    if(newVal < 1){
      newVal = 1;
    }
    if(newVal > 99){
      newVal = 99;
    }
    $(this).prev().val( newVal  )
    inputQtUpdatePanier();;
  })

});
