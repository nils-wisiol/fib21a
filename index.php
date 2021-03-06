<?php
header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past
?><!DOCTYPE html>
<html>
  <head>
  
    <title>Fridge Information Broadcast 21A</title>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
    <script src="js/diashow.js"></script>
    <script src="js/worldclock.js"></script>
    <script src="js/date.js"></script>
    <script src="js/countdown.js"></script>
    <script src="js/greeting.js"></script>
    <script src="js/currentlyplaying.js"></script>
    <script src="js/styleiframe.js"></script>
    <script src="js/fortune.js"></script>
    <script type="text/javascript">
      /** Initialisierung */
      $(document).ready(function($) {
      
        // Diashow initialisieren
        initDiashow('<?php if (file_exists('diashowpath.txt')) { include('diashowpath.txt'); } else { echo "img/diashow-default.png"; } ?>', '#diashow', 2, 60 * 1000);
        
        // Weltuhr initialisieren
        initWorldclock('#worldclock-edt', -4 * 60); // Buffalo, Sommerzeit
        initWorldclock('#worldclock-cest', 2 * 60); // Würzburg, Sommerzeit
        initWorldclock('#worldclock-utcP8', 8 * 60); // Macao
        initDate('#worldclock-date', -4 * 60); // Buffalo Datum
        //initWorldclock('#worldclock-utcP8', 7 * 60); // Bangkok
        
        // Countdown initialisieren
        initCountdown('#countdown-1', 2013, 4, 19, 21, 0, 0);
        
        // Begrüßung initialisieren
        greet('#greeting');
        
        // "Sie hören gerade" initialisieren
        initCurrentlyPlaying('#currentlyplaying-text');
        
        // Kalender stylen
        $('iframe#calendar').ready(function() {
            setTimeout("styleIframe('calendar', 'css/calendar.css');", 30 * 1000);
        });

        // Fortune initialisieren
        initFortune('#fortune');
      });
    </script>
    
    <link href='http://fonts.googleapis.com/css?family=Merienda+One' rel='stylesheet' type='text/css'>
    
    
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/bootstrap-responsive.css" rel="stylesheet">
    <style type="text/css">
      #greeting { font-family: 'Merienda One', cursive; }
      div#diashow div.pics img { width: 100%; }
      span.seperator { color: #56789A; }
      span.unit { color: #555; }
      #fortune pre { font-size: 23px; border: none; word-break: normal; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; display: inline; margin: 0; padding: 0;}
      .well { border: none; }
      
      #currentlyplaying { background: #25770F; color: #CCC; text-transform: uppercase; font-size: 23px; padding-top: 5px; }
      #currentlyplaying .ampache { font-weight: bold; padding: 0px 15px; display: block; }
      #currentlyplaying .ampache-title { color: #FFF; }
      #currentlyplaying .ampache-album { font-size: 0.7em; }
      #currentlyplaying .ampache-artist { font-size: 0.8em; }
      
    </style>
  </head>
  <body>
    <div class="container" style="height:1050px; width:1680px; overflow: hidden; background: url(img/wallpaper.jpg)">
      <div class="row-fluid">
        <div class="span4">
          <div class="well" style="background-color: #002345">
              <div id="worldclock" style="color:#ABCDEF; position: relative; height: 275px;">
                <span style="position:absolute; font-size: 33px; left: 356px; top: 160px; color: #56789A;" id="worldclock-date">01.01.70</span>
                <span style="position:absolute; font-size: 40px; left: 300px; top: 125px">BUFFALO</span>
                <span style="position:absolute; font-size: 20px; left: 85px; top: 250px">W&Uuml;RZBURG</span>
                <span style="position:absolute; font-size: 20px; left: 413px; top: 250px">MACAO</span>
                <div style="width: 480px; margin: auto; position: relative;">
                  <span id="worldclock-edt" style="font-size:120px; font-weight: bold; line-height: 100%;"></span>
                  <span id="worldclock-cest" style="font-size:50px; font-weight: bold; display: inline-block; margin-top:95px"></span>
                  <span id="worldclock-utcP8" style="font-size:50px; font-weight: bold; display: inline-block; margin-top:95px; position:absolute; right:0;"></span>
                </div>
              </div>
          </div>
          <div class="row-fluid">
            <div class="row-fluid">
			        <div class="span5">
			          <div class="well" style="height:400px; background:transparent;">
			            <script src="http://weather.webmart.net/e/2371464"></script>
			          </div>
			        </div>
			        <div class="span7">
			          <div class="well" style="background: #EEDE13; padding: 2px 0px 2px 7px; overflow: hidden;">
			            <iframe id="calendar" name="calendar" src="https://www.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=500&amp;wkst=2&amp;hl=en&amp;bgcolor=%23eede13&amp;src=j68rfbc49hrdnt7rqen29gcf24%40group.calendar.google.com&amp;color=%23B1440E&amp;ctz=America%2FNew_York" style=" border-width:0 " width="290" height="250" frameborder="0" scrolling="no"></iframe>
			          </div>
			        </div>
			        <div class="span7">
			          <div class="well" id="currentlyplaying" style="height: 99px; overflow: hidden;">
			            <h4>currently playing</h4>
			            <h4 id="currentlyplaying-text"></h4>
			          </div>
			        </div>			                
          </div>
        </div>
        </div>
	      <div class="span7" id="diashow">
	        <div class="well" style="background-color: #9A0101; color: #EEE">
            <h1 id="greeting" style="text-align: center;"></h1>
	        </div>
	        <div class="well" style="padding: 0px; overflow: hidden;">
	          <div class="pics" style="height: 692px; overflow: hidden;">
	            <img class="a" />
	            <img class="b" />
	          </div>
	        </div>
	      </div>
	      <div class="span1">
	       <div class="well" style="height:770px; background-color: #222; text-align: center">
  	       <span id="countdown-1" style="font-size:44px; font-weight: bold; line-height: 100%; color: #56789A; display: block; -webkit-transform: rotate(90deg); margin-top: 5px;"></span>
	       </div>
	      </div>
	    </div>
	    <div class="row-fluid">
	      <div class="span6">
	        <div class="well">
	         <span id="fortune"></span>
          </div>
        </div>
	    </div>
    </div>
  </body>
</html>

