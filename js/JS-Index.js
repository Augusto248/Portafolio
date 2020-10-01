$(document).ready(function()
{
  var div=$("#ajax");
  div.html("<p>test</p>");
  //getElementsAjax();
  

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