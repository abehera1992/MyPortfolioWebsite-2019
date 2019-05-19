
// <!-- Global site tag (gtag.js) - Google Analytics -->


  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-140456843-1');



    var scroll = new SmoothScroll('a[href*="#"]');

    $('#homeTab').on('click', function (e) {
      
        $(this).addClass('active'),
        $('#aboutTab').removeClass('active'),
        $('#resumeTab').removeClass('active'),
        $('#contactTab').removeClass('active');
      });
      $('#aboutTab').on('click', function (e) {
   
        $(this).addClass('active'),
        $('#homeTab').removeClass('active'),
        $('#resumeTab').removeClass('active'),
        $('#contactTab').removeClass('active');
      });
      $('#resumeTab').on('click', function (e) {
    
        $(this).addClass('active'),
        $('#homeTab').removeClass('active'),
        $('#aboutTab').removeClass('active'),
        $('#contactTab').removeClass('active');
      });
      $('#contactTab').on('click', function (e) {
   
        $(this).addClass('active'),
        $('#homeTab').removeClass('active'),
        $('#aboutTab').removeClass('active'),
        $('#resumeTab').removeClass('active');
      });
      


