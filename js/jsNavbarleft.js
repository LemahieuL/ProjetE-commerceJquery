$(function() {

  $("[type='checkbox']").change(function() {
    var catId = $(this).data("category");
    if ($(this).is(":checked")) {
      var array = ["processor", "motherboard", "graphics-card", "ram"];
      for (var i = 0; i < 4; i++) {
        if ($("[name='" + array[i] + "']").is(":checked")) {
          console.log(array[i]);
          $(".category[data-category='" + array[i] + "']").show();
        } else {
          console.log(array[i]);
          $(".category[data-category='" + array[i] + "']").hide();
        }
      }
    } else {
      $(".category[data-category='" + catId +"']").hide();
    }
  });
});
