$(function(){
	$.fn.gnb = function() {
		var gnbWrap = $(this)
			,depth1Menu = gnbWrap.find('.gnbNav > ul > li > a')
			,depth2 = gnbWrap.find('.depth2')
			,bg2depth = gnbWrap.find('.bg2depth')
			,depth2H = 0;

		$('.depth2').each(function(){
			var _thisH = $(this).height();
			if (_thisH > depth2H) depth2H = _thisH;
		});
		depth2.css('height',depth2H + 30 + 'px');
		bg2depth.css('height',depth2H + 30 + 'px');
		depth1Menu.on('mouseenter', function(){
			depth2.slideDown(300);
			bg2depth.slideDown(300);
		});
		gnbWrap.on('mouseleave', function(){
			depth2.stop().slideUp(300);
			bg2depth.stop().slideUp(300);
		});
	}
	$('#gnb').gnb();

	$.fn.snb = function() {
		var snbWrap = $(this)
			,acoMenu = snbWrap.find('.acoNav > ul > li > a');

		acoMenu.click(function(){
			var _this = $(this);
			if (!_this.hasClass('open')) {
				_this.next().slideDown(300);
				_this.addClass('open');
			} else {
				_this.next().slideUp(300);
				_this.removeClass('open');
			}
			return false;
		});
	}
	$('#snb').snb();

	$('.btnSnb').click(function(){
		$('#snb').css('overflow','hidden');
		$('#snb').animate({'width' : '0'},300);
		$('#contents').animate({'width' : '1000px'},300);
		$(this).animate({'margin-left':'-520px'},300,function(){$(this).hide()});
	});
});