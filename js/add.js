$(document).ready(function (){
  $(".btn-danger").on("click", function(){
    $(this).parents("tr").remove();
      $("#myTable tr:last")
        
      });
  });
});