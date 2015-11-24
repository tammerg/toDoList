$(document).ready(function (){
  $(document).on("click",".btn-danger", function(){
    $(this).parents("tr").remove();
      });
  });