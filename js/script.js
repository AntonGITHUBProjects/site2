var burger=true;
$('.header2-content-burger').on('click',function(){
	if(burger){
		$('.header2-navbar-ul2').removeClass('header2-content-nav2-display-none');
		burger=false;
	}
	else{
		$('.header2-navbar-ul2').addClass('header2-content-nav2-display-none');
		burger=true;
	}
});
window.addEventListener("resize", function() {
   if (window.innerWidth > 980) {
   	$('.header2-navbar-ul2').addClass('header2-content-nav2-display-none');
   }   
 });