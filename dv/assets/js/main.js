window.onload=function(){
		var imageType="jpg";
		var totalPages=3;
		if(!localStorage.pageNo)
		{
			localStorage.pageNo=1;
		}
		$(".disp").attr("src","assets/images/"+localStorage.pageNo+".jpg");
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
		document.body.addEventListener("keydown",function(e){
			if(e.which==37)
			{
				if(localStorage.pageNo==1)
				{
					localStorage.pageNo=totalPages;
					$(".disp").fadeOut(function(){
						$(".disp").attr("src","assets/images/"+localStorage.pageNo+".jpg");	
					});
					$(".disp").fadeIn();
				}
				else
				{
					localStorage.pageNo--;
					$(".disp").fadeOut(function(){
						$(".disp").attr("src","assets/images/"+localStorage.pageNo+".jpg");	
					});
					$(".disp").fadeIn();
				}
			}
			else
				if(e.which==39)
				{
					if(localStorage.pageNo==totalPages)
				{
					localStorage.pageNo=1;
					$(".disp").fadeOut(function(){
						$(".disp").attr("src","assets/images/"+localStorage.pageNo+".jpg");	
					});
					$(".disp").fadeIn();
				}
				else
				{
					localStorage.pageNo++;
					$(".disp").fadeOut(function(){
						$(".disp").attr("src","assets/images/"+localStorage.pageNo+".jpg");	
					});
					$(".disp").fadeIn();
				}
				}
		})
		$(".fa-caret-left").click(function(event){
			event.stopPropagation();
			if(localStorage.pageNo==1)
			{
				localStorage.pageNo=totalPages;
				$(".disp").fadeOut(function(){
					$(".disp").attr("src","assets/images/"+localStorage.pageNo+".jpg");	
				});
				$(".disp").fadeIn();
			}
			else
			{
				localStorage.pageNo--;
				$(".disp").fadeOut(function(){
					$(".disp").attr("src","assets/images/"+localStorage.pageNo+".jpg");	
				});
				$(".disp").fadeIn();
			}
		});
		$(".fa-caret-right").click(function(event){
			event.stopPropagation();
			if(localStorage.pageNo==totalPages)
			{
				localStorage.pageNo=1;
				$(".disp").fadeOut(function(){
					$(".disp").attr("src","assets/images/"+localStorage.pageNo+".jpg");	
				});
				$(".disp").fadeIn();
				
			}
			else
			{
				localStorage.pageNo++;
				$(".disp").fadeOut(function(){
					$(".disp").attr("src","assets/images/"+localStorage.pageNo+".jpg");	
				});
				$(".disp").fadeIn();				
			}
		});
		var blue      = document.querySelector(".container");
		var hammer    = new Hammer.Manager(blue);
		var swipe     = new Hammer.Swipe();

		hammer.add(swipe);

		hammer.on('swiperight', function(){
   			event.stopPropagation();
			if(localStorage.pageNo==1)
			{
				localStorage.pageNo=totalPages;
				$(".disp").fadeOut(function(){
					$(".disp").attr("src","assets/images/"+localStorage.pageNo+".jpg");	
				});
				$(".disp").fadeIn();
			}
			else
			{
				localStorage.pageNo--;
				$(".disp").fadeOut(function(){
					$(".disp").attr("src","assets/images/"+localStorage.pageNo+".jpg");	
				});
				$(".disp").fadeIn();
			}
		});

		hammer.on('swipeleft', function(){
   			if(localStorage.pageNo==totalPages)
			{
				localStorage.pageNo=1;
				$(".disp").fadeOut(function(){
					$(".disp").attr("src","assets/images/"+localStorage.pageNo+".jpg");	
				});
				$(".disp").fadeIn();
				
			}
			else
			{
				localStorage.pageNo++;
				$(".disp").fadeOut(function(){
					$(".disp").attr("src","assets/images/"+localStorage.pageNo+".jpg");	
				});
				$(".disp").fadeIn();				
			}
		});
		hammer.on('swipeleft', function(){
			localStorage.pageNo=prompt("Enter Page No.(1-3)");
			$(".disp").fadeOut(function(){
					$(".disp").attr("src","assets/images/"+localStorage.pageNo+".jpg");	
				});
			$(".disp").fadeIn();
		}
	};