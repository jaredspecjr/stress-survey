$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    var userResponses = [];
    event.preventDefault();
    $("input:checkbox[name=stress]:checked").each(function(){
      var info = $(this).val();
      userResponses.push(info);
    });
    $("input:checkbox[name=health]:checked").each(function(){
      var info = $(this).val();
      userResponses.push(info);
    });
    $("input:checkbox[name=relief]:checked").each(function(){
      var info = $(this).val();
      userResponses.push(info);
    });

    for (var i = 0; i <= userResponses.length; i++ ) {
      if (userResponses[i] === "sleep") {
        $("#response1").show();

    console.log(userResponses);
  }

}

  });
});
