$(function(){
	$.fn.gnb = function() {
		var gnbWrap = $(this)
			,depth1Menu = gnbWrap.find('.gnbNav > ul > li > a')
			,depth2 = gnbWrap.find('.depth2')
			,bg2depth = gnbWrap.find('.bg2depth')
			,menuBtn = $('.btnMobNav')
			,depth2H = 0;
		
		if (winW > 1023) {
			$('.depth2').each(function(){
				var _thisH = $(this).height();
				if (_thisH > depth2H) depth2H = _thisH + 30;
			});
			depth2.css('height',depth2H + 'px');
			bg2depth.css('height',depth2H + 'px');
		}
		menuBtn.on('click', function(){
			$(this).toggleClass('close');
			gnbWrap.slideToggle(300);
		});
		depth1Menu.on({
			'mouseenter' : function(){
				if ($(window).width() > 1023) {
					depth2.slideDown(300);
					bg2depth.slideDown(300);
				}
			},
			'click' : function(){
				if ($(window).width() <= 1023) {
					depth2.slideUp(300);
					$(this).next().slideDown(300);
				}
			}
		});
		gnbWrap.on('mouseleave', function(){
			if ($(window).width() > 1023) {
				depth2.stop().slideUp(300);
				bg2depth.stop().slideUp(300);
			}
		});
	}
	$('#gnb').gnb();

	$.fn.snb = function() {
		var snbWrap = $(this)
			,acoMenu = $('.acoNav > ul > li > a');

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
		var $this = $(this);
		if (!$this.hasClass('returnSnb')) {
			$('#snb').css('overflow','hidden').animate({'width' : '0'},300);
			$('#contents').animate({'width' : '1000px'},300);
			$this.animate({'margin-left':'-510px'},300,function(){$this.addClass('returnSnb')});
		} else {
			$('#snb').css('overflow','').animate({'width' : '150px'},300);
			$('#contents').animate({'width' : '820px'},300);
			$this.animate({'margin-left':'-340px'},300,function(){$this.removeClass('returnSnb')});
		}
	});
	$('.searchToggle').click(function(){
		if (!$(this).hasClass('openSearch')) {
			var searcH = $('.searchTable > table').height();
			$('.searchTable').animate({'height':searcH+'px'},300);
			$(this).addClass('openSearch');
		} else {
			$('.searchTable').animate({'height' : '95px'},300);
			$(this).removeClass('openSearch');
		}
	});
	$(".datepicker").datepicker({
		changeYear: true,
		changeMonth: true,
		showMonthAfterYear: true,
		yearSuffix: "년",
		showOn: "button",
		buttonText: "날짜선택",
		prevText: "이전달",
		nextText: "다음달",
		dateFormat: "yy / mm / dd",
		dayNamesMin: ["일","월","화","수","목","금","토"],
		monthNamesShort: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]


	});
	
});
var winW = $(window).width();
function fontSize(w) {
	if (w < 560) {
		var fontSize = w / 58;
		$('html').css('font-size', Math.floor(fontSize*100)/10 + '%');
	} else {
		$('html').css('font-size','62.5%');
	}
	
}
fontSize(winW);
$(window).resize(function(){
	var winW = $(window).width();
	fontSize(winW);
});