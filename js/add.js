$(document).ready(function (){ 
   $(".btn-primary").on("click", function(e) {
    e.preventDefault();

    var newWord, newRow, wordTd, newCheck, deleteButton, deleteTd;
    var isDuplicate;
    newWord = $(".newWord").val();
    newTime = $(".newTime").val(); 
    newCheck = $(".newCheck").val();
    var newRow = $("<tr>");
    var newCheck = $("<input>").attr("type", "checkbox").attr("class", "newCheck").attr("data-state", "not-checked");
    var wordTd = $("<td>").append(newWord).before();
    var timeTd = $("<td>").append(newTime).before();
    var deleteButton = $("<button>").addClass("btn btn-danger buttonRemove").append("Remove");
    var deleteTd = $("<td>").append(deleteButton);

    newRow.append(newCheck).append(wordTd).append(timeTd).append(deleteTd).before(); 

    $("tbody").append(newRow);
    $("#newWord").val("")
    });
  });
  $(document).on("click", ".newCheck", function(){
  if($(this).prop("checked") === true){
    $(this).parent().attr("class", "done");
  }
  else{
    $(this).parent().removeClass();
  }
});

