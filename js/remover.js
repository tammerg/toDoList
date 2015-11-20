$(document).ready(function (){
  $(".btn btn-danger buttonRemove").on("click", function(){
    $(this).parents("tr").remove();
      });
  });