$(function () {

window.amout = function(this) {
  var number = Number($(this).attr("data-id-product"));
  var amount = referenceExist(number);
  $(this).parent().parent().find(".amount").text(amount);
}
  $("i").click(function() {
    amout(this);
  });

  setInterval(amout(this), 200);

});
