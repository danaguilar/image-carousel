$(document).ready(function(){
	appendImages();
	$(".selector").click(function(){
		transitionImage($(this))
	});	
	interval = setInterval(moveLeft,5000);

});

function moveLeft(){
	if($(".images").css("right") == "2000px"){
		activateSelector($("#selector1"));
		$(".images").animate({right: "+=400px"}, "slow", "swing", function(){ $(".images").css("right", "400px")});
	}
	else{
		activateSelector($(".active").next());
		$(".images").animate({right: "+=400px"}, "slow", "swing");
	}
}

function moveRight(){
	if($(".images").css("right") == "400px"){
		activateSelector($("#selector5"));
		$(".images").animate({right: "-=400px"}, "slow", "swing", function(){ $(".images").css("right", "2000px")});
	}
	else{
		activateSelector($(".active").prev());
		$(".images").animate({right: "-=400px"}, "slow", "swing");	}

}

function activateSelector(element){
	$(".active").toggleClass("active");
	element.toggleClass("active");
}

function transitionImage(selectorEle){
	var selectorID = selectorEle.attr("id");
	activateSelector(selectorEle);
	switch(selectorID) {
		case "selector1":
			$(".images").animate({right: "400px"}, "fast", "swing");
			break;

		case "selector2":
			$(".images").animate({right: "800px"}, "fast", "swing");
			break;

		case "selector3":
			$(".images").animate({right: "1200px"}, "fast", "swing");
			break;

		case "selector4":
			$(".images").animate({right: "1600px"}, "fast", "swing");
			break;

		case "selector5":
			$(".images").animate({right: "2000px"}, "fast", "swing");
			break;

	}
}

function resetInterval(){
	interval.clearInterval();
	interval = setInterval(moveLeft,5000);
}

function appendImages(){
	var firstImage = $(".images").children().first().clone()
	var lastImage = $(".images").children().last().clone()
	firstImage.appendTo($(".images"));
	lastImage.prependTo($(".images"));

}