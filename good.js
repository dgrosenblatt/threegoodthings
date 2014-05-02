$( document ).ready(function() {
    $( ".thing" ).fadeIn(500);
    $( "#submit" ).fadeIn(500);
});

$( "#submit" ).click(function() {
    $( ".thing" ).slideUp(400, function() {
        $( "#submit" ).hide();
        $( "p" ).hide();
        $( "input" ).addClass("after");
        $( "#1" ).fadeIn(2500, function(){
            $( "#1" ).fadeOut(400, function() {
                $( "#2" ).fadeIn(2500, function() {
                    $( "#2" ).fadeOut(400, function() {
                        $( "#3" ).fadeIn(2500, function() {
                            $( "#3" ).fadeOut(400, function() {
                                $( ".thing" ).slideDown();
                                $( "footer" ).fadeIn();
                            });
                        });
                    });
                });
            });
        });        
    });
});

$( "input" ).bind("enterKey",function(e){
   $( ".thing" ).slideUp(400, function() {
        $( "#submit" ).hide();
        $( "p" ).hide();
        $( "input" ).addClass("after");
        $( "#1" ).fadeIn(2500, function(){
            $( "#1" ).fadeOut(400, function() {
                $( "#2" ).fadeIn(2500, function() {
                    $( "#2" ).fadeOut(400, function() {
                        $( "#3" ).fadeIn(2500, function() {
                            $( "#3" ).fadeOut(400, function() {
                                $( ".thing" ).slideDown();
                                $( "footer" ).fadeIn();
                            });
                        });
                    });
                });
            });
        });        
    });
});
$('input').keyup(function(e){
    if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
    }
});

$( "#about" ).click(function() {
    $( ".inspiration" ).hide();
    $( ".why" ).hide();
    $( ".about" ).slideDown();
});

$( ".about" ).click(function() {
    $( ".about" ).slideUp();
});

$( "#inspiration" ).click(function() {
    $( ".why" ).hide();
    $( ".about" ).hide();
    $( ".inspiration" ).slideDown();
});

$( ".inspiration" ).click(function() {
    $( ".inspiration" ).slideUp();
});

$( "#why" ).click(function() {
    $( ".about" ).hide();
    $( ".inspiration" ).hide();
    $( ".why" ).slideDown();
});

$( ".why" ).click(function() {
    $( ".why" ).slideUp();
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-48160620-1', 'threegoodthingsabouttoday.com');
  ga('send', 'pageview');