window.onload=function()
{
	var i=0;
	var str="The wait is over. This is not a RESOLUTION. This is a REVOLUTION.";
	function typeW()
	{
		if(i<str.length)
		{
			document.querySelector(".jumbotron .content p.lead").textContent+=str.charAt(i);
			i++;
		}
	}
	setInterval(typeW,50);
	
}
$(".team .thumbnail h3").on("mouseenter",function(){
    $(this).css("fontSize","18px");
    $(this).css("color","white");
});
$(".team .thumbnail h3").on("mouseleave",function(){
    $(this).css("fontSize","16px");
    $(this).css("color","#B7B7B9");
});
