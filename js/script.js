$(function() {
  var $items = $('.tabs__items');
  var $buttonHelp = $(':button');
  var $inputItem = $(':text');
  //var flag = 0;
  var toolTip = ["", "", ""];
  for (var i = 0; i < $inputItem.length; i++) {
  	toolTip[i] = $inputItem[i].title;
  	toolTip[i] = '<p class ="tooltips">' + toolTip[i] +'</p>';
  	$inputItem[i].title = "";
  	$('form input').eq([i]).after(toolTip[i]);
  };
    
  //Tabs    
  $items.on('click', function() {
  	$('.tabs__items').removeClass('tabs__items--active').css("background", "#EADAC2");
  	$('.tabs__content').removeClass('tabs__content--active').css('display', 'none');

  	$(this).css("background", "#F1ECE5");
    $(this).addClass('tabs__items--active');
    
    var $itemActive = $('.tabs__items--active').index();
    $('.tabs__content').eq($itemActive).addClass('tabs__content--active').slideUp().slideDown();
   });
 
  //button "Show help" - all tooltips
  $buttonHelp.on('click', function() {
    $('.tooltips').css('visibility', 'visible').slideUp().slideDown();
  });

  //hover input
  $inputItem.hover ( 
  	function() {
	  	$(this).next().css('visibility', 'visible');
    },
    function() {
    	$(this).next().css('visibility', 'hidden');
    }
    );

  //key Tab
  $inputItem.keyup(function (e) {
   if (e.which == 9) {
   	 $('.tooltips').css('visibility', 'hidden');
   	 $(this).next().css('visibility', 'visible');
   };
  });

  

});