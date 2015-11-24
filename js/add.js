$(document).ready(function (){ 
   $(".btn-primary").on("click", function(e) {
    e.preventDefault();

    var newWord, newRow, wordTd, newCheck, deleteButton, deleteTd;
    var isDuplicate;

    newWord = $(".newWord").val();
    newTime = $(".newTime").val(); 
    newCheck = $(".newCheck").val(); 

    $("td.word-td").each(function(){
      if($(this).text() === newWord) {
        isDuplicate = true;
        return;
      }
    });

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

