$(document).ready(function(){

$("form#input").submit(function(event){
  event.preventDefault();
    $("form#test").fadeIn();

    $("form#test").submit(function(event){
      event.preventDefault();

      var answer1 = $("input:radio[name=q1]:checked").val();
      var answer2 = $("input:radio[name=q2]:checked").val();
      var answer3 = $("input:radio[name=q3]:checked").val();
      var answer4 = $("input:radio[name=q4]:checked").val();
      var answer5 = $("input:radio[name=q5]:checked").val();

       var array = [answer1, answer2, answer3, answer4, answer5];

      var ruby = 0;
      var css = 0;
      var csharp = 0;

      for(var i=0; i<5; i++)
      {
        answer = array[i];

        if(answer === "a"){
          csharp ++;
        }
         else if(answer === "b"){
          ruby ++;
        }
        else{
          css ++;
        }

      }

      var max = Math.max(csharp,ruby,css);

      if (max === ruby) {
        $("#result").show();
        $("span.name").text(name);
        $("span.path").text("Ruby/Rails");
      }
      else if (max === css) {
        $("#result").show();
        $("span.name").text(name);
        $("span.path").text("CSS/React");
      }
      else {
        $("#result").show();
        $("span.name").text(name);
        $("span.path").text("C#/.NET");
      }

    });
});




});
