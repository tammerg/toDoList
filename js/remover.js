$(document).ready(function (){
  $(document).on("click",".btn-danger", function(){
    $(this).parents("tr").remove();
      });
  });
$(document).ready(function (){
  $(document).on("click",".btn-danger", function(){
    $t = $(this).closest('tr').find('td')[0];
    $(this).parents("tr").remove();
    $target = $('.panel-body').append($t);
      });
  });