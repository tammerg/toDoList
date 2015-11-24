$(document).ready(function (){ 

 $(".btn-primary").on("click", function(e) {
  e.preventDefault();
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
  var wordTd = $("<td>").addClass("word-td").append(newWord);
  var timeTd = $("<td>").addClass("word-td").append(newTime);
  var newCheck = $("<td>").addClass("word-td").append(newCheck); 
  var deleteButton = $("<button>").addClass("btn btn-danger buttonRemove").append("Remove");
  var deleteTd = $("<td>").append(deleteButton);

  newRow.append(wordTd).append(timeTd).append(newCheck).append(deleteTd).before(); 

  $("tbody").append(newRow);
  $("#newWord").val("")
  });
});

