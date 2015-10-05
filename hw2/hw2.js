var currentSlide;
var animation;
var bw = $("body").width() + "px";
var slideShow = {
	initialize : function(obj, type, initSlide) {
		currentSlide = initSlide;
		animation = type;
		slideShow.obj = obj;
		var outS = "";
		for (var i = 0; i < obj.length; i++) {
			outS = outS + "<div style='background-image:url(" + obj[i]
					+ ")' class='slide' id='slide" + i + "'> </div>";
		}
		document.getElementById("container").innerHTML = outS;
		$(".slide").fadeOut(0);
		$("#slide" + initSlide).fadeIn(0);
	},
	goPrev : function() {
		var bw = $("body").width() + "px";
		var next = currentSlide - 1;
		if (next < 0) {
			next = 3;
		}
		if (animation === "fade") {
			$("#slide" + currentSlide).stop().fadeOut('slow');
			$("#slide" + next).stop().fadeIn('slow');
		} else {
			$("#slide" + currentSlide).stop().animate({
				"margin-left" : bw
			}, 'slow').fadeOut(0);
			$("#slide" + next).stop().animate({
				"margin-left" : "-" + bw
			}, 0).fadeIn(0).animate({
				"margin-left" : "0px"
			}, 'slow')
		}
		currentSlide = next;
	},
	goNext : function() {
		var bw = $("body").width() + "px";
		var next = currentSlide + 1;
		if (next > 3) {
			next = 0;
		}
		if (animation === "fade") {
			$("#slide" + currentSlide).stop().fadeOut('slow');
			$("#slide" + next).stop().fadeIn('slow');
		} else if (animation === "swipe") {
			$("#slide" + currentSlide).stop().animate({
				"margin-left" : "-" + bw
			}, 'slow').fadeOut(0);
			$("#slide" + next).stop().animate({
				"margin-left" : bw
			}, 0).fadeIn(0).animate({
				"margin-left" : "0px"
			}, 'slow');
		}
		currentSlide = next;
	},
	currentSlide : 0,
	obj : null
}
var startUp = function() {
	var obj = [
			"http://www.menucool.com/slider/jsImgSlider/images/image-slider-4.jpg",
			"http://www.menucool.com/slider/prod/image-slider-2.jpg",
			"http://www.menucool.com/slider/jsImgSlider/images/image-slider-1.jpg",
			"http://www.menucool.com/slider/prod/image-slider-5.jpg" ]
	slideShow.initialize(obj, "fade", 0);
	$("body").keydown(function(event) {
		var keyCode = event.keyCode;
		if (keyCode == 37) {
			slideShow.goPrev();
		} else if (keyCode == 39) {
			slideShow.goNext();
		}
	});
}
