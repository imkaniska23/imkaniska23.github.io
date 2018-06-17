document.body.addEventListener("keydown",function(e){
			if(e.which==37)
			{
				alert("You pressed left arrow key.In time, it'll take you to previous page");
			}
			else
				if(e.which==39)
				{
					alert("You pressed the right arrow key. In time, it'll take you to the next page");
				}
		})
window.onload=function(){
		$(".fa").delay(3000).fadeOut();
		var winHeight=$(window).height();
		var winWidth=$(window).width();
		var imgHeight=winHeight+"px";
		$(".disp").css("height",imgHeight);
		var iconHeight=(winHeight/2)+"px";
		var rightWidth=(winWidth-20)+"px";
		$(".fa").css("marginTop",iconHeight);
		$(".fa-caret-right").css("marginLeft",($(".container").width()-20)+"px");
		$(window).resize(function(){
			var winHeight=$(window).height();
			var winWidth=$(window).width();
			var imgHeight=winHeight+"px";
			$(".disp").css("height",imgHeight);
			var iconHeight=(winHeight/2)+"px";
			var rightWidth=(winWidth-20)+"px";
			$(".fa").css("marginTop",iconHeight);
			$(".fa-caret-right").css("marginLeft",($(".container").width()-20)+"px");
		});
		$("body").mousemove(function(){
			$(".fa").css("display","block");
			$(".fa").delay(6000).fadeOut();
		});
		$("body").click(function(){
			$(".fa").css("display","block");
			$(".fa").delay(6000).fadeOut();
		});
		$(".fa-caret-left").click(function(event){
			event.stopPropagation();
			alert("You clicked the left caret. In time, it will take you to previous page.");
		});
		$(".fa-caret-right").click(function(event){
			event.stopPropagation();
			alert("You clicked the right caret. In time, it will take you to next page.");
		});
	};