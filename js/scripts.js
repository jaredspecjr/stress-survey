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
    //vthese lines work to select inputs from the userv
    for (var i = 0; i <= userResponses.length; i++ ) {
    //^these lines work to select inputs from the user^
    //veverything else is bad code cause i cant figure out logic right now"v
      if (userResponses[i] === "sleep" || userResponses[i] === "overwhelmed" || userResponses[i] === "headaches"){
        $("#response1").show();
      } else if (userResponses[i] === "blood"){
        $("#response2").show();
      }

    };
console.log(userResponses);

  });
});
