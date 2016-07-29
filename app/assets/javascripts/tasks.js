// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function ready_or_not(){
  $("#new_task").on("ajax:complete", function(event, response, status){
    $("#thing_to_update").append(response.responseText);
    $("#task_name").val('');

  });
}

$(document).on("ready", ready_or_not);
