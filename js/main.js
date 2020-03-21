/* Fadein Sections*/
$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
      /* Check the location of each desired element */
      $('.hideme').each( function(i){
        var bottom_of_object = $(this).position().top + $(this).outerHeight()/4;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
          
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},1000);    
        } 
      }); 
  });
});
/* $(window).bind('scroll', function() {
  if($(window).scrollTop() >= $('#statistics').offset().top + $('#statistics').outerHeight() - window.innerHeight && check) {
    check = false;
    $(".timer").each(count);
  }
}); */

/* Start Of Statistics */ 
(function($) {
  $.fn.countTo = function(options) {
    options = options || {};

    return $(this).each(function() {
      // set options for current element
      var settings = $.extend(
        {},
        $.fn.countTo.defaults,
        {
          from: $(this).data("from"),
          to: $(this).data("to"),
          speed: $(this).data("speed"),
          refreshInterval: $(this).data("refresh-interval"),
          decimals: $(this).data("decimals")
        },
        options
      );

      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data("countTo") || {};

      $self.data("countTo", data);

      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      // initialize the element with the starting value
      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof settings.onUpdate == "function") {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
          // remove the interval
          $self.removeData("countTo");
          clearInterval(data.interval);
          value = settings.to;

          if (typeof settings.onComplete == "function") {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0, // the number the element should start at
    to: 0, // the number the element should end at
    speed: 1000, // how long it should take to count between the target numbers
    refreshInterval: 100, // how often the element should be updated
    decimals: 0, // the number of decimal places to show
    formatter: formatter, // handler for formatting the value before rendering
    onUpdate: null, // callback method for every time the element is updated
    onComplete: null // callback method for when the element finishes updating
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
})(jQuery);

jQuery(function($) {
  // custom formatting example
  $(".count-number").data("countToOptions", {
    formatter: function(value, options) {
      return value
        .toFixed(options.decimals)
        .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }
  });


  // 
  // start all the timers
  let check = true;
  $(window).bind('scroll', function() {
    if($(window).scrollTop() >= $('#statistics').offset().top + $('#statistics').outerHeight() - window.innerHeight && check) {
      check = false;
      $(".timer").each(count);
    }
  });


  

  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data("countToOptions") || {});
    $this.countTo(options);
  }
});

/* End Of Statistics */ 

											/* ------------------------------------- */

/* Start Patien Journey */

$(document).ready(function(){
  let check = true;
  $(window).bind('scroll', function() {
    if($(window).scrollTop() >= $('#patientJourney').offset().top + $('#patientJourney').outerHeight()/4*3 - window.innerHeight && check) {
      check = false;
      function setProgressBar(){
        if( typeof curStep == 'undefined' ) {
            curStep = 0;
        }
        
      // console.log(curStep);
      var percent = parseFloat(100 / 40) * curStep;
      percent = percent.toFixed();
      $(".progress-bar")
      .css("width",percent+"%");
      t = setTimeout(setProgressBar, 40);
      curStep++;
      if(curStep == 101)
          clearTimeout(t);
      if(curStep == 5){
          $("#progressbar li").eq(0).addClass("active");
          $("#request").css("color","#6c757d");
          document.querySelectorAll("#progressbar li.active")[0].style.setProperty("--colorBefore", "#6c757d");
          document.querySelectorAll("#progressbar li.active")[0].style.setProperty("--color1", "#6c757d");
          $(".progress-bar").eq(0).css("background-color","#6c757d")  ;
      
      }
      
      if(curStep == 30){
          $("#progressbar li").eq(1).addClass("active");
          $("#accepct").css("color","#ffc107");
          document.querySelectorAll("#progressbar li.active")[1].style.setProperty("--colorBefore", "#ffc107");
          $(".progress-bar").eq(0).css("background-color","#ffc107")
          
      
      }
      if(curStep == 45){
          $("#progressbar li").eq(2).addClass("active");
          $("#appointment").css("color","#afe400");
          document.querySelectorAll("#progressbar li.active")[2].style.setProperty("--colorBefore", "#afe400");
          $(".progress-bar").eq(0).css("background-color","#afe400")
      
      }
      if(curStep == 60){
          $("#progressbar li").eq(3).addClass("active");
          $("#rate").css("color","#28a745");
          document.querySelectorAll("#progressbar li.active")[3].style.setProperty("--colorBefore", "#28a745");
          $(".progress-bar").eq(0).css("background-color","#28a745")
      }
      }
      setProgressBar();
    }
  });
});
/* end Patien Journey */