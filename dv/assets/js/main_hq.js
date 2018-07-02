window.onload=function(){
		var imageType="jpg";
		var totalPages=43;
		if(!localStorage.pageNo)
		{
			localStorage.pageNo=0;
			alert("Swipe left,right to navigate. Swipe up/Arrow key up to enter page no.");
		}
		$(".disp").attr("src","assets/images/hq/"+localStorage.pageNo+".jpg");
		$(".fa").delay(3000).fadeOut(200);
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
				if(localStorage.pageNo==0)
				{
					localStorage.pageNo=totalPages-1;
					$(".disp").fadeOut(200,function(){
						$(".disp").attr("src","assets/images/hq/"+localStorage.pageNo+".jpg");	
					});
					$(".disp").fadeIn(200);
				}
				else
				{
					localStorage.pageNo--;
					$(".disp").fadeOut(200,function(){
						$(".disp").attr("src","assets/images/hq/"+localStorage.pageNo+".jpg");	
					});
					$(".disp").fadeIn(200);
				}
			}
			else
				if(e.which==39)
				{
					if(localStorage.pageNo==(totalPages-1))
				{
					localStorage.pageNo=0;
					$(".disp").fadeOut(200, function(){
						$(".disp").attr("src","assets/images/hq/"+localStorage.pageNo+".jpg");	
					});
					$(".disp").fadeIn(200);
				}
				else
				{
					localStorage.pageNo++;
					$(".disp").fadeOut(200, function(){
						$(".disp").attr("src","assets/images/hq/"+localStorage.pageNo+".jpg");	
					});
					$(".disp").fadeIn(200);
				}
				}
				else
					if(e.which==38)
					{
						localStorage.pageNo=prompt("Enter Page No.(0-42)");
						if(!localStorage.pageNo)
						{
							localStorage.pageNo=0;
						}
						$(".disp").fadeOut(200, function(){
							$(".disp").attr("src","assets/images/hq/"+localStorage.pageNo+".jpg");	
						});
						$(".disp").fadeIn(200);
					}
		})
		$(".fa-caret-left").click(function(event){
			event.stopPropagation();
			if(localStorage.pageNo==0)
			{
				localStorage.pageNo=(totalPages-1);
				$(".disp").fadeOut(200, function(){
					$(".disp").attr("src","assets/images/hq/"+localStorage.pageNo+".jpg");	
				});
				$(".disp").fadeIn(200);
			}
			else
			{
				localStorage.pageNo--;
				$(".disp").fadeOut(200, function(){
					$(".disp").attr("src","assets/images/hq/"+localStorage.pageNo+".jpg");	
				});
				$(".disp").fadeIn(200);
			}
		});
		$(".fa-caret-right").click(function(event){
			event.stopPropagation();
			if(localStorage.pageNo==(totalPages-1))
			{
				localStorage.pageNo=0;
				$(".disp").fadeOut(200, function(){
					$(".disp").attr("src","assets/images/hq/"+localStorage.pageNo+".jpg");	
				});
				$(".disp").fadeIn(200);
				
			}
			else
			{
				localStorage.pageNo++;
				$(".disp").fadeOut(200, function(){
					$(".disp").attr("src","assets/images/hq/"+localStorage.pageNo+".jpg");	
				});
				$(".disp").fadeIn(200);				
			}
		});
		var blue      = document.querySelector(".container");
		var hammer    = new Hammer.Manager(blue);
		var swipe     = new Hammer.Swipe();

		hammer.add(swipe);

		hammer.on('swiperight', function(){
   			event.stopPropagation();
			if(localStorage.pageNo==0)
			{
				localStorage.pageNo=(totalPages-1);
				$(".disp").fadeOut(200, function(){
					$(".disp").attr("src","assets/images/hq/"+localStorage.pageNo+".jpg");	
				});
				$(".disp").fadeIn(200);
			}
			else
			{
				localStorage.pageNo--;
				$(".disp").fadeOut(200, function(){
					$(".disp").attr("src","assets/images/hq/"+localStorage.pageNo+".jpg");	
				});
				$(".disp").fadeIn(200);
			}
		});

		hammer.on('swipeleft', function(){
   			if(localStorage.pageNo==(totalPages-1))
			{
				localStorage.pageNo=0;
				$(".disp").fadeOut(200, function(){
					$(".disp").attr("src","assets/images/hq/"+localStorage.pageNo+".jpg");	
				});
				$(".disp").fadeIn(200);
				
			}
			else
			{
				localStorage.pageNo++;
				$(".disp").fadeOut(200, function(){
					$(".disp").attr("src","assets/images/hq/"+localStorage.pageNo+".jpg");	
				});
				$(".disp").fadeIn(200);				
			}
		});
		hammer.on('swipeup', function(){
			localStorage.pageNo=prompt("Enter Page No.(0-42)");
			if(!localStorage.pageNo)
			{
				localStorage.pageNo=0;
			}
			$(".disp").fadeOut(200, function(){
					$(".disp").attr("src","assets/images/hq/"+localStorage.pageNo+".jpg");	
				});
			$(".disp").fadeIn(200);
		});
	};