(function() {

	var parallax = function() {
		var scrolled = $(window).scrollTop();
        console.log(scrolled, $('#home').height());

        $('#titles').css('margin-top', -(scrolled/7));

        if(scrolled > $('#home').height()) {
            $('#sitenav').addClass('navsolid');
            $('#main-nav').addClass('mainsolid');
        }
        else {
            $('#sitenav').removeClass('navsolid');
            $('#main-nav').removeClass('mainsolid');
        }
	}

	$(window).scroll(parallax);

})();


//Smooth scrolling
$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
    	  if ($target.offset()) {
	        var targetOffset = $target.offset().top;
	        $(this).click(function(event) {
	          event.preventDefault();
	          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
	            location.hash = target;
	          });
	        });
    	  }
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }

  //Time
  
  
  
 
});



