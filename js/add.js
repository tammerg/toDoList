$(document).ready(function (){ 

   $(".btn-primary").on("click", function(e) {
    e.preventDefault();

    var newWord, newRow, wordTd, deleteButton, deleteTd;
    var isDuplicate;

    newWord = $(".newWord").val();

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

    newRow = $("<tr>");
    wordTd = $("<td>").addClass("word-td").append(newWord);
    deleteButton = $("<button>").addClass("btn btn-danger buttonRemove").append("Remove");
    deleteTd = $("<td>").append(deleteButton);

    newRow.append(wordTd).append(deleteTd);

    $("tbody").append(newRow);
    $("#newWord").val("")
    });
  });

