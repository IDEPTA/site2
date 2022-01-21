document.addEventListener('click',function(e){
let aboutUsDop,but;
aboutUsDop = document.querySelector('.about_us_dop')
	if (e.target.closest('.about_us_button')) {
		but = e.target; 
		aboutUsDop.classList.toggle('about_active');
		but.innerHTML ='Скрыть';
	}
})

directions_products