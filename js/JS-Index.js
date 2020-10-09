$(document).ready(function()
{
  var div=$("#ajax");
  div.html("<p>test</p>");
  //getElementsAjax();

  $(".navDinamico").hide();


});


$(window).scroll(function (event) {
  if ( $("#particles-js").height() > $(window).scrollTop()) 
  {
    $(".navDinamico").hide();
    console.log("hide");
  }  
  else
  {
    $(".navDinamico").show();
    console.log("show");
  }
});


function getElementsAjax()
{
    var jqxhr = $.get( "https://api.rawg.io/api/platforms", function() 
    {
      })
        .done(function(data) {
          alert( "second success" );
          console.log(data.results[0].name);
        })
        .fail(function() {
          alert( "error" );
        });
       
}