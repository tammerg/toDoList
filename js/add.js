$(document).ready(function (){ 
   $(".btn-primary").on("click", function(e) {
    e.preventDefault();

    var newWord, newRow, wordTd, deleteButton, deleteTd;
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

    if(isDuplicate) {
      $(".alert").fadeIn(1000)
      return;
    }

    var newRow = $("<tr>");
    var newCheck = $("<td>").addClass("word-td").append(newCheck).before(); 
    var wordTd = $("<td>").addClass("word-td").append(newWord).before();
    var timeTd = $("<td>").addClass("word-td").append(newTime).before();
    

    var deleteButton = $("<button>").addClass("btn btn-danger buttonRemove").append("Remove");
    var deleteTd = $("<td>").append(deleteButton);

    newRow.append(wordTd).append(timeTd).append(newCheck).append(deleteTd).before(); 

    $("tbody").append(newRow);
    $("#newWord").val("")
    });
  });

