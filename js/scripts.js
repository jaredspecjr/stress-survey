$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    var userResponses = [];
    var response1 = ["sleep", "overwhelmed", "headaches"]
    var response2 = ["blood", "anxiety", "asthma"]
    var response3 = ["meditate", "breath", "pet"]
    var response4 = ["sleep", "overwhelmed", "headaches" ,"blood", "anxiety", "asthma", "meditate", "breath", "pet"]
    event.preventDefault();
    debugger;
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
    //these lines work to select inputs from the user
    for (var i = 0; i < userResponses.length; i+= 1) {
      if (response1.includes(userResponses[i])){
        $("#response1").show();
        $("#response2").hide();
        $("#response3").hide();

      } else if (response2.includes(userResponses[i])) {
          $("#response2").show();
          $("#response1").hide();
          $("#response3").hide();

      } else if (response3.includes(userResponses[i])) {
          $("#response3").show();
          $("#response2").hide();
          $("#response1").hide();

      }

    };
console.log(userResponses);

  });
});
