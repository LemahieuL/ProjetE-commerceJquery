$(function () {

  $("i").click(function() {
    var number = Number($(this).attr("data-id-product"));
    var amount = referenceExist(number);
    $(this).parent().parent().find(".amount").text(amount);
  });

});
