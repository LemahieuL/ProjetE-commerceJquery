$(function() {
  $("[type='checkbox']").change(function() {
    if ($(this).is(":checked")) {
      var catId = $(this).data("category");
      $(".category").hide();
      $(".category[data-category='" + catId +"']").show();
    } else {
      $(".category").show();
    }
  });
});
